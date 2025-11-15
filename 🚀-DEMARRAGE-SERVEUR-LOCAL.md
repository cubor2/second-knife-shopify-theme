# 🚀 DÉMARRAGE SERVEUR LOCAL - PROCÉDURE QUI FONCTIONNE À 100%

## ⚠️ LIS CECI AVANT TOUT ! ⚠️

**Ce fichier contient LA SEULE procédure qui fonctionne pour démarrer le serveur local.**
**On a galéré 20 fois avec ce bug. Cette procédure résout tout.**

---

## 🎯 PROCÉDURE EN 3 ÉTAPES (NE PAS DÉVIER)

### ✅ ÉTAPE 1 : Se placer dans le bon répertoire
```bash
cd Theme/dawn
```

**Pourquoi ?** Shopify CLI doit être dans un répertoire contenant `config/`, `sections/`, `assets/`.

**Vérification :** Tu dois voir `config/settings_schema.json` quand tu fais `ls config/`

---

### ✅ ÉTAPE 2 : PULL obligatoire (synchronisation settings)
```bash
shopify theme pull --store=second-knife.myshopify.com --theme=183719133448
```

**Paramètres Cursor :**
- `is_background: false` ← IMPORTANT pour validation manuelle
- Le user doit valider avec `y` + Entrée

**Pourquoi ?** Sans ça, les **textes/images disparaissent** car les settings locaux sont obsolètes.

**Ce que ça fait :**
- Télécharge `config/settings_data.json` (textes hero, images, etc.)
- Télécharge `templates/*.json` (sections homepage)
- Synchronise TOUT depuis le thème LIVE

---

### ✅ ÉTAPE 3 : Lancer le serveur de dev
```bash
shopify theme dev --store=second-knife.myshopify.com --theme=183719133448
```

**Paramètres Cursor :**
- `is_background: true` ← IMPORTANT car tourne en continu

**Pourquoi ?** Le serveur ne se termine jamais, donc `background: true` évite le blocage.

**Ce que ça fait :**
- Lance le serveur sur `http://127.0.0.1:9992`
- Synchronise en temps réel les modifications
- Crée une URL de prévisualisation Shopify

---

## ❌ ERREURS FRÉQUENTES (À NE PAS REPRODUIRE)

### ❌ Erreur 1 : Oublier le `pull`
```bash
# MAUVAIS
cd Theme/dawn
shopify theme dev  # ← TEXTES MANQUANTS !
```

**Symptôme :** Le serveur démarre mais les textes hero/images sont vides.

**Solution :** TOUJOURS faire `shopify theme pull` AVANT `shopify theme dev`.

---

### ❌ Erreur 2 : Lancer `dev` en `is_background: false`
```bash
# MAUVAIS
shopify theme dev --store=... --theme=...
# avec is_background: false
```

**Symptôme :** Le terminal reste bloqué, impossible de continuer.

**Solution :** Utiliser `is_background: true` pour `shopify theme dev`.

---

### ❌ Erreur 3 : Mauvais répertoire
```bash
# MAUVAIS
cd Web/  # ← Pas un thème Shopify !
shopify theme pull  # ← "not in a theme directory"
```

**Symptôme :** Erreur "it doesn't seem like you are running this command in a theme directory".

**Solution :** Toujours se placer dans `Theme/dawn/`.

---

### ❌ Erreur 4 : Oublier `--theme=183719133448`
```bash
# MAUVAIS
shopify theme dev --store=second-knife.myshopify.com
# sans --theme=183719133448
```

**Symptôme :** Erreur `_shopify_essential` ou autre theme utilisé.

**Solution :** TOUJOURS spécifier `--theme=183719133448` (thème LIVE).

---

## 🛑 ARRÊTER LE SERVEUR PROPREMENT

### Méthode 1 : Via Cursor (RECOMMANDÉ)
1. Clique sur l'onglet **"Terminal"** en bas
2. Trouve le terminal avec `shopify theme dev`
3. Clique sur l'**icône poubelle** (🗑️) "Kill Terminal"

### Méthode 2 : Fermer l'onglet terminal
1. Clic droit sur le nom du terminal
2. Sélectionne **"Kill Terminal"**

### ⚠️ Ce qui NE marche PAS :
- ❌ Taper `Ctrl+C` (ne fonctionne pas pour les process background dans Cursor)
- ❌ Fermer Cursor sans "Kill Terminal" (le process continue)

---

## 📋 CHECKLIST COMPLÈTE (COPIER-COLLER DANS LE CHAT)

**À donner à Claude au début de chaque session :**

```
DÉMARRAGE SERVEUR LOCAL :

1. cd Theme/dawn
2. shopify theme pull --store=second-knife.myshopify.com --theme=183719133448
   (is_background: false, validation manuelle par le user)
3. shopify theme dev --store=second-knife.myshopify.com --theme=183719133448
   (is_background: true)
4. Ouvrir http://127.0.0.1:9992

IMPORTANT :
- Étape 2 = is_background: false (pour validation manuelle)
- Étape 3 = is_background: true (car tourne en continu)
- TOUJOURS faire pull AVANT dev (sinon textes manquants)
```

---

## 🎯 POURQUOI CETTE PROCÉDURE FONCTIONNE

### Le `pull` synchronise les settings
```
Thème LIVE (Shopify)
├── config/settings_data.json  ← Textes, images, etc.
├── templates/index.json       ← Sections homepage
└── ...

↓ shopify theme pull ↓

Thème LOCAL (ton PC)
├── config/settings_data.json  ← COPIE EXACTE ✅
├── templates/index.json       ← COPIE EXACTE ✅
└── ...
```

### Le `dev` avec `background: true` évite le blocage
```
is_background: false
→ Le terminal attend la fin de la commande
→ Mais shopify theme dev ne se termine JAMAIS !
→ BLOCAGE ❌

is_background: true
→ Le serveur tourne en arrière-plan
→ Le terminal reste disponible
→ OK ✅
```

---

## 💾 SCRIPT AUTOMATISÉ (OPTIONNEL)

**Fichier : `start-dev.ps1` (déjà existant)**

```powershell
# Démarrage avec synchronisation automatique
.\start-dev.ps1 --sync
```

**Ce que fait le script :**
1. Fait le `pull` automatiquement
2. Lance le serveur `dev`
3. Affiche l'URL locale

**Note :** Le script existe déjà dans `Theme/dawn/start-dev.ps1`.

---

## 🔗 LIENS UTILES

- **Documentation complète** : `README-SECOND-KNIFE.md`
- **TODO du jour** : `TODO-15-NOV-2024.md`
- **Sessions précédentes** : `SESSION-*-RECAP.md`

---

## ✅ VALIDATION QUE ÇA FONCTIONNE

**Signes que tout est OK :**
- ✅ Le terminal affiche `http://127.0.0.1:9992`
- ✅ Tu vois "Second Knife LIVE" dans le terminal
- ✅ Le site local affiche les textes hero/images
- ✅ Pas d'erreur "not in a theme directory"
- ✅ Pas de blocage du terminal

**Si un seul élément manque :**
1. **Arrête le serveur** (Kill Terminal)
2. **Reprends depuis l'étape 1** (cd Theme/dawn)
3. **Relis cette procédure ligne par ligne**

---

## 🚨 EN CAS DE PROBLÈME

**Si les textes sont vides :**
→ Tu as oublié l'étape 2 (`shopify theme pull`)
→ Arrête le serveur et refais les 3 étapes

**Si le terminal est bloqué :**
→ Tu as lancé `dev` avec `is_background: false`
→ Kill Terminal et relance avec `is_background: true`

**Si erreur "not in a theme directory" :**
→ Tu n'es pas dans `Theme/dawn/`
→ Fais `cd Theme/dawn` et recommence

**Si erreur `_shopify_essential` :**
→ Tu as oublié `--theme=183719133448`
→ Ajoute-le et relance

---

## 📌 MESSAGE POUR LES NOUVELLES SESSIONS

**À dire à Claude au début :**

> "Avant de faire quoi que ce soit, lis le fichier `🚀-DEMARRAGE-SERVEUR-LOCAL.md` qui contient la procédure EXACTE pour démarrer le serveur local. On a eu ce bug 20 fois, la solution est dedans."

---

**CETTE PROCÉDURE FONCTIONNE À 100%. NE PAS EN DÉVIER. 🎯**

---

**Dernière mise à jour : 15 novembre 2024**
**Testé et validé : ✅ Fonctionne parfaitement**

