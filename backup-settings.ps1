# Script de sauvegarde des paramètres Second Knife Theme
# Usage: .\backup-settings.ps1

Write-Host "Sauvegarde des paramètres du thème..." -ForegroundColor Green

# Créer le dossier de sauvegarde s'il n'existe pas
$backupDir = ".\backup-settings"
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir
    Write-Host "Dossier de sauvegarde créé: $backupDir" -ForegroundColor Cyan
}

# Nom du fichier de sauvegarde avec timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupFile = "$backupDir\settings_backup_$timestamp.json"

Write-Host "Export des paramètres depuis second-knife.myshopify.com..." -ForegroundColor Cyan

# Exporter les paramètres du thème actuel
try {
    shopify theme pull --store=second-knife.myshopify.com --only=config/settings_data.json
    
    # Copier le fichier settings_data.json vers le dossier de sauvegarde
    if (Test-Path ".\config\settings_data.json") {
        Copy-Item ".\config\settings_data.json" $backupFile
        Write-Host "Sauvegarde créée: $backupFile" -ForegroundColor Green
        
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
    } else {
        Write-Host "Erreur: Impossible de récupérer settings_data.json" -ForegroundColor Red
    }
} catch {
    Write-Host "Erreur lors de l'export: $_" -ForegroundColor Red
}

Write-Host "`nSauvegarde terminée!" -ForegroundColor Green 