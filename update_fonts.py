import os
import re

def update_typography(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    orig = content
    
    # Remove font-display
    content = re.sub(r'\bfont-display\s*', '', content)
    content = re.sub(r'\s*font-display\b', '', content)
    
    # Downsize texts
    content = re.sub(r'\btext-\[80px\]\b', 'text-5xl', content)
    content = re.sub(r'\btext-\[56px\]\b', 'text-4xl', content)
    content = re.sub(r'\btext-8xl\b', 'text-5xl', content)
    content = re.sub(r'\btext-7xl\b', 'text-5xl', content)
    content = re.sub(r'\btext-6xl\b', 'text-4xl', content)
    content = re.sub(r'\btext-5xl\b', 'text-4xl', content)
    
    # cleanup double spaces in classNames
    content = content.replace('  ', ' ')
    
    if orig != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

dirs = ['components', 'app']
for d in dirs:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                update_typography(os.path.join(root, file))
