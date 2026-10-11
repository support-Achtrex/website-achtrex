const fs = require('fs');
const heroHtml = fs.readFileSync('scripts/wedoo-hero.html', 'utf-8');

// Match swiper-slide or slide elements
const slides = heroHtml.match(/<div[^>]*class="[^"]*swiper-slide[^"]*"[\s\S]*?(?=(<div[^>]*class="[^"]*swiper-slide[^"]*"|<\/div>\s*<\/div>\s*<\/div>))/gi) || [];
console.log('Total slides in hero:', slides.length);

// Let's find all video, img, and text in the hero
const re = /<div class="swiper-slide[^"]*"[\s\S]*?(?=(<div class="swiper-slide|<\/div>\s*<!-- Swiper))/gi;

// Also look for h1, h2, titles
const titles = heroHtml.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
console.log('Titles found:', titles);

// Look for video tags
const videos = heroHtml.match(/<video[\s\S]*?<\/video>/gi) || [];
console.log('Videos count:', videos.length);
videos.forEach((v, i) => {
  const src = v.match(/src="([^"]+)"/);
  console.log(`Video ${i} src:`, src ? src[1] : 'no src direct');
});

// Look for images
const images = heroHtml.match(/<img[^>]+>/gi) || [];
console.log('Images count:', images.length);
images.forEach((img, i) => console.log(`Image ${i}:`, img));

// Look for pagination and navigation
const pagination = heroHtml.match(/class="[^"]*(pagination|scrollbar|control|nav|scroll)[^"]*"/gi) || [];
console.log('Controls classes:', [...new Set(pagination)]);

// Write full hero html nicely
fs.writeFileSync('scripts/wedoo-hero-formatted.html', heroHtml);
