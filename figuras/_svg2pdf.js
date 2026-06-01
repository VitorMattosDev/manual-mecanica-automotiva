// Gera, para cada figuras/<nome>.svg, um figuras/<nome>.pdf de mesma proporção.
// Serve só para o RENDER LOCAL do PDF nesta máquina (sem rsvg-convert): o Quarto
// detecta o .pdf irmão e PULA a conversão SVG->PDF. No CI (Ubuntu), o rsvg-convert
// converte os SVGs em vetor, então estes .pdf são gitignored e não vão ao repositório.
// Fidelidade: rasteriza o SVG com o mesmo motor da conferência (sharp) em alta DPI
// e embute o PNG num PDF do tamanho certo (pdfkit). JS puro, sem dependências nativas.
const sharp = require('sharp');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const DENSITY = 192; // 2x de 96dpi -> nitidez boa no PDF
const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.svg'));

(async () => {
  for (const f of files) {
    const svg = path.join(__dirname, f);
    const out = path.join(__dirname, f.replace(/\.svg$/, '.pdf'));
    try {
      const png = await sharp(svg, { density: DENSITY }).png().toBuffer();
      const meta = await sharp(png).metadata();
      const wPt = (meta.width * 72) / DENSITY;
      const hPt = (meta.height * 72) / DENSITY;
      await new Promise((resolve, reject) => {
        const doc = new PDFDocument({ size: [wPt, hPt], margin: 0 });
        const stream = fs.createWriteStream(out);
        stream.on('finish', resolve);
        stream.on('error', reject);
        doc.pipe(stream);
        doc.image(png, 0, 0, { width: wPt, height: hPt });
        doc.end();
      });
      console.log('PDF  ' + f + ' -> ' + path.basename(out));
    } catch (e) {
      console.log('FAIL ' + f + ': ' + e.message);
    }
  }
})();
