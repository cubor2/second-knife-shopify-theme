# Script de test de la synchronisation
# Usage: .\test-sync.ps1

Write-Host "TEST DE SYNCHRONISATION - Second Knife Theme" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Vérifier les sauvegardes disponibles
$backupDir = ".\backup-settings"
if (Test-Path $backupDir) {
    $backups = Get-ChildItem -Path $backupDir -Filter "settings_backup_*.json" | Sort-Object LastWriteTime -Descending
    Write-Host "`nSauvegardes disponibles:" -ForegroundColor Yellow
    foreach ($backup in $backups) {
        Write-Host "  - $($backup.Name) ($($backup.LastWriteTime))" -ForegroundColor Gray
    }
} else {
    Write-Host "`nAucune sauvegarde trouvée" -ForegroundColor Red
}

# Vérifier le fichier settings_data.json actuel
if (Test-Path ".\config\settings_data.json") {
    Write-Host "`nFichier settings_data.json actuel:" -ForegroundColor Yellow
    try {
        # Lire le fichier et ignorer les commentaires
        $content = Get-Content ".\config\settings_data.json" -Raw
        $jsonContent = $content -replace '/\*.*?\*/', '' -replace '^\s*//.*$', '' -replace '^\s*$', ''
        $settings = $jsonContent | ConvertFrom-Json
        Write-Host "  - Logo: $($settings.current.logo)" -ForegroundColor Gray
        Write-Host "  - Logo width: $($settings.current.logo_width)px" -ForegroundColor Gray
        Write-Host "  - Font header: $($settings.current.type_header_font)" -ForegroundColor Gray
        Write-Host "  - Font body: $($settings.current.type_body_font)" -ForegroundColor Gray
        Write-Host "  - Page width: $($settings.current.page_width)px" -ForegroundColor Gray
    } catch {
        Write-Host "  - Erreur de lecture du fichier: $_" -ForegroundColor Red
    }
} else {
    Write-Host "`nFichier settings_data.json non trouvé" -ForegroundColor Red
}

# Test de restauration
Write-Host "`nTest de restauration..." -ForegroundColor Yellow
if ($backups -and $backups.Count -gt 0) {
    $latestBackup = $backups[0]
    Write-Host "Restauration depuis: $($latestBackup.Name)" -ForegroundColor Cyan
    
    # Sauvegarder l'actuel
    $testBackup = ".\config\settings_data_test_$(Get-Date -Format 'yyyy-MM-dd_HH-mm-ss').json"
    if (Test-Path ".\config\settings_data.json") {
        Copy-Item ".\config\settings_data.json" $testBackup
    }
    
    # Restaurer
    Copy-Item $latestBackup.FullName ".\config\settings_data.json"
    Write-Host "Restauration test réussie!" -ForegroundColor Green
    
    # Restaurer l'original
    if (Test-Path $testBackup) {
        Copy-Item $testBackup ".\config\settings_data.json"
        Remove-Item $testBackup
        Write-Host "Fichier original restauré" -ForegroundColor Gray
    }
} else {
    Write-Host "Aucune sauvegarde disponible pour le test" -ForegroundColor Red
}

Write-Host "`nTest terminé!" -ForegroundColor Green
Write-Host "`nCommandes disponibles:" -ForegroundColor Cyan
Write-Host "  .\backup-settings.ps1    - Sauvegarde complète" -ForegroundColor Gray
Write-Host "  .\quick-save.ps1         - Sauvegarde rapide" -ForegroundColor Gray
Write-Host "  .\restore-settings.ps1   - Restauration" -ForegroundColor Gray
Write-Host "  .\start-dev.ps1 --sync   - Démarrage avec sync" -ForegroundColor Gray 