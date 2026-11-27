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

const { text, url, link, linkLine, publicationList } = require('./markdown-format.js').createMarkdown({ site, name });

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
