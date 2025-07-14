#!/usr/bin/env powershell

# Script para substituir o G-1B0YZFHHQC pelo seu ID real do Google Analytics
# Execute este script após obter seu Measurement ID do Google Analytics

# INSTRUÇÕES:
# 1. Substitua "G-SEU_ID_AQUI" pelo seu ID real (ex: G-ABC123DEF4)
# 2. Execute este script na pasta raiz do projeto
# 3. Verifique se todas as páginas foram atualizadas

param(
    [Parameter(Mandatory=$true)]
    [string]$MeasurementId
)

Write-Host "🔄 Configurando Google Analytics com ID: $MeasurementId" -ForegroundColor Yellow

# Validar formato do ID
if ($MeasurementId -notmatch '^G-[A-Z0-9]+$') {
    Write-Host "❌ Erro: ID deve estar no formato G-XXXXXXXXXX" -ForegroundColor Red
    exit 1
}

# Contar arquivos HTML
$htmlFiles = Get-ChildItem -Recurse -Include "*.html"
$totalFiles = $htmlFiles.Count

Write-Host "📁 Encontrados $totalFiles arquivos HTML" -ForegroundColor Cyan

# Processar cada arquivo
$updatedFiles = 0
foreach ($file in $htmlFiles) {
    try {
        $content = Get-Content $file.FullName -Raw
        
        if ($content -match 'G-1B0YZFHHQC') {
            $newContent = $content -replace 'G-1B0YZFHHQC', $MeasurementId
            Set-Content $file.FullName -Value $newContent -NoNewline
            Write-Host "✅ Atualizado: $($file.Name)" -ForegroundColor Green
            $updatedFiles++
        } else {
            Write-Host "⚠️  Já configurado: $($file.Name)" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "❌ Erro ao processar: $($file.Name) - $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n📊 Resumo:" -ForegroundColor Cyan
Write-Host "   Total de arquivos: $totalFiles" -ForegroundColor White
Write-Host "   Arquivos atualizados: $updatedFiles" -ForegroundColor Green
Write-Host "   Measurement ID: $MeasurementId" -ForegroundColor White

if ($updatedFiles -gt 0) {
    Write-Host "`n🎉 Google Analytics configurado com sucesso!" -ForegroundColor Green
    Write-Host "📈 Agora publique o site e verifique no painel do Analytics" -ForegroundColor Cyan
} else {
    Write-Host "`n⚠️  Nenhum arquivo foi atualizado (pode já estar configurado)" -ForegroundColor Yellow
}

Write-Host "`n📋 Próximos passos:" -ForegroundColor Cyan
Write-Host "   1. Publique o site" -ForegroundColor White
Write-Host "   2. Acesse analytics.google.com" -ForegroundColor White
Write-Host "   3. Vá em Relatórios > Tempo real" -ForegroundColor White
Write-Host "   4. Verifique se aparecem usuários ativos" -ForegroundColor White
