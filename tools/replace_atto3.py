import json, re

with open('tools/atto3_images.json', 'r', encoding='utf-8') as f:
    images = json.load(f)

with open('byd-parts.html', 'r', encoding='utf-8') as f:
    content = f.read()

replaced = 0
not_found = []
for part_id, new_url in images.items():
    pattern = "('" + re.escape(part_id) + r"':\s*)'[^']+'"
    replacement = r"\g<1>'" + new_url + "'"
    new_content, n = re.subn(pattern, replacement, content)
    if n > 0:
        content = new_content
        replaced += n
    else:
        not_found.append(part_id)

with open('byd-parts.html', 'w', encoding='utf-8') as f:
    f.write(content)

remaining_placeholder = content.count('O1CN018te29G1i9VptXFLMq')
print('replaced=' + str(replaced))
print('placeholder_remaining=' + str(remaining_placeholder))
if not_found:
    print('not_found=' + str(not_found))
else:
    print('All parts replaced successfully!')
