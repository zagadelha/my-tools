// Script para corrigir i18n nas páginas de ferramentas
const fs = require('fs');
const path = require('path');

const toolPages = [
    'tools/texto-maiusculas-minusculas.html',
    'tools/remover-acentos.html',
    'tools/contador-texto.html',
    'tools/codificador-base64.html',
    'tools/gerador-md5.html',
    'tools/timestamp-converter.html'
];

function fixI18nInPage(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`Arquivo não encontrado: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Adicionar script i18n.js após main.js
    content = content.replace(
        /(<script src="\.\.\/assets\/js\/main\.js"><\/script>)\s*(<script>)/,
        '$1\n    <script src="../assets/js/i18n.js"></script>\n    $2'
    );
    
    // 2. Consolidar inicialização do i18n no DOMContentLoaded existente
    content = content.replace(
        /(document\.addEventListener\('DOMContentLoaded', function\(\) \{[\s\S]*?\}\);)\s*<\/script>\s*<script src="\.\.\/assets\/js\/i18n\.js"><\/script>\s*<script>\s*document\.addEventListener\('DOMContentLoaded', \(\) => \{\s*const i18n = new I18n\(\);\s*i18n\.init\(\);\s*\}\);\s*<\/script>/,
        function(match, domContentLoaded) {
            // Extrair o conteúdo do primeiro DOMContentLoaded
            const content = domContentLoaded.replace(
                /document\.addEventListener\('DOMContentLoaded', function\(\) \{([\s\S]*?)\}\);/,
                function(m, innerContent) {
                    return `document.addEventListener('DOMContentLoaded', function() {
            // Initialize i18n
            const i18n = new I18n();
            i18n.init();
            ${innerContent}
        });`;
                }
            );
            return content + '\n    </script>';
        }
    );

    fs.writeFileSync(filePath, content);
    console.log(`i18n corrigido em: ${filePath}`);
}

// Aplicar correções
console.log('Corrigindo i18n nas páginas de ferramentas...');

toolPages.forEach(page => {
    fixI18nInPage(page);
});

console.log('Correções aplicadas com sucesso!');
