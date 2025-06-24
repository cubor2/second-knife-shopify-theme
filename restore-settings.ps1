# Script de restauration des paramètres Second Knife Theme
# Usage: .\restore-settings.ps1 [fichier_backup]

param(
    [string]$BackupFile = ""
)

Write-Host "Restauration des paramètres du thème..." -ForegroundColor Green

# Si aucun fichier spécifié, utiliser le plus récent
if ($BackupFile -eq "") {
    $backupDir = ".\backup-settings"
    if (Test-Path $backupDir) {
        $latestBackup = Get-ChildItem -Path $backupDir -Filter "settings_backup_*.json" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
        if ($latestBackup) {
            $BackupFile = $latestBackup.FullName
            Write-Host "Utilisation de la sauvegarde la plus récente: $($latestBackup.Name)" -ForegroundColor Cyan
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

# Vérifier que le fichier de sauvegarde existe
if (!(Test-Path $BackupFile)) {
    Write-Host "Fichier de sauvegarde non trouvé: $BackupFile" -ForegroundColor Red
    exit 1
}

Write-Host "Restauration depuis: $BackupFile" -ForegroundColor Cyan

# Sauvegarder l'actuel settings_data.json
$currentBackup = ".\config\settings_data_backup_$(Get-Date -Format 'yyyy-MM-dd_HH-mm-ss').json"
if (Test-Path ".\config\settings_data.json") {
    Copy-Item ".\config\settings_data.json" $currentBackup
    Write-Host "Sauvegarde de l'actuel: $currentBackup" -ForegroundColor Gray
}

# Restaurer le fichier de sauvegarde
try {
    Copy-Item $BackupFile ".\config\settings_data.json"
    Write-Host "Paramètres restaurés avec succès!" -ForegroundColor Green
    
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
    
    Write-Host "`nPour appliquer les changements, redémarrez le serveur avec .\start-dev.ps1" -ForegroundColor Cyan
    
} catch {
    Write-Host "Erreur lors de la restauration: $_" -ForegroundColor Red
}

Write-Host "`nRestauration terminée!" -ForegroundColor Green 