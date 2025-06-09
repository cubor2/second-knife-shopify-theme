#!/usr/bin/env pwsh

# Script de sauvegarde automatique Second Knife
# Sauvegarde le travail toutes les 15 minutes pour éviter toute perte de données

Write-Host "SECOND KNIFE AUTO-BACKUP - Demarrage..." -ForegroundColor Green

# Fonction pour créer un commit avec timestamp
function Backup-Work {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $status = git status --porcelain
    
    if ($status) {
        Write-Host "Modifications detectees - Sauvegarde en cours..." -ForegroundColor Yellow
        
        git add -A
        $commitMessage = "AUTO-BACKUP $timestamp - Travail sauvegarde automatiquement"
        git commit -m $commitMessage
        
        Write-Host "Sauvegarde terminee a $timestamp" -ForegroundColor Green
        Write-Host "Commit: $commitMessage" -ForegroundColor Cyan
    } else {
        Write-Host "Aucune modification detectee a $timestamp" -ForegroundColor Blue
    }
}

# Boucle infinie pour sauvegarder toutes les 15 minutes
Write-Host "Sauvegarde automatique toutes les 15 minutes..." -ForegroundColor Magenta
Write-Host "   Arreter avec Ctrl+C" -ForegroundColor Yellow

while ($true) {
    try {
        Backup-Work
        Write-Host "Prochaine sauvegarde dans 15 minutes..." -ForegroundColor Gray
        Start-Sleep -Seconds 900  # 15 minutes
    }
    catch {
        Write-Host "Erreur lors de la sauvegarde: $_" -ForegroundColor Red
        Start-Sleep -Seconds 60   # Attendre 1 minute avant de réessayer
    }
} 