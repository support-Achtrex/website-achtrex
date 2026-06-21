const fs = require('fs');
const path = require('path');

function updateTypography(filepath) {
    const orig = fs.readFileSync(filepath, 'utf8');
    let content = orig;
    
    // Remove font-display
    content = content.replace(/\bfont-display\s*/g, '');
    content = content.replace(/\s*font-display\b/g, '');
    
    // Downsize texts
    content = content.replace(/\btext-\[80px\]\b/g, 'text-5xl');
    content = content.replace(/\btext-\[56px\]\b/g, 'text-4xl');
    content = content.replace(/\btext-8xl\b/g, 'text-5xl');
    content = content.replace(/\btext-7xl\b/g, 'text-5xl');
    content = content.replace(/\btext-6xl\b/g, 'text-4xl');
    content = content.replace(/\btext-5xl\b/g, 'text-4xl');
    
    // cleanup double spaces
    content = content.replace(/  /g, ' ');
    
    if (orig !== content) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated ${filepath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            updateTypography(fullPath);
        }
    }
}

['components', 'app'].forEach(d => walkDir(d));
