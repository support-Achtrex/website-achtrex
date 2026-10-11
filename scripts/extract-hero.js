const fs = require('fs');
const html = fs.readFileSync('scripts/wedoo-home.html', 'utf-8');

const introIdx = html.indexOf('home-intro');
console.log('Intro index:', introIdx);

// Look backwards from introIdx to find the hero container
const heroMatch = html.match(/<div[^>]*class="[^"]*hero[^"]*"[\s\S]*?(?=<section[^>]*id="home-intro")/i);
if (heroMatch) {
  console.log('Hero matched! Length:', heroMatch[0].length);
  fs.writeFileSync('scripts/wedoo-hero.html', heroMatch[0]);
} else {
  // Let's search for "Dodge Charger"
  const dodgeIdx = html.indexOf('Dodge Charger');
  console.log('Dodge Charger index:', dodgeIdx);
  if (dodgeIdx !== -1) {
    const chunk = html.slice(dodgeIdx - 500, dodgeIdx + 1500);
    console.log('Dodge chunk:\n', chunk);
  }
}
