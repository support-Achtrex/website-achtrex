import re

with open('lib/blog-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

images = [
    '/blog/blog-ai-tech.png',
    '/blog/blog-mobile-app.png',
    '/blog/blog-ui-ux.png',
    '/blog/blog-web-dev.png',
    '/blog/achtrex-nmvtis-pipeline.png'
]

img_idx = 0
def replace_func(match):
    global img_idx
    img = images[img_idx % len(images)]
    img_idx += 1
    return 'image: "' + img + '"'

content = re.sub(r'image:\s*"https://images\.unsplash\.com[^"]+"', replace_func, content)

with open('lib/blog-data.ts', 'w', encoding='utf-8') as f:
    f.write(content)
