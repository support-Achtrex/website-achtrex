const fs = require('fs');
const css = fs.readFileSync('scripts/wedoo-styles.css', 'utf-8');

const matches = css.match(/\.page-title[^{]*\{[^}]*\}/gi) || [];
console.log('page-title matches:', matches);

const h2matches = css.match(/\.page-title\s+h2[^{]*\{[^}]*\}/gi) || [];
console.log('page-title h2 matches:', h2matches);

const linkMatches = css.match(/\.title-link-label[^{]*\{[^}]*\}/gi) || [];
console.log('title-link-label matches:', linkMatches);

const headerMatches = css.match(/\.header-container[^{]*\{[^}]*\}/gi) || [];
console.log('header-container matches:', headerMatches);

const logoMatches = css.match(/\.wedoo-logo[^{]*\{[^}]*\}/gi) || [];
console.log('wedoo-logo matches:', logoMatches);
