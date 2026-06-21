const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'lib/blog-data.ts');
let content = fs.readFileSync(file, 'utf8');

const images = [
    '/blog/blog-ai-tech.png',
    '/blog/blog-mobile-app.png',
    '/blog/blog-ui-ux.png',
    '/blog/blog-web-dev.png',
    '/blog/achtrex-nmvtis-pipeline.png'
];

let imgIndex = 0;
content = content.replace(/\"?image\"?:\s*\"https:\/\/images\.unsplash\.com[^\"]+\"/g, () => {
    const img = images[imgIndex % images.length];
    imgIndex++;
    return '\"image\": \"' + img + '\"';
});

fs.writeFileSync(file, content);
