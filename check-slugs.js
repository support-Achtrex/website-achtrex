const fs = require('fs');
const content = fs.readFileSync('lib/blog-data.ts', 'utf8');
const slugs = [];
const regex = /"slug":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  slugs.push(match[1]);
}
console.log(slugs.slice(0, 5));
