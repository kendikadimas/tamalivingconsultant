const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const homedesignDir = path.join(__dirname, 'public', 'homedesign');
const outDir = path.join(__dirname, 'public', 'homedesign_compressed');
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function compressWebp(inputPath, quality = 72, width = 800) {
  const basename = path.basename(inputPath, path.extname(inputPath)) + '.webp';
  const outPath = path.join(outDir, basename);
  
  await sharp(inputPath)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality })
    .toFile(outPath);

  const inputSize = fs.statSync(inputPath).size;
  const outputSize = fs.statSync(outPath).size;
  console.log(`✓ ${path.basename(inputPath)}: ${Math.round(inputSize/1024)}KB → ${Math.round(outputSize/1024)}KB (saved ${Math.round((1-outputSize/inputSize)*100)}%)`);
}

async function main() {
  const files = fs.readdirSync(homedesignDir).filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));
  console.log(`Compressing ${files.length} homedesign images to homedesign_compressed/...`);
  for (const file of files) {
    await compressWebp(path.join(homedesignDir, file), 72, 800);
  }

  // Convert hero PNG → WebP
  const heroInput = path.join(publicDir, 'hero_house_ref.png');
  const heroOutput = path.join(publicDir, 'hero_house_ref.webp');
  await sharp(heroInput)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(heroOutput);
  console.log(`✓ hero: ${Math.round(fs.statSync(heroInput).size/1024)}KB → ${Math.round(fs.statSync(heroOutput).size/1024)}KB`);

  // Logo PNG → WebP
  const logoInput = path.join(publicDir, 'logo-tamaliving.png');
  const logoOutput = path.join(publicDir, 'logo-tamaliving.webp');
  await sharp(logoInput).resize(200, null, { withoutEnlargement: true }).webp({ quality: 90 }).toFile(logoOutput);
  console.log(`✓ logo: ${Math.round(fs.statSync(logoInput).size/1024)}KB → ${Math.round(fs.statSync(logoOutput).size/1024)}KB`);
  
  console.log('\nDone! Files saved to homedesign_compressed/');
  console.log('Now run: Copy-Item public\\homedesign_compressed\\* public\\homedesign\\ -Force');
}

main().catch(console.error);
