const fs = require('fs');

const html = fs.readFileSync('scripts/wedoo-home.html', 'utf-8');

// Match sections
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
const sections = html.match(sectionRegex) || [];

sections.forEach((sec, idx) => {
  console.log(`\n============================ SECTION ${idx} ============================`);
  const idMatch = sec.match(/id=["']([^"']*)["']/i);
  const classMatch = sec.match(/class=["']([^"']*)["']/i);
  console.log('ID:', idMatch ? idMatch[1] : 'none');
  console.log('Class:', classMatch ? classMatch[1] : 'none');

  // Strip scripts and svgs to see pure content
  const clean = sec
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .slice(0, 1500);

  console.log(clean);
  fs.writeFileSync(`scripts/wedoo-sec-${idx}.html`, sec);
});
