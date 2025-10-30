# 🌱 TEST Krapkowice - Mega Profesjonalna Strona Gospodarki Odpadami

Ultra-profesjonalna strona internetowa dla firmy TEST Krapkowice z najnowszymi trendami web design 2025, efektem wave, video background i rozbudowanymi sekcjami produktów.

## ✨ Mega Profesjonalne Funkcje

### 🎬 Video Background
- **Video w tle hero section** z opacity 40%
- Płynne odtwarzanie w pętli
- Overlay z gradientem dla lepszej czytelności

### 🌊 Wave Effect
- **Animowany efekt fali** w dolnej części hero
- Płynna animacja CSS
- Dynamiczne przejście między sekcjami

### 📸 Rozbudowane Sekcje Produktów

#### 1. Szczegółowa Karta Produktu (RYŚ)
- **Duże zdjęcie główne** z miniaturkami
- Miejsce na dodatkowe zdjęcia (placeholdery +)
- **Szczegółowy opis** z kluczowymi cechami
- **Rating i badge** (Bestseller 2024)
- **Grid specyfikacji** (pojemność, wydajność, moc, certyfikat)
- **Lista feature** z ikonami SVG
- **Dwa przyciski CTA**: "Zapytaj o Ofertę" + "Pobierz Kartę Produktu"

#### 2. Kompaktowe Karty Produktów (6 produktów)
- LIS - Linia do Sortowania
- Przesiewacz Dyskowy
- Przesiewacz Dwupokładowy
- Przesiewacz Bębnowy
- Separator Balistyczny
- Instalacja Odpylania

Każda karta zawiera:
- Zdjęcie produktu
- Badge z kodem
- Opis
- Specyfikacje z emoji

### 🎨 Design Features
- **Glassmorphism** - efekty szkła z backdrop-filter
- **3D Tilt Effects** - karty reagujące na mysz
- **Animated Background** - żywe tło
- **Gradient Orbs** - płynne gradienty
- **Wave Animation** - fala na dole hero
- **Video Background** - 40% opacity
- **Professional Typography** - font Outfit

### 🚀 Nowe Elementy

#### Hero Section
- ✅ Video background (opacity 40%)
- ✅ Video overlay z gradientem
- ✅ Animowany efekt wave
- ✅ Usunięte floating cards (jakość, innowacja, technologia)
- ✅ Zachowane statystyki (600k+, 25+, 100+)
- ✅ Profesjonalne przyciski CTA

#### Products Section
- ✅ Jedna szczegółowa karta produktu (RYŚ)
- ✅ Sześć kompaktowych kart produktów
- ✅ Miejsca na dodatkowe zdjęcia (thumbnails)
- ✅ Rozbudowane opisy
- ✅ Specyfikacje techniczne
- ✅ Rating i badges
- ✅ Przyciski akcji

## 📁 Struktura Projektu

```
test_krapkowice_nowa/
├── index.html          # Profesjonalna struktura HTML
├── style.css           # Mega profesjonalne CSS
├── script.js           # Zaawansowany JavaScript
├── README.md           # Ta dokumentacja
├── img/                # Zdjęcia produktów AVIF
│   ├── rwr.jpg.avif
│   ├── testlis.jpg.avif
│   ├── przesiewacz1.png.avif
│   ├── 231.png.avif
│   ├── bebnowy1.png.avif
│   ├── 3121.png.avif
│   ├── odpylaniee.png.avif
│   ├── 321Bez nazwy-4.png.avif
│   └── 9f03cd_1ef6202a127e4015b5dc79fdb56f11a3~mv2.png.avif
└── video/             # Video dla hero section
    └── hero-video.mp4 (dodaj swoje video tutaj)
```

## 🎥 Dodanie Video

1. Utwórz folder `video` w głównym katalogu:
```bash
mkdir video
```

2. Dodaj plik wideo `hero-video.mp4` do folderu `video/`

3. Zalecane parametry video:
   - **Format**: MP4 (H.264)
   - **Rozdzielczość**: 1920x1080 (Full HD)
   - **Czas trwania**: 10-30 sekund (będzie się zapętlać)
   - **Rozmiar pliku**: < 5MB (dla szybkiego ładowania)
   - **Framerate**: 30fps
   - **Codec**: H.264

### Przykład kompresji video:
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -vf scale=1920:1080 -crf 28 hero-video.mp4
```

## 🚀 Uruchomienie

### Metoda 1: Bezpośrednio
Otwórz `index.html` w nowoczesnej przeglądarce

### Metoda 2: Lokalny Serwer (zalecane)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

## 📱 Sekcje Strony

### 1. **Hero Section** 🎬
- **Video background** z opacity 40%
- Overlay z gradientem
- **Animowany wave effect**
- Duży tytuł z gradientem
- Badge "Innowacyjne rozwiązania od 2000"
- Statystyki (600k+ ton, 25+ lat, 100+ projektów)
- Dwa przyciski CTA
- Scroll indicator

### 2. **Products Section** 📦

#### Szczegółowa Karta (RYŚ):
- Główne zdjęcie (500px wysokość)
- 3 miniaturki (aktywna + 2 placeholdery)
- Kategoria produktu
- Tytuł "Rozrywarka Worków RYŚ"
- Rating 5 gwiazdek
- Długi opis
- 5 kluczowych cech z ikonami
- Grid 4 specyfikacji (pojemność, wydajność, moc, certyfikat)
- 2 przyciski: "Zapytaj o Ofertę" + "Pobierz Kartę"

#### Kompaktowe Karty (6 produktów):
- LIS, PRZ-D, PRZ-2P, PRZ-B, SEP-B, INST-ODP
- Każda karta: zdjęcie, badge, opis, 3 specyfikacje
- 3D tilt effect
- Hover animations

### 3. **Technologies** ⚙️
- Linia gabarytowa i budowlana
- Linia komunalna z licznikiem 600k+ ton
- Duże zdjęcia technologii

### 4. **About** 📋
- Sekcja o firmie
- Profesjonalny opis

### 5. **Contact** 📞
- Pełne dane kontaktowe
- Formularz kontaktowy
- Dane rejestrowe

## 🎨 Kolory

```css
--primary: #10b981      /* Modern Green */
--primary-dark: #059669 /* Dark Green */
--primary-light: #34d399 /* Light Green */
--secondary: #14b8a6    /* Teal */
```

## 🔧 Technologie

- **HTML5** - Semantic markup
- **CSS3** - Glassmorphism, Backdrop Filter, Animations
- **JavaScript ES6+** - Intersection Observer, Parallax
- **Google Fonts** - Outfit
- **AVIF Images** - Next-gen format
- **MP4 Video** - Background video

## 💡 Kluczowe Zmiany

### ✅ Co zostało dodane:
1. **Video background** z opacity 40%
2. **Wave effect** - animowana fala SVG
3. **Szczegółowa karta produktu** z miejscem na wiele zdjęć
4. **Kompaktowe karty** dla pozostałych produktów
5. **Rozbudowane opisy** i specyfikacje
6. **Rating system** (gwiazdki)
7. **Badges** produktowe
8. **Thumbnails** dla dodatkowych zdjęć
9. **Profesjonalne przyciski** CTA

### ❌ Co zostało usunięte:
1. Floating cards (ikony: jakość, innowacja, technologia)
2. Hero visual section po prawej stronie

### 🔄 Co zostało zachowane:
1. Wszystkie dane kontaktowe
2. Statystyki (600k+ ton, 25+ lat, 100+ projektów)
3. Wszystkie produkty i opisy
4. Responsywność
5. Glassmorphism effects
6. 3D tilt na kartach

## 📞 Dane Kontaktowe

**TEST Krapkowice**  
Piotr Staszewski  
ul. Opolska 79  
47-300 Krapkowice  
Polska

- 📞 **Telefon**: +48 774 467 135
- ✉️ **Email**: biuro@testkrapkowice.pl
- 👥 **Facebook**: fb.com/TESTKrapkowice
- 🎥 **YouTube**: youtube.com/TESTKrapkowice

**Dane rejestrowe:**
- NIP: PL756-001-04-86
- REGON: 531282504
- BDO: 000047690

## 🌐 Kompatybilność

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- 📱 Pełna responsywność mobile/tablet/desktop

## ⚡ Performance

- **Video**: autoplay, loop, muted (dla autoplay)
- **AVIF Images**: optymalizacja rozmiaru
- **CSS Animations**: hardware accelerated
- **Lazy Loading**: intersection observer
- **Debounced Scroll**: performance optimization

## 🎓 Nowoczesne Techniki

1. **Video Background** - opacity 40% z overlay
2. **SVG Wave Animation** - płynna animacja fali
3. **CSS Grid Layouts** - responsive grids
4. **Glassmorphism** - backdrop-filter blur
5. **3D Transforms** - tilt effect
6. **Custom Properties** - CSS variables
7. **Intersection Observer** - scroll animations
8. **ES6+** - modern JavaScript

## 📝 Dodawanie Własnych Zdjęć

Możesz dodać więcej zdjęć produktów:

1. Dodaj zdjęcia do folderu `img/`
2. Edytuj `index.html` - zmień `src` w elementach `<img>`
3. Dla thumbnails - zamień `placeholder` klasy na normalne zdjęcia

Przykład:
```html
<div class="thumbnail">
    <img src="img/twoje-zdjecie.avif" alt="Widok 2">
</div>
```

## 🚀 Gotowe do użycia!

Strona jest w pełni funkcjonalna i profesjonalna. 

**Pamiętaj:**
1. Dodaj video do folderu `video/hero-video.mp4`
2. Możesz dodać więcej zdjęć produktów
3. Dostosuj opisy do swoich potrzeb
4. Zmień dane kontaktowe jeśli potrzeba

---

**Stworzone z ❤️ używając najnowszych technologii web 2025**

Design: Mega Profesjonalny, Corporate, Performance-focused  
Stack: HTML5 + CSS3 + Vanilla JavaScript + Video + Wave Effect  
Style: Glassmorphism + 3D Effects + Video Background + Wave Animation
