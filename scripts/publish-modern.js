// Copy only the compiler-owned output; other website versions and sources stay in place.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '..');
const built = path.join(root, 'modern/_site');
if (!fs.existsSync(path.join(built, 'index.html'))) throw new Error('Run the Jekyll build first.');
fs.cpSync(path.join(built, 'assets'), path.join(root, 'assets'), { recursive: true });
const config = JSON.parse(fs.readFileSync(path.join(root, 'modern/_config.yml'), 'utf8'));
const baseurl = config.baseurl.replace(/\/$/, '');
let homepage = fs.readFileSync(path.join(built, 'index.html'), 'utf8');
// This homepage lives beside its assets at both / and /resume/.
// Keep the theme output and canonical URL, but make local resource URLs portable.
function portableUrl(url) {
  if (!url.startsWith('//') && url.startsWith(`${baseurl}/`)) {
    let resource = url.slice(baseurl.length + 1);
    const localFile = path.join(root, resource);
    if (/\.(js|css)$/.test(resource) && fs.existsSync(localFile)) {
      const hash = crypto.createHash('sha256').update(fs.readFileSync(localFile)).digest('hex').slice(0, 16);
      resource += `?v=${hash}`;
    }
    return `./${resource}`;
  }
  return url;
}
homepage = homepage.replace(/\b(href|src)=(["'])(\/[^"']*)\2/g, (_, name, quote, url) => `${name}=${quote}${portableUrl(url)}${quote}`);
// The official search menu also emits navigation destinations in inline handlers.
homepage = homepage.replace(/(window\.location\.href\s*=\s*)(["'])(\/[^"']*)\2/g, (_, assignment, quote, url) => `${assignment}${quote}${portableUrl(url)}${quote}`);
fs.writeFileSync(path.join(root, 'index.html'), homepage);
fs.copyFileSync(path.join(root, 'modern/LICENSE'), path.join(root, 'assets/al-folio-LICENSE.txt'));
fs.writeFileSync(path.join(root, '.nojekyll'), '');
console.log('Published the compiled al-folio homepage and theme assets to the repository root.');
