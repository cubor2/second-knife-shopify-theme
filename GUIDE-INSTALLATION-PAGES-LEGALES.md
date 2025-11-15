# GUIDE D'INSTALLATION DES PAGES LÉGALES

**Second Knife - Configuration des pages obligatoires**

---

## ✅ FICHIERS CRÉÉS

4 pages légales complètes et conformes à la loi française ont été générées :

1. **PAGE-LEGALE-CGV.md** - Conditions Générales de Vente
2. **PAGE-LEGALE-MENTIONS-LEGALES.md** - Mentions Légales
3. **PAGE-LEGALE-POLITIQUE-CONFIDENTIALITE.md** - Politique de Confidentialité (RGPD)
4. **PAGE-LEGALE-POLITIQUE-RETOUR.md** - Politique de Retour/Remboursement

---

## 📋 INFORMATIONS INTÉGRÉES

Ces pages sont **personnalisées** avec vos informations :

- ✅ **Entreprise :** FTFY - Damien Barré (exploitée sous la marque Second Knife)
- ✅ **SIRET :** 521 318 758 00021
- ✅ **Adresse :** 37 chemin des chaumes, 58500 Clamecy
- ✅ **Email :** dbarre.work@gmail.com
- ✅ **Activité :** Vente de couteaux japonais artisanaux restaurés
- ✅ **Zone de livraison :** France (extension mondiale à venir)
- ✅ **Délai de livraison :** 3-5 jours ouvrés

---

## 🚀 INSTALLATION DANS SHOPIFY

### MÉTHODE MANUELLE (Recommandée pour contrôle total)

#### Étape 1 : Créer les pages dans Shopify

1. Va dans **Shopify Admin** : https://admin.shopify.com/store/second-knife
2. Clique sur **Boutique en ligne** → **Pages**
3. Clique sur **Ajouter une page**

#### Étape 2 : Pour chaque page (répéter 4 fois)

**PAGE 1 : CONDITIONS GÉNÉRALES DE VENTE**

1. **Titre** : `Conditions Générales de Vente`
2. **Contenu** : Copie le contenu de `PAGE-LEGALE-CGV.md`
3. **Paramètres SEO** (en bas) :
   - URL : `conditions-generales-vente`
   - Meta description : `Conditions générales de vente Second Knife : droit de rétractation, garanties, livraison. Conformes à la loi française.`
4. Clique sur **Enregistrer**

---

**PAGE 2 : MENTIONS LÉGALES**

1. **Titre** : `Mentions Légales`
2. **Contenu** : Copie le contenu de `PAGE-LEGALE-MENTIONS-LEGALES.md`
3. **Paramètres SEO** :
   - URL : `mentions-legales`
   - Meta description : `Mentions légales Second Knife : éditeur, hébergeur, SIRET, protection des données personnelles.`
4. Clique sur **Enregistrer**

---

**PAGE 3 : POLITIQUE DE CONFIDENTIALITÉ**

1. **Titre** : `Politique de Confidentialité`
2. **Contenu** : Copie le contenu de `PAGE-LEGALE-POLITIQUE-CONFIDENTIALITE.md`
3. **Paramètres SEO** :
   - URL : `politique-confidentialite`
   - Meta description : `Protection de vos données personnelles chez Second Knife. Politique conforme au RGPD.`
4. Clique sur **Enregistrer**

---

**PAGE 4 : POLITIQUE DE RETOUR**

1. **Titre** : `Politique de Retour et Remboursement`
2. **Contenu** : Copie le contenu de `PAGE-LEGALE-POLITIQUE-RETOUR.md`
3. **Paramètres SEO** :
   - URL : `politique-retour`
   - Meta description : `Retour et remboursement Second Knife : 14 jours de rétractation, garantie 2 ans. Procédure simple et transparente.`
4. Clique sur **Enregistrer**

---

### ÉTAPE 3 : Ajouter les liens dans le Footer (OBLIGATOIRE)

1. Va dans **Boutique en ligne** → **Navigation**
2. Clique sur **Menu Footer** (ou crée-en un si nécessaire)
3. Ajoute les 4 pages :
   - **CGV** → Lien vers `/pages/conditions-generales-vente`
   - **Mentions Légales** → Lien vers `/pages/mentions-legales`
   - **Confidentialité** → Lien vers `/pages/politique-confidentialite`
   - **Retours** → Lien vers `/pages/politique-retour`
4. **Enregistre** le menu

---

### ÉTAPE 4 : Configurer dans le Thème (footer)

1. Va dans **Boutique en ligne** → **Thèmes** → **Personnaliser**
2. Descends en bas de page (Footer)
3. Dans **Footer**, trouve la section **"Menu"**
4. Sélectionne le menu **"Footer"** créé à l'étape 3
5. **Enregistre**

Les liens apparaîtront automatiquement dans le footer de toutes les pages.

---

## ⚙️ CONFIGURATION SHOPIFY PAIEMENTS (Lien avec les pages légales)

Lorsque tu activeras Shopify Payments, Shopify te demandera de **confirmer l'existence de ces pages**. Voici où les référencer :

### Dans Paramètres → Paiements

Lors de l'activation de Shopify Payments, tu devras indiquer :
- **Politique de remboursement** : URL de ta page "Politique de Retour"
- **Politique de confidentialité** : URL de ta page "Politique de Confidentialité"
- **Conditions de service** : URL de ta page "CGV"

Shopify vérifie automatiquement ces liens. **Sans ces pages, Shopify Payments peut refuser l'activation.**

---

## 🔗 LIENS INTERNES À CRÉER (après installation)

Dans les fichiers, certaines mentions indiquent `[lien vers la page]`. Remplace-les par les URLs réelles après création :

**Dans CGV :**
- Ligne mentionnant la Politique de Confidentialité → Ajoute : `/pages/politique-confidentialite`

**Dans Mentions Légales :**
- Ligne mentionnant la Politique de Confidentialité → Ajoute : `/pages/politique-confidentialite`

**Dans Politique de Confidentialité :**
- Aucun lien interne nécessaire

**Dans Politique de Retour :**
- Aucun lien interne nécessaire

---

## ⚠️ POINTS D'ATTENTION

### À MODIFIER AVANT PUBLICATION

1. **Date** : Remplace `{{ Date du jour }}` par la date réelle (ex: 13 novembre 2024)
2. **Téléphone** : Si tu veux ajouter un numéro de téléphone, complète les sections `(à compléter si souhaité)`
3. **Email définitif** : Quand tu créeras `contact@secondknife.fr`, remplace `dbarre.work@gmail.com`
4. **Livraison internationale** : Quand tu livreras vers d'autres pays, mets à jour la section "Zone de livraison"

---

## ✅ CHECKLIST FINALE

Avant d'activer les paiements, vérifie que :

- [ ] Les 4 pages sont créées dans Shopify
- [ ] Les liens sont dans le footer
- [ ] Les pages sont accessibles publiquement (pas en brouillon)
- [ ] La date de mise à jour est correcte
- [ ] Les informations personnelles sont exactes (SIRET, adresse, email)
- [ ] Les liens internes entre pages fonctionnent
- [ ] Le menu footer s'affiche bien sur le site

---

## 📱 PRÉVISUALISATION

Pour vérifier que tout fonctionne :

1. Va sur ton site : https://second-knife.myshopify.com (entre le password)
2. Scroll en bas de page (footer)
3. Clique sur chaque lien pour vérifier que les pages s'affichent correctement
4. Vérifie que les informations sont lisibles et bien formatées

---

## 🚨 OBLIGATION LÉGALE

**CES PAGES SONT OBLIGATOIRES** pour vendre en ligne en France :

- ❌ **Sans elles** : Amendes jusqu'à 75 000€, refus de Shopify Payments
- ✅ **Avec elles** : Conformité légale, confiance des clients, activation paiements OK

---

## 🆘 BESOIN D'AIDE ?

Si tu as besoin d'aide pour :
- Copier/coller le contenu dans Shopify
- Configurer le menu footer
- Lier les pages entre elles
- Modifier des sections spécifiques

→ Demande-moi et je te guide étape par étape ! 🚀

---

**Prochaine étape après installation des pages légales :**  
→ Activation de **Shopify Payments** pour accepter les paiements ! 💳

---

**© 2025 Second Knife - FTFY - Pages légales conformes à la loi française**

