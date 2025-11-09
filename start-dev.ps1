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
    Write-Host "`nTelecharger les settings depuis le theme LIVE Shopify..." -ForegroundColor Cyan
    
    # Télécharger les settings depuis le thème LIVE
    shopify theme pull --store=second-knife.myshopify.com --theme=183719133448 --only config/settings_data.json --force
    
    Write-Host "`nSynchronisation terminee!" -ForegroundColor Green
    Start-Sleep -Seconds 2
}

# Lancer le serveur avec le bon store et le THÈME LIVE
Write-Host "`nConnexion au thème LIVE (Second Knife LIVE #183719133448)..." -ForegroundColor Cyan
shopify theme dev --store=second-knife.myshopify.com --theme=183719133448

# Le script s'arrete ici car shopify theme dev reste actif 