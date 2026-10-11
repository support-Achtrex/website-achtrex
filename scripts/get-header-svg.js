const fs = require('fs');
const html = fs.readFileSync('scripts/wedoo-home.html', 'utf-8');

const logoMatch = html.match(/<a class="wedoo-logo"[\s\S]*?<\/a>/i);
if (logoMatch) {
  console.log('Logo match:\n', logoMatch[0]);
}

const menuMatch = html.match(/<div class="menu-label"[\s\S]*?<\/div>/i);
if (menuMatch) {
  console.log('Menu match:\n', menuMatch[0]);
}

const headerContent = html.match(/<div class="header-content">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/header>/i);
if (headerContent) {
  console.log('Header content:\n', headerContent[0]);
}
