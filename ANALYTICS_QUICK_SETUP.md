# Configuração Rápida do Google Analytics

## ⚡ Configuração em 3 passos

### 1. Obter o Measurement ID
1. Acesse: https://analytics.google.com/
2. Crie uma propriedade para seu site
3. Copie o **Measurement ID** (formato: G-XXXXXXXXXX)

### 2. Executar o script de configuração

**Opção A - Script automático (Recomendado):**
```powershell
# Abra PowerShell na pasta do projeto
cd c:\projects\my-tools

# Execute o script (substitua pelo seu ID)
.\setup-analytics.ps1 -MeasurementId "G-ABC123DEF4"
```

**Opção B - Substituição manual:**
```powershell
# Buscar e substituir em todos os arquivos
Get-ChildItem -Recurse -Include "*.html" | ForEach-Object {
    (Get-Content $_.FullName) -replace 'G-1B0YZFHHQC', 'G-SEU_ID_AQUI' | Set-Content $_.FullName
}
```

### 3. Verificar configuração
- Publique o site
- Acesse uma página
- Vá ao Google Analytics > Relatórios > Tempo real
- Confirme se aparecem usuários ativos

## 🎯 O que será rastreado

✅ **Pageviews** - Visualizações de cada página
✅ **Sessions** - Sessões de usuário  
✅ **Users** - Usuários únicos
✅ **Bounce Rate** - Taxa de rejeição
✅ **Geographic Data** - País/cidade dos visitantes
✅ **Device Data** - Desktop/mobile/tablet
✅ **Referral Traffic** - De onde vêm os visitantes
✅ **Page Performance** - Tempo de carregamento
✅ **Enhanced Measurements** - Scroll, downloads, cliques

## 📱 Páginas configuradas

Todas as **14 páginas** já têm o código do Google Analytics:

**Principais:**
- index.html
- about.html  
- contact.html
- privacy.html
- terms.html

**Ferramentas:**
- tools/converter-temperatura.html
- tools/converter-medidas.html
- tools/contador-texto.html
- tools/texto-maiusculas-minusculas.html
- tools/remover-acentos.html
- tools/gerar-qr-code.html
- tools/gerador-md5.html
- tools/codificador-base64.html
- tools/timestamp-converter.html

## 🔧 Eventos personalizados (opcional)

Para rastrear ações específicas, adicione:

```javascript
// Exemplo: rastrear uso de ferramentas
gtag('event', 'tool_usage', {
    'tool_name': 'QR Code Generator',
    'event_category': 'engagement'
});

// Exemplo: rastrear downloads
gtag('event', 'file_download', {
    'file_name': 'qrcode.png',
    'file_type': 'image'
});
```

## ⚠️ Importante

- **Substitua** `G-1B0YZFHHQC` pelo seu ID real
- **Teste** em tempo real após publicar
- **Monitore** regularmente as métricas
- **Respeite** a privacidade dos usuários

Agora você tem analytics completo no seu projeto MyTools! 🎉
