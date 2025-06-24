# GUIDE DÉFINITIF : Comment Override les Tailles de Texte de Dawn

## 🚨 PROBLÈME PRINCIPAL
Dawn utilise `body_scale: 100` dans ses settings, ce qui fait que **1rem = 10px** au lieu des 16px standards.

## 📐 CONVERSION CRITIQUE
Avec `body_scale: 100` dans Dawn :
- `1rem` = **10px** (pas 16px !)
- `1.4rem` = **14px** ✅
- `0.875rem` = **8.75px** ❌ (erreur classique)

## 🎯 OBJECTIF SECOND KNIFE
Standardiser tous les textes à **14px** :
- Navigation header
- Rich-text content
- Newsletter text

## ✅ SOLUTION QUI MARCHE

### 1. Variables CSS Correctes
```css
:root {
  --sk-text-xs: 1rem;      /* 10px */
  --sk-text-sm: 1.2rem;    /* 12px */
  --sk-text-base: 1.4rem;  /* 14px - NOTRE STANDARD */
  --sk-text-lg: 1.8rem;    /* 18px */
}
```

### 2. Override Propre (Première Ligne de Défense)
```css
/* Textes de base (rich-text, newsletter) - 14px */
.rich-text__text.rte,
.rich-text__text.rte p,
.newsletter__subheading.rte,
.newsletter__subheading.rte p {
  font-size: 1.4rem; /* 14px avec body_scale=100 */
}

/* Textes du menu - 14px */
.header__menu-item.list-menu__item,
.header__menu-item span {
  font-size: 1.4rem; /* 14px avec body_scale=100 */
}
```

### 3. Solution Brutale (Dernière Ligne de Défense)
Si l'override propre ne marche pas, utiliser l'artillerie lourde :

```css
/* SOLUTION BRUTALE FINALE - ÉCRASE TOUT DAWN SANS PITIÉ */
html body .shopify-section .rich-text .rich-text__text p,
html body .shopify-section .rich-text .rte p,
html body .shopify-section .rich-text p,
html body .shopify-section p,
html body .page-width p,
html body .content-container p,
html body .rte p,
html body p {
  font-size: 14px !important;
  line-height: 1.6 !important;
  font-family: 'Work Sans', system-ui, sans-serif !important;
}

/* MENU NAVIGATION - ARME NUCLÉAIRE TOTALE */
html body .shopify-section .header .header__menu-item,
html body .shopify-section .header .header__menu-item a,
html body .shopify-section .header .list-menu__item,
html body .shopify-section .header .list-menu__item a,
html body .shopify-section .header nav a,
html body .header .header__menu-item,
html body .header .list-menu__item,
html body .header a {
  font-size: 14px !important;
  line-height: 1.6 !important;
  font-family: 'Work Sans', system-ui, sans-serif !important;
}
```

## 🐛 ERREURS À ÉVITER

### ❌ Erreur #1 : Confusion rem/px
```css
/* FAUX - Donne 8.75px avec body_scale=100 */
.text { font-size: 0.875rem; }

/* CORRECT - Donne 14px avec body_scale=100 */
.text { font-size: 1.4rem; }
```

### ❌ Erreur #2 : Mélanger les Approches
Ne pas mélanger `1.4rem` et `0.875rem` dans le même fichier.

### ❌ Erreur #3 : Oublier body_scale
Dawn n'utilise PAS les valeurs rem standards. Toujours calculer avec `body_scale=100`.

## 🔧 MÉTHODE DE DEBUG

### 1. Test Couleur
Pour vérifier si le CSS se charge :
```css
.test-element {
  background-color: red !important; /* Visible = CSS chargé */
}
```

### 2. Inspection DevTools
- F12 → Computed → font-size
- Vérifier quelle règle CSS gagne
- Dawn charge 50+ fichiers CSS avant le nôtre

### 3. Escalade Progressive
1. **Essayer l'approche propre** avec `1.4rem`
2. **Si ça marche pas**, passer à l'artillerie lourde avec `!important`
3. **En dernier recours**, utiliser les sélecteurs nucléaires `html body .shopify-section`

## 📝 CHECKLIST AVANT MODIFICATION

- [ ] Vérifier que `body_scale: 100` est actif dans settings
- [ ] Calculer : taille voulue ÷ 10 = valeur rem
- [ ] Tester d'abord l'approche propre
- [ ] Garder la solution brutale en backup
- [ ] Vérifier dans DevTools que ça marche

## 🎯 RÉSULTAT FINAL
- **Navigation** : 14px ✅
- **Rich-text** : 14px ✅  
- **Newsletter** : 14px ✅
- **Cohérence** : Parfaite ✅

## 💡 PHILOSOPHIE DAWN
Dawn est un **thème complet**, pas un framework. Il faut le **dominer** avec des overrides agressifs, pas essayer de le remplacer proprement.

---
*Guide créé après 2h de galère à cause de la confusion 0.875rem vs 1.4rem* 😅 