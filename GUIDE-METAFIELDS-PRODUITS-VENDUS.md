# 📦 GUIDE : METAFIELDS PRODUITS VENDUS

## 🎯 Objectif
Afficher un badge "Vendu !" sur les produits vendus tout en conservant leur visibilité dans le catalogue.

---

## 🛠️ CONFIGURATION DANS L'ADMIN SHOPIFY

### ÉTAPE 1 : Accéder aux Metafields

1. Connectez-vous à votre **Admin Shopify** : https://second-knife.myshopify.com/admin
2. Allez dans **Paramètres** (en bas à gauche) → **Métachamps**
3. Cliquez sur **Produits** dans la liste

---

### ÉTAPE 2 : Créer le premier metafield "Vendu"

1. Cliquez sur **Ajouter une définition**
2. Remplissez les champs suivants :

**Configuration :**
```
Nom : Produit vendu
Espace de noms et clé : custom.sold
Description : Indique si le produit a été vendu (affiche le badge "Vendu !")
Type de contenu : Vrai ou faux (Boolean)
```

**Options :**
- ✅ Cochez : **Les clients de boutique peuvent modifier la valeur dans un metaobject**
- ✅ Cochez : **Afficher dans l'interface principale**

3. Cliquez sur **Enregistrer**

---

### ÉTAPE 3 : Créer le second metafield "Nom de l'acheteur"

1. Cliquez à nouveau sur **Ajouter une définition**
2. Remplissez les champs suivants :

**Configuration :**
```
Nom : Nom de l'acheteur
Espace de noms et clé : custom.buyer_name
Description : Nom de la personne qui a acheté le couteau (ex: "Stéphane")
Type de contenu : Texte d'une seule ligne
```

**Options :**
- ✅ Cochez : **Les clients de boutique peuvent modifier la valeur dans un metaobject**
- ✅ Cochez : **Afficher dans l'interface principale**

3. Cliquez sur **Enregistrer**

---

## 📝 UTILISATION : MARQUER UN PRODUIT COMME VENDU

### Pour marquer un couteau comme vendu :

1. Allez dans **Produits** → Sélectionnez le produit vendu
2. Scrollez jusqu'à la section **Métachamps** (en bas de page)
3. Vous verrez maintenant 2 champs :
   - **Produit vendu** → Cochez la case ✅
   - **Nom de l'acheteur** → Tapez le prénom (ex: "Stéphane")
4. Cliquez sur **Enregistrer**

✅ **Le badge apparaîtra automatiquement sur l'image produit !**

---

## 🎨 APPARENCE DU BADGE

Le badge respecte la charte graphique minimaliste de Second Knife :

```
┌─────────────────┐
│   Vendu !       │
│ Adopté par XXX  │
└─────────────────┘
```

**Style :**
- Fond blanc
- Bordure fine noire (1px)
- Texte IBM Plex Serif
- Position : coin supérieur droit
- Espacement cohérent avec la charte (6px / 12px)

---

## 🔍 EXEMPLES D'UTILISATION

### Exemple 1 : Produit vendu avec nom d'acheteur
```
Metafield 1 : ✅ Produit vendu = true
Metafield 2 : 📝 Nom de l'acheteur = "Stéphane"

Résultat → Badge affiche :
  Vendu !
  Adopté par Stéphane
```

### Exemple 2 : Produit vendu sans nom
```
Metafield 1 : ✅ Produit vendu = true
Metafield 2 : 📝 Nom de l'acheteur = (vide)

Résultat → Badge affiche :
  Vendu !
```

### Exemple 3 : Produit disponible
```
Metafield 1 : ❌ Produit vendu = false

Résultat → Aucun badge
```

---

## ⚠️ IMPORTANT

### Le produit reste visible dans le catalogue
- ✅ Le couteau reste affiché dans les collections
- ✅ Les images restent visibles
- ✅ La page produit reste accessible
- ⚠️ Le badge "Vendu !" indique simplement qu'il n'est plus disponible

### Pour masquer complètement un produit
Si vous voulez **retirer le produit du catalogue** :
1. Allez sur la page du produit
2. Changez le **Statut** de "Actif" à "Brouillon"
3. Le produit disparaîtra du site (mais vous le gardez dans votre admin)

---

## 🎯 AVANTAGES DE CETTE APPROCHE

✅ **Valorise votre travail** : Les clients voient l'historique de vos créations  
✅ **Crée de l'engagement** : "Adopté par..." humanise l'achat  
✅ **Minimaliste** : Design discret qui respecte votre charte  
✅ **Flexible** : Facile à activer/désactiver pour chaque produit  
✅ **SEO-friendly** : Les produits restent indexés par Google  

---

## 🔗 FICHIERS MODIFIÉS

Cette fonctionnalité utilise les fichiers suivants :

- `assets/sk-design-system.css.liquid` → Style du badge
- `snippets/card-product.liquid` → Affichage du badge

---

**Dernière mise à jour : 21 novembre 2024**  
**Version : 1.0**

