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

# Guide de Synchronisation des Paramètres - Second Knife Theme

## Problème Résolu
Plus besoin de reconfigurer manuellement le logo et les textes à chaque redémarrage du serveur de développement !

## Scripts Disponibles

### 1. Sauvegarde Rapide
```powershell
.\quick-save.ps1
```
Sauvegarde instantanée des paramètres actuels dans `config/settings_data.json`

### 2. Sauvegarde Complète
```powershell
.\backup-settings.ps1
```
Sauvegarde complète depuis l'admin Shopify avec export des paramètres

### 3. Restauration
```powershell
.\restore-settings.ps1
```
Restaure la sauvegarde la plus récente

```powershell
.\restore-settings.ps1 "chemin/vers/sauvegarde.json"
```
Restaure une sauvegarde spécifique

### 4. Démarrage avec Synchronisation
```powershell
.\start-dev.ps1 --sync
```
Démarre le serveur et restaure automatiquement les paramètres

## Workflow Recommandé

### Première Configuration
1. Configurez votre logo et textes dans l'admin Shopify
2. Sauvegardez : `.\backup-settings.ps1`
3. Démarrez avec sync : `.\start-dev.ps1 --sync`

### Développement Quotidien
1. Modifiez vos paramètres dans l'admin si nécessaire
2. Sauvegardez rapidement : `.\quick-save.ps1`
3. Redémarrez : `.\start-dev.ps1 --sync`

### Après Modifications Importantes
1. Testez vos changements
2. Sauvegarde complète : `.\backup-settings.ps1`
3. Continuez le développement

## Structure des Sauvegardes

```
backup-settings/
├── settings_backup_2024-01-15_14-30-25.json
├── settings_backup_2024-01-15_16-45-12.json
└── settings_backup_2024-01-16_09-15-33.json
```

## Paramètres Sauvegardés

- **Logo** : Image et largeur
- **Typographie** : Polices header et body
- **Couleurs** : Schémas de couleurs
- **Layout** : Largeur de page, espacements
- **Composants** : Styles de cartes, boutons, etc.
- **Sections** : Configuration des sections
- **Et plus...** : Tous les paramètres du thème

## Avantages

✅ **Persistance** : Vos paramètres ne se réinitialisent plus
✅ **Sécurité** : Sauvegardes multiples avec timestamps
✅ **Flexibilité** : Restauration de n'importe quelle sauvegarde
✅ **Automatisation** : Synchronisation au démarrage
✅ **Simplicité** : Commandes courtes et intuitives

## Dépannage

### "Aucune sauvegarde trouvée"
```powershell
.\backup-settings.ps1
```
Créez d'abord une sauvegarde initiale

### "Erreur lors de l'export"
Vérifiez votre connexion Shopify et réessayez

### Paramètres non synchronisés
1. Sauvegardez : `.\quick-save.ps1`
2. Redémarrez : `.\start-dev.ps1 --sync`

## Notes Importantes

- Les sauvegardes sont locales (dossier `backup-settings/`)
- Chaque sauvegarde a un timestamp unique
- Le script `--sync` utilise toujours la sauvegarde la plus récente
- Les paramètres sont appliqués au redémarrage du serveur 