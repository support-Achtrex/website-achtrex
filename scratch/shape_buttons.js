const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    content = content.replace(/<(button|Link)\b[^>]+>/g, (match, tag) => {
        if (!match.includes('className')) return match;
        
        // For Links, only apply if they look like a button (e.g. have padding and background or border)
        const isButtonLike = match.includes('px-') || match.includes('bg-') || match.includes('border');
        if (tag === 'Link' && !isButtonLike) {
            return match;
        }

        // Replace any existing rounded class with rounded-full
        let newMatch = match.replace(/\brounded(?:-(?:sm|md|lg|xl|2xl|3xl|none))?\b/g, 'rounded-full');
        return newMatch;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            replaceInFile(fullPath);
        }
    }
}

for (const dir of directories) {
    if (fs.existsSync(dir)) {
        processDirectory(dir);
    }
}
console.log('Done');
