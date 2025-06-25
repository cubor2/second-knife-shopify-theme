# Second Knife Theme

Un thème Shopify minimaliste inspiré de l'esthétique **Bestmade**, basé sur Dawn pour la performance et la stabilité.

## 🎯 **INFORMATIONS THÈMES - IMPORTANT**

### Configuration des Thèmes Shopify
```
🟢 "Second Knife LIVE"     → Thème en production (ID: #183719133448)
🔧 "Development (Gaming)"  → Thème de développement (ID: #184417681672)
```

### ⚠️ **RÈGLES IMPORTANTES** 
- **TOUJOURS** travailler sur le thème **"Second Knife LIVE"** (#183719133448)
- **JAMAIS** configurer les textes/sections sur le thème de développement
- Le thème LIVE est celui que voient vos clients ET celui sur lequel vous devez configurer vos contenus

## 🚀 Démarrage Rapide

### Lancer le serveur de développement sur le THÈME LIVE
```powershell
# 1. Ouvrir PowerShell dans le dossier du projet
cd "D:\PROJETS\Cloud\Second Knife\Theme\dawn"

# 2. Se connecter au THÈME LIVE (OBLIGATOIRE)
shopify theme dev --store=second-knife.myshopify.com --theme=183719133448
```

### 🔄 Scripts Automatisés (RECOMMANDÉS)
```powershell
# Démarrage avec synchronisation des paramètres
.\start-dev.ps1 --sync

# Démarrage normal
.\start-dev.ps1

# Sauvegarde rapide des paramètres
.\quick-save.ps1

# Restauration des paramètres
.\restore-settings.ps1
```

> ⚠️ **Éviter les erreurs** :
> - **TOUJOURS** utiliser l'ID du thème LIVE : `--theme=183719133448`
> - **TOUJOURS** utiliser `--store=second-knife.myshopify.com`
> - Ne pas utiliser `shopify theme dev` seul (erreur `_shopify_essential`)
> - Si erreur d'auth, faire `shopify auth logout` puis relancer

### URLs d'accès
- **Local** : http://127.0.0.1:9292 (pas localhost)
- **Prévisualisation** : Affichée dans le terminal au démarrage

### En cas de problème
```powershell
# Réinitialiser l'auth si nécessaire
shopify auth logout

# Puis relancer sur le THÈME LIVE
shopify theme dev --store=second-knife.myshopify.com --theme=183719133448
```

### 🎛️ Configuration des Contenus
1. **Ouvrir l'admin Shopify** : https://admin.shopify.com/store/second-knife/themes
2. **Sélectionner "Second Knife LIVE"** (celui avec le badge vert "Current theme")
3. **Cliquer "Customize"** pour configurer textes et sections
4. **IMPORTANT** : Ne jamais configurer sur un autre thème !

---

## 🔄 **WORKFLOW CORRECT - À SUIVRE**

### 1. Démarrage d'une session
```powershell
# Connecter au thème LIVE avec sauvegarde
.\start-dev.ps1 --sync
```

### 2. Configuration des contenus
- Aller dans l'admin Shopify → "Second Knife LIVE" → Customize
- Configurer vos textes, sections, images, etc.
- **Vérifier** que vous êtes bien sur le thème LIVE

### 3. Modifications du code
- Modifier les fichiers `.liquid`, `.css`, `.js` localement
- Les changements s'appliquent automatiquement (hot reload)

### 4. Sauvegarde
```powershell
# Sauvegarder votre configuration actuelle
.\quick-save.ps1
```

### 5. Push en production
```powershell
# Pusher vers le thème LIVE
shopify theme push --store=second-knife.myshopify.com --theme=183719133448
```

---

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

### Commandes de Développement

#### 🚀 Démarrage rapide (RECOMMANDÉ)
```powershell
# Option 1: Script automatique
.\start-dev.ps1

# Option 2: Commande manuelle
shopify theme dev --store=second-knife.myshopify.com
```

#### Accès aux URLs
- **Local** : http://127.0.0.1:9292
- **Prévisualisation** : Affichée dans le terminal au démarrage

#### Autres commandes utiles
```powershell
# Informations du thème
shopify theme info --store=second-knife.myshopify.com

# Pousser les modifications
shopify theme push --store=second-knife.myshopify.com

# Tirer les modifications
shopify theme pull --store=second-knife.myshopify.com

# Arrêter le serveur (Ctrl+C dans le terminal)
```

### Workflow
1. Modifiez les fichiers CSS dans `assets/`
2. Testez dans l'éditeur Shopify
3. Synchronisez avec `shopify theme dev --store=second-knife.myshopify.com`

### 🔄 Synchronisation des données

#### Modifications dans l'admin Shopify (logo, textes, etc.)
```powershell
# 1. Récupérer les changements de l'admin vers le local
shopify theme pull --store=second-knife.myshopify.com

# 2. Relancer le serveur pour voir les changements
shopify theme dev --store=second-knife.myshopify.com
```

#### Modifications du code local (CSS, Liquid, etc.)
```powershell
# 1. Le serveur local se met à jour automatiquement (hot reload)
# 2. Pousser vers l'admin si nécessaire
shopify theme push --store=second-knife.myshopify.com
```

#### Règles d'or
- **Admin → Local** : `shopify theme pull` puis relancer serveur
- **Local → Admin** : Hot reload automatique, `shopify theme push` si besoin
- **Toujours** spécifier `--store=second-knife.myshopify.com`

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