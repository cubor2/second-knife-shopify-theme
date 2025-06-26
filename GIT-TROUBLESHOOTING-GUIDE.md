# 🛠️ GUIDE DE DÉPANNAGE GIT - SECOND KNIFE

## ⚠️ PROBLÈME : Blocage infini des commandes Git dans Cursor

### 🔍 **SYMPTÔMES :**
- `git log` reste bloqué indéfiniment
- Interface Cursor qui "mouline" sans fin
- Impossibilité d'arrêter la commande naturellement

### 🎯 **CAUSE :**
Git utilise un **pager** (comme `less`) pour afficher les résultats longs. Dans l'environnement Cursor/PowerShell, ce pager attend une interaction utilisateur qui ne vient jamais.

### ✅ **SOLUTION :**
**Toujours utiliser `--no-pager` avec les commandes Git :**

```powershell
# ❌ COMMANDES QUI BLOQUENT :
git log --oneline -5
git diff
git show

# ✅ COMMANDES SÉCURISÉES :
git log --oneline -5 --no-pager
git diff --no-pager  
git show --no-pager
```

### 🔧 **CONFIGURATION GLOBALE (RECOMMANDÉE) :**

```powershell
# Désactiver le pager globalement pour ce projet
git config pager.log false
git config pager.diff false
git config pager.show false
```

### 📋 **COMMANDES SÉCURISÉES POUR CURSOR :**

```powershell
# Status (toujours safe)
git status

# Log sans blocage
git log --oneline -5 --no-pager

# Diff sans blocage  
git diff --no-pager

# Add et commit (toujours safe)
git add -A
git commit -m "message"

# Push (safe si remote configuré)
git push origin master
```

### 🚨 **EN CAS DE BLOCAGE :**
1. **Arrêter** la commande dans Cursor (Ctrl+C)
2. **Relancer** avec `--no-pager`
3. **Continuer** normalement

---

*Guide créé suite au problème rencontré le 26/06/2025*
*Solution testée et validée ✅* 