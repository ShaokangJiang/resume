// Refresh the publication and activity sections of the GitHub profile README (ShaokangJiang/ShaokangJiang)
// from the same compiled data as the website. Run after ./scripts/build-modern.ps1, for example:
//   node scripts/update-github-profile.js ../github-home/README.md
// Only the text between the <!-- name:start --> and <!-- name:end --> markers is replaced.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const target = process.argv[2];
if (!target) throw new Error('Usage: node scripts/update-github-profile.js <path to the profile README.md>');
const data = JSON.parse(fs.readFileSync(path.join(root, 'modern/_data/academic.json'), 'utf8'));
const config = JSON.parse(fs.readFileSync(path.join(root, 'modern/_config.yml'), 'utf8'));
const site = (config.url + config.baseurl).replace(/\/$/, '');
const md = require('./markdown-format.js').createMarkdown({ site, name: `${config.first_name} ${config.last_name}` });

// Same selection as the homepage: published first-author papers, including preprints.
const sections = {
  publications: [
    '### Selected Publications',
    '',
    ...md.publicationList(data.publications.filter(paper => paper.homepage), null),
    '',
    `[All publications](${site}/publications/)`
  ],
  activities: [
    '### Awards and Activities',
    '',
    ...data.profile.awards.map(award => `- ${md.text(award.text)}${award.date ? ` · ${md.text(award.date)}` : ''}`)
  ]
};

let readme = fs.readFileSync(target, 'utf8');
const eol = readme.includes('\r\n') ? '\r\n' : '\n';
for (const [name, lines] of Object.entries(sections)) {
  const pattern = new RegExp(`(<!-- ${name}:start -->)[\\s\\S]*?(<!-- ${name}:end -->)`);
  if (!pattern.test(readme)) throw new Error(`${target} needs <!-- ${name}:start --> and <!-- ${name}:end --> markers where the section belongs.`);
  // Blank lines keep GitHub's Markdown from merging the section into the marker comments.
  readme = readme.replace(pattern, (_, start, end) => [start, '', ...lines, '', end].join(eol));
}
fs.writeFileSync(target, readme);
console.log(`Updated the publications and activities sections in ${target}.`);
