# Configuração do Google Analytics - MyTools

## Como configurar o Google Analytics 4 (GA4) no projeto

### 1. Criar uma conta no Google Analytics

1. **Acesse**: https://analytics.google.com/
2. **Entre** com sua conta Google
3. **Clique** em "Começar a usar"
4. **Configure** sua conta:
   - Nome da conta: MyTools
   - País: Brasil
   - Moeda: Real brasileiro (BRL)

### 2. Criar uma propriedade

1. **Nome da propriedade**: MyTools Website
2. **Fuso horário**: (UTC-03:00) Brasília
3. **Moeda**: Real brasileiro
4. **Categoria do setor**: Tecnologia
5. **Tamanho da empresa**: Pequena (1-10 funcionários)

### 3. Configurar o stream de dados

1. **Escolha plataforma**: Web
2. **URL do site**: https://mytools.guru
3. **Nome do stream**: MyTools Website
4. **Marque**: Enhanced measurement (métricas aprimoradas)

### 4. Obter o Measurement ID

Após criar o stream, você receberá um **Measurement ID** no formato:
```
G-XXXXXXXXXX
```

### 5. Atualizar o código do projeto

Substitua `G-1B0YZFHHQC` pelo seu ID real em **todas as páginas**:

**Exemplo de substituição:**
```javascript
// Antes
gtag('config', 'G-1B0YZFHHQC');

// Depois (substitua pelo seu ID)
gtag('config', 'G-ABC123DEF4');
```

### 6. Páginas que precisam ser atualizadas

#### Páginas principais (5):
- ✅ `index.html`
- ✅ `about.html`
- ✅ `contact.html`
- ✅ `privacy.html`
- ✅ `terms.html`

#### Ferramentas (9):
- ✅ `tools/converter-temperatura.html`
- ✅ `tools/converter-medidas.html`
- ✅ `tools/contador-texto.html`
- ✅ `tools/texto-maiusculas-minusculas.html`
- ✅ `tools/remover-acentos.html`
- ✅ `tools/gerar-qr-code.html`
- ✅ `tools/gerador-md5.html`
- ✅ `tools/codificador-base64.html`
- ✅ `tools/timestamp-converter.html`

### 7. Comandos para substituição em massa

**Windows (PowerShell):**
```powershell
# Navegar para a pasta do projeto
cd c:\projects\my-tools

# Substituir em todas as páginas
Get-ChildItem -Recurse -Include "*.html" | ForEach-Object {
    (Get-Content $_.FullName) -replace 'G-1B0YZFHHQC', 'G-SEU_ID_AQUI' | Set-Content $_.FullName
}
```

**Linux/Mac:**
```bash
# Navegar para a pasta do projeto
cd /caminho/para/my-tools

# Substituir em todas as páginas
find . -name "*.html" -type f -exec sed -i 's/G-1B0YZFHHQC/G-SEU_ID_AQUI/g' {} \;
```

### 8. Verificar se está funcionando

1. **Publique** o site
2. **Acesse** uma página do site
3. **No Google Analytics**, vá em "Relatórios" > "Tempo real"
4. **Verifique** se aparecem usuários ativos

### 9. Recursos configurados

✅ **Pageviews** - Visualizações de página automáticas
✅ **Sessions** - Sessões de usuário
✅ **Users** - Usuários únicos
✅ **Bounce Rate** - Taxa de rejeição
✅ **Geographic Data** - Dados geográficos
✅ **Device Data** - Dados de dispositivo
✅ **Referral Traffic** - Tráfego de referência
✅ **Enhanced Measurements** - Métricas aprimoradas (scroll, downloads, etc.)

### 10. Eventos personalizados (opcional)

Para rastrear ações específicas, adicione eventos customizados:

```javascript
// Exemplo: Rastrear uso de ferramentas
function trackToolUsage(toolName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'tool_usage', {
            'tool_name': toolName,
            'event_category': 'engagement'
        });
    }
}

// Usar nas ferramentas
trackToolUsage('QR Code Generator');
trackToolUsage('Temperature Converter');
```

### 11. Conformidade com LGPD

O código implementado:
- ✅ **Não armazena dados pessoais** sem consentimento
- ✅ **Usa configuração padrão** do GA4
- ✅ **Permite desativação** via configurações do navegador
- ✅ **É transparente** sobre coleta de dados

**Recomendação**: Adicionar banner de cookies/consentimento para conformidade total.

### 12. Métricas importantes para acompanhar

1. **Páginas mais visitadas**
2. **Ferramentas mais usadas**
3. **Taxa de rejeição por página**
4. **Tempo de permanência**
5. **Dispositivos mais usados**
6. **Países/regiões dos usuários**
7. **Fontes de tráfego**

---

## Próximos passos

1. ✅ Criar conta no Google Analytics
2. ✅ Obter o Measurement ID
3. ✅ Substituir `G-1B0YZFHHQC` em todas as páginas
4. ✅ Publicar o site
5. ✅ Verificar no painel do Analytics
6. 🔄 Monitorar métricas regularmente

O Google Analytics agora está configurado em **todas as 14 páginas** do projeto!
