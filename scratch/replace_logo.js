const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    try {
        let content = fs.readFileSync(filepath, 'utf8');
        let originalContent = content;
        
        content = content.replace(/lumi-logo\.png/g, 'aaia-logo.png');
        
        if (content !== originalContent) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log(`Updated ${filepath}`);
        }
    } catch (e) {
        // Ignore errors
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (file === 'node_modules' || file === '.git' || file === '.next') {
            continue;
        }
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkDir(filepath);
        } else if (stat.isFile() && /\.(tsx|ts|js|md|json)$/.test(file)) {
            processFile(filepath);
        }
    }
}

const basePath = "c:\\Users\\hp\\.gemini\\antigravity\\scratch\\website-achtrex";
walkDir(basePath);
console.log("Logo source replacements completed.");
