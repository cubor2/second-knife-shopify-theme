# 📝 Guide : Éditer les Tabs Produit (Matériaux, Livraison, Dimensions, Entretien)

## ✅ C'EST FAIT : Traduction en Français

Les titres des tabs ont été traduits :
- ✅ **Materials** → **Matériaux**
- ✅ **Shipping & Returns** → **Livraison & Retours**
- ✅ **Dimensions** → **Dimensions**
- ✅ **Care Instructions** → **Entretien**

Les contenus par défaut ont été vidés pour que tu puisses les remplir proprement par produit.

---

## 📍 Où Éditer Ces Champs ?

### ⚠️ IMPORTANT : Ces tabs sont éditables dans l'Admin Shopify !

**Il y a 2 façons de les éditer :**

---

## MÉTHODE 1 : Édition Globale (Template par Défaut)

**Utilise cette méthode pour :**
- Définir le contenu par défaut de TOUS les produits
- Configurer les tabs une seule fois
- Gagner du temps si tous tes produits partagent le même contenu

### Étapes :

1. **Aller dans Shopify Admin**
   - `Online Store` > `Themes`
   - Cliquer **"Customize"** sur ton thème LIVE

2. **Sélectionner un Produit**
   - En haut à gauche, dans le menu déroulant
   - Sélectionner **"Products"** > **"Default product"**
   - OU sélectionner directement ton produit Deba

3. **Trouver les Tabs dans la Sidebar**
   - Dans la colonne de gauche (sidebar)
   - Scroll jusqu'à voir les sections dépliables :
     - **Matériaux** 🧳
     - **Livraison & Retours** ↩️
     - **Dimensions** 📏
     - **Entretien** ❤️

4. **Éditer le Contenu de Chaque Tab**
   - Cliquer sur le nom du tab (ex: "Matériaux")
   - Remplir le champ **"Content"** avec ton texte
   - Tu peux utiliser du HTML (comme dans ta description)
   - Choisir/changer l'icône si besoin

5. **Sauvegarder**
   - Cliquer **"Save"** en haut à droite

**→ Le contenu sera appliqué à TOUS les produits par défaut**

---

## MÉTHODE 2 : Édition par Produit (Spécifique)

**Utilise cette méthode pour :**
- Personnaliser le contenu pour UN produit spécifique
- Avoir des informations différentes selon les couteaux
- Override le contenu par défaut

### Étapes :

1. **Aller dans Shopify Admin**
   - `Online Store` > `Themes`
   - Cliquer **"Customize"** sur ton thème LIVE

2. **Sélectionner le Produit Spécifique**
   - En haut à gauche, menu déroulant
   - Sélectionner **"Products"** > **Ton produit (ex: Deba)**

3. **Éditer les Tabs pour CE Produit**
   - Même processus que Méthode 1
   - Les modifications ne s'appliquent QU'À ce produit

4. **Sauvegarder**
   - Cliquer **"Save"** en haut à droite

**→ Le contenu remplace le contenu par défaut pour CE produit uniquement**

---

## 🎯 Contenu Suggéré par Tab (Pour Ton Deba)

### **Tab "Matériaux"**

```
Acier : Construction sandwich (hagane) - acier haut carbone
Manche : Bois patiné (origine, restauré et poncé)
```

---

### **Tab "Livraison & Retours"**

```
Livraison France et Europe : 3-5 jours ouvrés
Retour accepté sous 14 jours si non utilisé
Frais de retour à la charge du client
```

---

### **Tab "Dimensions"**

```
Lame : 15.5 cm
Longueur totale : 30 cm
Poids : ~200g
```

---

### **Tab "Entretien"**

```
Nettoyage : Rincer à l'eau tiède, sécher immédiatement avec un chiffon doux
Affûtage : Pierre à eau grain 1000-3000, angle 15-20°
Stockage : Éviter l'humidité. Si stockage prolongé, appliquer huile minérale sur la lame
Éviter : Lave-vaisselle, planches en verre, découpe sur surfaces dures
```

---

## 💡 Conseils Pro

### 1. **Contenu HTML Autorisé**

Tu peux utiliser du HTML simple dans ces tabs :

```html
<p>Texte normal</p>
<strong>Texte en gras</strong>
<ul>
  <li>Liste à puces</li>
  <li>Autre élément</li>
</ul>
```

### 2. **Utiliser des Pages Shopify (Optionnel)**

Au lieu de remplir le champ "Content", tu peux créer une page Shopify :
- Créer `Pages` > `Add page` (ex: "Politique Retours")
- Dans le tab, champ **"Page"** : Sélectionner ta page
- **Avantage :** Contenu centralisé pour tous les produits

### 3. **Ajouter/Supprimer des Tabs**

**Pour ajouter un nouveau tab :**
1. Dans le Theme Editor (Customize)
2. Cliquer **"Add block"** dans la sidebar
3. Choisir **"Collapsible tab"**
4. Configurer titre, icône, contenu

**Pour supprimer un tab :**
1. Cliquer sur le tab dans la sidebar
2. Cliquer l'icône **🗑️ (Poubelle)** en haut du panneau
3. Confirmer la suppression

---

## 🎨 Icônes Disponibles

Voici les icônes que tu peux utiliser (pertinentes pour couteaux) :

| Icône | Nom | Usage Suggéré |
|-------|-----|---------------|
| 🧳 | `leather` | Matériaux |
| ↩️ | `return` | Livraison & Retours |
| 📏 | `ruler` | Dimensions |
| ❤️ | `heart` | Entretien |
| ✅ | `check_mark` | Garantie |
| 🔥 | `fire` | Forge/Artisanat |
| 🌿 | `leaf` | Écologique/Naturel |
| 🔒 | `lock` | Sécurité |
| ⚡ | `lightning_bolt` | Performance |
| 📍 | `map_pin` | Origine/Provenance |

**Pour changer une icône :**
1. Cliquer sur le tab dans Theme Editor
2. Champ **"Icon"** : Sélectionner dans la liste déroulante

---

## 🚨 ERREURS FRÉQUENTES

### ❌ "Je ne vois pas les tabs dans l'admin"

**Solution :**
- Tu es probablement dans `Products` > `Ton produit` (admin classique)
- Tu dois aller dans `Online Store` > `Themes` > **"Customize"**
- PUIS sélectionner ton produit dans le menu déroulant du Theme Editor

### ❌ "Les modifications ne s'appliquent pas"

**Solution :**
1. Vérifier que tu as cliqué **"Save"** en haut à droite
2. Actualiser la page produit en front-end (Ctrl+F5)
3. Si tu utilises le serveur CLI local, les modifications admin peuvent être écrasées
   - Utiliser `.\start-dev.ps1 --sync` au prochain démarrage

### ❌ "Le contenu est coupé/mal formaté"

**Solution :**
- Éviter les doubles guillemets `"` dans le contenu HTML
- Utiliser des guillemets simples `'` ou des entités HTML `&quot;`
- Tester le contenu sur un produit d'abord

---

## ✅ CHECKLIST : Éditer Tabs pour le Deba

- [ ] Ouvrir Theme Editor (`Online Store` > `Themes` > `Customize`)
- [ ] Sélectionner le produit Deba dans le menu déroulant
- [ ] Éditer tab **"Matériaux"** avec le contenu suggéré
- [ ] Éditer tab **"Livraison & Retours"** avec le contenu suggéré
- [ ] Éditer tab **"Dimensions"** avec le contenu suggéré
- [ ] Éditer tab **"Entretien"** avec le contenu suggéré
- [ ] Cliquer **"Save"** en haut à droite
- [ ] Vérifier le rendu en front-end (ouvrir la fiche produit)

**⏱️ Temps estimé : 3-5 minutes par produit**

---

## 📦 RÉCAP

**Ce qui a été fait automatiquement :**
- ✅ Traduction des titres en français
- ✅ Vidage des contenus par défaut
- ✅ Configuration des icônes appropriées

**Ce qu'il te reste à faire :**
- 📝 Remplir le contenu de chaque tab dans l'admin Shopify
- 🎨 (Optionnel) Ajuster les icônes si besoin
- ✅ Répéter pour chaque produit

**Tes tabs sont maintenant 100% éditables dans l'admin !** 🚀

---

## 🆘 Besoin d'Aide ?

Si tu ne trouves pas où éditer les tabs, envoie-moi une capture d'écran de ton écran Theme Editor et je t'aide !

