const assert = require("node:assert/strict");
const fs = require("node:fs");
const { chromium } = require("playwright");

(async () => {
  fs.mkdirSync("artifacts", { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  const errors = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle", timeout: 60000 });

    const headline = page.locator("#hero h1");
    await headline.waitFor({ state: "visible", timeout: 20000 });
    const visual = await headline.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return { opacity: Number(style.opacity), width: rect.width, height: rect.height, top: rect.top };
    });
    assert(visual.opacity > 0.9, "Homepage hero headline must not be invisible");
    assert(visual.width > 200 && visual.height > 70, "Homepage hero headline has no meaningful dimensions");
    assert(visual.top < 900 && visual.top > -200, "Homepage hero headline is outside the first viewport");
    await page.screenshot({ path: "artifacts/desktop-hero.png" });

    // Test the actual user-reported failure: images must change as one scrolls.
    const fifthChapter = page.locator("#process-story article").nth(4);
    await fifthChapter.evaluate((element) => element.scrollIntoView({ block: "center", behavior: "auto" }));
    await page.waitForFunction(() => {
      const current = document.querySelector('#process-story button[aria-current="step"]');
      return current?.getAttribute("aria-label")?.includes("05");
    }, null, { timeout: 15000 });
    const active = await page.locator('#process-story button[aria-current="step"]').getAttribute("aria-label");
    assert(active?.includes("05"), "Gallery did not advance to chapter 05");
    const imageAlt = await page.locator("#process-story .sticky img").getAttribute("alt");
    assert.equal(imageAlt, "FuelMax for industrial heat.", "Pinned gallery did not switch image with scroll");
    await page.screenshot({ path: "artifacts/desktop-gallery-chapter-05.png" });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle", timeout: 60000 });
    await page.locator("#hero h1").waitFor({ state: "visible" });
    await page.screenshot({ path: "artifacts/mobile-hero.png" });

    assert.equal(errors.length, 0, "Browser reported page errors: " + errors.join(" | "));
    console.log("VISUAL SMOKE PASS: visible desktop/mobile hero and scroll-driven chapter/image 05.");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error("VISUAL SMOKE FAILED", error);
  process.exitCode = 1;
});
