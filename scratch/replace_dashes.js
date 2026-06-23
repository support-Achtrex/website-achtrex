const fs = require('fs');
const path = require('path');

const directories = ['app', 'components', 'lib'];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // Replace em dashes with different space paddings
    content = content.replace(/ — /g, ', ');
    content = content.replace(/— /g, ', ');
    content = content.replace(/ —/g, ', ');
    content = content.replace(/—/g, ', ');

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
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
            replaceInFile(fullPath);
        }
    }
}

for (const dir of directories) {
    if (fs.existsSync(dir)) {
        processDirectory(dir);
    }
}

console.log('Replacement complete.');
