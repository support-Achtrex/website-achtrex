const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'studio-assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  { name: 'hero-3d-sculpture.jpg', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85' },
  { name: 'hero-spatial-installation.jpg', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85' },
  { name: 'service-experience-design.jpg', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85' },
  { name: 'service-creative-strategy.jpg', url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85' },
  { name: 'service-product-configurators.jpg', url: 'https://images.unsplash.com/photo-1618005199919-d3d4b5a92ead?auto=format&fit=crop&w=1600&q=85' },
  { name: 'service-cgi-immersive.jpg', url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85' },
  { name: 'service-digital-products.jpg', url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85' },
  { name: 'service-technology.jpg', url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=85' },
  { name: 'project-aether.jpg', url: 'https://images.unsplash.com/photo-1633493106115-08197779f6fa?auto=format&fit=crop&w=1600&q=85' },
  { name: 'project-kroma.jpg', url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85' },
  { name: 'project-sola.jpg', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85' },
  { name: 'project-verve.jpg', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85' },
  { name: 'project-synthetica.jpg', url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85' },
  { name: 'project-nova.jpg', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85' },
  { name: 'about-studio.jpg', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Status ${response.statusCode} for ${url}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading curated studio assets...');
  for (const item of images) {
    const dest = path.join(targetDir, item.name);
    try {
      await download(item.url, dest);
      console.log(`✓ Downloaded ${item.name}`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('Done downloading assets!');
}

main();
