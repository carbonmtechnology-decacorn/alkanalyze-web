# CarbonM Website Final V3.2 Dependency Fixed

This ZIP fixes the Tailwind opacity-class error and updates the package versions/security settings.

## Run locally

Use Node.js 20.9+.

```bash
npm install
npm run dev
```

Then check production build:

```bash
npm run typecheck
npm run build
npm audit
```

If you previously installed an older copy, delete `node_modules`, `.next`, and `package-lock.json` before reinstalling:

```bash
rmdir /s /q node_modules
rmdir /s /q .next
del package-lock.json
npm install
npm run dev
```

## Image filenames

Team images are expected to use lowercase hyphenated `.jpg` names, for example:

```txt
public/team/mihir-tomar-profile.jpg
public/team/gaurav-gupta-profile.jpg
```

Do not use `.jpeg` unless you also update the path in `src/data/team.ts`.

## Security dependency changes

- Next.js: `^16.3.2`
- React / React DOM: `^19.2.8`
- ESLint: `^9.39.1`
- ESLint config: flat config via `eslint.config.mjs`
- PostCSS: `^8.5.26`
- `overrides` added for PostCSS and Sharp transitive dependency resolution.

## Dev origin warning

`next.config.mjs` includes:

```js
allowedDevOrigins: ["10.204.43.93"]
```

If your local network IP changes, update this value or remove it if you only use `localhost`.

## Why this version exists

V3.1 upgraded `eslint-config-next` to Next 16 but left ESLint on v8, which caused `ERESOLVE unable to resolve dependency tree`. V3.2 upgrades ESLint to v9 and switches the config to `eslint.config.mjs`, matching the peer dependency required by `eslint-config-next@16.3.2`.
