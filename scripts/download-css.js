const https = require('https');
const fs = require('fs');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(dest, data);
        console.log(`Saved ${dest} (${data.length} bytes)`);
        resolve(data);
      });
    }).on('error', reject);
  });
}

async function main() {
  await download('https://www.wedoo.it/front/assets/css/styles.css', 'scripts/wedoo-styles.css');
  await download('https://www.wedoo.it/front/assets/css/w.css', 'scripts/wedoo-w.css');
  console.log('CSS downloaded successfully.');
}

main();
