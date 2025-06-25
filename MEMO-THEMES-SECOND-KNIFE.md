# 🎯 MÉMO THÈMES SECOND KNIFE

## ⚡ RÉSUMÉ EXPRESS

**THÈME DE TRAVAIL :** `Second Knife LIVE` (ID: #183719133448)
**COMMANDE RAPIDE :** `.\start-dev.ps1 --sync`
**URL LOCAL :** http://127.0.0.1:9292

---

## 🎪 CONFIGURATION DES THÈMES

```
🟢 Second Knife LIVE        → Thème en PRODUCTION    → ID: #183719133448 ✅ UTILISER CELUI-CI
🔧 Development (Gaming)     → Thème de développement → ID: #184417681672 ❌ NE PAS UTILISER
🎨 Horizon                  → Thème de backup        → ID: #182683664648 ❌ NE PAS UTILISER
```

## 🚀 WORKFLOW SIMPLIFIÉ

### 1. DÉMARRER UNE SESSION
```powershell
.\start-dev.ps1 --sync
```

### 2. CONFIGURER LES CONTENUS
- Admin Shopify → "Second Knife LIVE" → Customize
- ✅ Vérifier le badge "Current theme"

### 3. SAUVEGARDER
```powershell
.\quick-save.ps1
```

### 4. PUSHER
```powershell
shopify theme push --store=second-knife.myshopify.com --theme=183719133448
```

---

## ⚠️ RÈGLES D'OR

1. **TOUJOURS** travailler sur "Second Knife LIVE" (#183719133448)
2. **JAMAIS** configurer textes/sections sur les autres thèmes
3. **TOUJOURS** utiliser `127.0.0.1:9292` (pas localhost)
4. **TOUJOURS** faire `.\quick-save.ps1` avant de fermer
5. **TOUJOURS** vérifier l'ID du thème dans les commandes

---

## 🔧 COMMANDES DE DÉPANNAGE

```powershell
# Lister les thèmes pour vérification
shopify theme list --store=second-knife.myshopify.com

# Réinitialiser l'auth si problème
shopify auth logout
shopify theme dev --store=second-knife.myshopify.com --theme=183719133448

# Vérifier les sauvegardes disponibles
.\test-sync.ps1
```

---

## 📋 CHECKLIST AVANT CHAQUE SESSION

- [ ] Je suis dans le dossier `dawn/`
- [ ] J'ai lancé `.\start-dev.ps1 --sync`
- [ ] J'accède via `127.0.0.1:9292`
- [ ] Dans l'admin, je suis sur "Second Knife LIVE"
- [ ] Le badge "Current theme" est visible

**Si une case n'est pas cochée → STOP et corriger !** 