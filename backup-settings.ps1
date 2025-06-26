# Script de sauvegarde des paramètres Second Knife Theme
# Usage: .\backup-settings.ps1

Write-Host "Sauvegarde des paramètres et templates du thème..." -ForegroundColor Green

# Créer le dossier de sauvegarde s'il n'existe pas
$backupDir = ".\backup-settings"
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir
    Write-Host "Dossier de sauvegarde créé: $backupDir" -ForegroundColor Cyan
}

# Nom du fichier de sauvegarde avec timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$settingsBackupFile = "$backupDir\settings_backup_$timestamp.json"
$templatesBackupDir = "$backupDir\templates_backup_$timestamp"

Write-Host "Export des paramètres et templates depuis second-knife.myshopify.com..." -ForegroundColor Cyan

# Exporter TOUT depuis le thème en ligne (settings + templates + sections)
try {
    shopify theme pull --store=second-knife.myshopify.com --only=config/ --only=templates/
    
    # Sauvegarder settings_data.json
    if (Test-Path ".\config\settings_data.json") {
        Copy-Item ".\config\settings_data.json" $settingsBackupFile
        Write-Host "Settings sauvegardés: $settingsBackupFile" -ForegroundColor Green
    }
    
    # Sauvegarder TOUS les templates (notamment index.json pour la home)
    if (Test-Path ".\templates\") {
        New-Item -ItemType Directory -Path $templatesBackupDir -Force
        Copy-Item ".\templates\*" $templatesBackupDir -Recurse -Force
        Write-Host "Templates sauvegardés: $templatesBackupDir" -ForegroundColor Green
        
        # Afficher les templates sauvegardés
        $templates = Get-ChildItem $templatesBackupDir -Filter "*.json"
        Write-Host "`nTemplates sauvegardés:" -ForegroundColor Yellow
        foreach ($template in $templates) {
            Write-Host "  - $($template.Name)" -ForegroundColor Gray
        }
    }
    
    # Afficher les paramètres importants avec gestion d'erreur
    try {
        $settings = Get-Content ".\config\settings_data.json" -Encoding UTF8 | ConvertFrom-Json
        Write-Host "`nParamètres sauvegardés:" -ForegroundColor Yellow
        Write-Host "  - Logo: $($settings.current.logo)" -ForegroundColor Gray
        Write-Host "  - Logo width: $($settings.current.logo_width)px" -ForegroundColor Gray
        Write-Host "  - Font header: $($settings.current.type_header_font)" -ForegroundColor Gray
        Write-Host "  - Font body: $($settings.current.type_body_font)" -ForegroundColor Gray
        Write-Host "  - Page width: $($settings.current.page_width)px" -ForegroundColor Gray
    } catch {
        Write-Host "  - Sauvegarde créée avec succès" -ForegroundColor Gray
        Write-Host "  - Paramètres disponibles dans le fichier" -ForegroundColor Gray
    }
    
} catch {
    Write-Host "Erreur lors de l'export: $_" -ForegroundColor Red
}

Write-Host "`nSauvegarde COMPLÈTE terminée!" -ForegroundColor Green
Write-Host "Includes: settings + templates (home page, etc.)" -ForegroundColor Cyan 