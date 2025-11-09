# 📦 GUIDE : Caractéristiques Personnalisées par Produit (Metafields)

## 🎯 LE PROBLÈME

Actuellement, quand tu remplis les tabs "Matériaux", "Dimensions", etc. dans le Theme Editor, **ça change pour TOUS les produits** parce que tu modifies le template par défaut.

## ✅ LA SOLUTION : METAFIELDS

Les **metafields** de Shopify permettent d'ajouter des champs personnalisés **spécifiques à chaque produit**.

---

## 📝 ÉTAPE 1 : Créer les Metafields dans Shopify Admin

### 1.1 Accéder aux Custom Data

1. Va dans **Shopify Admin**
2. Clique sur **Settings** (en bas à gauche)
3. Clique sur **Custom data**
4. Clique sur **Products**

### 1.2 Créer les 4 Metafields

Clique sur **Add definition** pour chaque champ ci-dessous :

#### Metafield 1 : Matériaux

- **Name** : `Matériaux`
- **Namespace and key** : `custom.materials`
- **Description** : `Description des matériaux du couteau (acier, manche)`
- **Type** : `Multi-line text`
- **Validation** (optionnel) : laisse vide
- **Access** : `Storefront`
- Clique sur **Save**

#### Metafield 2 : Dimensions

- **Name** : `Dimensions`
- **Namespace and key** : `custom.dimensions`
- **Description** : `Dimensions du couteau (lame, longueur totale, poids)`
- **Type** : `Multi-line text`
- **Validation** (optionnel) : laisse vide
- **Access** : `Storefront`
- Clique sur **Save**

#### Metafield 3 : Livraison & Retours

- **Name** : `Livraison & Retours`
- **Namespace and key** : `custom.shipping_returns`
- **Description** : `Informations sur la livraison et les retours`
- **Type** : `Multi-line text`
- **Validation** (optionnel) : laisse vide
- **Access** : `Storefront`
- Clique sur **Save**

#### Metafield 4 : Entretien

- **Name** : `Entretien`
- **Namespace and key** : `custom.care_instructions`
- **Description** : `Instructions d'entretien du couteau`
- **Type** : `Multi-line text`
- **Validation** (optionnel) : laisse vide
- **Access** : `Storefront`
- Clique sur **Save**

---

## 🔧 ÉTAPE 2 : Modifier le Template pour Lire les Metafields

Je vais modifier le fichier `sections/main-product.liquid` pour qu'il lise automatiquement ces metafields au lieu du contenu hardcodé.

**TU N'AS RIEN À FAIRE ICI, JE M'EN OCCUPE !** ✅

---

## 📝 ÉTAPE 3 : Remplir les Metafields pour Chaque Produit

### 3.1 Accéder à un Produit

1. Va dans **Products** dans Shopify Admin
2. Clique sur un produit (ex: "Couteau japonais deba rénové | forgé à la main par Kanetsugu")

### 3.2 Descendre à la Section "Metafields"

Descends tout en bas de la page, tu verras une section **Metafields** avec 4 champs :

- **Matériaux**
- **Dimensions**
- **Livraison & Retours**
- **Entretien**

### 3.3 Copier-Coller depuis les Fichiers COPIER-COLLER.md

Pour chaque produit, ouvre le fichier correspondant :

- `DEBA-1-KANETSUGU-COPIER-COLLER.md`
- `DEBA-2-SADAMITSU-COPIER-COLLER.md`
- `NAKIRI-SAKAI-TADA-COPIER-COLLER.md`
- `YANAGIBA-SAKAI-KANETSUGU-COPIER-COLLER.md`
- `YANAGIBA-CHUGI-COPIER-COLLER.md`
- `NAKIRI-SAKAI-TAKAYUKI-KOMATSU-COPIER-COLLER.md`

Et copie-colle le contenu de chaque section dans les metafields correspondants :

```
📦 METAFIELDS / TABS PRODUIT

🔧 Matériaux (Materials)
→ Copie ce texte dans le metafield "Matériaux" du produit

📏 Dimensions (Dimensions)
→ Copie ce texte dans le metafield "Dimensions" du produit

🚚 Expédition et Retours (Shipping & Returns)
→ Copie ce texte dans le metafield "Livraison & Retours" du produit

🧼 Entretien (Care Instructions)
→ Copie ce texte dans le metafield "Entretien" du produit
```

### 3.4 Sauvegarder

Clique sur **Save** en haut à droite.

---

## 🎉 RÉSULTAT

Maintenant, **chaque produit aura ses propres caractéristiques** affichées dans les tabs en bas de la page !

- Deba #1 aura ses dimensions (17cm)
- Deba #2 aura ses dimensions (17cm aussi, mais texte différent)
- Nakiri aura ses dimensions (17.5cm)
- Yanagiba aura ses dimensions (20cm ou 20.5cm selon le modèle)
- etc.

---

## 📌 NOTE IMPORTANTE

**Ne plus remplir les tabs via le Theme Editor !**

Maintenant, tu dois remplir les metafields directement dans chaque fiche produit.

Si tu modifies les tabs via le Theme Editor, ça n'aura plus d'effet (les metafields ont la priorité).

---

## ❓ BESOIN D'AIDE ?

Si tu as un problème, dis-moi et je t'aide ! 💪

