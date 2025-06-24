# Script de demarrage rapide pour Second Knife Theme
# Usage: .\start-dev.ps1

Write-Host "Demarrage du serveur Second Knife Theme..." -ForegroundColor Green

# Verifier si on est dans le bon repertoire
$currentDir = Get-Location
if ($currentDir.Path -notlike "*dawn*") {
    Write-Host "Attention: Assurez-vous d'etre dans le dossier 'dawn'" -ForegroundColor Yellow
    Write-Host "   Repertoire actuel: $($currentDir.Path)" -ForegroundColor Gray
}

# Lancer le serveur avec le bon store
Write-Host "Connexion a second-knife.myshopify.com..." -ForegroundColor Cyan
shopify theme dev --store=second-knife.myshopify.com

# Le script s'arrete ici car shopify theme dev reste actif 