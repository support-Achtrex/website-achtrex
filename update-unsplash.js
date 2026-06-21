const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'lib', 'blog-data.ts');
let content = fs.readFileSync(targetFile, 'utf-8');

const unsplashIds = [
  "1518770660439-4636190af475",
  "1451187580459-43490279c0fa",
  "1504384308090-c894fdcc538d",
  "1486406146926-c627a92ad1ab",
  "1498084339577-14508011699e",
  "1551288049-bebda4e38f71",
  "1550751827-4bd374c3f58b",
  "1558494949-ef010cbdcc31",
  "1460925895917-afdab827c52f",
  "1488590528505-98d2b5aba04b",
  "1573164713988-8665fc963095",
  "1517433670267-0805942358bc",
  "1451187580459-43490279c0fa",
  "1486406146926-c627a92ad1ab",
  "1504384308090-c894fdcc538d",
  "1498084339577-14508011699e",
  "1551288049-bebda4e38f71",
  "1550751827-4bd374c3f58b",
  "1558494949-ef010cbdcc31",
  "1460925895917-afdab827c52f",
  "1488590528505-98d2b5aba04b",
  "1573164713988-8665fc963095",
];

// We need to replace `"image": "https://picsum.photos/seed/.../800/600"`
// with `"image": "https://images.unsplash.com/photo-ID?auto=format&fit=crop&q=80&w=800&h=600"`
let i = 0;
content = content.replace(/"image":\s*"https:\/\/picsum\.photos\/seed\/[^"]+"/g, () => {
    const id = unsplashIds[i % unsplashIds.length];
    i++;
    return `"image": "https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800&h=600"`;
});

fs.writeFileSync(targetFile, content);
console.log('Successfully updated blog images to Unsplash!');
