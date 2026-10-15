// Share homepage eligibility between Jekyll preparation and live rendering.
(function (root) {
  'use strict';
  function normalizedName(value) {
    const name = String(value || '').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
    return (name.includes(',') ? name.split(',').reverse().join(' ') : name).replace(/\s+/g, ' ').trim().toLowerCase();
  }
  function isHomepagePaper(entry, authorName) {
    const tags = entry.entryTags;
    const firstAuthor = String(tags.author || '').split(/\s+and\s+/)[0];
    const status = `${tags.status || ''} ${tags.note || ''}`;
    const pending = /\b(?:under[\s_-]*review|in[\s_-]*review|submitted|unpublished|in[\s_-]*preparation)\b/i.test(status);
    const publicRecord = tags.url || tags.doi || tags.eprint || tags.booktitle || tags.journal || /\b(?:published|accepted)\b/i.test(status);
    return normalizedName(firstAuthor) === normalizedName(authorName) && !pending && Boolean(publicRecord);
  }
  const policy = { isHomepagePaper };
  root.AcademicPublicationPolicy = policy;
  if (typeof module !== 'undefined' && module.exports) module.exports = policy;
})(typeof window !== 'undefined' ? window : globalThis);
