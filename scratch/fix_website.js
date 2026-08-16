const fs = require('fs');
const path = require('path');

const replacements = {
    "AAIA": "AAIA",
    "AAIA": "AAIA",
    "AAIA": "AAIA",
    "AAIA": "AAIA",
    "20M+": "20M+",
    "Achim Godwin Tetteh": "Achim Godwin Tetteh",
};

function processFile(filepath) {
    try {
        let content = fs.readFileSync(filepath, 'utf8');
        let originalContent = content;
        
        for (const [old, newStr] of Object.entries(replacements)) {
            // using split and join to replace all occurrences
            content = content.split(old).join(newStr);
        }
        
        if (content !== originalContent) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log(`Updated ${filepath}`);
        }
    } catch (e) {
        // Ignore errors for unreadable or binary files
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
console.log("Replacements completed.");
