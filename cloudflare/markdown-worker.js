// Cloudflare Worker for resume.shaokang.me: a free replacement for Cloudflare's paid "Markdown for Agents".
// Requests that ask for Markdown (Accept: text/markdown) get the Markdown copy that scripts/markdown-modern.js
// writes beside each modern page (/ -> /index.html.md, /experience/ -> /experience/index.html.md).
// Every other request passes through to GitHub Pages unchanged. Deployment steps are in README.md.
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const markdownPath = markdownPathFor(url.pathname);
    if (!markdownPath || !['GET', 'HEAD'].includes(request.method)) return fetch(request);
    if (!wantsMarkdown(request.headers.get('Accept'))) {
      // The same URL now has two representations, so caches must key on Accept.
      return withVary(await fetch(request));
    }
    // A subrequest to this hostname goes straight to GitHub Pages, not back through this Worker.
    const markdown = await fetch(new URL(markdownPath, url.origin), { method: request.method });
    if (!markdown.ok) return withVary(await fetch(request));
    const response = withVary(markdown);
    response.headers.set('Content-Type', 'text/markdown; charset=utf-8');
    return response;
  }
};

// Page URLs map to the Markdown copy beside them; other files (PDFs, scripts, pure.html) have none.
function markdownPathFor(pathname) {
  if (pathname.endsWith('/')) return `${pathname}index.html.md`;
  if (pathname.endsWith('/index.html')) return `${pathname}.md`;
  if (!/\.[^/]*$/.test(pathname)) return `${pathname}/index.html.md`;
  return null;
}

// Prefer Markdown only when the client asks for it at least as strongly as for HTML (browsers never ask).
function wantsMarkdown(accept) {
  const quality = type => {
    for (const part of String(accept || '').split(',')) {
      const [media, ...params] = part.split(';').map(value => value.trim().toLowerCase());
      if (media !== type) continue;
      const q = params.find(param => param.startsWith('q='));
      return q ? Number(q.slice(2)) || 0 : 1;
    }
    return 0;
  };
  const markdown = quality('text/markdown');
  return markdown > 0 && markdown >= quality('text/html');
}

function withVary(original) {
  const response = new Response(original.body, original);
  response.headers.append('Vary', 'Accept');
  return response;
}
