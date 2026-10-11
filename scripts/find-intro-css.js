const fs = require('fs');
const css = fs.readFileSync('scripts/wedoo-styles.css', 'utf-8');

const matches = css.match(/\.home-intro[^{]*\{[^}]*\}/gi) || [];
console.log('home-intro matches:', matches);

const textOnly = css.match(/\.text-only[^{]*\{[^}]*\}/gi) || [];
console.log('text-only matches:', textOnly);
