# Script de restauration des paramètres Second Knife Theme
# Usage: .\restore-settings.ps1 [timestamp]

param(
    [string]$Timestamp = ""
)

Write-Host "Restauration des paramètres et templates du thème..." -ForegroundColor Green

# Si aucun timestamp spécifié, utiliser le plus récent
if ($Timestamp -eq "") {
    $backupDir = ".\backup-settings"
    if (Test-Path $backupDir) {
        $latestBackup = Get-ChildItem -Path $backupDir -Filter "settings_backup_*.json" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
        if ($latestBackup) {
            # Extraire le timestamp du nom de fichier
            $Timestamp = $latestBackup.BaseName -replace "settings_backup_", ""
            Write-Host "Utilisation de la sauvegarde la plus récente: $Timestamp" -ForegroundColor Cyan
        } else {
            Write-Host "Aucune sauvegarde trouvée dans $backupDir" -ForegroundColor Red
            Write-Host "Utilisez d'abord .\backup-settings.ps1 pour créer une sauvegarde" -ForegroundColor Yellow
            exit 1
        }
    } else {
        Write-Host "Dossier de sauvegarde non trouvé: $backupDir" -ForegroundColor Red
        Write-Host "Utilisez d'abord .\backup-settings.ps1 pour créer une sauvegarde" -ForegroundColor Yellow
        exit 1
    }
}

# Définir les chemins de sauvegarde
$backupDir = ".\backup-settings"
$settingsBackupFile = "$backupDir\settings_backup_$Timestamp.json"
$templatesBackupDir = "$backupDir\templates_backup_$Timestamp"

# Vérifier que les fichiers de sauvegarde existent
if (!(Test-Path $settingsBackupFile)) {
    Write-Host "Fichier de sauvegarde settings non trouvé: $settingsBackupFile" -ForegroundColor Red
    exit 1
}

if (!(Test-Path $templatesBackupDir)) {
    Write-Host "Dossier de sauvegarde templates non trouvé: $templatesBackupDir" -ForegroundColor Red
    Write-Host "Cette sauvegarde est peut-être ancienne (avant la mise à jour du script)" -ForegroundColor Yellow
    Write-Host "Restauration seulement des settings..." -ForegroundColor Yellow
}

Write-Host "Restauration depuis la sauvegarde: $Timestamp" -ForegroundColor Cyan

# Sauvegarder l'actuel avant restauration
$currentBackup = ".\config\settings_data_backup_$(Get-Date -Format 'yyyy-MM-dd_HH-mm-ss').json"
if (Test-Path ".\config\settings_data.json") {
    Copy-Item ".\config\settings_data.json" $currentBackup
    Write-Host "Sauvegarde de l'actuel settings: $currentBackup" -ForegroundColor Gray
}

# Restaurer les settings
try {
    Copy-Item $settingsBackupFile ".\config\settings_data.json"
    Write-Host "✅ Settings restaurés avec succès!" -ForegroundColor Green
} catch {
    Write-Host "❌ Erreur lors de la restauration des settings: $_" -ForegroundColor Red
}

# Restaurer les templates si disponibles
if (Test-Path $templatesBackupDir) {
    try {
        # Sauvegarder les templates actuels
        $currentTemplatesBackup = ".\templates_backup_$(Get-Date -Format 'yyyy-MM-dd_HH-mm-ss')"
        if (Test-Path ".\templates\") {
            Copy-Item ".\templates\" $currentTemplatesBackup -Recurse -Force
            Write-Host "Sauvegarde des templates actuels: $currentTemplatesBackup" -ForegroundColor Gray
        }
        
        # Restaurer les templates
        Copy-Item "$templatesBackupDir\*" ".\templates\" -Recurse -Force
        Write-Host "✅ Templates restaurés avec succès!" -ForegroundColor Green
        
        # Afficher les templates restaurés
        $templates = Get-ChildItem $templatesBackupDir -Filter "*.json"
        Write-Host "`nTemplates restaurés:" -ForegroundColor Yellow
        foreach ($template in $templates) {
            Write-Host "  - $($template.Name)" -ForegroundColor Gray
        }
        
    } catch {
        Write-Host "❌ Erreur lors de la restauration des templates: $_" -ForegroundColor Red
    }
}

# Afficher les paramètres restaurés avec gestion d'erreur
try {
    $settings = Get-Content ".\config\settings_data.json" -Encoding UTF8 | ConvertFrom-Json
    Write-Host "`nParamètres restaurés:" -ForegroundColor Yellow
    Write-Host "  - Logo: $($settings.current.logo)" -ForegroundColor Gray
    Write-Host "  - Logo width: $($settings.current.logo_width)px" -ForegroundColor Gray
    Write-Host "  - Font header: $($settings.current.type_header_font)" -ForegroundColor Gray
    Write-Host "  - Font body: $($settings.current.type_body_font)" -ForegroundColor Gray
    Write-Host "  - Page width: $($settings.current.page_width)px" -ForegroundColor Gray
} catch {
    Write-Host "  - Paramètres restaurés avec succès" -ForegroundColor Gray
    Write-Host "  - Vérifiez le fichier config/settings_data.json" -ForegroundColor Gray
}

Write-Host "`n⚠️  IMPORTANT: Pour que les changements soient visibles:" -ForegroundColor Yellow
Write-Host "1. Fermez le serveur de développement (Ctrl+C)" -ForegroundColor Cyan
Write-Host "2. Relancez avec .\start-dev.ps1" -ForegroundColor Cyan

Write-Host "`nRestauration COMPLÈTE terminée!" -ForegroundColor Green 