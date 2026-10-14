// Feed the existing data sources to the actual al-folio/Jekyll compiler.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const root = path.resolve(__dirname, '..');
const modern = path.join(root, 'modern');
const parser = require(path.join(root, 'js/bibtex.js'));
const profile = vm.runInNewContext(fs.readFileSync(path.join(root, 'js/site-data.js'), 'utf8') + '\nacademicProfile');
const bibliography = fs.readFileSync(path.join(root, 'pub.bib'), 'utf8');
const papers = parser.toJSON(bibliography);
const name = profile.name.split(' ');
const plugins = ['jekyll-3rd-party-libraries', 'jekyll-cache-bust', 'jekyll-minifier', 'jekyll-regex-replace', 'jekyll/scholar', 'jekyll-socials', 'al_folio_core', 'al_icons', 'al_search', 'al_citations', 'al_folio_upgrade'];
const config = {
  title: 'blank', first_name: name.shift(), middle_name: '', last_name: name.join(' '),
  url: 'https://shaokangjiang.github.io', baseurl: '/resume', lang: 'en',
  description: `${profile.name} — end-user programming, personal software, and developer tools.`,
  keywords: 'end-user programming, personal software, developer tools, human-computer interaction, software engineering',
  icon: 'favicon.ico', navbar_fixed: true, footer_fixed: false,
  homepage_navigation: [
    { title: 'blog', url: 'https://shaokangjiang.github.io/' },
    { title: 'publications', url: '/#publications' },
    { title: 'projects', url: '/#projects' },
    { title: 'repositories', url: 'https://github.com/ShaokangJiang?tab=repositories' },
    { title: 'CV', url: '/pdf.html' },
    { title: 'experience', url: '/#experience' }
  ],
  footer_text: 'Built with <a href="https://jekyllrb.com/">Jekyll</a> and <a href="https://github.com/alshedivat/al-folio">al-folio</a>.',
  contact_note: '', theme: 'al_folio_core', plugins,
  shared_bibliography_hash: crypto.createHash('sha256').update(bibliography).digest('hex'),
  al_folio: { api_version: 1, style_engine: 'tailwind', compat: { bootstrap: { enabled: false } }, features: { cv: { enabled: false }, distill: { enabled: false } } },
  scholar: { last_name: ['Jiang'], first_name: ['Shaokang'], source: './_bibliography', bibliography: 'papers.bib', bibliography_template: 'bib', query: '@*', group_by: 'year', group_order: 'descending', sort_by: 'none', bibtex_filters: ['latex', 'smallcaps', 'superscript'], replace_strings: true, join_strings: true },
  max_author_limit: 1000,
  // The official template uses this column for venue badges as well as optional images.
  // No preview images are provided; every row has a venue badge and text only.
  enable_publication_thumbnails: true,
  enable_publication_badges: { altmetric: false, dimensions: false, google_scholar: false, inspirehep: false },
  enable_darkmode: true, enable_masonry: false, enable_math: false,
  enable_medium_zoom: false, enable_progressbar: false, search_enabled: true,
  bib_search: false, back_to_top: false, external_sources: [], newsletter: { enabled: false },
  imagemagick: { enabled: false }, external_links: { enabled: false },
  third_party_libraries: { google_fonts: { url: { fonts: '/resume/fonts/roboto/roboto.css' } } },
  include: ['_pages'], exclude: ['Gemfile', 'Gemfile.lock', 'LICENSE', 'upstream-config.yml', 'vendor', '.bundle', '_site', '.al-folio-overrides.yml']
};
fs.mkdirSync(path.join(modern, '_bibliography'), { recursive: true });
// JSON is a YAML subset accepted by Jekyll and by al-folio's override auditor.
fs.writeFileSync(path.join(modern, '_config.yml'), JSON.stringify(config, null, 2) + '\n');
function venue(tags) {
  const text = tags.booktitle || tags.journal || '';
  return ['MSR', 'TOSEM', 'WWW', 'CI', 'PLATEAU', 'FSE'].find(abbr => new RegExp(`\\b${abbr}\\b`, 'i').test(text)) || 'Paper';
}
const generatedBib = papers.map(entry => {
  // Omit DOI and abstract controls from the theme while retaining the source metadata.
  const tags = { ...Object.fromEntries(Object.entries(entry.entryTags).filter(([key, value]) => value.trim() && !['doi', 'abstract'].includes(key))), abbr: venue(entry.entryTags) };
  if (tags.url) tags.html = tags.url;
  // The theme's local poster convention is /assets/pdf/<filename>.
  if (tags.poster && tags.poster.startsWith('./')) {
    const filename = path.basename(tags.poster);
    const target = path.join(modern, 'assets/pdf', filename);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(root, tags.poster), target);
    tags.poster = filename;
  }
  return `@${entry.entryType}{${entry.citationKey},\n` + Object.entries(tags).map(([key, value]) => `  ${key} = {${value}}`).join(',\n') + '\n}';
}).join('\n\n') + '\n';
fs.writeFileSync(path.join(modern, '_bibliography/papers.bib'), generatedBib);
fs.mkdirSync(path.join(modern, 'assets/img'), { recursive: true });
fs.copyFileSync(path.join(root, 'img/favicon.ico'), path.join(modern, 'assets/img/favicon.ico'));
console.log(`Prepared ${papers.length} papers for al-folio's Jekyll Scholar renderer.`);
