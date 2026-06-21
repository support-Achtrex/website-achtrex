const fs = require('fs');

const dataFile = 'c:\\Users\\hp\\.gemini\\antigravity\\scratch\\website-achtrex\\lib\\blog-data.ts';

let content = fs.readFileSync(dataFile, 'utf-8');

let currentSlug = '';
let updatedContent = content.replace(/"slug":\s*"([^"]+)"|"image":\s*"([^"]+)"/g, (match, slug, image) => {
    if (slug) {
        currentSlug = slug;
        return `"slug": "${slug}"`;
    }
    if (image) {
        return `"image": "https://picsum.photos/seed/${currentSlug}/800/600"`;
    }
    return match;
});

fs.writeFileSync(dataFile, updatedContent);
console.log('Blog images updated!');
