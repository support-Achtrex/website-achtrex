const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'lib', 'blog-data.ts');
let content = fs.readFileSync(file, 'utf8');

const realImages = [
  "/images/bright_data_hero.jpg",
  "/images/bright_office_hero.jpg",
  "/images/corporate_team_1.png",
  "/images/kava_bg1.jpg",
  "/images/kava_bg2.jpg",
  "/images/kava_bg3.jpg",
  "/images/lumi_laptop_hero.jpg",
  "/images/real_dashboard_context.jpg",
  "/images/real_dev_team.jpg",
  "/images/real_hardware_mac.jpg",
  "/projects/command_center.jpg",
  "/projects/infrastructure_team.png",
  "/projects/team_collaboration_1.png",
  "/projects/team_collaboration_wide.png"
];

let imgIndex = 0;
content = content.replace(/"image":\s*"[^"]+"/g, () => {
    const replacement = '"image": "' + realImages[imgIndex % realImages.length] + '"';
    imgIndex++;
    return replacement;
});

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced ' + imgIndex + ' images.');
