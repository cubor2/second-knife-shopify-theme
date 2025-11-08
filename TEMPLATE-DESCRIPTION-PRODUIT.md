# 📋 TEMPLATE DESCRIPTION PRODUIT - SECOND KNIFE

## 🎯 Structure Générale (Commune à Tous les Produits)

### 1. INTRODUCTION (1-2 phrases)
**Objectif :** Accrocher + positionner l'objet historiquement

**Template :**
> Ce couteau [TYPE] japonais a été forgé à la main [PÉRIODE] à [LIEU] par [ARTISAN/MARQUE], puis restauré professionnellement dans notre atelier en Bourgogne. Une pièce [vintage/contemporaine] d'exception au tranchant de rasoir.

**Variables à remplir :**
- `[TYPE]` : Deba, Santoku, Gyuto, Nakiri, Petty, etc.
- `[PÉRIODE]` : "dans les années 70", "en 2018", "récemment"
- `[LIEU]` : Sakai, Seki, Takefu, Tosa, ou "au Japon"
- `[ARTISAN/MARQUE]` : Nom complet + kanji si disponible
- `[vintage/contemporaine]` : Selon l'âge

---

### 2. HISTOIRE & ORIGINE
**Objectif :** Storytelling + authenticité + valoriser la rénovation

**Template :**
> Forgé à [LIEU], [CONTEXTE_LIEU], ce [TYPE] porte [MARQUAGE_DETAILS]. [HISTOIRE_MANCHE]. Notre processus de restauration a inclus [LISTE_RESTAURATION]. Le résultat : un couteau opérationnel qui allie esthétique [vintage/moderne] et performance moderne.

**Variables à remplir :**
- `[CONTEXTE_LIEU]` : "capitale historique de la coutellerie japonaise", "région réputée pour l'acier au carbone", "ville de forgerons depuis le 14ème siècle"
- `[MARQUAGE_DETAILS]` : "le sceau de Kanetsugu", "une gravure artisanale", "aucun marquage (pièce anonyme)"
- `[HISTOIRE_MANCHE]` : 
  - Si patine unique : "Le manche, marqué par le temps et partiellement brûlé, a été poncé et revalorisé pour créer une patine unique qui raconte son histoire."
  - Si manche neuf : "Le manche d'origine étant trop endommagé, nous l'avons remplacé par un nouveau manche en chêne du Morvan, parfaitement équilibré."
  - Si manche intact : "Le manche d'origine a été préservé et restauré, conservant son caractère authentique."
- `[LISTE_RESTAURATION]` : "un réaffûtage complet aux pierres japonaises grain 1000-3000-8000, un polissage soigné de la lame et un traitement anticorrosion"

---

### 3. CARACTÉRISTIQUES TECHNIQUES
**Objectif :** SEO + données structurées pour IA

**Template (liste à puces HTML) :**

```html
<h2>Caractéristiques Techniques</h2>
<ul>
<li><strong>Type</strong> : [TYPE_COMPLET]</li>
<li><strong>Acier</strong> : [CONSTRUCTION_ACIER]</li>
<li><strong>Teneur en carbone</strong> : [CARBONE_DETAILS]</li>
<li><strong>Lame</strong> : [LONGUEUR_LAME] cm</li>
<li><strong>Longueur totale</strong> : [LONGUEUR_TOTALE] cm</li>
<li><strong>Tranchant</strong> : Type rasoir, affûté à [ANGLE]°</li>
<li><strong>Période</strong> : [PERIODE_COMPLETE]</li>
<li><strong>Artisan d'origine</strong> : [ARTISAN_COMPLET]</li>
</ul>
```

**Variables à remplir :**
- `[TYPE_COMPLET]` : 
  - Deba : "Deba traditionnel (couteau à poisson et usages intensifs)"
  - Santoku : "Santoku polyvalent (couteau tout usage japonais)"
  - Gyuto : "Gyuto (équivalent japonais du couteau de chef)"
  - Nakiri : "Nakiri (couteau à légumes japonais)"
  - Petty : "Petty (couteau d'office japonais)"
- `[CONSTRUCTION_ACIER]` : "Construction sandwich (hagane) - acier dur en surface, cœur tendre et ultra-tranchant", "Acier au carbone mono-acier forgé", "Acier Damas 67 couches"
- `[CARBONE_DETAILS]` : "Élevée (haut de gamme années 70)", "Moyenne (usage quotidien)", "HRC 60-62 (très dur)"
- `[LONGUEUR_LAME]` : en cm (ex: 15.5, 17, 21)
- `[LONGUEUR_TOTALE]` : en cm (ex: 30, 32, 35)
- `[ANGLE]` : "15-20", "12-15", "20-25"
- `[PERIODE_COMPLETE]` : "Années 1970", "2018", "Années 1980-1990"
- `[ARTISAN_COMPLET]` : "Kanetsugu (Sakai, Japon)", "Inconnu (production artisanale)", "Yamamoto Hamono (Seki)"

---

### 4. USAGE RECOMMANDÉ (SPÉCIFIQUE PAR TYPE)

#### TEMPLATE DEBA (Usages Intensifs)

```html
<h2>Usage Recommandé</h2>

<p>Conçu à l'origine pour le poisson entier (trancher, lever les filets, séparer les arêtes), le Deba excelle dans tous les usages intensifs en cuisine. Sa lame épaisse en forme de bec d'oiseau permet des découpes de précision exceptionnelles, tandis que la dureté de l'acier facilite le désossage et le déjointement.</p>

<h3>Utilisations courantes</h3>

<ul>
<li><strong>Poisson</strong> : Lever les filets, trancher à travers les arêtes, découpe précise</li>
<li><strong>Volaille</strong> : Découper une carcasse de poulet, déjointer cuisses et ailes, séparer les articulations</li>
<li><strong>Viandes</strong> : Découpes intensives, travail des cartilages, préparation de pièces avec os</li>
<li><strong>Légumes durs</strong> : Courges, betteraves, légumes racines</li>
</ul>

<p>La forme en bec d'oiseau caractéristique du Deba offre un contrôle exceptionnel pour les découpes complexes. Un outil polyvalent idéal pour les amateurs de cuisine japonaise traditionnelle et les chefs recherchant un couteau robuste et précis.</p>
```

#### TEMPLATE SANTOKU (Polyvalent Quotidien)

```html
<h2>Usage Recommandé</h2>

<p>Le Santoku ("trois vertus") est le couteau polyvalent japonais par excellence, maîtrisant la découpe de viande, poisson et légumes. Sa lame courte ([LONGUEUR]cm) offre un contrôle précis et une maniabilité exceptionnelle, idéale pour une utilisation quotidienne.</p>

<h3>Utilisations courantes</h3>

<ul>
<li><strong>Légumes</strong> : Émincer finement, julienne, brunoise, découpe précise</li>
<li><strong>Viandes</strong> : Trancher, détailler en dés, escalopes fines</li>
<li><strong>Poisson</strong> : Lever les filets, découper en sashimi, préparation délicate</li>
<li><strong>Herbes</strong> : Ciselage fin, hachage précis</li>
</ul>

<p>Le Santoku est parfait pour les cuisiniers recherchant UN SEUL couteau polyvalent de haute qualité. Sa taille compacte le rend accessible aux petites mains et idéal pour les cuisines domestiques. Un investissement durable pour 20+ ans d'usage quotidien.</p>
```

#### TEMPLATE GYUTO (Chef Professionnel)

```html
<h2>Usage Recommandé</h2>

<p>Le Gyuto est l'équivalent japonais du couteau de chef occidental, optimisé pour les grands volumes et les préparations professionnelles. Sa lame longue ([LONGUEUR]cm) permet des mouvements amples et fluides, idéale pour émincer rapidement de grandes quantités.</p>

<h3>Utilisations courantes</h3>

<ul>
<li><strong>Viandes</strong> : Découper des pièces entières, trancher finement, escalopes</li>
<li><strong>Légumes</strong> : Éminçage rapide, julienne, découpe de gros volumes</li>
<li><strong>Poisson</strong> : Lever les filets de poissons de taille moyenne à grande</li>
<li><strong>Préparations complexes</strong> : Désossage partiel, découpe polyvalente</li>
</ul>

<p>Le Gyuto est le choix privilégié des chefs professionnels et des cuisiniers amateurs exigeants. Sa polyvalence en fait l'outil central d'une batterie de cuisine. Un couteau de chef qui durera toute une carrière.</p>
```

#### TEMPLATE NAKIRI (Spécialiste Légumes)

```html
<h2>Usage Recommandé</h2>

<p>Le Nakiri est le couteau spécialisé dans la découpe de légumes. Sa lame rectangulaire droite permet des découpes nettes et précises sur toute la longueur, avec un contact maximal avec la planche. Idéal pour le travail intensif de légumes.</p>

<h3>Utilisations courantes</h3>

<ul>
<li><strong>Légumes tendres</strong> : Tomates, aubergines, courgettes - découpe ultra-nette sans écrasement</li>
<li><strong>Légumes durs</strong> : Carottes, navets, céleris - découpe puissante et précise</li>
<li><strong>Légumes feuilles</strong> : Choux, salades - ciselage fin et rapide</li>
<li><strong>Herbes</strong> : Hachage fin, ciselage précis</li>
</ul>

<p>Le Nakiri est apprécié des végétariens, amateurs de cuisine asiatique et de tous ceux qui travaillent intensivement les légumes. Sa forme unique offre confort et efficacité pour les découpes répétitives. Un spécialiste indispensable.</p>
```

#### TEMPLATE PETTY (Précision & Détails)

```html
<h2>Usage Recommandé</h2>

<p>Le Petty est le couteau d'office japonais, optimisé pour les travaux de précision et les petites découpes. Sa lame courte ([LONGUEUR]cm) offre un contrôle millimétrique et une maniabilité exceptionnelle pour les tâches délicates.</p>

<h3>Utilisations courantes</h3>

<ul>
<li><strong>Petits légumes</strong> : Échalotes, ail, gingembre - découpe précise</li>
<li><strong>Fruits</strong> : Peler, découper, tailler en brunoise ou en dés</li>
<li><strong>Herbes</strong> : Ciselage ultra-fin, décoration</li>
<li><strong>Travaux détaillés</strong> : Enlever les parties indésirables, découpe décorative</li>
</ul>

<p>Le Petty est le complément idéal d'un Santoku ou Gyuto, prenant en charge tous les travaux où un grand couteau serait trop encombrant. Un outil de précision apprécié des cuisiniers minutieux.</p>
```

---

### 5. L'AVANTAGE SECOND KNIFE (Commune à tous)

**Template fixe :**

```html
<h2>L'Avantage Second Knife</h2>

<p>Contrairement aux productions industrielles actuelles, cet acier [vintage japonais/artisanal] offre une qualité et une longévité supérieures. Chaque pièce [rénovée/artisanale] est unique, testée et garantie. Un investissement durable pour 20+ ans d'usage.</p>
```

**Variante si vintage :**
> vintage japonais

**Variante si neuf :**
> artisanal

**Variante si rénové :**
> rénovée

**Variante si neuf :**
> artisanale

---

## 📊 CHECKLIST INFORMATIONS NÉCESSAIRES (À ME FOURNIR)

### OBLIGATOIRE (Minimum)
- [ ] Type de couteau (Deba, Santoku, Gyuto, Nakiri, Petty, autre)
- [ ] Longueur lame (en cm)
- [ ] Longueur totale (en cm)
- [ ] État : Neuf / Rénové / Vintage rénové
- [ ] Prix de vente

### FORTEMENT RECOMMANDÉ (Pour qualité SEO)
- [ ] Période de fabrication (années 70, récent, etc.)
- [ ] Lieu de fabrication (Sakai, Seki, Japon, etc.)
- [ ] Artisan/Marque (nom + kanji si dispo)
- [ ] Type d'acier (sandwich/hagane, mono-acier, damas)
- [ ] État du manche (conservé/restauré/neuf/patine)
- [ ] Particularités visuelles (brûlure, patine, gravure)

### OPTIONNEL (Nice to have)
- [ ] Angle d'affûtage (si connu)
- [ ] Teneur carbone / HRC (si connu)
- [ ] Histoire particulière du couteau
- [ ] Détails sur la restauration effectuée

---

## 🎨 EXEMPLES TYPES PAR PROFIL

### Exemple 1 : Vintage Rénové (comme le Deba actuel)
**Infos fournies :**
- Type: Deba
- Lame: 15.5cm / Total: 30cm
- Années 70, Sakai, Kanetsugu
- Acier sandwich
- Manche brûlé puis poncé
- Prix: 80€

**→ Description générée : Voir `DESCRIPTION-PRODUIT-DEBA-HTML.html`**

---

### Exemple 2 : Neuf Artisanal
**Infos fournies :**
- Type: Santoku
- Lame: 17cm / Total: 30cm
- Neuf, forgé récemment au Japon
- Acier carbone mono-acier
- Manche magnolia neuf
- Prix: 180€

**→ Template à générer :**
- Introduction : "forgé récemment au Japon"
- Histoire : Focus sur l'artisan actuel + pourquoi pièce unique
- Caractéristiques : Acier mono-acier, période "2023-2024"
- Usage : Template Santoku standard
- Avantage : "artisanal" + "artisanale"

---

### Exemple 3 : Vintage Minimal Info
**Infos fournies :**
- Type: Gyuto
- Lame: 21cm / Total: 35cm
- Années 80-90, Japon (lieu inconnu)
- Pas de marquage
- Acier carbone (construction inconnue)
- Manche refait en chêne
- Prix: 120€

**→ Template à générer :**
- Introduction : "forgé dans les années 80-90 au Japon"
- Histoire : "Ce Gyuto porte les traces d'une production artisanale anonyme..."
- Caractéristiques : "Inconnu (production artisanale)"
- Usage : Template Gyuto standard
- Avantage : "vintage japonais" + "rénovée"

---

## ✅ WORKFLOW DE GÉNÉRATION

### Quand tu me donnes un nouveau couteau :

1. **Tu me fournis :** Les infos via checklist (minimum: type, dimensions, état, prix)
2. **Je confirme :** Quel template usage utiliser (Deba/Santoku/Gyuto/etc.)
3. **Je génère :** HTML complet prêt à coller dans Shopify
4. **Tu valides :** Lecture rapide + ajustements si nécessaire
5. **On sauvegarde :** Dans un fichier `DESCRIPTION-PRODUIT-[NOM].html`

### Format de réponse attendu de ma part :

```
✅ DESCRIPTION GÉNÉRÉE : [Type] [Nom/Période]

📋 TITRE PRODUIT (pour Shopify) :
"Couteau [Type] Japonais [Détail Unique] - [Prix]€"

📝 HTML COMPLET (à copier) :
[Code HTML complet]

💡 SUGGESTIONS METAFIELDS :
- Matériaux : [Acier type] + [Bois manche]
- Dimensions : Lame [X]cm / Total [Y]cm
- Care Instructions : [Instructions personnalisées selon acier]
```

---

---

## 🎯 MÉTADONNÉES SEO (OBLIGATOIRE)

### Format de Génération

**Pour chaque produit, je génère automatiquement :**

#### 1. **Page Title** (50-60 caractères max)
**Format :**
> Couteau [Type] Japonais [Caractéristique Unique] - [Prix]€ | Second Knife

**Exemples :**
- `Couteau Deba Japonais Forgé Main Années 70 - 80€ | Second Knife` (60 char)
- `Santoku Artisanal Japonais Rénové 17cm - 150€ | Second Knife` (58 char)
- `Gyuto Japonais Vintage Sakai 21cm - 120€ | Second Knife` (52 char)

**Éléments clés :**
- Type de couteau (Deba, Santoku, Gyuto)
- Mot-clé principal ("Japonais")
- Différenciation (Forgé Main, Vintage, Artisanal)
- Prix (signal fort pour recherche)
- Branding "Second Knife"

---

#### 2. **Meta Description** (150-160 caractères max)
**Format :**
> [Type] japonais [période] [lieu]. [Acier type], lame [X]cm. Restauré en Bourgogne. [USP unique]. Livraison France. [Prix]€.

**Exemples :**
- `Deba japonais forgé années 70 à Sakai par Kanetsugu. Acier sandwich, lame 15.5cm. Restauré en Bourgogne. Manche patiné unique. Livraison France. 80€.` (157 char)
- `Santoku artisanal japonais rénové. Acier carbone, lame 17cm. Polyvalent quotidien, tranchant rasoir. Restauré Bourgogne. Livraison France/Europe. 150€.` (159 char)

**Éléments clés :**
- Phrase courte et descriptive
- Données factuelles (période, lieu, dimensions)
- USP (restauré Bourgogne, manche unique, etc.)
- Call to action implicite (Livraison)
- Prix

---

#### 3. **URL Handle** (Slug Shopify)
**Format :**
> couteau-[type]-japonais-[caracteristique]-[detail]

**Exemples :**
- `couteau-deba-japonais-forge-kanetsugu-sakai`
- `couteau-santoku-japonais-renove-17cm`
- `couteau-gyuto-japonais-vintage-21cm`
- `couteau-nakiri-japonais-artisanal-acier-carbone`

**Règles :**
- Tout en minuscules
- Mots séparés par tirets
- Pas de chiffres seuls (sauf dimensions pertinentes comme "17cm")
- Inclure mots-clés SEO prioritaires
- Max 5-6 segments de mots
- Pas de caractères spéciaux

---

## 🚀 PRÊT À GÉNÉRER

**Pour lancer une génération, fournis-moi simplement :**

> Type: [Santoku/Gyuto/etc.]  
> Lame: [X]cm / Total: [Y]cm  
> État: [Neuf/Rénové]  
> Prix: [Z]€  
> Infos complémentaires: [Texte libre ou ton ancienne annonce Leboncoin]

**Et je te génère :**
1. ✅ **Description HTML complète** (prête à coller)
2. ✅ **Page Title** optimisé SEO
3. ✅ **Meta Description** optimisée SEO
4. ✅ **URL Handle** (slug Shopify)
5. ✅ **Suggestions Metafields** (Matériaux, Dimensions, Care)

🎯

