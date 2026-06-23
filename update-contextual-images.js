const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'lib', 'blog-data.ts');
let content = fs.readFileSync(file, 'utf8');

// We will split the content by "{" and process each block that looks like a blog post.
// A simpler way: use regex to match the slug and replace the image.
// We can find all slugs and then replace the very next "image" occurrence.

let updatedContent = content;

const blockRegex = /"slug":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g;

let match;
let count = 0;
while ((match = blockRegex.exec(content)) !== null) {
    const slug = match[1];
    const oldImageLine = match[0];
    
    let keywords = "tech";
    const slugLower = slug.toLowerCase();
    
    if (slugLower.includes("auto") || slugLower.includes("vehicle") || slugLower.includes("car") || slugLower.includes("fleet")) {
        keywords = "car";
    } else if (slugLower.includes("api") || slugLower.includes("data") || slugLower.includes("graphql") || slugLower.includes("rest") || slugLower.includes("database")) {
        keywords = "server";
    } else if (slugLower.includes("ai") || slugLower.includes("machine") || slugLower.includes("cognitive") || slugLower.includes("llm")) {
        keywords = "ai";
    } else if (slugLower.includes("infrastructure") || slugLower.includes("cloud") || slugLower.includes("kube") || slugLower.includes("aws") || slugLower.includes("scale") || slugLower.includes("scaling")) {
        keywords = "cloud";
    } else if (slugLower.includes("security") || slugLower.includes("auth") || slugLower.includes("jwt") || slugLower.includes("zero")) {
        keywords = "cybersecurity";
    } else if (slugLower.includes("agency") || slugLower.includes("venture") || slugLower.includes("business")) {
        keywords = "startup";
    } else {
        keywords = "software";
    }

    // create a simple hash for the lock from the slug
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    const lock = Math.abs(hash);

    const newImageLine = `"slug": "${slug}"` + oldImageLine.substring(`"slug": "${slug}"`.length).replace(/"image":\s*"[^"]+"/, `"image": "https://loremflickr.com/800/600/${keywords}?lock=${lock}"`);
    
    updatedContent = updatedContent.replace(oldImageLine, newImageLine);
    count++;
}

fs.writeFileSync(file, updatedContent, 'utf8');
console.log(`Replaced ${count} images with contextual loremflickr keywords.`);
