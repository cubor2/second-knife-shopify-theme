#!/usr/bin/env pwsh

# Script de sauvegarde rapide Second Knife
# Usage: .\quick-save.ps1 "Description des modifications"

param(
    [string]$Message = "Sauvegarde rapide du travail en cours"
)

Write-Host "SECOND KNIFE QUICK SAVE" -ForegroundColor Green
Write-Host "=======================" -ForegroundColor Green

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$status = git status --porcelain

if ($status) {
    Write-Host "Modifications detectees:" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    
    Write-Host "Sauvegarde en cours..." -ForegroundColor Blue
    git add -A
    
    $commitMessage = "QUICK-SAVE $timestamp - $Message"
    git commit -m $commitMessage
    
    Write-Host "Sauvegarde terminee !" -ForegroundColor Green
    Write-Host "Commit: $commitMessage" -ForegroundColor Cyan
    
    # Afficher les derniers commits
    Write-Host ""
    Write-Host "Dernieres sauvegardes:" -ForegroundColor Magenta
    git log --oneline -5
} else {
    Write-Host "Aucune modification a sauvegarder" -ForegroundColor Blue
    Write-Host "Dernieres sauvegardes:" -ForegroundColor Magenta
    git log --oneline -3
}

Write-Host ""
Write-Host "Pour sauvegardes automatiques: .\auto-backup.ps1" -ForegroundColor Yellow 