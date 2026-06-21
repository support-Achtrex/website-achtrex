const https = require('https');

https.get('https://www.kavaghana.com/about', (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
        const styles = data.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
        if (styles) {
            styles.forEach(style => {
                const fonts = style.match(/font-family:[^;>{}]+/g);
                if (fonts) console.log("Fonts in <style>:", [...new Set(fonts)]);
                
                const fontFace = style.match(/@font-face[^}]+}/gi);
                if (fontFace) console.log("Font Faces:", fontFace.map(f => f.match(/font-family:[^;]+/)[0]));
            });
        }
    });
});
