const fs = require('fs');
const html = fs.readFileSync('scripts/wedoo-home.html', 'utf-8');

const cssLinks = html.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || [];
console.log('CSS links:');
cssLinks.forEach(c => console.log(c));
