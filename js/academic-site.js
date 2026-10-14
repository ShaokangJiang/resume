(function () {
  'use strict';
  const profile = academicProfile;
  const byId = id => document.getElementById(id);
  const usesAlFolio = Boolean(document.querySelector('[data-al-folio-home], [data-al-folio-page]'));
  const scriptUrl = document.querySelector('script[src*="/js/academic-site.js"]').src;
  const siteRoot = usesAlFolio ? new URL('../', scriptUrl) : new URL('./', window.location.href);
  if (usesAlFolio) {
    document.querySelectorAll('#navbar a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', () => {
        if (byId('navbarNav').classList.contains('show')) {
          document.querySelector('[data-nav-toggle="navbarNav"]').click();
        }
      });
    });
  }
  function plain(value) {
    return String(value || '').replace(/\\(?:textbf|textit|emph)\{([^{}]*)\}/g, '$1')
      .replace(/\\LaTeX\b/g, 'LaTeX').replace(/\\([%#&_])/g, '$1')
      .replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
  }
  function node(tag, text, className) {
    const el = document.createElement(tag);
    if (text !== undefined) el.textContent = plain(text);
    if (className) el.className = className;
    return el;
  }
  function link(label, href) {
    const a = node('a', label);
    // Data may contain local paths, HTTP links, or email links; never executable URLs.
    if (/^(https?:\/\/|mailto:|\.\.?\/|#)/i.test(href || '')) {
      a.setAttribute('href', usesAlFolio && /^\.\.?\//.test(href) ? new URL(href, siteRoot).href : href);
    }
    return a;
  }
  function links(items, className = 'entry-links') {
    const el = node('div', undefined, className);
    items.forEach(([label, href], index) => {
      if (index && document.body.classList.contains('pure')) el.append(' · ');
      el.append(link(label, href));
    });
    return el;
  }
  function details(items, parent) {
    const list = node('ul', undefined, 'entry-details');
    (items || []).forEach(text => list.append(node('li', text)));
    parent.append(list);
  }
  function date(value) {
    if (value === 'now') return 'Present';
    return value.replace(/^([A-Za-z]+) /, (_, month) => month.slice(0, 3) + ' ');
  }
  function sorted(entries) {
    return [...entries].sort((a, b) => Date.parse(b.start_date) - Date.parse(a.start_date));
  }
  function renderExperience(id, types) {
    const container = byId(id);
    if (!container) return;
    container.replaceChildren();
    sorted(source.filter(entry => types.includes(entry.type))).forEach(entry => {
      const article = node('article', undefined, 'resume-entry');
      const head = node('div', undefined, 'entry-heading');
      head.append(node('h3', entry.position), node('span', `${date(entry.start_date)} – ${date(entry.end_date)}`, 'entry-date'));
      article.append(head, node('p', entry.institution, 'entry-subtitle'));
      details(entry.details, article);
      if (entry.link) article.append(links(entry.link.map(item => [item.description, item.link])));
      container.append(article);
    });
  }
  function renderProfile() {
    if (byId('profile-name')) byId('profile-name').textContent = profile.name;
    if (byId('profile-role')) byId('profile-role').textContent = profile.role;
    if (byId('profile-focus')) byId('profile-focus').textContent = profile.focus;
    if (byId('profile-biography')) {
      const el = byId('profile-biography');
      profile.biography.forEach(text => el.append(node('p', text)));
    }
    if (byId('profile-links')) byId('profile-links').append(links(profile.links, 'profile-links'));
    if (byId('education-entries')) profile.education.forEach(entry => {
      const article = node('article', undefined, 'resume-entry');
      const head = node('div', undefined, 'entry-heading');
      head.append(node('h3', entry.institution), node('span', entry.dates, 'entry-date'));
      article.append(head, node('p', entry.degree, 'entry-subtitle'));
      if (!byId('education-entries').hasAttribute('data-compact')) details(entry.details, article);
      byId('education-entries').append(article);
    });
  }
  function renderProjects() {
    const el = byId('project-entries');
    if (!el) return;
    const latestYear = project => Math.max(...(String(project.year).match(/\d{4}/g) || ['0']).map(Number));
    [...projects_all].filter(project => project.level === 'normal').sort((a, b) => latestYear(b) - latestYear(a)).forEach(project => {
      const article = node('article', undefined, 'resume-entry project-entry');
      const head = node('div', undefined, 'entry-heading');
      head.append(node('h3', project.title), node('span', project.year, 'entry-date'));
      article.append(head, node('p', (project.technologies || []).join(' · '), 'entry-subtitle'));
      details(project.description, article);
      if (project.link) article.append(links(project.link.map(item => [item.description, item.link])));
      el.append(article);
    });
  }
  async function loadText(path) {
    const response = await fetch(new URL(path, siteRoot));
    if (!response.ok) throw new Error(`Could not load ${path}`);
    return response.text();
  }
  async function renderPapers() {
    const el = byId('publication-container');
    if (!el) return;
    try {
      const bibliography = await loadText('./pub.bib');
      const papers = bibtexParse.toJSON(bibliography);
      if (usesAlFolio) {
        // Keep the actual Jekyll Scholar output when the shared bibliography matches.
        // If the source changes between builds, update the same theme card markup live.
        let matchesCompiled = false;
        if (window.crypto && window.crypto.subtle) {
          const digest = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(bibliography));
          const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
          matchesCompiled = hash === el.dataset.bibliographyHash;
        }
        if (!matchesCompiled || el.querySelectorAll('ol.bibliography > li').length !== papers.length) {
          renderAlFolioPapers(papers, el);
        }
        el.querySelectorAll('ol.bibliography > li').forEach(item => item.classList.add('pub-item'));
        return;
      }
      if (document.body.classList.contains('pure')) {
        renderPurePapers(papers, el);
        return;
      }
      const fragment = document.createDocumentFragment();
      papers.forEach(({ entryTags: tags }) => {
        const item = node('li', undefined, 'pub-item');
        item.append(node('h3', tags.title, 'pub-title'));
        const authors = node('p', undefined, 'pub-authors');
        plain(tags.author).split(/\s+and\s+/).forEach((name, i) => {
          if (i) authors.append(document.createTextNode(', '));
          authors.append(node(name === profile.name ? 'strong' : 'span', name));
        });
        item.append(authors);
        const underReview = /under review/i.test(tags.note || '');
        item.append(node('p', `${tags.booktitle || tags.journal || 'Manuscript'}${tags.year ? ', ' + tags.year : ''}${tags.note ? ' · ' + plain(tags.note) : ''}`, 'pub-venue'));
        if (underReview) item.classList.add('under-review');
        const resources = ['url', 'video', 'code', 'slides', 'demo', 'poster', 'artifact'].filter(key => tags[key]).map(key => [key === 'url' ? 'Paper' : key[0].toUpperCase() + key.slice(1), tags[key]]);
        if (resources.length) item.append(links(resources, 'pub-links'));
        fragment.append(item);
      });
      el.replaceChildren(fragment);
    } catch (error) {
      el.replaceChildren(node(document.body.classList.contains('pure') ? 'p' : 'li', 'Publications could not be loaded. Please try again or open the bibliography.'));
      el.firstChild.append(' ', link('Bibliography', './pub.bib'));
      console.error(error);
    }
  }
  function renderPurePapers(papers, container) {
    const fragment = document.createDocumentFragment();
    papers.forEach(({ entryTags: tags }, index) => {
      const citation = node('p', undefined, 'pub-item');
      citation.setAttribute('role', 'listitem');
      citation.append(`[${index + 1}] `);
      plain(tags.author).split(/\s+and\s+/).forEach((name, authorIndex) => {
        if (authorIndex) citation.append(', ');
        citation.append(node(name === profile.name ? 'strong' : 'span', name));
      });
      citation.append(`. “${plain(tags.title).replace(/\.$/, '')}.” `);
      citation.append(node('em', tags.booktitle || tags.journal || 'Manuscript'));
      if (tags.year) citation.append(`, ${plain(tags.year)}`);
      citation.append('.');
      if (tags.note) citation.append(` ${plain(tags.note).replace(/\.$/, '')}.`);
      if (/under review/i.test(tags.note || '')) citation.classList.add('under-review');
      ['url', 'video', 'code', 'slides', 'demo', 'poster', 'artifact'].filter(key => tags[key]).forEach(key => {
        const label = key === 'url' ? 'Paper' : key[0].toUpperCase() + key.slice(1);
        citation.append(' ', link(`[${label}]`, tags[key]));
      });
      fragment.append(citation);
    });
    container.replaceChildren(fragment);
  }
  function renderAlFolioPapers(papers, container) {
    const fragment = document.createDocumentFragment();
    const years = [...new Set(papers.map(paper => paper.entryTags.year || 'Undated'))].sort((a, b) => b.localeCompare(a));
    years.forEach(year => {
      fragment.append(node('h2', year, 'bibliography'));
      const list = node('ol', undefined, 'bibliography');
      papers.filter(paper => (paper.entryTags.year || 'Undated') === year).forEach(({ entryTags: tags }) => {
        const item = node('li');
        const row = node('div', undefined, 'row');
        const badgeColumn = node('div', undefined, 'col col-sm-2 abbr');
        const venue = tags.booktitle || tags.journal || 'Manuscript';
        const abbreviation = ['MSR', 'TOSEM', 'WWW', 'CI', 'PLATEAU', 'FSE'].find(text => new RegExp(`\\b${text}\\b`, 'i').test(venue)) || 'Paper';
        const badge = node('abbr', abbreviation, 'badge rounded w-100');
        badge.title = plain(venue);
        badgeColumn.append(badge);
        const content = node('div', undefined, 'col-sm-8');
        content.append(node('div', tags.title, 'title'));
        const authors = node('div', undefined, 'author');
        plain(tags.author).split(/\s+and\s+/).forEach((name, i) => {
          if (i) authors.append(document.createTextNode(', '));
          authors.append(node(name === profile.name ? 'em' : 'span', name));
        });
        content.append(authors);
        const periodical = node('div', undefined, 'periodical');
        periodical.append(node('em', venue), document.createTextNode(`, ${year}`));
        content.append(periodical, node('div', tags.note, 'periodical'));
        const resources = ['url', 'video', 'code', 'slides', 'demo', 'poster', 'artifact'].filter(key => tags[key]).map(key => [key === 'url' ? 'Paper' : key[0].toUpperCase() + key.slice(1), tags[key]]);
        if (resources.length) {
          const buttons = links(resources, 'links');
          buttons.querySelectorAll('a').forEach(a => { a.className = 'btn btn-sm z-depth-0'; });
          content.append(buttons);
        }
        row.append(badgeColumn, content);
        item.append(row);
        list.append(item);
      });
      fragment.append(list);
    });
    container.replaceChildren(fragment);
  }
  async function renderSkills() {
    const el = byId('skill-entries');
    if (!el) return;
    try {
      const text = await loadText('./Skills.tex');
      const pattern = /\\resumeItem\{\\textbf\{([^}]+)\}\{: ([\s\S]*?)\}\}/g;
      let match;
      while ((match = pattern.exec(text))) {
        el.append(node('dt', match[1]), node('dd', match[2]));
      }
    } catch (error) {
      el.append(node('dd', 'Skills could not be loaded.'));
      console.error(error);
    }
  }
  renderProfile();
  if (byId('experience-entries')) {
    if (document.querySelector('[data-al-folio-page="experience"]')) {
      const heading = document.querySelector('.post-title');
      heading.id = 'experience-title';
      heading.textContent = 'research experience';
    }
    initExperienceFilters(document.querySelector('[data-experience-filters]'), types => renderExperience('experience-entries', types));
  }
  renderProjects();
  Promise.all([renderPapers(), renderSkills()]).then(() => { document.body.dataset.rendered = 'true'; });
})();
