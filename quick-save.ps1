#!/usr/bin/env pwsh

# Script de sauvegarde rapide des paramètres
# Usage: .\quick-save.ps1

Write-Host "Sauvegarde rapide des paramètres actuels..." -ForegroundColor Green

# Créer le dossier de sauvegarde s'il n'existe pas
$backupDir = ".\backup-settings"
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir
}

# Nom du fichier de sauvegarde avec timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupFile = "$backupDir\settings_backup_$timestamp.json"

# Copier le fichier settings_data.json actuel
if (Test-Path ".\config\settings_data.json") {
    Copy-Item ".\config\settings_data.json" $backupFile
    Write-Host "Sauvegarde créée: $backupFile" -ForegroundColor Green
    
    # Afficher un résumé
    $settings = Get-Content ".\config\settings_data.json" | ConvertFrom-Json
    Write-Host "`nParamètres sauvegardés:" -ForegroundColor Yellow
    Write-Host "  - Logo width: $($settings.current.logo_width)px" -ForegroundColor Gray
    Write-Host "  - Font header: $($settings.current.type_header_font)" -ForegroundColor Gray
    Write-Host "  - Font body: $($settings.current.type_body_font)" -ForegroundColor Gray
    Write-Host "  - Page width: $($settings.current.page_width)px" -ForegroundColor Gray
} else {
    Write-Host "Erreur: Fichier settings_data.json non trouvé" -ForegroundColor Red
}

Write-Host "`nSauvegarde rapide terminée!" -ForegroundColor Green 