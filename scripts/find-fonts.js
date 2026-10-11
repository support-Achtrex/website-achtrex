const fs = require('fs');
const css = fs.readFileSync('scripts/wedoo-styles.css', 'utf-8');

const fontFaces = css.match(/@font-face\s*\{[^}]+\}/gi) || [];
console.log('Font-faces count:', fontFaces.length);
fontFaces.forEach(f => console.log(f));

// Let's also search for font-family
const fontFamilies = css.match(/font-family:[^;]+;/gi) || [];
console.log('Font families:', [...new Set(fontFamilies)].slice(0, 10));
