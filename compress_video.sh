#!/bin/bash
# Script to compress tessttt.mov to under 25 MB

echo "🎬 Kompresowanie wideo do poniżej 25 MB..."

# Input and output files
INPUT="video/tessttt.mov"
OUTPUT="video/tessttt_compressed.mp4"
BACKUP="video/tessttt_original.mov"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg nie jest zainstalowane!"
    echo "Zainstaluj przez Homebrew: brew install ffmpeg"
    exit 1
fi

# Backup original
if [ ! -f "$BACKUP" ]; then
    echo "📦 Tworzenie kopii zapasowej oryginału..."
    cp "$INPUT" "$BACKUP"
fi

# Compress video to ~24 MB with good quality
# Two-pass encoding for best quality at target size
echo "🔄 Pass 1/2 - Analiza..."
ffmpeg -i "$INPUT" \
    -vf "scale=1280:-2" \
    -c:v libx264 \
    -b:v 1800k \
    -maxrate 2000k \
    -bufsize 4000k \
    -preset slow \
    -profile:v high \
    -level 4.0 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -an \
    -pass 1 \
    -f mp4 /dev/null -y

echo "🔄 Pass 2/2 - Kompresja..."
ffmpeg -i "$INPUT" \
    -vf "scale=1280:-2" \
    -c:v libx264 \
    -b:v 1800k \
    -maxrate 2000k \
    -bufsize 4000k \
    -preset slow \
    -profile:v high \
    -level 4.0 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -c:a aac \
    -b:a 96k \
    -pass 2 \
    "$OUTPUT" -y

# Clean up pass files
rm -f ffmpeg2pass-0.log ffmpeg2pass-0.log.mbtree

# Check output size
OUTPUT_SIZE=$(du -h "$OUTPUT" | cut -f1)
echo "✅ Gotowe! Rozmiar skompresowanego pliku: $OUTPUT_SIZE"
echo "📁 Zapisano jako: $OUTPUT"
echo ""
echo "Aby użyć skompresowanego wideo:"
echo "1. Sprawdź jakość: open $OUTPUT"
echo "2. Jeśli OK, podmień w index.html src na: video/tessttt_compressed.mp4"

