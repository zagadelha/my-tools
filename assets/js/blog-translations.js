// ============================================================================
// TRADUÇÕES DOS ARTIGOS DO BLOG
// ============================================================================
// Estrutura: blogArticleTranslations[idioma][slug-do-artigo]
// 
// Para adicionar um novo artigo:
// 1. Adicione o artigo nas 3 seções: 'pt-BR', 'en' e 'es'
// 2. Use a estrutura: { intro: '', h2: [], h3: [], lists: {}, paragraphs: {} }
// 3. Mantenha a vírgula no final de cada artigo (exceto o último)
// ============================================================================

const blogArticleTranslations = {
    // ========================================================================
    // PORTUGUÊS BRASILEIRO
    // ========================================================================
    'pt-BR': {
        'remover-acentos': {
            intro: 'Remover acentos de textos é uma necessidade comum em programação, criação de URLs, SEO e integração de sistemas.',
            h2: ['🎯 Por Que Remover Acentos?', '📝 Aplicações Comuns', '🔧 Conversões Comuns', '⚠️ Quando NÃO Remover', '🌍 Casos Especiais por Idioma', '🚀 Use Nossa Ferramenta'],
            lists: {
                why: ['URLs amigáveis', 'Compatibilidade com sistemas antigos', 'Nomes de variáveis', 'SEO melhor', 'Integração de APIs'],
                conversions: ['á, à, ã, â → a', 'é, ê → e', 'í → i', 'ó, ô, õ → o', 'ú, ü → u', 'ç → c']
            }
        },
        'gerar-qr-code': {
            intro: 'QR Codes revolucionaram a forma como compartilhamos informações. De cardápios digitais a pagamentos, entenda como criar e usar efetivamente.',
            h2: ['📱 O Que É um QR Code?', '🎯 Usos Principais', '💼 Aplicações Comerciais', '✨ Melhores Práticas', '🎨 Personalização', '📊 Rastreamento', '🔒 Segurança', '💡 Ideias Criativas'],
            lists: {
                uses: ['URLs para sites', 'Pagamentos PIX', 'Compartilhar WiFi', 'Contatos vCard', 'Ingressos de eventos', 'Cupons e promoções', 'Cardápios digitais'],
                practices: ['Tamanho mínimo 2x2 cm', 'QR escuro em fundo claro', 'Margem de espaço ao redor', 'URL curta', 'Sempre teste em vários dispositivos']
            }
        },
        'contador-texto': {
            intro: 'Contar palavras e caracteres é essencial para redes sociais, SEO, escrita acadêmica e conteúdo digital.',
            h2: ['📊 Limites Importantes', '✍️ Por Que Contar?', '🎯 Métricas', '📱 Redes Sociais', '💡 Dicas'],
            lists: {
                limits: ['Twitter: 280 caracteres', 'Meta Description: 155-160', 'Título SEO: 50-60', 'Instagram: 2.200', 'LinkedIn: 3.000'],
                why: ['SEO: 1.500-2.500 palavras', 'Academia: limites estritos', 'Freelance: pagamento/palavra', 'Redes sociais: respeitar limites']
            }
        },
        'codificador-base64': {
            intro: 'Base64 é um método de codificação que converte dados binários em texto ASCII. Essencial para desenvolvimento web, APIs e transmissão de dados.',
            h2: ['🤔 O Que É Base64?', '🎯 Para Que Serve?', '💻 Exemplo Prático', '🌐 Uso em Web', '⚠️ Quando NÃO Usar', '🔒 NÃO É Criptografia!', '📊 Vantagens'],
            lists: {
                uses: ['Imagens inline em HTML/CSS', 'Emails com anexos', 'Transmitir arquivos em JSON', 'Basic Auth HTTP', 'Data URIs', 'Certificados'],
                pros: ['Fácil transmissão', 'Compatível JSON/XML', 'Reduz requisições HTTP'],
                cons: ['Aumenta +33% tamanho', 'Não cacheable', 'Não é seguro']
            }
        },
        'gerador-md5': {
            intro: 'MD5 é um algoritmo de hash criptográfico que gera uma assinatura única de 32 caracteres para qualquer dado.',
            h2: ['🔐 O Que É MD5?', '🎯 Para Que Serve?', '✅ Casos de Uso', '⚠️ Segurança Obsoleta', '🔄 Alternativas', '💡 Quando Usar'],
            lists: {
                uses: ['Checksums de arquivos', 'ETags para cache', 'IDs únicos não-críticos', 'Detectar duplicatas'],
                alternatives: ['SHA-256: segurança geral', 'SHA-3: mais recente', 'bcrypt: senhas', 'Argon2: senhas (melhor)']
            }
        },
        'timestamp-converter': {
            intro: 'Timestamp Unix é o número de segundos desde 1º de janeiro de 1970. Padrão universal para representar datas em programação.',
            h2: ['⏰ O Que É Timestamp?', '🎯 Para Que Serve?', '💻 Exemplos', '🌍 Fusos Horários', '📊 Vantagens', '⚠️ Problema 2038'],
            lists: {
                uses: ['Banco de dados uniformes', 'APIs sem ambiguidade', 'Logs cronológicos', 'Cache de expiração', 'Sistemas distribuídos'],
                examples: ['0 = 01/01/1970', '1234567890 = 13/02/2009', '1700000000 = 14/11/2023']
            }
        },
        'texto-maiusculas-minusculas': {
            intro: 'Transformar texto entre maiúsculas e minúsculas é essencial para formatação, SEO e padronização de dados.',
            h2: ['🔤 Estilos de Formato', '🎯 Quando Usar', '💼 Uso Profissional', '🌐 Diferenças de Idioma', '✨ Dicas'],
            lists: {
                styles: ['MAIÚSCULAS: títulos, ênfase', 'minúsculas: URLs, emails', 'Title Case: títulos de artigos', 'Sentence case: texto normal'],
                uses: ['Títulos SEO: Title Case', 'URLs: minúsculas', 'Código: convenções', 'Hashtags: camelCase']
            }
        },
        'conversor-temperatura': {
            intro: 'Conversão de temperatura entre Celsius, Fahrenheit e Kelvin é essencial em ciência, culinária, viagens e meteorologia.',
            h2: ['🌡️ Escalas', '🧮 Fórmulas', '🌍 Uso Mundial', '🔬 Aplicações Científicas', '🍳 Aplicações Práticas', '💡 Curiosidades'],
            lists: {
                scales: ['Celsius: água congela a 0°C, ferve a 100°C', 'Fahrenheit: congela a 32°F, ferve a 212°F', 'Kelvin: zero absoluto a 0K (-273.15°C)'],
                formulas: ['C para F: (°C × 9/5) + 32', 'F para C: (°F - 32) × 5/9', 'C para K: °C + 273.15', 'K para C: K - 273.15']
            }
        },
        'conversor-medidas': {
            intro: 'Converter medidas entre diferentes unidades é essencial no dia a dia, seja viajando, cozinhando, construindo ou estudando.',
            h2: ['📏 Comprimento', '⚖️ Peso e Massa', '📦 Volume', '⏱️ Tempo', '💾 Armazenamento Digital', '🌡️ Temperatura', '💡 Dicas'],
            lists: {
                length: ['1 metro = 100 cm = 3.28 pés', '1 km = 1.000 m = 0.621 milhas', '1 polegada = 2.54 cm', '1 pé = 30.48 cm'],
                weight: ['1 kg = 1.000 g = 2.20 libras', '1 libra = 453.6 g', '1 onça = 28.35 g', '1 tonelada = 1.000 kg']
            }
        }
    },

    // ========================================================================
    // ENGLISH
    // ========================================================================
    'en': {
        'remover-acentos': {
            intro: 'Removing accents from text is a common need in programming, URL creation, SEO and system integration.',
            h2: ['🎯 Why Remove Accents?', '📝 Common Applications', '🔧 Common Conversions', '⚠️ When NOT to Remove', '🌍 Special Cases by Language', '🚀 Use Our Tool'],
            lists: {
                why: ['Friendly URLs', 'Legacy system compatibility', 'Variable names', 'Better SEO', 'API integration'],
                conversions: ['á, à, ã, â → a', 'é, ê → e', 'í → i', 'ó, ô, õ → o', 'ú, ü → u', 'ç → c']
            }
        },
        'gerar-qr-code': {
            intro: 'QR codes have revolutionized how we share information. From digital menus to payments, understand how to create and use them effectively.',
            h2: ['📱 What is a QR Code?', '🎯 Main Uses', '💼 Business Applications', '✨ Best Practices', '🎨 Customization', '📊 Tracking', '🔒 Security', '💡 Creative Ideas'],
            lists: {
                uses: ['URLs to websites', 'PIX payments', 'Share WiFi', 'vCard contacts', 'Event tickets', 'Coupons and promotions', 'Digital menus'],
                practices: ['Minimum size 2x2 cm', 'Dark QR on light background', 'Margin space around', 'Short URL', 'Always test on multiple devices']
            }
        },
        'contador-texto': {
            intro: 'Counting words and characters is essential for social media, SEO, academic writing and digital content.',
            h2: ['📊 Important Limits', '✍️ Why Count?', '🎯 Metrics', '📱 Social Media', '💡 Tips'],
            lists: {
                limits: ['Twitter: 280 characters', 'Meta Description: 155-160', 'SEO Title: 50-60', 'Instagram: 2,200', 'LinkedIn: 3,000'],
                why: ['SEO: 1,500-2,500 words', 'Academia: strict limits', 'Freelance: payment/word', 'Social media: respect limits']
            }
        },
        'codificador-base64': {
            intro: 'Base64 is an encoding method that converts binary data into ASCII text. Essential for web development, APIs and data transmission.',
            h2: ['🤔 What Is Base64?', '🎯 What Is It For?', '💻 Practical Example', '🌐 Use in Web', '⚠️ When NOT to Use', '🔒 NOT Encryption!', '📊 Advantages'],
            lists: {
                uses: ['Inline images in HTML/CSS', 'Email attachments', 'Transmit files in JSON', 'Basic Auth HTTP', 'Data URIs', 'Certificates'],
                pros: ['Easy transmission', 'JSON/XML compatible', 'Reduces HTTP requests'],
                cons: ['Increases +33% size', 'Not cacheable', 'Not secure']
            }
        },
        'gerador-md5': {
            intro: 'MD5 is a cryptographic hash algorithm that generates a unique 32-character signature for any data.',
            h2: ['🔐 What Is MD5?', '🎯 What Is It For?', '✅ Use Cases', '⚠️ Obsolete Security', '🔄 Alternatives', '💡 When to Use'],
            lists: {
                uses: ['File checksums', 'ETags for cache', 'Non-critical unique IDs', 'Detect duplicates'],
                alternatives: ['SHA-256: general security', 'SHA-3: most recent', 'bcrypt: passwords', 'Argon2: passwords (best)']
            }
        },
        'timestamp-converter': {
            intro: 'Unix timestamp is the number of seconds since January 1, 1970. Universal standard for representing dates in programming.',
            h2: ['⏰ What Is Timestamp?', '🎯 What Is It For?', '💻 Examples', '🌍 Time Zones', '📊 Advantages', '⚠️ 2038 Problem'],
            lists: {
                uses: ['Uniform databases', 'APIs without ambiguity', 'Chronological logs', 'Cache expiration', 'Distributed systems'],
                examples: ['0 = 01/01/1970', '1234567890 = 02/13/2009', '1700000000 = 11/14/2023']
            }
        },
        'texto-maiusculas-minusculas': {
            intro: 'Converting between uppercase and lowercase is essential for formatting, SEO and data standardization.',
            h2: ['🔤 Format Styles', '🎯 When to Use', '💼 Professional Use', '🌐 Language Differences', '✨ Tips'],
            lists: {
                styles: ['UPPERCASE: titles, emphasis', 'lowercase: URLs, emails', 'Title Case: article titles', 'Sentence case: normal text'],
                uses: ['SEO Titles: Title Case', 'URLs: lowercase', 'Code: conventions', 'Hashtags: camelCase']
            }
        },
        'conversor-temperatura': {
            intro: 'Temperature conversion between Celsius, Fahrenheit and Kelvin is essential in science, cooking, travel and meteorology.',
            h2: ['🌡️ Scales', '🧮 Formulas', '🌍 Global Usage', '🔬 Scientific Applications', '🍳 Practical Applications', '💡 Curiosities'],
            lists: {
                scales: ['Celsius: water freezes at 0°C, boils at 100°C', 'Fahrenheit: freezes at 32°F, boils at 212°F', 'Kelvin: absolute zero at 0K (-273.15°C)'],
                formulas: ['C to F: (°C × 9/5) + 32', 'F to C: (°F - 32) × 5/9', 'C to K: °C + 273.15', 'K to C: K - 273.15']
            }
        },
        'conversor-medidas': {
            intro: 'Converting between measurement units is essential in daily life, whether traveling, cooking, building or studying.',
            h2: ['📏 Length', '⚖️ Weight and Mass', '📦 Volume', '⏱️ Time', '💾 Digital Storage', '🌡️ Temperature', '💡 Tips'],
            lists: {
                length: ['1 meter = 100 cm = 3.28 feet', '1 km = 1,000 m = 0.621 miles', '1 inch = 2.54 cm', '1 foot = 30.48 cm'],
                weight: ['1 kg = 1,000 g = 2.20 pounds', '1 pound = 453.6 g', '1 ounce = 28.35 g', '1 ton = 1,000 kg']
            }
        }
    },

    // ========================================================================
    // ESPAÑOL
    // ========================================================================
    'es': {
        'remover-acentos': {
            intro: 'Eliminar acentos de textos es una necesidad común en programación, creación de URLs, SEO e integración de sistemas.',
            h2: ['🎯 ¿Por Qué Eliminar Acentos?', '📝 Aplicaciones Comunes', '🔧 Conversiones Comunes', '⚠️ Cuándo NO Eliminar', '🌍 Casos Especiales por Idioma', '🚀 Usa Nuestra Herramienta'],
            lists: {
                why: ['URLs amigables', 'Compatibilidad con sistemas antiguos', 'Nombres de variables', 'Mejor SEO', 'Integración de APIs'],
                conversions: ['á, à, ã, â → a', 'é, ê → e', 'í → i', 'ó, ô, õ → o', 'ú, ü → u', 'ç → c']
            }
        },
        'gerar-qr-code': {
            intro: 'Los códigos QR han revolucionado cómo compartimos información. Desde menús digitales hasta pagos, entiende cómo crear y usar efectivamente.',
            h2: ['📱 ¿Qué es un Código QR?', '🎯 Usos Principales', '💼 Aplicaciones Comerciales', '✨ Mejores Prácticas', '🎨 Personalización', '📊 Rastreo', '🔒 Seguridad', '💡 Ideas Creativas'],
            lists: {
                uses: ['URLs a sitios web', 'Pagos PIX', 'Compartir WiFi', 'Contactos vCard', 'Entradas de eventos', 'Cupones y promociones', 'Menús digitales'],
                practices: ['Tamaño mínimo 2x2 cm', 'QR oscuro en fondo claro', 'Margen de espacio alrededor', 'URL corta', 'Siempre prueba en varios dispositivos']
            }
        },
        'contador-texto': {
            intro: 'Contar palabras y caracteres es esencial para redes sociales, SEO, redacción académica y contenido digital.',
            h2: ['📊 Límites Importantes', '✍️ ¿Por Qué Contar?', '🎯 Métricas', '📱 Redes Sociales', '💡 Consejos'],
            lists: {
                limits: ['Twitter: 280 caracteres', 'Meta Description: 155-160', 'Título SEO: 50-60', 'Instagram: 2.200', 'LinkedIn: 3.000'],
                why: ['SEO: 1.500-2.500 palabras', 'Academia: límites estrictos', 'Freelance: pago/palabra', 'Redes sociales: respetar límites']
            }
        },
        'codificador-base64': {
            intro: 'Base64 es un método de codificación que convierte datos binarios en texto ASCII. Esencial para desarrollo web, APIs y transmisión de datos.',
            h2: ['🤔 ¿Qué Es Base64?', '🎯 ¿Para Qué Sirve?', '💻 Ejemplo Práctico', '🌐 Uso en Web', '⚠️ Cuándo NO Usar', '🔒 ¡NO Es Encriptación!', '📊 Ventajas'],
            lists: {
                uses: ['Imágenes inline en HTML/CSS', 'Adjuntos en emails', 'Transmitir archivos en JSON', 'Basic Auth HTTP', 'Data URIs', 'Certificados'],
                pros: ['Fácil transmisión', 'Compatible JSON/XML', 'Reduce peticiones HTTP'],
                cons: ['Aumenta +33% tamaño', 'No cacheable', 'No es seguro']
            }
        },
        'gerador-md5': {
            intro: 'MD5 es un algoritmo de hash criptográfico que genera una firma única de 32 caracteres para cualquier dato.',
            h2: ['🔐 ¿Qué Es MD5?', '🎯 ¿Para Qué Sirve?', '✅ Casos de Uso', '⚠️ Seguridad Obsoleta', '🔄 Alternativas', '💡 Cuándo Usar'],
            lists: {
                uses: ['Checksums de archivos', 'ETags para caché', 'IDs únicos no críticos', 'Detectar duplicados'],
                alternatives: ['SHA-256: seguridad general', 'SHA-3: más reciente', 'bcrypt: contraseñas', 'Argon2: contraseñas (mejor)']
            }
        },
        'timestamp-converter': {
            intro: 'Timestamp Unix es el número de segundos desde el 1 de enero de 1970. Estándar universal para representar fechas en programación.',
            h2: ['⏰ ¿Qué Es Timestamp?', '🎯 ¿Para Qué Sirve?', '💻 Ejemplos', '🌍 Zonas Horarias', '📊 Ventajas', '⚠️ Problema 2038'],
            lists: {
                uses: ['Bases de datos uniformes', 'APIs sin ambigüedad', 'Logs cronológicos', 'Expiración de caché', 'Sistemas distribuidos'],
                examples: ['0 = 01/01/1970', '1234567890 = 13/02/2009', '1700000000 = 14/11/2023']
            }
        },
        'texto-maiusculas-minusculas': {
            intro: 'Transformar texto entre mayúsculas y minúsculas es esencial para formateo, SEO y estandarización de datos.',
            h2: ['🔤 Estilos de Formato', '🎯 Cuándo Usar', '💼 Uso Profesional', '🌐 Diferencias de Idioma', '✨ Consejos'],
            lists: {
                styles: ['MAYÚSCULAS: títulos, énfasis', 'minúsculas: URLs, emails', 'Title Case: títulos de artículos', 'Sentence case: texto normal'],
                uses: ['Títulos SEO: Title Case', 'URLs: minúsculas', 'Código: convenciones', 'Hashtags: camelCase']
            }
        },
        'conversor-temperatura': {
            intro: 'Conversión de temperatura entre Celsius, Fahrenheit y Kelvin es esencial en ciencia, cocina, viajes y meteorología.',
            h2: ['🌡️ Escalas', '🧮 Fórmulas', '🌍 Uso Mundial', '🔬 Aplicaciones Científicas', '🍳 Aplicaciones Prácticas', '💡 Curiosidades'],
            lists: {
                scales: ['Celsius: agua congela a 0°C, hierve a 100°C', 'Fahrenheit: congela a 32°F, hierve a 212°F', 'Kelvin: cero absoluto a 0K (-273.15°C)'],
                formulas: ['C a F: (°C × 9/5) + 32', 'F a C: (°F - 32) × 5/9', 'C a K: °C + 273.15', 'K a C: K - 273.15']
            }
        },
        'conversor-medidas': {
            intro: 'Convertir medidas entre diferentes unidades es esencial en el día a día, ya sea viajando, cocinando, construyendo o estudiando.',
            h2: ['📏 Longitud', '⚖️ Peso y Masa', '📦 Volumen', '⏱️ Tiempo', '💾 Almacenamiento Digital', '🌡️ Temperatura', '💡 Consejos'],
            lists: {
                length: ['1 metro = 100 cm = 3.28 pies', '1 km = 1.000 m = 0.621 millas', '1 pulgada = 2.54 cm', '1 pie = 30.48 cm'],
                weight: ['1 kg = 1.000 g = 2.20 libras', '1 libra = 453.6 g', '1 onza = 28.35 g', '1 tonelada = 1.000 kg']
            }
        }
    }
};

// ============================================================================
// FUNÇÕES DE APLICAÇÃO DAS TRADUÇÕES
// ============================================================================

function applyBlogTranslations() {
    const path = window.location.pathname;
    const articleMatch = path.match(/\/blog\/([^\/]+)\.html/);
    
    if (!articleMatch) {
        console.log('[Blog Translations] Not in a blog article page');
        return;
    }
    
    const articleSlug = articleMatch[1];
    const currentLang = localStorage.getItem('mytools-lang') || 'pt-BR';
    
    console.log(`[Blog Translations] Article: ${articleSlug}, Language: ${currentLang}`);
    
    // Se for português, não fazer nada (conteúdo já está em português no HTML)
    if (currentLang === 'pt-BR') {
        console.log('[Blog Translations] Portuguese detected, no translation needed');
        return;
    }
    
    // Buscar traduções
    const translations = blogArticleTranslations[currentLang];
    if (!translations || !translations[articleSlug]) {
        console.error(`[Blog Translations] ❌ No translations found for: ${articleSlug} in ${currentLang}`);
        return;
    }
    
    const data = translations[articleSlug];
    const content = document.querySelector('.article-content');
    if (!content) {
        console.error('[Blog Translations] ❌ .article-content not found');
        return;
    }
    
    console.log(`[Blog Translations] ✓ Applying translations...`);
    
    // Aplicar intro
    if (data.intro) {
        const firstP = content.querySelector('p:first-of-type');
        if (firstP) {
            firstP.textContent = data.intro;
        }
    }
    
    // Aplicar H2s
    if (data.h2) {
        const h2s = content.querySelectorAll('h2');
        data.h2.forEach((text, i) => {
            if (h2s[i]) {
                h2s[i].textContent = text;
            }
        });
    }
    
    // Aplicar H3s
    if (data.h3) {
        const h3s = content.querySelectorAll('h3');
        data.h3.forEach((text, i) => {
            if (h3s[i]) {
                h3s[i].textContent = text;
            }
        });
    }
    
    // Aplicar listas
    if (data.lists) {
        const uls = content.querySelectorAll('ul');
        let ulIndex = 0;
        
        Object.keys(data.lists).forEach(listKey => {
            if (uls[ulIndex]) {
                const lis = uls[ulIndex].querySelectorAll('li');
                data.lists[listKey].forEach((text, i) => {
                    if (lis[i]) {
                        lis[i].innerHTML = text;
                    }
                });
                ulIndex++;
            }
        });
    }
    
    console.log(`[Blog Translations] ✅ Translations applied successfully`);
}

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

if (typeof window !== 'undefined') {
    // Aplicar ao carregar a página
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(applyBlogTranslations, 500);
    });
    
    // Aplicar ao mudar idioma
    window.addEventListener('languageChanged', function() {
        setTimeout(applyBlogTranslations, 200);
    });
    
    // Monitorar mudanças no localStorage
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
        originalSetItem.apply(this, arguments);
        if (key === 'mytools-lang') {
            setTimeout(applyBlogTranslations, 300);
        }
    };
}
