// Small local BibTeX reader for this site's braced/quoted fields and % comments.
// Exposes the same toJSON shape used by the original page, without a CDN dependency.
(function (root) {
  'use strict';
  function toJSON(input) {
    const text = input.replace(/(^|[^\\])%[^\n\r]*/g, '$1');
    let i = 0;
    const entries = [];
    const whitespace = () => { while (/\s/.test(text[i] || '') && i < text.length) i++; };
    function value() {
      whitespace();
      const opener = text[i];
      if (opener !== '{' && opener !== '"') {
        const start = i;
        while (i < text.length && !/[,})]/.test(text[i])) i++;
        return text.slice(start, i).trim();
      }
      i++;
      const start = i;
      let depth = 1;
      while (i < text.length) {
        if (text[i] === '\\') { i += 2; continue; }
        if (opener === '{') {
          if (text[i] === '{') depth++;
          if (text[i] === '}') depth--;
        } else if (text[i] === '"') depth = 0;
        if (!depth) return text.slice(start, i++);
        i++;
      }
      throw new Error('Unclosed BibTeX field');
    }
    while (i < text.length) {
      const at = text.indexOf('@', i);
      if (at < 0) break;
      i = at + 1;
      const typeMatch = /^[a-z]+/i.exec(text.slice(i));
      if (!typeMatch) { i++; continue; }
      const entryType = typeMatch[0].toLowerCase();
      i += entryType.length;
      whitespace();
      if (!/[{(]/.test(text[i] || '')) continue;
      const close = text[i++] === '{' ? '}' : ')';
      if (['comment', 'preamble', 'string'].includes(entryType)) {
        let depth = 1;
        while (i < text.length && depth) {
          const c = text[i++];
          if (c === '\\') { i++; continue; }
          if (c === (close === '}' ? '{' : '(')) depth++;
          if (c === close) depth--;
        }
        continue;
      }
      const keyStart = i;
      while (i < text.length && text[i] !== ',' && text[i] !== close) i++;
      const citationKey = text.slice(keyStart, i).trim();
      const entryTags = {};
      if (text[i] === ',') i++;
      while (i < text.length) {
        whitespace();
        if (text[i] === close) { i++; break; }
        if (text[i] === ',') { i++; continue; }
        const field = /^[\w-]+/.exec(text.slice(i));
        if (!field) throw new Error('Invalid BibTeX field near ' + citationKey);
        i += field[0].length;
        whitespace();
        if (text[i++] !== '=') throw new Error('Missing BibTeX field value');
        let content = value();
        whitespace();
        while (text[i] === '#') { i++; content += value(); whitespace(); }
        entryTags[field[0].toLowerCase()] = content;
      }
      entries.push({ entryType, citationKey, entryTags });
    }
    return entries;
  }
  const api = { toJSON };
  root.bibtexParse = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
