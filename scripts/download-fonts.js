const https = require('https');
const fs = require('fs');
const path = require('path');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      console.log(url, 'Status:', res.statusCode);
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Saved font to', dest);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  try {
    await download('https://www.wedoo.it/front/assets/fonts/ClashDisplay-Variable.woff2', 'public/fonts/ClashDisplay-Variable.woff2');
    await download('https://www.wedoo.it/front/assets/fonts/ClashDisplay-Regular.woff2', 'public/fonts/ClashDisplay-Regular.woff2');
    console.log('All fonts downloaded!');
  } catch (err) {
    console.error('Download error:', err.message);
  }
}

main();
