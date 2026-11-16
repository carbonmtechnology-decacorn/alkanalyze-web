const assert = require("node:assert/strict");
const fs = require("node:fs");
const { chromium } = require("playwright");
const AxeBuilder = require("@axe-core/playwright").default;
const base = process.env.CARBONM_TEST_URL || "http://127.0.0.1:3000";
const out = "artifacts";
fs.mkdirSync(out, { recursive: true });
const report = {
  date: new Date().toISOString(),
  base,
  checks: [],
  errors: [],
  console: [],
  responses: [],
  metrics: [],
  accessibility: [],
};
const check = (name, value, detail) => {
  report.checks.push({ name, pass: !!value, detail });
  assert(value, name + ": " + JSON.stringify(detail));
};
(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  await context.tracing.start({ screenshots: true, snapshots: true });
  const page = await context.newPage();
  page.on("pageerror", (e) => report.errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") report.console.push(m.text());
  });
  page.on("response", (r) => {
    if (r.status() >= 400)
      report.responses.push({ url: r.url(), status: r.status() });
  });
  await page.addInitScript(() => {
    window.__carbonMetrics = { cls: 0, lcp: 0 };
    new PerformanceObserver((l) => {
      for (const e of l.getEntries())
        if (!e.hadRecentInput) window.__carbonMetrics.cls += e.value;
    }).observe({ type: "layout-shift", buffered: true });
    new PerformanceObserver((l) => {
      const e = l.getEntries().at(-1);
      window.__carbonMetrics.lcp = e.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
  });
  const shot = async (name) => {
    await page.waitForFunction(
      () =>
        [...document.images]
          .filter((i) => {
            const r = i.getBoundingClientRect();
            return (
              r.width > 0 && r.height > 0 && r.top < innerHeight && r.bottom > 0
            );
          })
          .every((i) => i.complete && i.naturalWidth > 0),
      null,
      { timeout: 20000 },
    );
    await page.screenshot({ path: `${out}/${name}.png` });
  };
  const goto = async (route) => {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    check("HTTP " + route, response.status() === 200, response.status());
  };
  const noOverflow = async (name) => {
    const size = await page.evaluate(() => ({
      width: innerWidth,
      scroll: document.documentElement.scrollWidth,
      overflowing: [...document.querySelectorAll("body *")]
        .filter(
          (e) =>
            e.getBoundingClientRect().right > innerWidth + 1 &&
            getComputedStyle(e).display !== "none",
        )
        .slice(-12)
        .map((e) => ({
          tag: e.tagName,
          class: e.className,
          text: e.textContent.slice(0, 80),
          right: e.getBoundingClientRect().right,
        })),
    }));
    check("No overflow " + name, size.scroll <= size.width + 1, size);
  };
  try {
    await goto("/");
    const h = await page.locator("#hero h1").evaluate((e) => {
      const r = e.getBoundingClientRect();
      return {
        top: r.top,
        width: r.width,
        height: r.height,
        opacity: getComputedStyle(e).opacity,
      };
    });
    check(
      "Visible first-screen desktop hero",
      h.top < 700 && h.width > 300 && h.height > 100 && Number(h.opacity) === 1,
      h,
    );
    await shot("desktop-hero");
    await noOverflow("desktop home");
    report.metrics.push({
      view: "desktop-home",
      ...(await page.evaluate(() => window.__carbonMetrics)),
    });
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    report.accessibility.push({ route: "/", violations: axe.violations });
    check(
      "Homepage WCAG A/AA automated audit",
      axe.violations.length === 0,
      axe.violations.map((x) => ({
        id: x.id,
        nodes: x.nodes.map((n) => n.target),
      })),
    );
    await page.locator("#hero a.field-button").click();
    await page.waitForFunction(() => location.hash === "#pathways");
    check(
      "Hero pathway anchor",
      await page.locator("#pathways h2").isVisible(),
    );
    for (const [i, slug] of [
      "p2p",
      "p2jet",
      "p2marine",
      "p2naphtha",
    ].entries()) {
      const tab = page.locator("#pathway-tab-" + slug);
      await tab.click();
      check(
        "Pathway selected " + slug,
        (await tab.getAttribute("aria-selected")) === "true",
      );
      check(
        "Pathway panel " + slug,
        await page.locator("#pathway-panel-" + slug).isVisible(),
      );
      await page.locator("#pathway-panel-" + slug + " .field-link").click();
      await page.waitForURL(base + "/pathways/" + slug);
      await page.waitForLoadState("networkidle");
      check("Pathway route " + slug, page.url().endsWith("/pathways/" + slug));
      check(
        "Pathway begins at heading " + slug,
        await page
          .locator(".route-hero h1")
          .evaluate(
            (e) =>
              e.getBoundingClientRect().top >= 0 &&
              e.getBoundingClientRect().top < innerHeight,
          ),
      );
      await shot("desktop-" + slug);
      await noOverflow(slug);
      check(
        "Functional mail CTA " + slug,
        (
          await page.locator(".route-hero .field-button").getAttribute("href")
        ).startsWith("mailto:"),
      );
      await goto("/#pathways");
    }
    await page.locator("#pathway-tab-p2p").click();
    await page.locator("#pathway-tab-p2p").press("ArrowRight");
    check(
      "Pathway keyboard arrow",
      (await page
        .locator("#pathway-tab-p2jet")
        .getAttribute("aria-selected")) === "true",
    );
    await page.locator("#pathway-tab-p2jet").press("End");
    check(
      "Pathway keyboard End",
      (await page
        .locator("#pathway-tab-p2naphtha")
        .getAttribute("aria-selected")) === "true",
    );
    await shot("desktop-pathways");
    for (const n of [0, 2, 4, 5, 0]) {
      const article = page.locator("#process-story article").nth(n);
      await article.evaluate((e) =>
        e.scrollIntoView({ behavior: "instant", block: "center" }),
      );
      await page.waitForFunction(
        (n) =>
          document
            .querySelector('#process-story button[aria-current="step"]')
            ?.getAttribute("aria-label")
            ?.includes(String(n + 1).padStart(2, "0")),
        n,
      );
      check(
        "Chapter scroll " + (n + 1),
        (await page
          .locator("#process-story .sticky img")
          .getAttribute("src")) !== null,
      );
      check(
        "Chapter image " + (n + 1),
        (await page
          .locator("#process-story .sticky img")
          .getAttribute("alt")) === (await article.locator("h3").innerText()),
      );
      if (n === 0 || n === 4) await shot("desktop-chapter-" + (n + 1));
    }
    for (let n = 0; n < 6; n++) {
      await page.locator("#process-story button").nth(n).click();
      await page.waitForFunction(
        (n) =>
          document
            .querySelector('#process-story button[aria-current="step"]')
            ?.getAttribute("aria-label")
            ?.includes(String(n + 1).padStart(2, "0")),
        n,
      );
    }
    for (const name of ["Kinetics", "Measurements", "Recommendations"]) {
      const button = page.getByRole("button", { name, exact: true });
      await button.click();
      check(
        "YieldBoost control " + name,
        (await button.getAttribute("aria-pressed")) === "true",
      );
    }
    await page.locator("#yieldboost").scrollIntoViewIfNeeded();
    await shot("desktop-yieldboost");
    for (const name of [
      "Inspect untreated",
      "Inspect upgraded",
      "Compare both",
    ]) {
      const b = page.getByRole("button", { name, exact: true });
      await b.click();
      check(
        "Magnet inspect " + name,
        (await b.getAttribute("aria-pressed")) === "true",
      );
    }
    await page.locator("#magnet-evidence figure").scrollIntoViewIfNeeded();
    await shot("desktop-magnet");
    await page.locator("#facility").scrollIntoViewIfNeeded();
    await shot("desktop-facility");
    await goto("/");
    const technology = page.locator(".desktop-nav > .tech-menu > a");
    await technology.focus();
    await technology.press("Tab");
    check(
      "Technology keyboard submenu",
      await page
        .getByRole("link", { name: "Overview", exact: true })
        .isVisible(),
    );
    const routes = [
      "/technology",
      "/technology/yieldboost",
      "/technology/magnet",
      "/outputs",
      "/why-us",
      "/applications",
      "/about",
      "/pilot",
      "/contact",
    ];
    for (const route of routes) {
      await goto(route);
      check("One h1 " + route, (await page.locator("h1").count()) === 1);
      check(
        "Canonical " + route,
        (
          await page.locator("link[rel=canonical]").getAttribute("href")
        ).endsWith(route),
      );
      await noOverflow(route);
      await shot("desktop" + route.replaceAll("/", "-"));
      if (route === "/outputs") {
        const buttons = page.locator("section button[aria-pressed]");
        for (let n = 0; n < (await buttons.count()); n++) {
          await buttons.nth(n).click();
          check(
            "Output evidence selector " + n,
            (await buttons.nth(n).getAttribute("aria-pressed")) === "true",
          );
        }
      }
    }
    for (const width of [1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
      await goto("/");
      await shot(width + "-hero");
      await noOverflow(width + " home");
      if (width === 390) {
        await page.getByRole("button", { name: "Open navigation" }).click();
        check(
          "Mobile menu expanded",
          (await page
            .getByRole("button", { name: "Close navigation" })
            .getAttribute("aria-expanded")) === "true",
        );
        await shot("mobile-navigation");
        await page
          .getByRole("button", { name: "Close navigation" })
          .press("Escape");
        check(
          "Escape closes menu",
          (await page
            .getByRole("button", { name: "Open navigation" })
            .getAttribute("aria-expanded")) === "false",
        );
        for (const id of [
          "process-story",
          "magnet-evidence",
          "pathways",
          "facility",
        ]) {
          await page.locator("#" + id).scrollIntoViewIfNeeded();
          await shot("mobile-" + id);
        }
        for (const slug of ["p2p", "p2jet", "p2marine", "p2naphtha"]) {
          await page.locator("#pathway-tab-" + slug).click();
          check(
            "Mobile pathway " + slug,
            await page.locator("#pathway-panel-" + slug).isVisible(),
          );
        }
        for (const route of [
          "/why-us",
          "/technology/yieldboost",
          "/technology/magnet",
          "/pilot",
          "/pathways/p2jet",
        ]) {
          await goto(route);
          await noOverflow("mobile " + route);
          await shot("mobile" + route.replaceAll("/", "-"));
        }
      }
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    await goto("/");
    check(
      "Reduced motion CSS",
      await page.evaluate(
        () => matchMedia("(prefers-reduced-motion: reduce)").matches,
      ),
    );
    await page.locator("#pathway-tab-p2marine").click();
    check(
      "Reduced motion pathway",
      await page.locator("#pathway-panel-p2marine").isVisible(),
    );
    await shot("reduced-motion-pathway");
    const nojs = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 1440, height: 900 },
    });
    const staticPage = await nojs.newPage();
    await staticPage.goto(base, { waitUntil: "networkidle" });
    check(
      "No-JS visible hero",
      await staticPage.locator("#hero h1").isVisible(),
    );
    check(
      "No-JS crawlable pathway links",
      (await staticPage.locator(".pathway-index a").count()) === 4,
    );
    await staticPage.screenshot({ path: out + "/no-js-hero.png" });
    await nojs.close();
    const internal = await page
      .locator('a[href^="/"]')
      .evaluateAll((nodes) => [
        ...new Set(
          nodes
            .map((n) => n.getAttribute("href").split("#")[0])
            .filter(Boolean),
        ),
      ]);
    for (const link of internal) {
      const r = await page.request.get(base + link);
      check("Internal link " + link, r.status() === 200, r.status());
    }
    for (const [from, to] of [
      ["/technology/alkanalyze", "/technology/yieldboost"],
      ["/technology/oleum-v1", "/technology/magnet"],
    ]) {
      const r = await page.request.get(base + from, { maxRedirects: 0 });
      check(
        "Permanent redirect " + from,
        [301, 308].includes(r.status()) && r.headers().location.endsWith(to),
        r.headers().location,
      );
    }
    const sitemap = await (
      await page.request.get(base + "/sitemap.xml")
    ).text();
    check(
      "Four pathway sitemap entries",
      ["p2p", "p2jet", "p2marine", "p2naphtha"].every((s) =>
        sitemap.includes("/pathways/" + s),
      ),
    );
    check(
      "No browser runtime errors",
      report.errors.length === 0,
      report.errors,
    );
    check(
      "No failed requests",
      report.responses.length === 0,
      report.responses,
    );
    check("No console errors", report.console.length === 0, report.console);
    console.log("VISUAL SMOKE PASS:", report.checks.length, "checks");
  } finally {
    fs.writeFileSync(
      out + "/browser-report.json",
      JSON.stringify(report, null, 2),
    );
    await context.tracing.stop({ path: out + "/browser-trace.zip" });
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
