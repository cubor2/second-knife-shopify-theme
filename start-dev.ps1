# Script de demarrage rapide pour Second Knife Theme
# Usage: .\start-dev.ps1 [--sync]

param(
    [switch]$Sync
)

Write-Host "Demarrage du serveur Second Knife Theme..." -ForegroundColor Green

# Verifier si on est dans le bon repertoire
$currentDir = Get-Location
if ($currentDir.Path -notlike "*dawn*") {
    Write-Host "Attention: Assurez-vous d'etre dans le dossier 'dawn'" -ForegroundColor Yellow
    Write-Host "   Repertoire actuel: $($currentDir.Path)" -ForegroundColor Gray
}

# Synchronisation automatique si demandée
if ($Sync) {
    Write-Host "`nSynchronisation automatique des paramètres..." -ForegroundColor Cyan
    
    # Vérifier s'il existe une sauvegarde récente
    $backupDir = ".\backup-settings"
    if (Test-Path $backupDir) {
        $latestBackup = Get-ChildItem -Path $backupDir -Filter "settings_backup_*.json" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
        if ($latestBackup) {
            Write-Host "Restauration de la sauvegarde: $($latestBackup.Name)" -ForegroundColor Yellow
            & ".\restore-settings.ps1" $latestBackup.FullName
        } else {
            Write-Host "Aucune sauvegarde trouvée. Création d'une sauvegarde initiale..." -ForegroundColor Yellow
            & ".\backup-settings.ps1"
        }
    } else {
        Write-Host "Dossier de sauvegarde non trouvé. Création d'une sauvegarde initiale..." -ForegroundColor Yellow
        & ".\backup-settings.ps1"
    }
    
    Write-Host "`nSynchronisation terminée!" -ForegroundColor Green
}

# Lancer le serveur avec le bon store
Write-Host "`nConnexion a second-knife.myshopify.com..." -ForegroundColor Cyan
shopify theme dev --store=second-knife.myshopify.com

# Le script s'arrete ici car shopify theme dev reste actif 