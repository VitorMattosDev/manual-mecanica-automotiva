// Rasteriza SVGs para PNG (conferência visual). Uso: node _check.js arquivo1.svg [arquivo2.svg ...]
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);
if (files.length === 0) {
  // todos os SVGs da pasta
  fs.readdirSync(__dirname).filter(f => f.endsWith('.svg')).forEach(f => files.push(path.join(__dirname, f)));
}

(async () => {
  const outDir = path.join(__dirname, '_png');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  for (const f of files) {
    const abs = path.isAbsolute(f) ? f : path.join(__dirname, f);
    const out = path.join(outDir, path.basename(abs).replace(/\.svg$/, '.png'));
    try {
      await sharp(abs, { density: 144 }).png().toFile(out);
      console.log('OK   ' + path.basename(abs) + ' -> ' + path.basename(out));
    } catch (e) {
      console.log('FAIL ' + path.basename(abs) + ': ' + e.message);
    }
  }
})();
