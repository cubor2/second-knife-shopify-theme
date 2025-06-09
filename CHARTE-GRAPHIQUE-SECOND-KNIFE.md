# 📐 CHARTE GRAPHIQUE SECOND KNIFE

## Philosophy : "Less but Better"

Inspiré de l'esthétique **Bestmade**, Second Knife applique un système de design **ultra cohérent** avec **peu de règles, toujours les mêmes**.

---

## 🎯 RÈGLES FONDAMENTALES

### 1. **ESPACEMENT - Multiples de 8**
**Base Unit :** `24px` (paramétrable)
```css
--sk-space-xs:    6px   (base × 0.25)
--sk-space-sm:   12px   (base × 0.5)  
--sk-space-md:   24px   (base × 1)    ← BASE
--sk-space-lg:   36px   (base × 1.5)
--sk-space-xl:   48px   (base × 2)
--sk-space-xxl:  72px   (base × 3)
--sk-space-xxxl: 96px   (base × 4)
```

### 2. **BORDURES - Toujours identiques**
```css
--sk-border:        1px solid #121212  ← STANDARD
--sk-border-light:  1px solid #121212 (30% opacity)
--sk-border-subtle: 1px solid #121212 (10% opacity)
```

### 3. **GRILLES - Espacement uniforme**
```css
--sk-grid-gap: 24px  (= base unit)
```

---

## 📏 SYSTÈME D'ESPACEMENT APPLIQUÉ

### **Containers & Sections**
```css
.sk-container     → padding: 24px (desktop) / 12px (mobile)
.sk-section       → padding: 48px vertical
.sk-section--lg   → padding: 96px vertical
```

### **Cards & Components**
```css
.sk-card__content → padding: 24px (desktop) / 12px (mobile)
.sk-grid          → gap: 24px (desktop) / 12px (mobile)
```

### **Typography Spacing**
```css
.sk-card__title    → margin-bottom: 12px
.sk-card__subtitle → margin-bottom: 6px
```

---

## 🎨 PALETTE COULEURS

### **Couleurs Principales**
```css
--sk-color-white: #ffffff   ← Fond principal
--sk-color-black: #121212   ← Texte & bordures
```

### **Niveaux de Gris** (Bestmade-inspired)
```css
--sk-color-gray-50:  #fafafa  ← Fond très léger
--sk-color-gray-100: #f4f4f5  ← Fond léger
--sk-color-gray-600: #52525b  ← Texte secondaire
--sk-color-gray-700: #3f3f46  ← Texte principal
```

---

## ✍️ TYPOGRAPHIE

### **Figtree (Titres) - 3 Niveaux**
```css
h1 / .sk-display:  800 weight, 48px (responsive)
h2 / .sk-title:    700 weight, 30px (responsive) 
h3 / .sk-subtitle: 600 weight, 24px (responsive)
```

### **Work Sans (Textes)**
```css
.sk-body:       400 weight, 16px
.sk-body-large: 400 weight, 18px
.sk-body-small: 400 weight, 14px
.sk-caption:    500 weight, 12px, UPPERCASE
```

---

## 🏗️ ARCHITECTURE LAYOUT

### **Responsive Breakpoints**
```css
Mobile:  < 750px
Tablet:  750px - 989px  
Desktop: ≥ 990px
```

### **Container System**
```css
.sk-container:  max-width: 1200px, centré
.sk-section:    largeur 100%, padding vertical uniforme
.sk-grid:       grille adaptive, gap cohérent
```

---

## 🎭 ANIMATIONS

### **Timing Uniforme**
```css
--sk-transition-fast:   0.15s ease  ← Hover léger
--sk-transition-normal: 0.2s ease   ← Standard
--sk-transition-slow:   0.3s ease   ← Effets spéciaux
```

### **États Hover**
```css
.sk-card:hover    → translateY(-2px)
.sk-button:hover  → inversion couleurs
Images:hover      → scale(1.02) + transition
```

---

## 📱 RESPONSIVE RULES

### **Espacement Mobile** (< 750px)
```css
Container padding:  24px → 12px
Section padding:    48px → 36px
Grid gap:          24px → 12px
Card padding:      24px → 12px
```

### **Grilles Responsive**
```css
Desktop: 3-4 colonnes (produits, collections)
Tablet:  2-3 colonnes
Mobile:  1-2 colonnes max
```

---

## 🎯 COMPOSANTS STANDARDISÉS

### **SK Card (style Bestmade)**
```css
Structure:
├── .sk-card                → border + hover
├── .sk-card__media         → image + border-bottom  
└── .sk-card__content       → padding uniforme
    ├── .sk-card__title     → centré, margin-bottom: 12px
    ├── .sk-card__subtitle  → centré, margin-bottom: 6px
    └── .sk-card__text      → centré
```

### **SK Button (minimaliste)**
```css
.sk-button:
├── padding: 12px 24px
├── border: var(--sk-border)  
├── background: transparent
├── hover: inversion couleurs
└── transition: 0.2s ease
```

### **SK Hero (section principale)**
```css
.sk-hero:
├── padding: 96px vertical (desktop)
├── padding: 48px vertical (mobile)  
├── text-align: center
└── border-bottom: var(--sk-border)
```

---

## 🔧 UTILISATION PRATIQUE

### **Classes Utilitaires Espacement**
```css
.sk-mt-xs   → margin-top: 6px
.sk-mt-sm   → margin-top: 12px  
.sk-mt-md   → margin-top: 24px
.sk-mt-lg   → margin-top: 36px
.sk-mt-xl   → margin-top: 48px

/* Même logique pour mb-, ml-, mr-, p-, pt-, pb-, etc. */
```

### **Classes Layout**
```css
.sk-center      → text-align: center
.sk-border      → border: var(--sk-border)
.sk-border-top  → border-top: var(--sk-border)
```

---

## ✅ CHECKLIST COHÉRENCE

Avant chaque composant, vérifier :

- [ ] **Espacement** : Multiple de base unit (6, 12, 24, 36, 48, 72, 96px)
- [ ] **Bordures** : Utilise `var(--sk-border)` 
- [ ] **Couleurs** : Palette SK uniquement
- [ ] **Typographie** : Classes SK uniquement  
- [ ] **Centrage** : Tous les contenus centrés
- [ ] **Responsive** : Espacement réduit sur mobile
- [ ] **Transitions** : Variables SK de timing

---

## 🎨 INSPIRATION BESTMADE

✅ **Bordures fines** sur tous les éléments  
✅ **Centrage systématique** des contenus  
✅ **Espaces blancs** généreux et cohérents  
✅ **Grilles ordonnées** et alignées  
✅ **Aucune ombre** ni effet superflu  
✅ **Palette minimale** noir/blanc/gris  
✅ **Typographie claire** et hiérarchisée  

---

**Second Knife Design System v1.0** - *Cohérence, Simplicité, Excellence* 