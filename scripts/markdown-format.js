// Markdown formatting shared by the site's Markdown copies (markdown-modern.js) and the GitHub profile sections
// (update-github-profile.js), so publications read the same everywhere.
function createMarkdown({ site, name }) {
  // Escape characters that Markdown would treat as formatting; the data is already plain text.
  const text = value => String(value).replace(/([\\`*_[\]<>])/g, '\\$1');
  const url = href => (href.startsWith('/') ? site + href : href).replace(/[()\s]/g, encodeURIComponent);
  const link = item => item.href ? `[${text(item.label)}](${url(item.href)})` : text(item.label);
  const linkLine = items => items.map(link).join(' · ');
  const authorList = authors => {
    const shown = authors.map(author => author === name ? `*${text(author)}*` : text(author));
    return shown.length < 3 ? shown.join(' and ') : `${shown.slice(0, -1).join(', ')}, and ${shown[shown.length - 1]}`;
  };
  // Papers from academic.json; `heading` (e.g. '##') groups them under year headings, or null for one list.
  function publicationList(papers, heading) {
    const lines = [];
    let year = null;
    for (const paper of papers) {
      if (heading && paper.year !== year) lines.push('', `${heading} ${paper.year}`, '');
      year = paper.year;
      // The theme's generic "Paper" badge adds nothing in text, so only named venues are kept.
      const details = [paper.badge !== 'Paper' && paper.badge, `${paper.venue ? `*${text(paper.venue)}*, ` : ''}${paper.year}`, paper.note && text(paper.note)].filter(Boolean).join(' · ');
      lines.push(`- **${text(paper.title)}**  `, `  ${authorList(paper.authors)}  `, `  ${details}${paper.links.length ? '  ' : ''}`);
      if (paper.links.length) lines.push(`  ${linkLine(paper.links)}`);
    }
    return lines;
  }
  return { text, url, link, linkLine, authorList, publicationList };
}
module.exports = { createMarkdown };
