# 🛡️ Guide de Sauvegarde Automatique Second Knife

## Vue d'ensemble

Ce système de sauvegarde automatique utilise Git pour protéger votre travail contre toute perte de données. Plus jamais d'après-midi de travail perdue !

## Scripts disponibles

### 1. 🚀 Sauvegarde Rapide (`quick-save.ps1`)

**Usage :**
```powershell
.\quick-save.ps1 "Description de vos modifications"
```

**Exemples :**
```powershell
.\quick-save.ps1 "Ajout nouvelles couleurs Design System"
.\quick-save.ps1 "Correction bug responsive mobile"
.\quick-save.ps1 "Modification footer border"
```

**Ce qu'il fait :**
- ✅ Vérifie s'il y a des modifications
- ✅ Sauvegarde tous les fichiers modifiés
- ✅ Crée un commit avec timestamp
- ✅ Affiche l'historique des dernières sauvegardes

### 2. ⏰ Sauvegarde Automatique (`auto-backup.ps1`)

**Usage :**
```powershell
.\auto-backup.ps1
```

**Ce qu'il fait :**
- 🔄 Sauvegarde automatiquement **toutes les 15 minutes**
- 🕒 Fonctionne en continu en arrière-plan
- 🛡️ Protection complète contre la perte de données
- ⏹️ Arrêt avec `Ctrl+C`

## Workflow recommandé

### Pour un travail normal :
1. **Lancez la sauvegarde automatique :**
   ```powershell
   .\auto-backup.ps1
   ```

2. **Travaillez normalement** - vos modifications sont sauvegardées automatiquement

3. **Sauvegarde manuelle** pour les étapes importantes :
   ```powershell
   .\quick-save.ps1 "Étape importante terminée"
   ```

### Pour une sauvegarde ponctuelle :
```powershell
.\quick-save.ps1 "Description de ce que vous venez de faire"
```

## Avantages

✅ **Zéro perte de données** - Sauvegarde toutes les 15 minutes
✅ **Historique complet** - Chaque modification est tracée
✅ **Messages descriptifs** - Retrouvez facilement vos modifications
✅ **Automatique** - Aucune action manuelle requise
✅ **Flexible** - Sauvegardes manuelles pour les étapes importantes

## Historique des sauvegardes

Voir les dernières sauvegardes :
```powershell
git log --oneline -10
```

Voir les détails d'une sauvegarde :
```powershell
git show [hash_du_commit]
```

## Restauration en cas de problème

Si vous devez revenir à une version précédente :
```powershell
git log --oneline    # Trouvez le hash du commit désiré
git checkout [hash]  # Restaurez cette version
```

## Configuration Git

Les scripts utilisent cette configuration :
- **Nom :** Second Knife Dev
- **Email :** dev@secondknife.com

Pour modifier :
```powershell
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

## Plus jamais de perte de données ! 🛡️

Avec ce système, votre travail est protégé en permanence. Vous pouvez développer en toute sérénité sachant que chaque modification est automatiquement sauvegardée.

---

**Dernière mise à jour :** $(Get-Date -Format "yyyy-MM-dd")
**Version :** 1.0 