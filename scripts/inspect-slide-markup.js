const fs = require('fs');
const hero = fs.readFileSync('scripts/wedoo-hero.html', 'utf-8');

// Find the dodge slide
const dodgeIdx = hero.indexOf('Dodge Charger');
console.log('Dodge slide index in hero:', dodgeIdx);

// Extract around dodge
console.log('--- DODGE SLIDE HTML ---');
console.log(hero.slice(dodgeIdx - 400, dodgeIdx + 800));

// Find pagination & scroll markup
const pagIdx = hero.indexOf('swiper-pagination');
console.log('--- PAGINATION & SCROLL HTML ---');
console.log(hero.slice(pagIdx - 200, pagIdx + 600));

// Find header / logo / menu markup
const navIdx = hero.indexOf('nav-content');
console.log('--- NAV / MENU HTML ---');
console.log(hero.slice(0, 1500));
