// Write Markdown copies of the four modern pages and an llms.txt index for AI agents.
// They use the same compiled data as the HTML pages (modern/_data/academic.json), so the two cannot drift.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'modern/_data/academic.json'), 'utf8'));
const config = JSON.parse(fs.readFileSync(path.join(root, 'modern/_config.yml'), 'utf8'));
const site = (config.url + config.baseurl).replace(/\/$/, '');
const cvPdf = '/final/research/Shaokang_Jiang_Resume.pdf';
const { profile } = data;
const name = `${config.first_name} ${config.last_name}`;

// The homepage subtitle lives in the about page's front matter as HTML.
const subtitleHtml = fs.readFileSync(path.join(root, 'modern/_pages/about.html'), 'utf8').match(/^subtitle:\s*(.*)$/m)[1];
const subtitle = subtitleHtml.replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)').replace(/<[^>]+>/g, '');
const subtitlePlain = subtitleHtml.replace(/<[^>]+>/g, '');

// Escape characters that Markdown would treat as formatting; the data is already plain text.
const text = value => String(value).replace(/([\\`*_[\]<>])/g, '\\$1');
const url = href => (href.startsWith('/') ? site + href : href).replace(/[()\s]/g, encodeURIComponent);
const link = item => item.href ? `[${text(item.label)}](${url(item.href)})` : text(item.label);
const linkLine = items => items.map(link).join(' · ');
const authorList = authors => {
  const shown = authors.map(author => author === name ? `*${text(author)}*` : text(author));
  return shown.length < 3 ? shown.join(' and ') : `${shown.slice(0, -1).join(', ')}, and ${shown[shown.length - 1]}`;
};

const pages = [
  { file: 'index.html.md', html: '/', label: 'About', summary: 'Introduction, selected first-author publications, education, and awards and activities' },
  { file: 'publications/index.html.md', html: '/publications/', label: 'Publications', summary: 'Complete publication list, including manuscripts under review' },
  { file: 'experience/index.html.md', html: '/experience/', label: 'Experience', summary: 'Research, teaching, and work experience' },
  { file: 'projects/index.html.md', html: '/projects/', label: 'Projects', summary: 'Projects and technical skills' }
];
const footer = page => [
  '---',
  '',
  pages.map(other => `[${other.label}](${url('/' + other.file)})`).concat(`[CV (PDF)](${url(cvPdf)})`).join(' · '),
  '',
  `Web version: ${url(page.html)}`
];

function publicationList(papers, heading) {
  const lines = [];
  let year = null;
  for (const paper of papers) {
    if (paper.year !== year) lines.push('', `${heading} ${paper.year}`, '');
    year = paper.year;
    // The theme's generic "Paper" badge adds nothing in text, so only named venues are kept.
    const details = [paper.badge !== 'Paper' && paper.badge, `${paper.venue ? `*${text(paper.venue)}*, ` : ''}${paper.year}`, paper.note && text(paper.note)].filter(Boolean).join(' · ');
    lines.push(`- **${text(paper.title)}**  `, `  ${authorList(paper.authors)}  `, `  ${details}${paper.links.length ? '  ' : ''}`);
    if (paper.links.length) lines.push(`  ${linkLine(paper.links)}`);
  }
  return lines;
}

function entries(list, title, subtitle, date) {
  return list.flatMap(entry => [
    '',
    `### ${text(title(entry))}`,
    '',
    [subtitle(entry), date(entry)].filter(Boolean).map(text).join(' · '),
    ...(entry.details.length ? ['', ...entry.details.map(detail => `- ${text(detail)}`)] : []),
    ...(entry.links.length ? ['', linkLine(entry.links)] : [])
  ]);
}

const content = {
  'index.html.md': [
    `# ${text(name)}`,
    '',
    subtitle,
    '',
    text(profile.focus),
    '',
    ...profile.biography_markdown.flatMap(paragraph => [paragraph, '']),
    linkLine(profile.links),
    '',
    '## Selected publications',
    ...publicationList(data.publications.filter(paper => paper.homepage), '###'),
    '',
    '## Education',
    '',
    ...profile.education.map(entry => `- **${text(entry.institution)}** · ${text(entry.degree)} · ${text(entry.dates)}`),
    '',
    '## Awards and activities',
    '',
    ...profile.awards.map(award => `- ${text(award.text)}${award.date ? ` · ${text(award.date)}` : ''}`)
  ],
  'publications/index.html.md': [
    `# ${text(name)}: Publications`,
    ...publicationList(data.publications, '##')
  ],
  'experience/index.html.md': (() => {
    // Same groups as the Experience page's Research and TA & Work filter buttons.
    const groups = [['Research experience', ['Research', 'Research-class']], ['Teaching & work experience', ['TA', 'Work']]];
    const grouped = groups.flatMap(([, types]) => types);
    const other = data.experience.filter(entry => !grouped.includes(entry.type));
    if (other.length) groups.push(['Other experience', [...new Set(other.map(entry => entry.type))]]);
    return [
      `# ${text(name)}: Experience`,
      ...groups.flatMap(([heading, types]) => ['', `## ${heading}`, ...entries(data.experience.filter(entry => types.includes(entry.type)), e => e.position, e => e.institution, e => e.dates)])
    ];
  })(),
  'projects/index.html.md': [
    `# ${text(name)}: Projects`,
    ...entries(data.projects, p => p.title, p => p.year, p => p.technologies),
    '',
    '## Technical skills',
    '',
    ...data.skills.map(skill => `- **${text(skill.name)}:** ${text(skill.text)}`)
  ]
};

for (const page of pages) {
  const lines = [...content[page.file], '', ...footer(page)];
  fs.writeFileSync(path.join(root, page.file), lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n');
}

// llms.txt (https://llmstxt.org/): a title, a one-line summary, and links to the Markdown pages.
const llms = [
  `# ${text(name)}`,
  '',
  `> ${text(subtitlePlain)}. ${text(profile.focus)}.`,
  '',
  ...profile.biography_markdown.flatMap(paragraph => [paragraph, '']),
  '## Pages',
  '',
  ...pages.map(page => `- [${page.label}](${url('/' + page.file)}): ${page.summary}`),
  '',
  '## Optional',
  '',
  `- [CV (PDF)](${url(cvPdf)}): Research résumé`,
  ...profile.links.filter(item => item.href && !item.local).map(item => `- ${link(item)}`)
];
fs.writeFileSync(path.join(root, 'llms.txt'), llms.join('\n') + '\n');
console.log(`Wrote Markdown copies of ${pages.length} pages and llms.txt.`);
