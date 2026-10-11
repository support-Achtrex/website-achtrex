const fs = require('fs');

const css = fs.readFileSync('scripts/wedoo-styles.css', 'utf-8');
const wcss = fs.readFileSync('scripts/wedoo-w.css', 'utf-8');

function findSelectors(styles, names) {
  names.forEach(name => {
    console.log(`\n=================== SEARCH: ${name} ===================`);
    const re = new RegExp(`(\\.${name}[^{]*\\{[^}]*\\})`, 'g');
    let m;
    let count = 0;
    while ((m = re.exec(styles)) !== null && count < 6) {
      console.log(m[1].slice(0, 300));
      count++;
    }
  });
}

console.log('--- FROM STYLES.CSS ---');
findSelectors(css, ['hero-slider', 'page-title', 'swiper-pagination', 'wd-scroll-container', 'fixed-header', 'home-intro']);

console.log('--- FROM W.CSS ---');
findSelectors(wcss, ['hero-slider', 'page-title', 'swiper-pagination', 'wd-scroll-container', 'fixed-header', 'home-intro']);
