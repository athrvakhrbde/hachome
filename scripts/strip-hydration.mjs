/**
 * Production post-build: static HTML only, no client JS.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");

function stripScripts(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*\/?>/gi, "")
    .replace(/<link\b[^>]*\bas=["']script["'][^>]*\/?>/gi, "");
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    fs.writeFileSync(full, stripScripts(fs.readFileSync(full, "utf8")));
  }
}

function removeDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
}

function removeRscArtifacts(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removeRscArtifacts(full);
      continue;
    }
    if (entry.name.endsWith(".txt") && entry.name !== "robots.txt") {
      fs.unlinkSync(full);
    }
  }
}

if (!fs.existsSync(outDir)) {
  console.error("strip-hydration: out/ not found. Run next build first.");
  process.exit(1);
}

walk(outDir);
removeRscArtifacts(outDir);
removeDir(path.join(outDir, "_next", "static", "chunks"));
console.log("strip-hydration: static HTML export ready (no client JS)");
