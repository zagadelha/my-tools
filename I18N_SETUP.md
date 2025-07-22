# Sistema de Internacionalização (i18n) - MyTools

## Visão Geral

O MyTools agora possui um sistema completo de internacionalização que permite suporte a múltiplos idiomas de forma dinâmica. O sistema é implementado 100% em JavaScript, sem necessidade de bibliotecas externas.

## Idiomas Suportados

- **Português (pt-BR)** - Idioma padrão 🇧🇷
- **Inglês (en)** - English 🇺🇸
- **Espanhol (es)** - Español 🇪🇸

## Características

✅ **Detecção Automática**: Detecta automaticamente o idioma preferido do navegador  
✅ **Persistência**: Salva a preferência do usuário no localStorage  
✅ **Seletor Visual**: Interface com bandeiras para seleção de idioma  
✅ **Responsivo**: Funciona perfeitamente em dispositivos móveis  
✅ **Sem Recarregamento**: Troca de idioma instantânea via JavaScript  
✅ **Fallback Inteligente**: Volta para português se o idioma não for suportado  

## Como Funciona

### 1. Arquitetura do Sistema

O sistema está organizado nos seguintes arquivos:

```
assets/
├── js/
│   ├── i18n.js         # Classe principal do sistema i18n
│   └── main.js         # Funcionalidades globais atualizadas
└── css/
    └── style.css       # Estilos para o seletor de idioma
```

### 2. Implementação em Páginas HTML

Para adicionar suporte a internacionalização em uma página:

#### a) Incluir os Scripts
```html
<script src="assets/js/i18n.js"></script>
<script src="assets/js/main.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const i18n = new I18n();
        i18n.init();
    });
</script>
```

#### b) Adicionar Atributos data-i18n
```html
<!-- Texto simples -->
<h1 data-i18n="hero.title">Ferramentas Úteis Online</h1>
<p data-i18n="hero.subtitle">Uma coleção de ferramentas...</p>

<!-- Placeholder de input -->
<input type="text" data-i18n-placeholder="hero.searchPlaceholder" placeholder="Buscar ferramentas...">

<!-- Título de elementos -->
<button data-i18n-title="buttons.copy" title="Copiar">📋</button>
```

### 3. Estrutura das Traduções

As traduções estão organizadas hierarquicamente no arquivo `i18n.js`:

```javascript
const translations = {
    'pt-BR': {
        nav: {
            home: 'Início',
            about: 'Sobre',
            contact: 'Contato'
        },
        hero: {
            title: 'Ferramentas Úteis Online',
            subtitle: 'Uma coleção de ferramentas...',
            searchPlaceholder: 'Buscar ferramentas...'
        },
        tools: {
            temperature: {
                title: '🌡️ Conversor de Temperatura',
                description: 'Converta facilmente entre...'
            }
        }
    }
};
```

## Adicionando Novas Traduções

### 1. Adicionar Chaves de Tradução

Edite o arquivo `assets/js/i18n.js` e adicione as novas chaves em todos os idiomas:

```javascript
// Em pt-BR
newSection: {
    title: 'Novo Título',
    description: 'Nova descrição'
}

// Em en
newSection: {
    title: 'New Title', 
    description: 'New description'
}

// Em es
newSection: {
    title: 'Nuevo Título',
    description: 'Nueva descripción'
}
```

### 2. Usar nas Páginas HTML

```html
<h2 data-i18n="newSection.title">Novo Título</h2>
<p data-i18n="newSection.description">Nova descrição</p>
```

## API do Sistema i18n

### Métodos Principais

```javascript
const i18n = new I18n();

// Inicializar o sistema
i18n.init();

// Obter tradução
const text = i18n.t('hero.title'); // Retorna a tradução

// Mudar idioma
i18n.setLanguage('en'); // Muda para inglês

// Obter idioma atual
const currentLang = i18n.getCurrentLanguage(); // 'pt-BR', 'en', ou 'es'
```

### Eventos Personalizados

O sistema dispara eventos que você pode escutar:

```javascript
// Escutar mudanças de idioma
document.addEventListener('languageChanged', function(e) {
    console.log('Idioma mudou para:', e.detail.language);
    // Atualizar conteúdo dinâmico se necessário
});
```

## Interface do Seletor de Idioma

O seletor de idioma é automaticamente inserido no header da página com as seguintes características:

- **Design Moderno**: Dropdown com bandeiras e nomes dos idiomas
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Acessível**: Suporte completo a teclado e leitores de tela
- **Intuitivo**: Bandeiras para identificação visual rápida

## Boas Práticas

### 1. Organização das Chaves
- Use nomes descritivos: `tools.qrCode.title` ao invés de `tool1`
- Agrupe por seção: `nav.*`, `hero.*`, `tools.*`, `footer.*`
- Seja consistente com a nomenclatura

### 2. Textos Padrão
- Sempre forneça texto padrão no HTML para fallback
- Use o português como idioma base para novos textos

### 3. Testes
- Teste todos os idiomas após adicionar novos textos
- Verifique se os textos não quebram o layout
- Teste em dispositivos móveis

## Exemplo de Implementação Completa

Aqui está um exemplo de como implementar i18n em uma nova página:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>MyTools - Nova Ferramenta</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header class="header">
        <div class="header-content">
            <a href="../index.html" class="logo">
                <img src="../assets/img/logo.png" alt="MyTools" class="logo-image">
            </a>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="../index.html" data-i18n="nav.home">Início</a></li>
                    <li><a href="../about.html" data-i18n="nav.about">Sobre</a></li>
                    <li><a href="../contact.html" data-i18n="nav.contact">Contato</a></li>
                </ul>
                <!-- Language selector será inserido aqui automaticamente -->
            </nav>
        </div>
    </header>

    <main class="main">
        <section class="hero">
            <h1 data-i18n="tools.newTool.title">Nova Ferramenta</h1>
            <p data-i18n="tools.newTool.description">Descrição da nova ferramenta</p>
        </section>

        <section class="tool-container">
            <div class="input-group">
                <label data-i18n="tools.newTool.inputLabel">Digite o texto:</label>
                <textarea data-i18n-placeholder="tools.newTool.inputPlaceholder" 
                         placeholder="Cole seu texto aqui..."></textarea>
            </div>
            
            <button data-i18n="buttons.process" class="btn btn-primary">Processar</button>
            
            <div class="result-section">
                <h3 data-i18n="common.result">Resultado:</h3>
                <div class="result-content"></div>
                <button data-i18n="buttons.copy" class="btn btn-secondary">Copiar</button>
            </div>
        </section>
    </main>

    <script src="../assets/js/i18n.js"></script>
    <script src="../assets/js/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const i18n = new I18n();
            i18n.init();
            
            // Suas funcionalidades específicas da ferramenta aqui
        });
    </script>
</body>
</html>
```

## Suporte e Manutenção

O sistema foi projetado para ser:
- **Fácil de manter**: Todas as traduções em um arquivo
- **Escalável**: Simples adicionar novos idiomas
- **Performático**: Carregamento rápido e eficiente
- **Compatível**: Funciona em todos os navegadores modernos

Para dúvidas ou sugestões sobre o sistema de internacionalização, consulte a documentação ou entre em contato através da página de contato do site.
