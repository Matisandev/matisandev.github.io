#!/usr/bin/env bash
# Regenera assets/docs/Matias_Sandoval_CV.pdf a partir de tools/cv-pdf/cv.html con Chrome/Chromium headless.
# Uso: ./tools/cv-pdf/build.sh   (opcional: CHROME=/ruta/al/navegador ./tools/cv-pdf/build.sh)
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
SOURCE="$ROOT/tools/cv-pdf/cv.html"
OUTPUT="$ROOT/assets/docs/Matias_Sandoval_CV.pdf"

if [[ -z "${CHROME:-}" ]]; then
  for candidate in google-chrome google-chrome-stable chromium chromium-browser \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    "/Applications/Chromium.app/Contents/MacOS/Chromium"; do
    if command -v "$candidate" >/dev/null 2>&1 || [[ -x "$candidate" ]]; then
      CHROME="$candidate"
      break
    fi
  done
fi

if [[ -z "${CHROME:-}" ]]; then
  echo "No se encontró Chrome ni Chromium. Instálalo o define la variable CHROME." >&2
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT")"

"$CHROME" --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw --virtual-time-budget=15000 \
  --print-to-pdf="$OUTPUT" "file://$SOURCE" 2>/dev/null

echo "PDF generado: ${OUTPUT#"$ROOT/"}"
