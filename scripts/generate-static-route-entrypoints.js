import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");
const constantsPath = path.join(__dirname, "../src/config/constants.ts");
const distIndexPath = path.join(distDir, "index.html");
const dist404Path = path.join(distDir, "404.html");

function getRouteAssetPrefix(routePath) {
  const segments = routePath.split("/").filter(Boolean);

  return segments.length === 0 ? "./" : "../".repeat(segments.length);
}

function createRouteIndexContent(indexHtml, routePath) {
  const assetPrefix = getRouteAssetPrefix(routePath);

  return indexHtml
    .replace(/(["'])\.\/assets\//g, `$1${assetPrefix}assets/`)
    .replace(/(["'])\/assets\//g, `$1${assetPrefix}assets/`);
}

function getServiceKeys(constantsSource) {
  const servicesBlockMatch =
    constantsSource.match(
      /const serviceDetails:[\s\S]*?=\s*\[(?<body>[\s\S]*?)\];/,
    ) ||
    constantsSource.match(
      /export const APP_SERVICES:[\s\S]*?=\s*\[(?<body>[\s\S]*?)\]\s+as const;/,
    );

  if (!servicesBlockMatch?.groups?.body) {
    return [];
  }

  return [...servicesBlockMatch.groups.body.matchAll(/key:\s*"([^"]+)"/g)].map(
    (match) => match[1],
  );
}

if (!fs.existsSync(distIndexPath)) {
  throw new Error("dist/index.html was not found. Run `vite build` first.");
}

const constantsSource = fs.readFileSync(constantsPath, "utf8");
const distIndexHtml = fs.readFileSync(distIndexPath, "utf8");
const serviceKeys = getServiceKeys(constantsSource);
const routePaths = [
  "/about",
  "/contact",
  "/faq",
  "/gallery",
  "/privacy",
  "/services",
  "/terms",
  ...serviceKeys.map((serviceKey) => `/services/${serviceKey}`),
];

fs.writeFileSync(dist404Path, distIndexHtml);

for (const routePath of routePaths) {
  const routeDir = path.join(distDir, routePath.replace(/^\//, ""));
  const routeIndexPath = path.join(routeDir, "index.html");

  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(
    routeIndexPath,
    createRouteIndexContent(distIndexHtml, routePath),
  );
}

console.log(
  `✓ Generated ${routePaths.length} static route entrypoints and 404.html in dist/`,
);
