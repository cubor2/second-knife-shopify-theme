# Second Knife Theme

Un thème Shopify minimaliste inspiré de l'esthétique **Bestmade**, basé sur Dawn pour la performance et la stabilité.

## ✨ Caractéristiques

### Design Minimaliste
- **Bordures fines** sur tous les éléments (cartes, sections, boutons)
- **Centrage** systématique des contenus
- **Espaces blancs** généreux pour une respiration visuelle
- **Grilles ordonnées** dans l'esprit Bestmade
- **Animations subtiles** au hover et au scroll

### Typographie
- **Figtree** pour les titres (3 niveaux de hiérarchie)
- **Work Sans** pour les textes de contenu
- Échelle typographique cohérente et responsive

### Système de Variables CSS
Variables personnalisables depuis l'éditeur Shopify :
- Épaisseur des bordures (`--sk-border-width`)
- Couleur des bordures (`--sk-border-color`)
- Opacité des bordures (`--sk-border-opacity`)
- Espacement du contenu (`--sk-content-spacing`)

## 🎛️ Configuration

### Paramètres Second Knife
Accédez aux réglages via **Thème → Personnaliser → Paramètres du thème → Second Knife Design**

#### Design Minimaliste
- **Activer le design Second Knife** : Active/désactive le mode minimaliste
- **Épaisseur des bordures** : 0-4px (défaut: 1px)
- **Couleur des bordures** : Couleur principale des bordures (défaut: #121212)
- **Opacité des bordures** : 0-100% (défaut: 100%)
- **Espacement du contenu** : 12-48px (défaut: 24px)

#### Animations
- **Activer les animations minimales** : Active/désactive les micro-interactions
- **Intensité des animations** : Subtil / Modéré / Aucune

## 📁 Structure des Fichiers

### CSS Modulaire
```
assets/
├── sk-variables.css.liquid    # Variables CSS dynamiques
├── sk-typography.css.liquid   # Système typographique
└── sk-components.css          # Composants minimalistes
```

### Sections Spécifiques
```
sections/
└── sk-hero.liquid            # Hero Section minimaliste
```

### Snippets
```
snippets/
└── sk-product-card.liquid    # Carte produit minimaliste
```

### Templates
```
templates/
└── index-sk.json            # Page d'accueil Second Knife
```

## 🎨 Classes CSS Utilitaires

### Layout
- `.sk-container` : Conteneur principal
- `.sk-section` : Section avec padding
- `.sk-grid`, `.sk-grid--2`, `.sk-grid--3`, `.sk-grid--4` : Grilles responsive

### Composants
- `.sk-card` : Carte avec bordures
- `.sk-button`, `.sk-button--primary` : Boutons minimalistes
- `.sk-hero` : Section hero

### Typographie
- `.sk-display`, `.sk-title`, `.sk-subtitle` : Niveaux de titres
- `.sk-body`, `.sk-body-large`, `.sk-body-small` : Textes de contenu
- `.sk-caption` : Texte en petites capitales

### Utilitaires
- `.sk-center` : Centrage horizontal
- `.sk-border`, `.sk-border-top`, etc. : Bordures directionnelles
- `.sk-mt-*`, `.sk-mb-*` : Marges (xs, sm, md, lg, xl)

## 🚀 Utilisation

### Activation du Mode Minimaliste
1. Allez dans **Personnaliser → Paramètres du thème**
2. Trouvez la section **"Second Knife Design"**
3. Activez **"Enable Second Knife design"**
4. Ajustez les paramètres selon vos préférences

### Utilisation des Sections
1. **SK Hero** : Remplace l'image-banner par défaut
2. **Featured Collection** : Affiche automatiquement les bordures si SK mode activé
3. **Rich Text** : Style minimaliste appliqué automatiquement

### Personnalisation Avancée
- Modifiez les variables dans `sk-variables.css.liquid`
- Ajustez les composants dans `sk-components.css`
- Créez de nouvelles sections en utilisant les classes SK

## 🔧 Développement

### Prérequis
- Shopify CLI
- Connaissance de Liquid
- Base en CSS/Sass

### Installation
1. Clonez ce thème
2. Installez via Shopify CLI
3. Activez le mode SK dans les paramètres

### Workflow
1. Modifiez les fichiers CSS dans `assets/`
2. Testez dans l'éditeur Shopify
3. Synchronisez avec `shopify theme dev`

## 📱 Responsive

- **Mobile-first** : Conçu d'abord pour mobile
- **Breakpoints** : 750px (tablette), 990px (desktop)
- **Grilles adaptatives** : S'ajustent automatiquement
- **Espacement responsive** : Réduit sur mobile

## ⚡ Performance

- **CSS conditionnel** : Chargé uniquement si SK mode activé
- **Variables natives** : Pas de JavaScript inutile
- **Images optimisées** : Srcset et lazy loading
- **Core Web Vitals** : Optimisé pour la performance

## 🎯 Compatibilité

- **Shopify 2.0** : Compatible sections/blocs
- **Dawn 15.3.0+** : Basé sur la dernière version
- **Navigateurs modernes** : Chrome, Firefox, Safari, Edge
- **Mobile** : iOS Safari, Chrome Mobile

## 📝 Notes Techniques

### Variables CSS Liquid
Les fichiers `.css.liquid` permettent d'utiliser les variables Shopify dans le CSS :
```css
--sk-border-width: {{ settings.sk_border_width }}px;
```

### Héritage Dawn
Le thème étend Dawn sans le remplacer :
- Conservation de toutes les fonctionnalités Dawn
- Ajout du système minimaliste en overlay
- Compatibilité avec les mises à jour Dawn

### Système de Bordures
Toutes les bordures utilisent la variable globale :
```css
--sk-border: var(--sk-border-width) solid rgba(var(--sk-border-color), var(--sk-border-opacity));
```

## 🆘 Support

Pour tout problème ou question :
1. Vérifiez que le mode SK est activé
2. Consultez la documentation Shopify 2.0
3. Testez avec les paramètres par défaut

---

**Second Knife Theme v1.0.0** - Minimalisme et performance pour Shopify 