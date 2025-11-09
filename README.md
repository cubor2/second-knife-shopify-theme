# 🔪 Second Knife - Shopify Theme

> **Thème Shopify professionnel** basé sur Dawn avec typographie sur-mesure et outils de développement avancés.

## ✨ **Caractéristiques**

### 🎨 **Typographie Professionnelle**
- **Titres** : Lora Bold/Semi-Bold (caractère et élégance)
- **Textes** : IBM Plex Serif (lisibilité optimale)
- **Design System** complet avec 4 tailles standardisées

### 🛠️ **Outils de Développement**
- **Font Tester Pro** : Test de polices en temps réel
- **Système de sauvegarde** automatique (settings + templates)
- **Scripts PowerShell** pour backup/restore
- **Configuration Git** optimisée pour Cursor

### 📐 **Architecture**
- Basé sur **Shopify Dawn** (thème officiel)
- **Design System** centralisé dans `assets/sk-design-system.css.liquid`
- **Overrides CSS** ciblés sans casser Dawn
- **Workflow de développement** documenté

### 🆕 **Dernières Fonctionnalités** (Nov 2024)
- ✅ **Metafields personnalisés** : Caractéristiques uniques par produit
- ✅ **Titres multi-lignes** : Saut de ligne automatique avec séparateur `|`
- ✅ **Hiérarchie typographique** : Tailles différenciées 1ère/2ème partie
- ✅ **6 produits complets** : Descriptions SEO + métadonnées + metafields
- ✅ **Template produit** : Format standardisé pour nouveaux produits

📋 **[Voir le récapitulatif complet de la session du 9 Nov 2024](SESSION-09-NOV-2024-RECAP.md)**

---

## 🚀 **Installation**

### **Prérequis**
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- Node.js 18+
- Git

### **Setup Local**
```bash
# Cloner le repo
git clone https://github.com/[USERNAME]/second-knife-shopify-theme.git
cd second-knife-shopify-theme

# Lancer le serveur de développement
./start-dev.ps1

# Accéder au site
http://127.0.0.1:9292
```

### **Font Tester**
Ajouter `?font-test` à n'importe quelle URL pour activer l'outil de test de polices :
```
http://127.0.0.1:9292/?font-test
```

---

## 🎯 **Fonctionnalités**

### **💾 Système de Sauvegarde**
```bash
# Sauvegarder settings + templates
./backup-settings.ps1

# Restaurer une sauvegarde
./restore-settings.ps1
```

### **🎨 Design System**
- **4 tailles** de texte standardisées : xs, sm, base, lg
- **Variables CSS** cohérentes
- **Typographie** hiérarchisée H1-H4
- **Graisses** optimisées par usage

### **🔧 Outils**
- **Font Tester Pro** : Interface avancée de test typographique
- **Scripts Backup** : Sauvegarde complète settings + templates
- **Git Config** : Optimisé pour éviter les blocages Cursor
- **Documentation** : Guides complets inclus

---

## 📁 **Structure**

```
assets/
├── sk-design-system.css.liquid    # Design System principal
├── font-tester.js                 # Outil de test de polices
└── ...

backup-settings/                   # Sauvegardes automatiques
├── settings_backup_YYYYMMDD.json
└── templates_backup_YYYYMMDD/

config/
├── settings_data.json            # Configuration thème
└── settings_schema.json

templates/                        # Pages du site
sections/                         # Sections réutilisables
snippets/                         # Composants
```

---

## 🎨 **Typographie**

### **Polices Utilisées**
- **[Lora](https://fonts.google.com/specimen/Lora)** : Serif élégant pour titres
- **[IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif)** : Serif moderne pour textes

### **Hiérarchie**
```css
H1, H2, H3 → Lora Bold (700)
H4         → Lora Semi-Bold (600)  
Body, p    → IBM Plex Serif Regular (400)
```

---

## 🛠️ **Développement**

### **Workflow**
1. **Développement** local avec `start-dev.ps1`
2. **Test** typographie avec Font Tester Pro
3. **Sauvegarde** avec `backup-settings.ps1`
4. **Commit** et push sur GitHub

### **Guides Disponibles**
- `BACKUP-GUIDE.md` : Système de sauvegarde
- `DAWN-CSS-OVERRIDE-GUIDE.md` : Overrides CSS
- `GIT-TROUBLESHOOTING-GUIDE.md` : Dépannage Git
- `MEMO-THEMES-SECOND-KNIFE.md` : Documentation projet
- `GUIDE-METAFIELDS-PRODUITS.md` : Configuration metafields produits
- `TEMPLATE-DESCRIPTION-PRODUIT.md` : Template fiches produits

### **Sessions de Travail**
- `SESSION-09-NOV-2024-RECAP.md` : Finalisation styles + 2 produits + metafields
- `SESSION-08-NOV-2024-RECAP.md` : SEO, AISO, restauration, 4 produits

---

## 📞 **Support**

Pour toute question ou problème :
1. Consulter les guides dans le repo
2. Vérifier les [issues GitHub](../../issues)
3. Suivre les procédures de dépannage

---

## 📄 **License**

Ce projet est basé sur le thème Dawn de Shopify. Voir [LICENSE.md](LICENSE.md) pour plus de détails.

---

**🔪 Made with ❤️ for Second Knife**
