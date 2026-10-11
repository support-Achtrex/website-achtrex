const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  { url: 'https://www.wedoo.it/uploads/2024/09/dodge-cc-cover.mp4', dest: 'public/hero-videos/dodge-charger-daytona.mp4' },
  { url: 'https://www.wedoo.it/uploads/2026/09/mastercraft-cover-ok.mp4', dest: 'public/hero-videos/mastercraft-cover.mp4' },
  { url: 'https://www.wedoo.it/uploads/2026/08/ambienta_wedoo_desk.jpg', dest: 'public/hero-videos/ambienta-studio.jpg' },
  { url: 'https://www.wedoo.it/uploads/2025/01/home-kdm.mp4', dest: 'public/hero-videos/kdm-data-manager.mp4' },
  { url: 'https://www.wedoo.it/uploads/2024/06/realtime-cgi-cover.mp4', dest: 'public/hero-videos/realtime-cgi-cover.mp4' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      console.log(`[${res.statusCode}] ${url} -> ${dest}`);
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const stat = fs.statSync(dest);
        console.log(`Saved ${dest} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const asset of assets) {
    try {
      await download(asset.url, asset.dest);
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log('Hero assets download completed.');
}

main();
