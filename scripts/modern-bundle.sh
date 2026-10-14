#!/usr/bin/env bash
set -euo pipefail
export JEKYLL_ENV=production

# Prefer the official prebuilt runtime when present; otherwise use system Ruby.
al_folio_ruby_root=/opt/hostedtoolcache/Ruby/3.3.12/x64
if [ -x "$al_folio_ruby_root/bin/ruby" ]; then
  export PATH="$al_folio_ruby_root/bin:$PATH"
fi
cd "$(dirname "$0")/../modern"
exec bundle "$@"
