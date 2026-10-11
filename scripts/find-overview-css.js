const fs = require('fs');
const css = fs.readFileSync('scripts/wedoo-styles.css', 'utf-8');

const matches = css.match(/\.overview[^{]*\{[^}]*\}/gi) || [];
console.log('overview matches:', matches.slice(0, 8));

const outline = css.match(/\.outline-text[^{]*\{[^}]*\}/gi) || [];
console.log('outline matches:', outline.slice(0, 8));

const imgOverview = css.match(/\.wd-image-overview[^{]*\{[^}]*\}/gi) || [];
console.log('imgOverview matches:', imgOverview.slice(0, 8));
