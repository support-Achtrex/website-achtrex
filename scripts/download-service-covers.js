const https = require('https');
const fs = require('fs');
const path = require('path');

const serviceImages = [
  { url: 'https://www.wedoo.it/uploads/2020/04/cover-PA-1.png', dest: 'public/service-covers/cover-experience-design.png' },
  { url: 'https://www.wedoo.it/uploads/2020/03/coverdisaronno.jpg', dest: 'public/service-covers/cover-creative-strategy.jpg' },
  { url: 'https://www.wedoo.it/uploads/2020/03/fca-bp-multichannel-mobile.jpg', dest: 'public/service-covers/cover-configurators.jpg' },
  { url: 'https://www.wedoo.it/uploads/2020/04/25.jpg', dest: 'public/service-covers/cover-cgi.jpg' },
  { url: 'https://www.wedoo.it/uploads/2020/04/img_00.jpg', dest: 'public/service-covers/cover-technology.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      console.log(`[${res.statusCode}] ${url} -> ${dest}`);
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed ${url}: ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  for (const item of serviceImages) {
    try {
      await download(item.url, item.dest);
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log('All service cover images downloaded.');
}

main();
