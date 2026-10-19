#!/usr/bin/env bash
# Regenera los CV en PDF (ES, EN y PT) a partir de tools/cv-pdf/cv.html con Chrome/Chromium headless.
# Las traducciones se toman de assets/js/i18n.js (cv.html?lang=en|pt).
# Uso: ./tools/cv-pdf/build.sh   (opcional: CHROME=/ruta/al/navegador ./tools/cv-pdf/build.sh)
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
SOURCE="$ROOT/tools/cv-pdf/cv.html"
OUT_DIR="$ROOT/assets/docs"

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

mkdir -p "$OUT_DIR"

for lang in es en pt; do
  case "$lang" in
    es) OUTPUT="$OUT_DIR/Matias_Sandoval_CV.pdf" ;;
    en) OUTPUT="$OUT_DIR/Matias_Sandoval_CV_EN.pdf" ;;
    pt) OUTPUT="$OUT_DIR/Matias_Sandoval_CV_PT.pdf" ;;
  esac

  "$CHROME" --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
    --run-all-compositor-stages-before-draw --virtual-time-budget=15000 \
    --print-to-pdf="$OUTPUT" "file://$SOURCE?lang=$lang" 2>/dev/null

  echo "PDF generado: ${OUTPUT#"$ROOT/"}"
done
