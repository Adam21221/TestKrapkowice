#!/bin/bash
# Script to optimize images for web

echo "🖼️  Optymalizacja zdjęć dla www..."

# Create backup directory
BACKUP_DIR="img_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Counter
count=0
total_saved=0

# Function to get file size in bytes
get_size() {
    stat -f%z "$1" 2>/dev/null || echo 0
}

# Function to optimize image
optimize_image() {
    local file="$1"
    local filename=$(basename "$file")
    local dirname=$(dirname "$file")
    
    # Skip if already optimized or is avif
    if [[ "$file" == *"_optimized"* ]] || [[ "$file" == *.avif ]]; then
        return
    fi
    
    echo "📸 Przetwarzam: $filename"
    
    # Backup original
    local backup_path="$BACKUP_DIR/$(echo "$dirname" | sed 's/\//_/g')_$filename"
    cp "$file" "$backup_path"
    
    # Get original size
    local original_size=$(get_size "$file")
    
    # Optimize based on file type
    if [[ "$file" == *.png ]]; then
        # PNG: convert to JPEG if not transparent, or optimize PNG
        if sips -g hasAlpha "$file" | grep -q "hasAlpha: no"; then
            # No transparency - convert to JPEG
            local jpg_file="${file%.png}.jpg"
            sips -s format jpeg -s formatOptions 85 --resampleWidth 1920 "$file" --out "$jpg_file" >/dev/null 2>&1
            if [ -f "$jpg_file" ]; then
                rm "$file"
                echo "  ✓ Konwersja PNG→JPG: $filename"
            fi
        else
            # Has transparency - optimize PNG
            sips --resampleWidth 1920 "$file" --out "$file" >/dev/null 2>&1
            echo "  ✓ Zoptymalizowano PNG: $filename"
        fi
    elif [[ "$file" == *.jpg ]] || [[ "$file" == *.jpeg ]]; then
        # JPEG: resize and compress
        sips -s format jpeg -s formatOptions 82 --resampleWidth 1920 "$file" --out "$file" >/dev/null 2>&1
        echo "  ✓ Zoptymalizowano JPG: $filename"
    fi
    
    # Calculate savings
    local new_size=$(get_size "${file%.png}.jpg" 2>/dev/null || get_size "$file")
    local saved=$((original_size - new_size))
    total_saved=$((total_saved + saved))
    
    if [ $saved -gt 0 ]; then
        echo "  💾 Zaoszczędzono: $(numfmt --to=iec $saved 2>/dev/null || echo "$saved bytes")"
    fi
    
    count=$((count + 1))
}

# Find and optimize all images
echo ""
echo "🔍 Wyszukiwanie obrazów..."

while IFS= read -r -d '' file; do
    optimize_image "$file"
done < <(find img -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) ! -iname "*.avif" -print0)

# Optimize root directory images
for file in *.png *.jpg *.jpeg 2>/dev/null; do
    if [ -f "$file" ]; then
        optimize_image "$file"
    fi
done

echo ""
echo "✅ Optymalizacja zakończona!"
echo "📊 Zoptymalizowano: $count plików"
echo "💾 Całkowite oszczędności: $(numfmt --to=iec $total_saved 2>/dev/null || echo "$total_saved bytes")"
echo "📦 Kopia zapasowa: $BACKUP_DIR/"

