const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'lib', 'blog-data.ts');
let content = fs.readFileSync(targetFile, 'utf-8');

// We need to replace `"image": "https://images.unsplash.com/photo-..."`
// with `"image": "https://loremflickr.com/800/600/technology,business?lock=N"`

let i = 1;
content = content.replace(/"image":\s*"https:\/\/images\.unsplash\.com\/photo-[^"]+"/g, () => {
    const url = `"image": "https://loremflickr.com/800/600/technology,business?lock=${i}"`;
    i++;
    return url;
});

// Also handle the case where it might still be picsum.photos just in case
content = content.replace(/"image":\s*"https:\/\/picsum\.photos\/seed\/[^"]+"/g, () => {
    const url = `"image": "https://loremflickr.com/800/600/technology,business?lock=${i}"`;
    i++;
    return url;
});

fs.writeFileSync(targetFile, content);
console.log(`Successfully updated ${i - 1} blog images to LoremFlickr!`);
