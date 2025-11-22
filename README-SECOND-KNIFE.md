# Second Knife Theme

Un thème Shopify minimaliste inspiré de l'esthétique **Bestmade**, basé sur Dawn pour la performance et la stabilité.

---

## 🚨 **AVANT TOUTE CHOSE : DÉMARRAGE SERVEUR LOCAL**

**⚠️ SI TU VEUX DÉMARRER LE SERVEUR LOCAL, LIS D'ABORD CE FICHIER :**

### 👉 **[🚀-DEMARRAGE-SERVEUR-LOCAL.md](./🚀-DEMARRAGE-SERVEUR-LOCAL.md)** 👈

**Ce fichier contient la SEULE procédure qui fonctionne à 100%.**
**On a eu ce bug 20 fois. La solution est là. Ne cherche pas ailleurs.**

**3 étapes simples :**
1. `cd Theme/dawn`
2. `shopify theme pull --theme=183719133448` (is_background: false)
3. `shopify theme dev --theme=183719133448` (is_background: true)

**Si tu ne lis pas ce fichier, tu vas galérer. C'est une promesse. 😉**

---

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

---

## ⚠️ **PROBLÈME FRÉQUENT : Perte des Modifications Admin**

### Le Problème
Quand tu modifies du contenu dans Shopify Admin (textes hero, images, sections), puis que tu relances le serveur CLI, **tes modifications disparaissent** et sont remplacées par les valeurs par défaut locales.

**Pourquoi ?**
- Les contenus admin sont stockés dans `templates/index.json` et `config/settings_data.json` sur Shopify
- Quand tu lances `shopify theme dev`, il synchronise la version **locale** (sur ton PC) vers Shopify
- Si la version locale est ancienne → elle écrase tes modifications récentes

### ✅ LA SOLUTION (2 méthodes)

#### Méthode 1 : TOUJOURS démarrer avec --sync (RECOMMANDÉ)
```powershell
# Cette commande télécharge AVANT de synchroniser
.\start-dev.ps1 --sync
```

**Ce que fait `--sync` :**
1. Télécharge les settings et templates du thème LIVE
2. Met à jour les fichiers locaux
3. PUIS démarre le serveur
4. → Tes modifications admin sont préservées ✅

#### Méthode 2 : Backup AVANT chaque session
```powershell
# 1. Sauvegarder les settings du thème live
.\backup-settings.ps1

# 2. Démarrer normalement
.\start-dev.ps1
```

**Avantage :** Tu as toujours une copie de sauvegarde dans `backup-settings/`

### 🔄 Workflow Correct (OBLIGATOIRE)

```powershell
# DÉBUT DE SESSION
.\start-dev.ps1 --sync    # ← Force le téléchargement des settings live

# Faire tes modifs de code local
# Le serveur synchronise automatiquement

# Faire tes modifs admin (si besoin)
# Via Shopify Customize sur le thème LIVE

# FIN DE SESSION
# Tout est déjà synchronisé, pas besoin de push
```

### ❌ Workflow INCORRECT (À ÉVITER)

```powershell
# ❌ Démarrer sans --sync
.\start-dev.ps1           # ← Va écraser tes modifs admin !

# ❌ Modifier templates/index.json manuellement
# (Sauf si tu veux des valeurs par défaut permanentes)
```

### 💡 Modifier les Valeurs par Défaut (Avancé)

Si tu veux que certains contenus soient TOUJOURS présents (même après relance), modifie directement les fichiers locaux :

**Fichier : `Theme/dawn/templates/index.json`**
```json
{
  "sections": {
    "sk_hero": {
      "blocks": {
        "heading": {
          "settings": {
            "heading": "TON TEXTE ICI"  ← Remplace "Crafted with Purpose"
          }
        }
      },
      "settings": {
        "image": "HERO.jpg",           ← Ajoute l'image par défaut
        "gradient_opacity": 80         ← Configure les settings
      }
    }
  }
}
```

**Puis push vers le thème :**
```powershell
shopify theme push --store=second-knife.myshopify.com --theme=183719133448
```

### 🆘 Si tu as DÉJÀ perdu des modifications

```powershell
# Option A : Restaurer depuis backup (si tu en as fait)
.\restore-settings.ps1

# Option B : Refaire les modifs manuellement dans Shopify Admin
# Puis TOUJOURS utiliser --sync au prochain démarrage
```

---

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

### Badge "Vendu !" pour Produits
- **Affichage élégant** : Badge minimaliste au coin supérieur droit des images produits
- **Personnalisation** : Affiche le nom de l'acheteur ("Adopté par [Prénom]")
- **Gestion via Metafields** : Configuration simple dans l'admin Shopify
- **Valorisation** : Garde les produits vendus visibles dans le catalogue
- **Documentation complète** : Voir `GUIDE-METAFIELDS-PRODUITS-VENDUS.md`

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

## 🎯 TEMPLATE DE HANDOFF POUR NOUVEAUX CHATS

### ⚡ SETUP IMMÉDIAT (Copier/Coller)

```
CONTEXTE SECOND KNIFE THEME - SESSION CONTINUE

📍 PROJET : Second Knife Shopify Theme (Couteaux artisanaux)
🎨 DESIGN SYSTEM : SK Ultra-propre minimaliste et moderne
📦 STATUS : Production-ready (commit 4b35e63)
🔧 TECH STACK : Shopify Dawn + SK Design System

🏗️ ARCHITECTURE ACTUELLE :
- CSS consolidé : assets/sk-design-system.css.liquid (fichier unique)
- Système d'encadrement : .sk-main-container + bordures latérales
- Titres standardisés : .sk-title-block + .sk-title (espacement pixel-perfect)
- Variables d'espacement : --sk-space-1 à --sk-space-5 (multiples de 6px/24px)
- Typographie : Lora (titres) + IBM Plex Serif (texte)
- Bordures fines : --sk-border: 1px solid rgba(18,18,18,1)

✅ PAGES FINALISÉES :
- Homepage : Grille produits 3x3 portrait, section "Produits vedettes"
- Collection (/collections/all) : Design unifié avec homepage
- À propos (/pages/a-propos) : Système de titres standardisé
- Design System (/pages/design-system) : Documentation complète (291 lignes)

🎨 ESTHÉTIQUE CIBLE :
- Minimalisme radical avec bordures fines encadrant tout
- Espacement parfait et cohérence absolue entre pages
- Images portrait pour couteaux (420px height desktop, 360px mobile)
- Grilles touchant les bordures (pas de padding externe)
- Titres parfaitement alignés sur toutes les pages

📋 STRUCTURE HTML STANDARD :
<div class="sk-main-container">
  <div class="sk-page-block">
    <div class="sk-title-block">
      <h1 class="sk-title">Titre</h1>
    </div>
    <div class="sk-content-block">
      <!-- Contenu -->
    </div>
  </div>
</div>

🚨 RÈGLES CRITIQUES :
- H1 pour pages, H2 pour sections homepage
- Toujours utiliser les variables --sk-space-*
- .sk-title force margin/padding: 0 !important
- Images produits en object-fit: cover
- Responsive automatique (mobile ≤749px, desktop ≥750px)

💾 SAUVEGARDES :
- Git : commit 4b35e63 "Complete SK Design System Implementation"
- Local : settings_backup_2025-06-26_22-31-55.json
- GitHub : second-knife-shopify-theme.git

🎯 PROCHAINES ÉTAPES POSSIBLES :
- Pages supplémentaires (Contact étendu, FAQ, Politique retour)
- Page produit individuelle
- Optimisations mobile
- Animations et micro-interactions
```

### 📋 RÈGLES SENIOR ENGINEER (À INCLURE)

```
RÈGLES DE DÉVELOPPEMENT :

1. Clarifier Scope First
- Mapper l'approche avant tout code
- Confirmer l'interprétation de l'objectif
- Plan clair des fonctions/modules touchés
- Pas d'implémentation avant validation du plan

2. Localiser Point d'Insertion Exact
- Identifier fichier(s) et ligne(s) précis
- Jamais d'éditions massives sur fichiers non-liés
- Justifier chaque inclusion de fichier
- Pas de nouvelles abstractions sauf demande explicite

3. Changements Minimaux et Contenus
- Code strictement requis pour la tâche
- Éviter logging, commentaires, tests, TODOs sauf nécessaire
- Pas de changements spéculatifs
- Logique isolée pour éviter régressions

4. Double Check Everything
- Vérifier exactitude, scope, effets de bord
- Alignement avec patterns existants
- Vérifier impacts downstream

5. Livraison Claire
- Résumer changements et raisons
- Lister chaque fichier modifié
- Signaler assumptions/risques
```

### 🎨 DESIGN SYSTEM QUICK REF

```
VARIABLES CSS ESSENTIELLES :
--sk-space-1: 6px     (base × 0.25)
--sk-space-2: 12px    (base × 0.5) 
--sk-space-3: 24px    (base × 1) ← BASE
--sk-space-4: 36px    (base × 1.5) ← TITRES
--sk-space-5: 48px    (base × 2)
--sk-border: 1px solid rgba(18,18,18,1)

TYPOGRAPHIE :
H1: 4rem (40px) - Titres de pages
H2: 4rem (40px) - Titres de sections  
H3: 2.5rem (25px) - Sous-titres
H4: 2rem (20px) - Intertitres
Body: 1.4rem (14px) - Texte standard

CLASSES CRITIQUES :
.sk-main-container - Wrapper avec bordures latérales
.sk-page-block - Bloc encadré pour page
.sk-title-block - Espacement titre (48px top/bottom)
.sk-title - Reset titre (margin/padding: 0)
.sk-content-block - Zone contenu encadrée
.sk-title-block--with-border - Bordure sous titre
```

### 🚀 INDICATEURS DE REFRESH NEEDED

```
SIGNES QU'IL FAUT NOUVEAU CHAT :
❌ Réponses moins précises
❌ Oubli du contexte récent  
❌ Solutions moins élégantes
❌ Temps de réponse plus longs
❌ Répétition d'erreurs corrigées
❌ Perte du "momentum" technique

TIMING OPTIMAL : 50-70 échanges ou dès baisse qualité
```

### 💡 BONNES PRATIQUES HANDOFF

```
POUR MAINTENIR LA QUALITÉ :
✅ Copier ce template complet au début du nouveau chat
✅ Mentionner le commit GitHub (4b35e63)
✅ Préciser l'objectif immédiat
✅ Inclure les règles senior engineer
✅ Donner feedback immédiat si dérive
✅ Maintenir momentum avec instructions claires
```

---

## 📁 Structure du Projet

```
dawn/
├── assets/
│   └── sk-design-system.css.liquid    # CSS consolidé (FICHIER UNIQUE)
├── layout/
│   └── theme.liquid                    # Layout principal avec SK system
├── sections/
│   ├── featured-collection.liquid     # Homepage grille 3x3
│   ├── main-collection-banner.liquid  # Titre collection standardisé
│   ├── main-collection-product-grid.liquid # Grille collection
│   └── main-page.liquid              # Pages standards
├── templates/
│   └── page.design-system.liquid     # Documentation complète
└── backup-settings/                   # Sauvegardes automatiques
```

## 🎨 Design System Features

- **Bordures fines** encadrant tout le contenu
- **Espacement standardisé** avec variables CSS
- **Titres pixel-perfect** alignés sur toutes les pages
- **Grilles produits** optimisées pour couteaux (format portrait)
- **Responsive design** mobile-first
- **Typographie cohérente** Lora + IBM Plex Serif

## 🚀 Quick Start

```bash
# Démarrer le serveur de développement
.\start-dev.ps1

# Sauvegarder settings + templates
.\backup-settings.ps1

# Commit et push vers GitHub
git add .
git commit -m "Description des changements"
git push
```

## 📝 Pages Documentées

- **Homepage** : Section "Produits vedettes" avec grille 3x3
- **Collection** : Page catalogue avec filtres et grille unifiée  
- **À propos** : Page standard avec système de titres
- **Design System** : Documentation complète du système SK

## 🔧 Maintenance

- **CSS** : Un seul fichier `sk-design-system.css.liquid`
- **Sauvegardes** : Automatiques dans `backup-settings/`
- **Git** : Commits réguliers avec messages descriptifs
- **Documentation** : Page `/pages/design-system` toujours à jour 