// Copy only the compiler-owned output; other website versions and sources stay in place.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '..');
const built = path.join(root, 'modern/_site');
const pages = ['index.html', 'experience/index.html', 'projects/index.html'];
for (const page of pages) {
  if (!fs.existsSync(path.join(built, page))) throw new Error(`Run the Jekyll build first: ${page} is missing.`);
}
fs.cpSync(path.join(built, 'assets'), path.join(root, 'assets'), { recursive: true });
const config = JSON.parse(fs.readFileSync(path.join(root, 'modern/_config.yml'), 'utf8'));
const baseurl = config.baseurl.replace(/\/$/, '');
// Preserve theme output and canonical URLs while supporting both / and /resume/.
function portableUrl(url, prefix) {
  if (!url.startsWith('//') && url.startsWith(`${baseurl}/`)) {
    let resource = url.slice(baseurl.length + 1);
    const localFile = path.join(root, resource);
    if (/\.(js|css)$/.test(resource) && fs.existsSync(localFile)) {
      const hash = crypto.createHash('sha256').update(fs.readFileSync(localFile)).digest('hex').slice(0, 16);
      resource += `?v=${hash}`;
    }
    return `${prefix}${resource}`;
  }
  return url;
}
for (const page of pages) {
  const prefix = '../'.repeat(page.split('/').length - 1) || './';
  let html = fs.readFileSync(path.join(built, page), 'utf8');
  html = html.replace(/\b(href|src)=(["'])(\/[^"']*)\2/g, (_, name, quote, url) => `${name}=${quote}${portableUrl(url, prefix)}${quote}`);
  // The official search menu also emits navigation destinations in inline handlers.
  html = html.replace(/(window\.location\.href\s*=\s*)(["'])(\/[^"']*)\2/g, (_, assignment, quote, url) => `${assignment}${quote}${portableUrl(url, prefix)}${quote}`);
  const target = path.join(root, page);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}
fs.copyFileSync(path.join(root, 'modern/LICENSE'), path.join(root, 'assets/al-folio-LICENSE.txt'));
fs.writeFileSync(path.join(root, '.nojekyll'), '');
console.log('Published the compiled al-folio homepage, experience and projects pages, and theme assets.');
