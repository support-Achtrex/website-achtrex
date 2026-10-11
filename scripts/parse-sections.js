const fs = require('fs');

const html = fs.readFileSync('scripts/wedoo-home.html', 'utf-8');

// Extract all sections
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
const sections = html.match(sectionRegex) || [];
console.log('Total sections found:', sections.length);

sections.forEach((sec, idx) => {
  const idMatch = sec.match(/id=["']([^"']*)["']/i);
  const classMatch = sec.match(/class=["']([^"']*)["']/i);
  const h1Match = sec.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2Match = sec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h3Match = sec.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  console.log(`\n--- Section ${idx} ---`);
  console.log('ID:', idMatch ? idMatch[1] : 'none');
  console.log('Class:', classMatch ? classMatch[1] : 'none');
  if (h1Match) console.log('H1:', h1Match[1].replace(/<[^>]+>/g, '').trim());
  if (h2Match) console.log('H2:', h2Match[1].replace(/<[^>]+>/g, '').trim());
  if (h3Match) console.log('H3:', h3Match[1].replace(/<[^>]+>/g, '').trim());
  console.log('Length:', sec.length);
});

// Let's print Section 0 (hero) in full
if (sections[0]) {
  fs.writeFileSync('scripts/wedoo-section-0-hero.html', sections[0]);
  console.log('\nWrote Section 0 to scripts/wedoo-section-0-hero.html');
}

// Write the first 5 sections to file for inspection
if (sections.length > 1) {
  fs.writeFileSync('scripts/wedoo-sections.html', sections.join('\n\n<!-- ==================== NEW SECTION ==================== -->\n\n'));
}
