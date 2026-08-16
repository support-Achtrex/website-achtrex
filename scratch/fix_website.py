import os
import glob

replacements = {
    "LUMI AI Engine": "AAIA",
    "LUMI AI Platform": "AAIA",
    "LUMI AI Solutions": "AAIA",
    "LUMI AI": "AAIA",
    "2.5 million": "20M+",
    "Godwin Achim Tetteh": "Achim Godwin Tetteh",
}

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        for old, new in replacements.items():
            content = content.replace(old, new)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        pass # Ignore unreadable files like binaries

base_path = r"c:\Users\hp\.gemini\antigravity\scratch\website-achtrex"
for root, dirs, files in os.walk(base_path):
    if "node_modules" in root or ".git" in root or ".next" in root:
        continue
    for file in files:
        if file.endswith((".tsx", ".ts", ".js", ".md", ".json")):
            process_file(os.path.join(root, file))

print("Replacements completed.")
