// Sistema de Internacionalizacao - MyTools
console.log('i18n.js script loaded'); // Debug

class I18n {
    constructor() {
        console.log('I18n constructor called'); // Debug
        try {
            const storedLang = this.getStoredLanguage();
            const browserLang = this.detectBrowserLanguage();
            console.log('Stored language:', storedLang); // Debug
            console.log('Browser language:', browserLang); // Debug
            
            this.currentLang = storedLang || browserLang;
            console.log('Selected language:', this.currentLang); // Debug
            
            this.translations = {};
            this.loadTranslations();
        } catch (error) {
            console.error('Error in I18n constructor:', error);
            this.currentLang = 'pt-BR';
            this.translations = {};
        }
    }

    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const supportedLangs = ['en', 'es', 'pt-BR'];
        
        if (supportedLangs.includes(browserLang)) {
            return browserLang;
        }
        
        const langCode = browserLang.split('-')[0];
        if (supportedLangs.includes(langCode)) {
            return langCode;
        }
        
        return 'pt-BR';
    }

    getStoredLanguage() {
        try {
            // Debug da URL e domínio
            console.log('*** Firefox Storage Debug: Current URL:', window.location.href); // Debug
            console.log('*** Firefox Storage Debug: Current origin:', window.location.origin); // Debug
            console.log('*** Firefox Storage Debug: Current protocol:', window.location.protocol); // Debug
            
            const stored = localStorage.getItem('mytools-lang');
            console.log('*** Firefox Storage Debug: Raw localStorage value:', stored); // Debug
            console.log('*** Firefox Storage Debug: localStorage keys:', Object.keys(localStorage)); // Debug
            
            // Se localStorage estiver vazio, tentar cookies como backup
            if (!stored) {
                const cookieValue = this.getCookieLanguage();
                console.log('*** Firefox Storage Debug: Trying cookie backup:', cookieValue); // Debug
                if (cookieValue) {
                    // Restaurar no localStorage
                    localStorage.setItem('mytools-lang', cookieValue);
                    console.log('*** Firefox Storage Debug: Restored from cookie to localStorage'); // Debug
                    return cookieValue;
                }
            }
            
            // Verificar se há outros valores armazenados com chaves similares
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && (key.includes('lang') || key.includes('mytools'))) {
                    console.log('*** Firefox Storage Debug: Found related key:', key, '=', localStorage.getItem(key)); // Debug
                }
            }
            
            return stored;
        } catch (error) {
            console.error('*** Firefox Storage Debug: Error reading localStorage:', error); // Debug
            return null;
        }
    }
    
    getCookieLanguage() {
        try {
            const name = 'mytools-lang=';
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return null;
        } catch (error) {
            console.error('*** Firefox Storage Debug: Error reading cookie:', error); // Debug
            return null;
        }
    }
    
    setCookieLanguage(lang) {
        try {
            const expires = new Date();
            expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 ano
            document.cookie = `mytools-lang=${lang}; expires=${expires.toUTCString()}; path=/`;
            console.log('*** Firefox Storage Debug: Cookie saved:', document.cookie); // Debug
        } catch (error) {
            console.error('*** Firefox Storage Debug: Error saving cookie:', error); // Debug
        }
    }

    setStoredLanguage(lang) {
        console.log('*** Firefox Storage Debug: Attempting to save language:', lang); // Debug
        console.log('*** Firefox Storage Debug: Saving from URL:', window.location.href); // Debug
        console.log('*** Firefox Storage Debug: Saving from origin:', window.location.origin); // Debug
        try {
            // Verificar o estado antes de salvar
            const before = localStorage.getItem('mytools-lang');
            console.log('*** Firefox Storage Debug: Value before save:', before); // Debug
            
            // Salvar tanto no localStorage quanto no cookie
            localStorage.setItem('mytools-lang', lang);
            this.setCookieLanguage(lang);
            
            // Verificar o estado após salvar
            const after = localStorage.getItem('mytools-lang');
            console.log('*** Firefox Storage Debug: Value after save:', after); // Debug
            console.log('*** Firefox Storage Debug: Save successful:', after === lang); // Debug
            
            // Forçar um flush (algumas versões do Firefox precisam disso)
            if (typeof localStorage.flush === 'function') {
                localStorage.flush();
                console.log('*** Firefox Storage Debug: localStorage.flush() called'); // Debug
            }
            
        } catch (error) {
            console.error('*** Firefox Storage Debug: Error saving language:', error); // Debug
        }
    }

    loadTranslations() {
        this.translations = {
            'pt-BR': {
                nav: {
                    home: 'Início',
                    blog: 'Blog',
                    about: 'Sobre',
                    contact: 'Contato'
                },
                hero: {
                    title: 'Ferramentas Úteis Online',
                    subtitle: 'Uma coleção de ferramentas simples e eficientes para o seu dia a dia. Todas funcionam 100% no seu navegador, sem necessidade de cadastro ou instalação.',
                    searchPlaceholder: 'Buscar ferramentas...'
                },
                features: {
                    title: 'Por que usar nossas ferramentas?',
                    fast: {
                        title: 'Rápido e Simples',
                        description: 'Sem cadastros, sem instalações. Use diretamente no seu navegador.'
                    },
                    secure: {
                        title: 'Seguro e Privado',
                        description: 'Todos os dados são processados localmente no seu dispositivo.'
                    },
                    responsive: {
                        title: 'Responsivo',
                        description: 'Funciona perfeitamente em celulares, tablets e desktop.'
                    }
                },
                tools: {
                    temperature: {
                        title: '🌡️ Conversor de Temperatura',
                        description: 'Converta facilmente entre Celsius, Fahrenheit e Kelvin'
                    },
                    units: {
                        title: '📏 Conversor de Medidas',
                        description: 'Converta unidades de comprimento, peso, volume e área'
                    },
                    textCase: {
                        title: '🔤 Texto Maiúsculas/Minúsculas',
                        description: 'Transforme texto em maiúsculas, minúsculas ou capitalize'
                    },
                    removeAccents: {
                        title: '✂️ Remover Acentos',
                        description: 'Remove acentos e caracteres especiais de textos'
                    },
                    textCounter: {
                        title: '🔢 Contador de Texto',
                        description: 'Conte palavras, caracteres, parágrafos e linhas'
                    },
                    qrCode: {
                        title: '📱 Gerador de QR Code',
                        description: 'Crie QR codes para textos, URLs, emails e mais'
                    },
                    base64: {
                        title: '🔐 Codificador Base64',
                        description: 'Codifique e decodifique textos em Base64'
                    },
                    md5: {
                        title: '🔒 Gerador MD5',
                        description: 'Gere hashes MD5 para verificação de integridade'
                    },
                    timestamp: {
                        title: '⏰ Conversor de Timestamp',
                        description: 'Converta timestamps Unix para datas legíveis'
                    }
                },
                footer: {
                    tools: 'Ferramentas',
                    generators: 'Geradores',
                    about: 'Sobre',
                    mytools: 'MyTools',
                    temperatureConverter: 'Conversor de Temperatura',
                    unitConverter: 'Conversor de Medidas',
                    textCase: 'Maiúsculas/Minúsculas',
                    textCounter: 'Contador de Texto',
                    qrGenerator: 'Gerador QR Code',
                    md5Generator: 'Gerador MD5',
                    base64: 'Base64',
                    timestamp: 'Timestamp',
                    aboutUs: 'Sobre Nós',
                    contact: 'Contato',
                    privacy: 'Privacidade',
                    terms: 'Termos de Uso',
                    description: 'Ferramentas úteis e gratuitas para facilitar seu dia a dia.',
                    copyright: '© 2025 MyTools. Todos os direitos reservados.'
                },
                messages: {
                    copied: 'Copiado para a área de transferência!',
                    copyError: 'Erro ao copiar texto'
                },
                blog: {
                    title: 'Blog',
                    subtitle: 'Tutoriais, dicas e guias completos sobre como aproveitar ao máximo nossas ferramentas online gratuitas',
                    readMore: 'Ler mais',
                    articles: {
                        temperature: {
                            title: 'Guia Completo: Conversor de Temperatura',
                            excerpt: 'Aprenda tudo sobre conversão de temperatura entre Celsius, Fahrenheit e Kelvin. Entenda as fórmulas, quando usar cada escala e exemplos práticos do dia a dia.',
                            tag: 'Conversores'
                        },
                        units: {
                            title: 'Como Converter Medidas: Guia Definitivo',
                            excerpt: 'Domine conversões de comprimento, peso, volume e área. Tabelas de referência, dicas práticas e casos de uso comuns para facilitar seu dia a dia.',
                            tag: 'Conversores'
                        },
                        textCase: {
                            title: 'Formatação de Texto: Maiúsculas e Minúsculas',
                            excerpt: 'Transforme textos facilmente com nossas ferramentas de capitalização. Aprenda as melhores práticas de formatação e quando usar cada estilo.',
                            tag: 'Texto'
                        },
                        removeAccents: {
                            title: 'Remover Acentos: Quando e Como Usar',
                            excerpt: 'Descubra por que remover acentos é importante para URLs, programação e SEO. Tutorial completo com exemplos práticos e casos de uso.',
                            tag: 'Texto'
                        },
                        textCounter: {
                            title: 'Contador de Palavras e Caracteres: Guia Prático',
                            excerpt: 'Otimize seus textos para redes sociais, SEO e redação. Aprenda limites de caracteres, contagem de palavras e boas práticas de escrita.',
                            tag: 'Texto'
                        },
                        qrCode: {
                            title: 'QR Code: Como Criar e Usar Efetivamente',
                            excerpt: 'Guia completo sobre QR Codes: criação, personalização, melhores práticas e ideias criativas para marketing, eventos e negócios.',
                            tag: 'Geradores'
                        },
                        base64: {
                            title: 'Base64: O Que É e Como Funciona',
                            excerpt: 'Entenda a codificação Base64, suas aplicações em desenvolvimento web, envio de imagens e dados, com exemplos práticos e tutoriais.',
                            tag: 'Codificação'
                        },
                        md5: {
                            title: 'Hash MD5: Segurança e Verificação de Integridade',
                            excerpt: 'Aprenda sobre hashes MD5, verificação de arquivos, segurança de dados e como usar checksums para garantir integridade de informações.',
                            tag: 'Segurança'
                        },
                        timestamp: {
                            title: 'Timestamp Unix: Guia Completo de Conversão',
                            excerpt: 'Domine timestamps Unix: o que são, como converter, aplicações em programação e banco de dados, com exemplos práticos e dicas úteis.',
                            tag: 'Data/Hora'
                        }
                    },
                    date: 'Dezembro 2025',
                    backToBlog: '← Blog',
                    ctaButton: 'Usar Ferramenta',
                    common: {
                        whatIs: 'O Que É',
                        mainUses: 'Usos Principais',
                        howToUse: 'Como Usar',
                        bestPractices: 'Melhores Práticas',
                        examples: 'Exemplos Práticos',
                        tips: 'Dicas',
                        benefits: 'Benefícios',
                        applications: 'Aplicações',
                        security: 'Segurança',
                        commonUses: 'Casos de Uso Comuns'
                    }
                },
                about: {
                    title: 'Sobre o MyTools',
                    subtitle: 'Ferramentas úteis e gratuitas para facilitar seu dia a dia',
                    mission: 'Nossa Missão',
                    missionText: 'O MyTools foi criado com o objetivo de fornecer ferramentas úteis, simples e gratuitas para facilitar tarefas do dia a dia. Acreditamos que tecnologia deve ser acessível e fácil de usar, sem complicações desnecessárias.',
                    whyTitle: 'Por que MyTools?',
                    simplicity: '⚡ Simplicidade',
                    simplicityText: 'Todas as nossas ferramentas são projetadas para serem intuitivas e fáceis de usar. Sem cadastros, sem complicações.',
                    privacy: '🔒 Privacidade',
                    privacyText: 'Todos os dados são processados localmente no seu navegador. Nada é enviado para nossos servidores.',
                    responsive: '📱 Responsivo',
                    responsiveText: 'Nossas ferramentas funcionam perfeitamente em qualquer dispositivo: celular, tablet ou desktop.',
                    free: '🆓 Gratuito',
                    freeText: 'Todas as ferramentas são 100% gratuitas e sempre serão. Sem taxas ocultas, sem limitações.',
                    howTitle: 'Como Funciona',
                    howText: 'Todas as nossas ferramentas funcionam 100% no seu navegador. Isso significa que:',
                    howList: [
                        'Seus dados nunca saem do seu dispositivo',
                        'Você pode usar as ferramentas mesmo offline (após carregar a página)',
                        'Não há necessidade de cadastro ou login',
                        'Funciona em qualquer navegador moderno'
                    ],
                    techTitle: 'Tecnologias Utilizadas',
                    techText: 'O MyTools é desenvolvido com tecnologias web modernas e seguras:',
                    techList: [
                        'HTML5: Estrutura semântica e acessível',
                        'CSS3: Design responsivo e moderno',
                        'JavaScript: Funcionalidades interativas no cliente',
                        'GitHub Pages: Hospedagem confiável e rápida'
                    ],
                    supportTitle: 'Suporte e Contribuições',
                    supportText: 'Se você encontrou um bug, tem uma sugestão de melhoria ou quer contribuir com uma nova ferramenta, ficaremos felizes em ouvir você!',
                    contactButton: 'Entre em Contato'
                },
                contact: {
                    title: 'Entre em Contato',
                    subtitle: 'Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir você!',
                    name: 'Nome',
                    email: 'Email',
                    subject: 'Assunto',
                    message: 'Mensagem',
                    send: 'Enviar Mensagem',
                    success: 'Mensagem enviada com sucesso!',
                    error: 'Erro ao enviar mensagem. Tente novamente.',
                    nameRequired: 'Nome é obrigatório',
                    emailRequired: 'Email é obrigatório',
                    emailInvalid: 'Email inválido',
                    messageRequired: 'Mensagem é obrigatória'
                },
                qrCode: {
                    title: '📱 Gerador de QR Code',
                    subtitle: 'Crie QR codes para textos, URLs, emails e muito mais',
                    type: 'Tipo de QR Code:',
                    typeText: 'Texto',
                    typeUrl: 'URL/Link',
                    typeEmail: 'Email',
                    typePhone: 'Telefone',
                    typeSms: 'SMS',
                    typeWifi: 'WiFi',
                    typeVcard: 'vCard (Contato)',
                    content: 'Conteúdo:',
                    size: 'Tamanho:',
                    sizeSmall: '200x200 (Pequeno)',
                    sizeMedium: '300x300 (Médio)',
                    sizeLarge: '400x400 (Grande)',
                    sizeXLarge: '500x500 (Extra Grande)',
                    generate: 'Gerar QR Code',
                    download: 'Baixar QR Code',
                    copy: 'Copiar como Imagem',
                    clear: 'Limpar',
                    howToUse: 'Como usar o Gerador de QR Code',
                    howTo1: 'Escolha o tipo de QR Code que deseja criar',
                    howTo2: 'Preencha as informações necessárias',
                    howTo3: 'Selecione o tamanho desejado',
                    howTo4: 'Clique em "Gerar QR Code"',
                    howTo5: 'Faça o download ou copie a imagem gerada',
                    supportedTypes: 'Tipos de QR Code Suportados',
                    textDescription: 'Qualquer texto simples',
                    urlDescription: 'Links para sites ou páginas web',
                    emailDescription: 'Abre o cliente de email com destinatário pré-preenchido',
                    phoneDescription: 'Inicia uma chamada telefônica',
                    smsDescription: 'Abre o app de mensagens com número e texto',
                    wifiDescription: 'Conecta automaticamente à rede WiFi',
                    placeholder: {
                        text: 'Digite seu texto aqui...',
                        url: 'https://exemplo.com',
                        email: 'exemplo@email.com',
                        phone: '+55 11 99999-9999',
                        sms: 'Sua mensagem SMS aqui...',
                        wifi: 'Nome da rede WiFi',
                        vcard: 'Nome completo'
                    },
                    wifi: {
                        network: 'Nome da Rede (SSID):',
                        password: 'Senha:',
                        security: 'Tipo de Segurança:',
                        securityNone: 'Nenhuma',
                        securityWep: 'WEP',
                        securityWpa: 'WPA/WPA2',
                        hidden: 'Rede oculta'
                    },
                    vcard: {
                        name: 'Nome Completo:',
                        company: 'Empresa:',
                        phone: 'Telefone:',
                        email: 'Email:',
                        website: 'Website:',
                        address: 'Endereço:'
                    },
                    sms: {
                        number: 'Número do Telefone:',
                        message: 'Mensagem:'
                    },
                    success: 'QR Code gerado com sucesso!',
                    error: 'Por favor, preencha o campo de conteúdo.',
                    copied: 'QR Code copiado para a área de transferência!',
                    downloaded: 'QR Code baixado com sucesso!'
                },
                temperatureConverter: {
                    title: '🌡️ Conversor de Temperatura',
                    subtitle: 'Converta facilmente entre Celsius, Fahrenheit e Kelvin',
                    temperature: 'Temperatura:',
                    temperaturePlaceholder: 'Digite a temperatura',
                    from: 'De:',
                    to: 'Para:',
                    celsius: 'Celsius (°C)',
                    fahrenheit: 'Fahrenheit (°F)',
                    kelvin: 'Kelvin (K)',
                    convert: 'Converter',
                    copyResult: 'Copiar Resultado',
                    clear: 'Limpar',
                    howToUse: 'Como usar o Conversor de Temperatura',
                    howToUseSteps: [
                        'Digite o valor da temperatura que deseja converter',
                        'Selecione a unidade de origem (Celsius, Fahrenheit ou Kelvin)',
                        'Selecione a unidade de destino',
                        'Clique em "Converter" para ver o resultado'
                    ],
                    formulas: 'Fórmulas de Conversão',
                    formulasList: [
                        'Celsius para Fahrenheit: °F = (°C × 9/5) + 32',
                        'Celsius para Kelvin: K = °C + 273.15',
                        'Fahrenheit para Celsius: °C = (°F - 32) × 5/9',
                        'Fahrenheit para Kelvin: K = (°F - 32) × 5/9 + 273.15',
                        'Kelvin para Celsius: °C = K - 273.15',
                        'Kelvin para Fahrenheit: °F = (K - 273.15) × 9/5 + 32'
                    ],
                    errorInvalid: 'Por favor, digite um valor numérico válido.',
                    sameUnit: 'mesma unidade'
                },
                unitConverter: {
                    title: '📏 Conversor de Medidas',
                    subtitle: 'Converta unidades de comprimento, peso, volume e área',
                    value: 'Valor:',
                    valuePlaceholder: 'Digite o valor',
                    from: 'De:',
                    to: 'Para:',
                    convert: 'Converter',
                    copyResult: 'Copiar Resultado',
                    clear: 'Limpar',
                    quickConversions: 'Conversões Rápidas',
                    supportedUnits: 'Unidades Suportadas',
                    categories: {
                        title: 'Categoria:',
                        length: 'Comprimento',
                        weight: 'Peso',
                        volume: 'Volume',
                        area: 'Área'
                    },
                    lengthUnits: 'Milímetros, Centímetros, Metros, Quilômetros, Polegadas, Pés, Jardas, Milhas',
                    weightUnits: 'Gramas, Quilogramas, Toneladas, Onças, Libras, Pedras',
                    volumeUnits: 'Mililitros, Litros, Galões, Xícaras, Colheres de sopa, Colheres de chá',
                    areaUnits: 'Metros quadrados, Quilômetros quadrados, Hectares, Pés quadrados, Acres',
                    errorInvalid: 'Por favor, digite um valor numérico válido.',
                    sameUnit: 'mesma unidade'
                },
                textCase: {
                    title: '🔤 Texto Maiúsculas/Minúsculas',
                    subtitle: 'Transforme texto em maiúsculas, minúsculas ou capitalize',
                    inputText: 'Digite seu texto:',
                    inputPlaceholder: 'Digite ou cole seu texto aqui...',
                    outputText: 'Resultado:',
                    outputPlaceholder: 'O resultado aparecerá aqui...',
                    uppercase: 'MAIÚSCULAS',
                    lowercase: 'minúsculas',
                    capitalize: 'Capitalizar',
                    titleCase: 'Título',
                    sentence: 'Sentença',
                    alternating: 'AlTeRnAdO',
                    copyResult: 'Copiar Resultado',
                    swap: 'Trocar ⇅',
                    clear: 'Limpar Tudo',
                    stats: 'Estatísticas do Texto',
                    characters: 'Caracteres',
                    words: 'Palavras',
                    lines: 'Linhas',
                    uppercaseLetters: 'Maiúsculas',
                    lowercaseLetters: 'Minúsculas',
                    formattingTypes: 'Tipos de Formatação',
                    example: 'Exemplo:',
                    uppercaseDescription: 'Converte todo o texto para letras maiúsculas.',
                    uppercaseExample: '"olá mundo" → "OLÁ MUNDO"',
                    lowercaseDescription: 'Converte todo o texto para letras minúsculas.',
                    lowercaseExample: '"OLÁ MUNDO" → "olá mundo"',
                    capitalizeDescription: 'Torna a primeira letra de cada palavra maiúscula.',
                    capitalizeExample: '"olá mundo" → "Olá Mundo"',
                    titleDescription: 'Capitaliza palavras importantes, ignora artigos e preposições pequenas.',
                    titleExample: '"o gato subiu no telhado" → "O Gato Subiu no Telhado"',
                    sentenceDescription: 'Torna maiúscula apenas a primeira letra de cada sentença.',
                    sentenceExample: '"olá. como vai?" → "Olá. Como vai?"',
                    alternatingDescription: 'Alterna entre maiúsculas e minúsculas a cada letra.',
                    alternatingExample: '"olá mundo" → "OlÁ mUnDo"'
                },
                removeAccents: {
                    title: '✂️ Remover Acentos',
                    subtitle: 'Remove acentos e caracteres especiais de textos',
                    inputText: 'Texto com acentos:',
                    inputPlaceholder: 'Digite ou cole o texto com acentos aqui...',
                    outputText: 'Texto sem acentos:',
                    outputPlaceholder: 'O resultado aparecerá aqui...',
                    remove: 'Remover Acentos',
                    removeSpecial: 'Remover Especiais',
                    removeAll: 'Remover Tudo',
                    createSlug: 'Criar Slug',
                    copyResult: 'Copiar Resultado',
                    swap: 'Trocar ⇅',
                    clear: 'Limpar Tudo',
                    advancedOptions: 'Opções Avançadas',
                    preserveSpaces: 'Preservar espaços',
                    preserveNumbers: 'Preservar números',
                    convertToLower: 'Converter para minúsculas',
                    removePunctuation: 'Remover pontuação',
                    comparison: 'Comparação Lado a Lado',
                    before: 'Antes:',
                    after: 'Depois:',
                    removalTypes: 'Tipos de Remoção',
                    example: 'Exemplo:',
                    removeDescription: 'Remove apenas acentos, mantendo letras básicas.',
                    removeExample: '"José, João e María" → "Jose, Joao e Maria"',
                    removeSpecialDescription: 'Remove caracteres especiais, mantendo letras, números e espaços.',
                    removeSpecialExample: '"José@email.com!" → "Josemailcom"',
                    removeAllDescription: 'Remove acentos e caracteres especiais.',
                    removeAllExample: '"José@email.com!" → "Josemailcom"',
                    createSlugDescription: 'Cria um slug amigável para URLs (minúsculas, hífens no lugar de espaços).',
                    createSlugExample: '"José da Silva" → "jose-da-silva"',
                    supportedChars: 'Caracteres Suportados',
                    accents: 'Acentos',
                    specials: 'Especiais',
                    punctuation: 'Pontuação'
                },
                textCounter: {
                    title: '🔢 Contador de Texto',
                    subtitle: 'Conte palavras, caracteres, parágrafos e linhas',
                    inputText: 'Digite seu texto:',
                    inputPlaceholder: 'Digite ou cole seu texto aqui para análise...',
                    statistics: 'Estatísticas',
                    characters: 'Caracteres',
                    charactersNoSpaces: 'Caracteres (sem espaços)',
                    words: 'Palavras',
                    sentences: 'Frases',
                    paragraphs: 'Parágrafos',
                    lines: 'Linhas',
                    readingTime: 'Min. leitura',
                    copyStats: 'Copiar Estatísticas',
                    clear: 'Limpar',
                    detailedAnalysis: 'Análise Detalhada',
                    wordDensity: 'Densidade de palavras:',
                    wordsPerLine: 'palavras por linha',
                    avgWordLength: 'Tamanho médio das palavras:',
                    characters2: 'caracteres',
                    commonWords: 'Palavras mais comuns:',
                    howToUse: 'Como usar o Contador de Texto',
                    howTo1: 'Digite ou cole seu texto na área de texto acima',
                    howTo2: 'As estatísticas são atualizadas automaticamente em tempo real',
                    howTo3: 'Use o botão "Copiar Estatísticas" para copiar um resumo das contagens',
                    howTo4: 'O tempo de leitura é calculado baseado em 200 palavras por minuto',
                    metricsInfo: 'Informações sobre as Métricas',
                    charactersInfo: 'Caracteres:',
                    charactersDesc: 'Total de caracteres incluindo espaços e pontuação',
                    noSpacesInfo: 'Sem espaços:',
                    noSpacesDesc: 'Caracteres excluindo espaços em branco',
                    wordsInfo: 'Palavras:',
                    wordsDesc: 'Sequências de caracteres separadas por espaços',
                    linesInfo: 'Linhas:',
                    linesDesc: 'Número de quebras de linha no texto',
                    paragraphsInfo: 'Parágrafos:',
                    paragraphsDesc: 'Blocos de texto separados por linhas em branco'
                },
                base64: {
                    title: '🔐 Codificador Base64',
                    subtitle: 'Codifique e decodifique textos em Base64',
                    inputText: 'Texto de entrada:',
                    inputTextEncode: 'Texto para codificar:',
                    inputTextDecode: 'Base64 para decodificar:',
                    inputPlaceholder: 'Digite ou cole seu texto aqui...',
                    inputPlaceholderEncode: 'Digite o texto aqui...',
                    inputPlaceholderDecode: 'Cole o Base64 aqui...',
                    outputText: 'Resultado:',
                    outputTextEncode: 'Base64 codificado:',
                    outputTextDecode: 'Texto decodificado:',
                    outputPlaceholder: 'O resultado aparecerá aqui...',
                    encode: 'Codificar',
                    decode: 'Decodificar',
                    copyResult: 'Copiar Resultado',
                    swap: 'Trocar ⇅',
                    clear: 'Limpar Tudo',
                    fileSection: 'Codificação/Decodificação de Arquivos',
                    selectFile: 'Selecionar arquivo:',
                    processFile: 'Processar Arquivo',
                    fileResult: 'Resultado do arquivo:',
                    fileResultPlaceholder: 'O resultado do arquivo aparecerá aqui...',
                    copy: 'Copiar',
                    download: 'Download',
                    aboutSection: 'Sobre Base64',
                    aboutDescription: 'Base64 é um método de codificação que converte dados binários em texto ASCII usando 64 caracteres específicos (A-Z, a-z, 0-9, +, /).',
                    whenToUse: 'Quando usar Base64:',
                    dataTransmission: 'Transmissão de dados:',
                    dataTransmissionDesc: 'Para enviar dados binários por protocolos que só aceitam texto',
                    urlsEmails: 'URLs e emails:',
                    urlsEmailsDesc: 'Para incluir dados em URLs ou emails sem quebrar a formatação',
                    storage: 'Armazenamento:',
                    storageDesc: 'Para salvar dados binários em bancos de dados que só aceitam texto',
                    apis: 'APIs:',
                    apisDesc: 'Muitas APIs usam Base64 para transmitir imagens e outros arquivos',
                    characteristics: 'Características:',
                    notEncryption: 'Não é criptografia - é apenas codificação',
                    sizeIncrease: 'Aumenta o tamanho do dados em aproximadamente 33%',
                    reversible: 'É reversível - você pode sempre decodificar de volta',
                    urlSafe: 'É seguro para URLs e sistemas que não suportam caracteres especiais',
                    errorDecode: 'Erro ao decodificar: texto Base64 inválido'
                },
                md5: {
                    title: '🔒 Gerador MD5',
                    subtitle: 'Gere hashes MD5 para verificação de integridade',
                    inputText: 'Texto para gerar MD5:',
                    inputPlaceholder: 'Digite o texto aqui...',
                    outputText: 'Hash MD5:',
                    outputPlaceholder: 'O hash MD5 aparecerá aqui...',
                    generate: 'Gerar MD5',
                    copyResult: 'Copiar MD5',
                    clear: 'Limpar',
                    
                    // Verifier section
                    verifier: 'Verificador MD5',
                    verifierDescription: 'Compare dois hashes MD5 para verificar se são iguais:',
                    hash1: 'Hash 1:',
                    hash1Placeholder: 'Cole o primeiro hash MD5 aqui...',
                    hash2: 'Hash 2:',
                    hash2Placeholder: 'Cole o segundo hash MD5 aqui...',
                    compareHashes: 'Comparar Hashes',
                    
                    // File generation section
                    fileGeneration: 'Geração de MD5 para Arquivos',
                    selectFile: 'Selecionar arquivo:',
                    generateFileMD5: 'Gerar MD5 do Arquivo',
                    fileMD5Result: 'MD5 do arquivo:',
                    fileMD5Placeholder: 'O MD5 do arquivo aparecerá aqui...',
                    copyFileMD5: 'Copiar MD5',
                    fileInfo: 'Informações do Arquivo:',
                    fileName: 'Nome:',
                    fileSize: 'Tamanho:',
                    fileType: 'Tipo:',
                    
                    // About MD5 section
                    aboutMD5: 'Sobre MD5',
                    md5Description: 'MD5 (Message Digest Algorithm 5) é uma função de hash criptográfica que produz um valor hash de 128 bits (32 caracteres hexadecimais).',
                    commonUses: 'Usos Comuns do MD5:',
                    integrityVerification: 'Verificação de integridade:',
                    integrityDescription: 'Verificar se um arquivo não foi corrompido durante a transferência',
                    checksums: 'Checksums:',
                    checksumsDescription: 'Validar downloads e backups',
                    uniqueIdentification: 'Identificação única:',
                    uniqueDescription: 'Criar identificadores únicos para dados',
                    cacheDeduplication: 'Cache e deduplicação:',
                    cacheDescription: 'Identificar conteúdo duplicado',
                    characteristics: 'Características do MD5:',
                    char1: 'Sempre produz um hash de 32 caracteres',
                    char2: 'É unidirecional - não pode ser "descriptografado"',
                    char3: 'Pequenas mudanças no input resultam em hashes completamente diferentes',
                    char4: 'O mesmo input sempre produz o mesmo hash',
                    securityWarningTitle: '⚠️ Importante sobre Segurança:',
                    securityWarningDescription: 'MD5 não é mais considerado seguro para uso criptográfico devido a vulnerabilidades conhecidas. Para aplicações de segurança, use SHA-256 ou algoritmos mais modernos. MD5 ainda é útil para verificação de integridade básica e checksums.'
                },
                timestamp: {
                    title: '⏰ Conversor de Timestamp',
                    subtitle: 'Converta timestamps Unix para datas legíveis',
                    
                    // Current time section
                    currentTime: 'Hora Atual',
                    unixTimestamp: 'Timestamp Unix',
                    currentDate: 'Data Atual',
                    copyTimestamp: 'Copiar Timestamp',
                    copyDate: 'Copiar Data',
                    
                    // Timestamp to date section
                    timestampToDate: 'Timestamp para Data',
                    timestamp: 'Timestamp',
                    timestampPlaceholder: 'Digite o timestamp...',
                    unit: 'Unidade',
                    seconds: 'Segundos',
                    milliseconds: 'Milissegundos',
                    convertToDate: 'Converter para Data',
                    
                    // Date to timestamp section
                    dateToTimestamp: 'Data para Timestamp',
                    datetime: 'Data e Hora',
                    timezone: 'Fuso Horário',
                    local: 'Local',
                    utc: 'UTC',
                    saoPaulo: 'São Paulo (GMT-3)',
                    newYork: 'Nova York (GMT-5)',
                    london: 'Londres (GMT+0)',
                    tokyo: 'Tóquio (GMT+9)',
                    convertToTimestamp: 'Converter para Timestamp',
                    copyResult: 'Copiar Resultado',
                    
                    // Time calculator section
                    timeCalculator: 'Calculadora de Tempo',
                    addSubtractTime: 'Adicionar/Subtrair tempo:',
                    valuePlaceholder: 'Valor',
                    minutes: 'Minutos',
                    hours: 'Horas',
                    days: 'Dias',
                    weeks: 'Semanas',
                    months: 'Meses',
                    years: 'Anos',
                    add: 'Adicionar',
                    subtract: 'Subtrair',
                    calculate: 'Calcular',
                    
                    // Date formats section
                    commonDateFormats: 'Formatos de Data Comuns',
                    
                    // About timestamps section
                    aboutTimestamps: 'Sobre Timestamps',
                    timestampDefinition: 'Timestamp Unix é o número de segundos que se passaram desde 1º de janeiro de 1970, 00:00:00 UTC (também conhecido como Unix Epoch).',
                    characteristics: 'Características:',
                    universalStandard: 'Padrão universal:',
                    universalStandardDesc: 'Usado em sistemas Unix, Linux, macOS e muitas linguagens de programação',
                    timezoneIndependent: 'Independente de fuso horário:',
                    timezoneIndependentDesc: 'Sempre em UTC, facilitando cálculos globais',
                    easyCalculation: 'Fácil de calcular:',
                    easyCalculationDesc: 'Diferenças de tempo são simples subtrações',
                    compactFormat: 'Formato compacto:',
                    compactFormatDesc: 'Ocupa pouco espaço para armazenamento',
                    commonConversions: 'Conversões Comuns:',
                    secondsDesc: 'Timestamp padrão (ex: 1641859200)',
                    millisecondsDesc: 'Usado em JavaScript (ex: 1641859200000)',
                    microseconds: 'Microssegundos:',
                    microsecondsDesc: 'Usado em alguns sistemas de alta precisão',
                    limitations: 'Limitações:',
                    year2038Problem: 'Problema do Ano 2038:',
                    year2038ProblemDesc: 'Timestamps de 32 bits podem ter problemas em 2038',
                    leapSeconds: 'Segundos bissextos:',
                    leapSecondsDesc: 'Não considera segundos bissextos',
                    precision: 'Precisão:',
                    precisionDesc: 'Limitado à precisão de segundos (ou milissegundos)',
                    
                    // Common messages
                    errorInvalid: 'Timestamp inválido'
                }
            },
            'en': {
                nav: {
                    home: 'Home',
                    blog: 'Blog',
                    about: 'About',
                    contact: 'Contact'
                },
                hero: {
                    title: 'Useful Online Tools',
                    subtitle: 'A collection of simple and efficient tools for your daily needs. All work 100% in your browser, no registration or installation required.',
                    searchPlaceholder: 'Search tools...'
                },
                features: {
                    title: 'Why use our tools?',
                    fast: {
                        title: 'Fast and Simple',
                        description: 'No registration, no installation. Use directly in your browser.'
                    },
                    secure: {
                        title: 'Safe and Private',
                        description: 'All data is processed locally on your device.'
                    },
                    responsive: {
                        title: 'Responsive',
                        description: 'Works perfectly on mobile, tablet and desktop.'
                    }
                },
                tools: {
                    temperature: {
                        title: '🌡️ Temperature Converter',
                        description: 'Easily convert between Celsius, Fahrenheit and Kelvin'
                    },
                    units: {
                        title: '📏 Unit Converter',
                        description: 'Convert units of length, weight, volume and area'
                    },
                    textCase: {
                        title: '🔤 Text Case Converter',
                        description: 'Transform text to uppercase, lowercase or capitalize'
                    },
                    removeAccents: {
                        title: '✂️ Remove Accents',
                        description: 'Remove accents and special characters from text'
                    },
                    textCounter: {
                        title: '🔢 Text Counter',
                        description: 'Count words, characters, paragraphs and lines'
                    },
                    qrCode: {
                        title: '📱 QR Code Generator',
                        description: 'Create QR codes for text, URLs, emails and more'
                    },
                    base64: {
                        title: '🔐 Base64 Encoder',
                        description: 'Encode and decode text in Base64'
                    },
                    md5: {
                        title: '🔒 MD5 Generator',
                        description: 'Generate MD5 hashes for integrity verification'
                    },
                    timestamp: {
                        title: '⏰ Timestamp Converter',
                        description: 'Convert Unix timestamps to readable dates'
                    }
                },
                footer: {
                    tools: 'Tools',
                    generators: 'Generators',
                    about: 'About',
                    mytools: 'MyTools',
                    temperatureConverter: 'Temperature Converter',
                    unitConverter: 'Unit Converter',
                    textCase: 'Upper/Lowercase',
                    textCounter: 'Text Counter',
                    qrGenerator: 'QR Code Generator',
                    md5Generator: 'MD5 Generator',
                    base64: 'Base64',
                    timestamp: 'Timestamp',
                    aboutUs: 'About Us',
                    contact: 'Contact',
                    privacy: 'Privacy',
                    terms: 'Terms of Use',
                    description: 'Useful and free tools to make your daily life easier.',
                    copyright: '© 2025 MyTools. All rights reserved.'
                },
                messages: {
                    copied: 'Copied to clipboard!',
                    copyError: 'Error copying text'
                },
                blog: {
                    title: 'Blog',
                    subtitle: 'Tutorials, tips and complete guides on how to make the most of our free online tools',
                    readMore: 'Read more',
                    articles: {
                        temperature: {
                            title: 'Complete Guide: Temperature Converter',
                            excerpt: 'Learn everything about temperature conversion between Celsius, Fahrenheit and Kelvin. Understand the formulas, when to use each scale and practical everyday examples.',
                            tag: 'Converters'
                        },
                        units: {
                            title: 'How to Convert Measurements: Definitive Guide',
                            excerpt: 'Master conversions of length, weight, volume and area. Reference tables, practical tips and common use cases to make your day easier.',
                            tag: 'Converters'
                        },
                        textCase: {
                            title: 'Text Formatting: Uppercase and Lowercase',
                            excerpt: 'Transform texts easily with our capitalization tools. Learn formatting best practices and when to use each style.',
                            tag: 'Text'
                        },
                        removeAccents: {
                            title: 'Remove Accents: When and How to Use',
                            excerpt: 'Discover why removing accents is important for URLs, programming and SEO. Complete tutorial with practical examples and use cases.',
                            tag: 'Text'
                        },
                        textCounter: {
                            title: 'Word and Character Counter: Practical Guide',
                            excerpt: 'Optimize your texts for social media, SEO and writing. Learn character limits, word counting and good writing practices.',
                            tag: 'Text'
                        },
                        qrCode: {
                            title: 'QR Code: How to Create and Use Effectively',
                            excerpt: 'Complete guide about QR Codes: creation, customization, best practices and creative ideas for marketing, events and business.',
                            tag: 'Generators'
                        },
                        base64: {
                            title: 'Base64: What It Is and How It Works',
                            excerpt: 'Understand Base64 encoding, its applications in web development, sending images and data, with practical examples and tutorials.',
                            tag: 'Encoding'
                        },
                        md5: {
                            title: 'MD5 Hash: Security and Integrity Verification',
                            excerpt: 'Learn about MD5 hashes, file verification, data security and how to use checksums to ensure information integrity.',
                            tag: 'Security'
                        },
                        timestamp: {
                            title: 'Unix Timestamp: Complete Conversion Guide',
                            excerpt: 'Master Unix timestamps: what they are, how to convert, applications in programming and databases, with practical examples and useful tips.',
                            tag: 'Date/Time'
                        }
                    },
                    date: 'December 2025',
                    backToBlog: '← Blog',
                    ctaButton: 'Use Tool',
                    common: {
                        whatIs: 'What Is',
                        mainUses: 'Main Uses',
                        howToUse: 'How to Use',
                        bestPractices: 'Best Practices',
                        examples: 'Practical Examples',
                        tips: 'Tips',
                        benefits: 'Benefits',
                        applications: 'Applications',
                        security: 'Security',
                        commonUses: 'Common Use Cases'
                    }
                },
                about: {
                    title: 'About MyTools',
                    subtitle: 'Useful and free tools to make your daily life easier',
                    mission: 'Our Mission',
                    missionText: 'MyTools was created with the goal of providing useful, simple and free tools to facilitate daily tasks. We believe that technology should be accessible and easy to use, without unnecessary complications.',
                    whyTitle: 'Why MyTools?',
                    simplicity: '⚡ Simplicity',
                    simplicityText: 'All our tools are designed to be intuitive and easy to use. No registration, no complications.',
                    privacy: '🔒 Privacy',
                    privacyText: 'All data is processed locally in your browser. Nothing is sent to our servers.',
                    responsive: '📱 Responsive',
                    responsiveText: 'Our tools work perfectly on any device: mobile, tablet or desktop.',
                    free: '🆓 Free',
                    freeText: 'All tools are 100% free and always will be. No hidden fees, no limitations.',
                    howTitle: 'How It Works',
                    howText: 'All our tools work 100% in your browser. This means:',
                    howList: [
                        'Your data never leaves your device',
                        'You can use the tools even offline (after loading the page)',
                        'No registration or login required',
                        'Works in any modern browser'
                    ],
                    techTitle: 'Technologies Used',
                    techText: 'MyTools is developed with modern and secure web technologies:',
                    techList: [
                        'HTML5: Semantic and accessible structure',
                        'CSS3: Responsive and modern design',
                        'JavaScript: Interactive client-side functionality',
                        'GitHub Pages: Reliable and fast hosting'
                    ],
                    supportTitle: 'Support and Contributions',
                    supportText: 'If you found a bug, have a suggestion for improvement or want to contribute with a new tool, we would be happy to hear from you!',
                    contactButton: 'Contact Us'
                },
                contact: {
                    title: 'Contact Us',
                    subtitle: 'Have any questions, suggestions or feedback? We would love to hear from you!',
                    name: 'Name',
                    email: 'Email',
                    subject: 'Subject',
                    message: 'Message',
                    send: 'Send Message',
                    success: 'Message sent successfully!',
                    error: 'Error sending message. Please try again.',
                    nameRequired: 'Name is required',
                    emailRequired: 'Email is required',
                    emailInvalid: 'Invalid email',
                    messageRequired: 'Message is required'
                },
                qrCode: {
                    title: '📱 QR Code Generator',
                    subtitle: 'Create QR codes for text, URLs, emails and much more',
                    type: 'QR Code Type:',
                    typeText: 'Text',
                    typeUrl: 'URL/Link',
                    typeEmail: 'Email',
                    typePhone: 'Phone',
                    typeSms: 'SMS',
                    typeWifi: 'WiFi',
                    typeVcard: 'vCard (Contact)',
                    content: 'Content:',
                    size: 'Size:',
                    sizeSmall: '200x200 (Small)',
                    sizeMedium: '300x300 (Medium)',
                    sizeLarge: '400x400 (Large)',
                    sizeXLarge: '500x500 (Extra Large)',
                    generate: 'Generate QR Code',
                    download: 'Download QR Code',
                    copy: 'Copy as Image',
                    clear: 'Clear',
                    howToUse: 'How to use the QR Code Generator',
                    howTo1: 'Choose the type of QR Code you want to create',
                    howTo2: 'Fill in the necessary information',
                    howTo3: 'Select the desired size',
                    howTo4: 'Click "Generate QR Code"',
                    howTo5: 'Download or copy the generated image',
                    supportedTypes: 'Supported QR Code Types',
                    textDescription: 'Any simple text',
                    urlDescription: 'Links to websites or web pages',
                    emailDescription: 'Opens email client with pre-filled recipient',
                    phoneDescription: 'Initiates a phone call',
                    smsDescription: 'Opens messaging app with number and text',
                    wifiDescription: 'Automatically connects to WiFi network',
                    placeholder: {
                        text: 'Type your text here...',
                        url: 'https://example.com',
                        email: 'example@email.com',
                        phone: '+1 555 123-4567',
                        sms: 'Your SMS message here...',
                        wifi: 'WiFi network name',
                        vcard: 'Full name'
                    },
                    wifi: {
                        network: 'Network Name (SSID):',
                        password: 'Password:',
                        security: 'Security Type:',
                        securityNone: 'None',
                        securityWep: 'WEP',
                        securityWpa: 'WPA/WPA2',
                        hidden: 'Hidden network'
                    },
                    vcard: {
                        name: 'Full Name:',
                        company: 'Company:',
                        phone: 'Phone:',
                        email: 'Email:',
                        website: 'Website:',
                        address: 'Address:'
                    },
                    sms: {
                        number: 'Phone Number:',
                        message: 'Message:'
                    },
                    success: 'QR Code generated successfully!',
                    error: 'Please fill in the content field.',
                    copied: 'QR Code copied to clipboard!',
                    downloaded: 'QR Code downloaded successfully!'
                },
                temperatureConverter: {
                    title: '🌡️ Temperature Converter',
                    subtitle: 'Easily convert between Celsius, Fahrenheit and Kelvin',
                    temperature: 'Temperature:',
                    temperaturePlaceholder: 'Enter temperature',
                    from: 'From:',
                    to: 'To:',
                    celsius: 'Celsius (°C)',
                    fahrenheit: 'Fahrenheit (°F)',
                    kelvin: 'Kelvin (K)',
                    convert: 'Convert',
                    copyResult: 'Copy Result',
                    clear: 'Clear',
                    howToUse: 'How to use the Temperature Converter',
                    howToUseSteps: [
                        'Enter the temperature value you want to convert',
                        'Select the source unit (Celsius, Fahrenheit or Kelvin)',
                        'Select the target unit',
                        'Click "Convert" to see the result'
                    ],
                    formulas: 'Conversion Formulas',
                    formulasList: [
                        'Celsius to Fahrenheit: °F = (°C × 9/5) + 32',
                        'Celsius to Kelvin: K = °C + 273.15',
                        'Fahrenheit to Celsius: °C = (°F - 32) × 5/9',
                        'Fahrenheit to Kelvin: K = (°F - 32) × 5/9 + 273.15',
                        'Kelvin to Celsius: °C = K - 273.15',
                        'Kelvin to Fahrenheit: °F = (K - 273.15) × 9/5 + 32'
                    ],
                    errorInvalid: 'Please enter a valid numeric value.',
                    sameUnit: 'same unit'
                },
                unitConverter: {
                    title: '📏 Unit Converter',
                    subtitle: 'Convert units of length, weight, volume and area',
                    value: 'Value:',
                    valuePlaceholder: 'Enter value',
                    from: 'From:',
                    to: 'To:',
                    convert: 'Convert',
                    copyResult: 'Copy Result',
                    clear: 'Clear',
                    quickConversions: 'Quick Conversions',
                    supportedUnits: 'Supported Units',
                    categories: {
                        title: 'Category:',
                        length: 'Length',
                        weight: 'Weight',
                        volume: 'Volume',
                        area: 'Area'
                    },
                    lengthUnits: 'Millimeters, Centimeters, Meters, Kilometers, Inches, Feet, Yards, Miles',
                    weightUnits: 'Grams, Kilograms, Tons, Ounces, Pounds, Stones',
                    volumeUnits: 'Milliliters, Liters, Gallons, Cups, Tablespoons, Teaspoons',
                    areaUnits: 'Square meters, Square kilometers, Hectares, Square feet, Acres',
                    errorInvalid: 'Please enter a valid numeric value.',
                    sameUnit: 'same unit'
                },
                textCase: {
                    title: '🔤 Text Case Converter',
                    subtitle: 'Transform text to uppercase, lowercase or capitalize',
                    inputText: 'Enter your text:',
                    inputPlaceholder: 'Type or paste your text here...',
                    outputText: 'Result:',
                    outputPlaceholder: 'The result will appear here...',
                    uppercase: 'UPPERCASE',
                    lowercase: 'lowercase',
                    capitalize: 'Capitalize',
                    titleCase: 'Title Case',
                    sentence: 'Sentence',
                    alternating: 'AlTeRnAtInG',
                    copyResult: 'Copy Result',
                    swap: 'Swap ⇅',
                    clear: 'Clear All',
                    stats: 'Text Statistics',
                    characters: 'Characters',
                    words: 'Words',
                    lines: 'Lines',
                    uppercaseLetters: 'Uppercase',
                    lowercaseLetters: 'Lowercase',
                    formattingTypes: 'Formatting Types',
                    example: 'Example:',
                    uppercaseDescription: 'Converts all text to uppercase letters.',
                    uppercaseExample: '"hello world" → "HELLO WORLD"',
                    lowercaseDescription: 'Converts all text to lowercase letters.',
                    lowercaseExample: '"HELLO WORLD" → "hello world"',
                    capitalizeDescription: 'Makes the first letter of each word uppercase.',
                    capitalizeExample: '"hello world" → "Hello World"',
                    titleDescription: 'Capitalizes important words, ignores small articles and prepositions.',
                    titleExample: '"the cat climbed on the roof" → "The Cat Climbed on the Roof"',
                    sentenceDescription: 'Makes uppercase only the first letter of each sentence.',
                    sentenceExample: '"hello. how are you?" → "Hello. How are you?"',
                    alternatingDescription: 'Alternates between uppercase and lowercase for each letter.',
                    alternatingExample: '"hello world" → "HeLlO wOrLd"'
                },
                removeAccents: {
                    title: '✂️ Remove Accents',
                    subtitle: 'Remove accents and special characters from text',
                    inputText: 'Text with accents:',
                    inputPlaceholder: 'Type or paste text with accents here...',
                    outputText: 'Text without accents:',
                    outputPlaceholder: 'The result will appear here...',
                    remove: 'Remove Accents',
                    removeSpecial: 'Remove Special',
                    removeAll: 'Remove All',
                    createSlug: 'Create Slug',
                    copyResult: 'Copy Result',
                    swap: 'Swap ⇅',
                    clear: 'Clear All',
                    advancedOptions: 'Advanced Options',
                    preserveSpaces: 'Preserve spaces',
                    preserveNumbers: 'Preserve numbers',
                    convertToLower: 'Convert to lowercase',
                    removePunctuation: 'Remove punctuation',
                    comparison: 'Side-by-Side Comparison',
                    before: 'Before:',
                    after: 'After:',
                    removalTypes: 'Removal Types',
                    example: 'Example:',
                    removeDescription: 'Removes only accents, keeping basic letters.',
                    removeExample: '"José, João e María" → "Jose, Joao e Maria"',
                    removeSpecialDescription: 'Removes special characters, keeping letters, numbers and spaces.',
                    removeSpecialExample: '"José@email.com!" → "Josemailcom"',
                    removeAllDescription: 'Removes accents and special characters.',
                    removeAllExample: '"José@email.com!" → "Josemailcom"',
                    createSlugDescription: 'Creates a URL-friendly slug (lowercase, hyphens instead of spaces).',
                    createSlugExample: '"José da Silva" → "jose-da-silva"',
                    supportedChars: 'Supported Characters',
                    accents: 'Accents',
                    specials: 'Special',
                    punctuation: 'Punctuation'
                },
                textCounter: {
                    title: '🔢 Text Counter',
                    subtitle: 'Count words, characters, paragraphs and lines',
                    inputText: 'Enter your text:',
                    inputPlaceholder: 'Type or paste your text here for analysis...',
                    statistics: 'Statistics',
                    characters: 'Characters',
                    charactersNoSpaces: 'Characters (no spaces)',
                    words: 'Words',
                    sentences: 'Sentences',
                    paragraphs: 'Paragraphs',
                    lines: 'Lines',
                    readingTime: 'Min. read',
                    copyStats: 'Copy Statistics',
                    clear: 'Clear',
                    detailedAnalysis: 'Detailed Analysis',
                    wordDensity: 'Word density:',
                    wordsPerLine: 'words per line',
                    avgWordLength: 'Average word length:',
                    characters2: 'characters',
                    commonWords: 'Most common words:',
                    howToUse: 'How to use Text Counter',
                    howTo1: 'Type or paste your text in the text area above',
                    howTo2: 'Statistics are automatically updated in real time',
                    howTo3: 'Use the "Copy Statistics" button to copy a summary of the counts',
                    howTo4: 'Reading time is calculated based on 200 words per minute',
                    metricsInfo: 'Information about Metrics',
                    charactersInfo: 'Characters:',
                    charactersDesc: 'Total characters including spaces and punctuation',
                    noSpacesInfo: 'No spaces:',
                    noSpacesDesc: 'Characters excluding whitespace',
                    wordsInfo: 'Words:',
                    wordsDesc: 'Character sequences separated by spaces',
                    linesInfo: 'Lines:',
                    linesDesc: 'Number of line breaks in the text',
                    paragraphsInfo: 'Paragraphs:',
                    paragraphsDesc: 'Text blocks separated by blank lines'
                },
                base64: {
                    title: '🔐 Base64 Encoder',
                    subtitle: 'Encode and decode text in Base64',
                    inputText: 'Input text:',
                    inputTextEncode: 'Text to encode:',
                    inputTextDecode: 'Base64 to decode:',
                    inputPlaceholder: 'Type or paste your text here...',
                    inputPlaceholderEncode: 'Type text here...',
                    inputPlaceholderDecode: 'Paste Base64 here...',
                    outputText: 'Result:',
                    outputTextEncode: 'Encoded Base64:',
                    outputTextDecode: 'Decoded text:',
                    outputPlaceholder: 'The result will appear here...',
                    encode: 'Encode',
                    decode: 'Decode',
                    copyResult: 'Copy Result',
                    swap: 'Swap ⇅',
                    clear: 'Clear All',
                    fileSection: 'File Encoding/Decoding',
                    selectFile: 'Select file:',
                    processFile: 'Process File',
                    fileResult: 'File result:',
                    fileResultPlaceholder: 'The file result will appear here...',
                    copy: 'Copy',
                    download: 'Download',
                    aboutSection: 'About Base64',
                    aboutDescription: 'Base64 is an encoding method that converts binary data to ASCII text using 64 specific characters (A-Z, a-z, 0-9, +, /).',
                    whenToUse: 'When to use Base64:',
                    dataTransmission: 'Data transmission:',
                    dataTransmissionDesc: 'To send binary data through protocols that only accept text',
                    urlsEmails: 'URLs and emails:',
                    urlsEmailsDesc: 'To include data in URLs or emails without breaking formatting',
                    storage: 'Storage:',
                    storageDesc: 'To save binary data in databases that only accept text',
                    apis: 'APIs:',
                    apisDesc: 'Many APIs use Base64 to transmit images and other files',
                    characteristics: 'Characteristics:',
                    notEncryption: 'It is not encryption - it is just encoding',
                    sizeIncrease: 'Increases data size by approximately 33%',
                    reversible: 'It is reversible - you can always decode back',
                    urlSafe: 'It is safe for URLs and systems that do not support special characters',
                    errorDecode: 'Decode error: invalid Base64 text'
                },
                md5: {
                    title: '🔒 MD5 Generator',
                    subtitle: 'Generate MD5 hashes for integrity verification',
                    inputText: 'Text to generate MD5:',
                    inputPlaceholder: 'Type text here...',
                    outputText: 'MD5 Hash:',
                    outputPlaceholder: 'MD5 hash will appear here...',
                    generate: 'Generate MD5',
                    copyResult: 'Copy MD5',
                    clear: 'Clear',
                    
                    // Verifier section
                    verifier: 'MD5 Verifier',
                    verifierDescription: 'Compare two MD5 hashes to check if they are equal:',
                    hash1: 'Hash 1:',
                    hash1Placeholder: 'Paste first MD5 hash here...',
                    hash2: 'Hash 2:',
                    hash2Placeholder: 'Paste second MD5 hash here...',
                    compareHashes: 'Compare Hashes',
                    
                    // File generation section
                    fileGeneration: 'MD5 Generation for Files',
                    selectFile: 'Select file:',
                    generateFileMD5: 'Generate File MD5',
                    fileMD5Result: 'File MD5:',
                    fileMD5Placeholder: 'File MD5 will appear here...',
                    copyFileMD5: 'Copy MD5',
                    fileInfo: 'File Information:',
                    fileName: 'Name:',
                    fileSize: 'Size:',
                    fileType: 'Type:',
                    
                    // About MD5 section
                    aboutMD5: 'About MD5',
                    md5Description: 'MD5 (Message Digest Algorithm 5) is a cryptographic hash function that produces a 128-bit hash value (32 hexadecimal characters).',
                    commonUses: 'Common Uses of MD5:',
                    integrityVerification: 'Integrity verification:',
                    integrityDescription: 'Check if a file was not corrupted during transfer',
                    checksums: 'Checksums:',
                    checksumsDescription: 'Validate downloads and backups',
                    uniqueIdentification: 'Unique identification:',
                    uniqueDescription: 'Create unique identifiers for data',
                    cacheDeduplication: 'Cache and deduplication:',
                    cacheDescription: 'Identify duplicate content',
                    characteristics: 'MD5 Characteristics:',
                    char1: 'Always produces a 32-character hash',
                    char2: 'It is one-way - cannot be "decrypted"',
                    char3: 'Small changes in input result in completely different hashes',
                    char4: 'Same input always produces the same hash',
                    securityWarningTitle: '⚠️ Important about Security:',
                    securityWarningDescription: 'MD5 is no longer considered secure for cryptographic use due to known vulnerabilities. For security applications, use SHA-256 or more modern algorithms. MD5 is still useful for basic integrity verification and checksums.'
                },
                timestamp: {
                    title: '⏰ Timestamp Converter',
                    subtitle: 'Convert Unix timestamps to readable dates',
                    
                    // Current time section
                    currentTime: 'Current Time',
                    unixTimestamp: 'Unix Timestamp',
                    currentDate: 'Current Date',
                    copyTimestamp: 'Copy Timestamp',
                    copyDate: 'Copy Date',
                    
                    // Timestamp to date section
                    timestampToDate: 'Timestamp to Date',
                    timestamp: 'Timestamp',
                    timestampPlaceholder: 'Enter timestamp...',
                    unit: 'Unit',
                    seconds: 'Seconds',
                    milliseconds: 'Milliseconds',
                    convertToDate: 'Convert to Date',
                    
                    // Date to timestamp section
                    dateToTimestamp: 'Date to Timestamp',
                    datetime: 'Date and Time',
                    timezone: 'Timezone',
                    local: 'Local',
                    utc: 'UTC',
                    saoPaulo: 'São Paulo (GMT-3)',
                    newYork: 'New York (GMT-5)',
                    london: 'London (GMT+0)',
                    tokyo: 'Tokyo (GMT+9)',
                    convertToTimestamp: 'Convert to Timestamp',
                    copyResult: 'Copy Result',
                    
                    // Time calculator section
                    timeCalculator: 'Time Calculator',
                    addSubtractTime: 'Add/Subtract time:',
                    valuePlaceholder: 'Value',
                    minutes: 'Minutes',
                    hours: 'Hours',
                    days: 'Days',
                    weeks: 'Weeks',
                    months: 'Months',
                    years: 'Years',
                    add: 'Add',
                    subtract: 'Subtract',
                    calculate: 'Calculate',
                    
                    // Date formats section
                    commonDateFormats: 'Common Date Formats',
                    
                    // About timestamps section
                    aboutTimestamps: 'About Timestamps',
                    timestampDefinition: 'Unix timestamp is the number of seconds that have passed since January 1, 1970, 00:00:00 UTC (also known as Unix Epoch).',
                    characteristics: 'Characteristics:',
                    universalStandard: 'Universal standard:',
                    universalStandardDesc: 'Used in Unix, Linux, macOS and many programming languages',
                    timezoneIndependent: 'Timezone independent:',
                    timezoneIndependentDesc: 'Always in UTC, facilitating global calculations',
                    easyCalculation: 'Easy to calculate:',
                    easyCalculationDesc: 'Time differences are simple subtractions',
                    compactFormat: 'Compact format:',
                    compactFormatDesc: 'Takes little space for storage',
                    commonConversions: 'Common Conversions:',
                    secondsDesc: 'Standard timestamp (e.g.: 1641859200)',
                    millisecondsDesc: 'Used in JavaScript (e.g.: 1641859200000)',
                    microseconds: 'Microseconds:',
                    microsecondsDesc: 'Used in some high-precision systems',
                    limitations: 'Limitations:',
                    year2038Problem: 'Year 2038 Problem:',
                    year2038ProblemDesc: '32-bit timestamps may have problems in 2038',
                    leapSeconds: 'Leap seconds:',
                    leapSecondsDesc: 'Does not consider leap seconds',
                    precision: 'Precision:',
                    precisionDesc: 'Limited to seconds (or milliseconds) precision',
                    
                    // Common messages
                    errorInvalid: 'Invalid timestamp'
                }
            },
            'es': {
                nav: {
                    home: 'Inicio',
                    blog: 'Blog',
                    about: 'Acerca de',
                    contact: 'Contacto'
                },
                hero: {
                    title: 'Herramientas Útiles Online',
                    subtitle: 'Una colección de herramientas simples y eficientes para tu día a día. Todas funcionan 100% en tu navegador, sin necesidad de registro o instalación.',
                    searchPlaceholder: 'Buscar herramientas...'
                },
                features: {
                    title: '¿Por qué usar nuestras herramientas?',
                    fast: {
                        title: 'Rápido y Simple',
                        description: 'Sin registros, sin instalaciones. Usa directamente en tu navegador.'
                    },
                    secure: {
                        title: 'Seguro y Privado',
                        description: 'Todos los datos se procesan localmente en tu dispositivo.'
                    },
                    responsive: {
                        title: 'Responsivo',
                        description: 'Funciona perfectamente en móviles, tablets y desktop.'
                    }
                },
                tools: {
                    temperature: {
                        title: '🌡️ Conversor de Temperatura',
                        description: 'Convierte fácilmente entre Celsius, Fahrenheit y Kelvin'
                    },
                    units: {
                        title: '📏 Conversor de Medidas',
                        description: 'Convierte unidades de longitud, peso, volumen y área'
                    },
                    textCase: {
                        title: '🔤 Texto Mayúsculas/Minúsculas',
                        description: 'Transforma texto a mayúsculas, minúsculas o capitalizar'
                    },
                    removeAccents: {
                        title: '✂️ Remover Acentos',
                        description: 'Remueve acentos y caracteres especiales de textos'
                    },
                    textCounter: {
                        title: '🔢 Contador de Texto',
                        description: 'Cuenta palabras, caracteres, párrafos y líneas'
                    },
                    qrCode: {
                        title: '📱 Generador de Código QR',
                        description: 'Crea códigos QR para textos, URLs, emails y más'
                    },
                    base64: {
                        title: '🔐 Codificador Base64',
                        description: 'Codifica y decodifica textos en Base64'
                    },
                    md5: {
                        title: '🔒 Generador MD5',
                        description: 'Genera hashes MD5 para verificación de integridad'
                    },
                    timestamp: {
                        title: '⏰ Conversor de Timestamp',
                        description: 'Convierte timestamps Unix a fechas legibles'
                    }
                },
                footer: {
                    tools: 'Herramientas',
                    generators: 'Generadores',
                    about: 'Acerca de',
                    mytools: 'MyTools',
                    temperatureConverter: 'Conversor de Temperatura',
                    unitConverter: 'Conversor de Medidas',
                    textCase: 'Mayúsculas/Minúsculas',
                    textCounter: 'Contador de Texto',
                    qrGenerator: 'Generador QR Code',
                    md5Generator: 'Generador MD5',
                    base64: 'Base64',
                    timestamp: 'Timestamp',
                    aboutUs: 'Acerca de Nosotros',
                    contact: 'Contacto',
                    privacy: 'Privacidad',
                    terms: 'Términos de Uso',
                    description: 'Herramientas útiles y gratuitas para facilitar tu día a día.',
                    copyright: '© 2025 MyTools. Todos los derechos reservados.'
                },
                messages: {
                    copied: '¡Copiado al portapapeles!',
                    copyError: 'Error al copiar texto'
                },
                blog: {
                    title: 'Blog',
                    subtitle: 'Tutoriales, consejos y guías completas sobre cómo aprovechar al máximo nuestras herramientas online gratuitas',
                    readMore: 'Leer más',
                    articles: {
                        temperature: {
                            title: 'Guía Completa: Conversor de Temperatura',
                            excerpt: 'Aprende todo sobre conversión de temperatura entre Celsius, Fahrenheit y Kelvin. Entiende las fórmulas, cuándo usar cada escala y ejemplos prácticos del día a día.',
                            tag: 'Conversores'
                        },
                        units: {
                            title: 'Cómo Convertir Medidas: Guía Definitiva',
                            excerpt: 'Domina conversiones de longitud, peso, volumen y área. Tablas de referencia, consejos prácticos y casos de uso comunes para facilitar tu día a día.',
                            tag: 'Conversores'
                        },
                        textCase: {
                            title: 'Formato de Texto: Mayúsculas y Minúsculas',
                            excerpt: 'Transforma textos fácilmente con nuestras herramientas de capitalización. Aprende las mejores prácticas de formato y cuándo usar cada estilo.',
                            tag: 'Texto'
                        },
                        removeAccents: {
                            title: 'Remover Acentos: Cuándo y Cómo Usar',
                            excerpt: 'Descubre por qué remover acentos es importante para URLs, programación y SEO. Tutorial completo con ejemplos prácticos y casos de uso.',
                            tag: 'Texto'
                        },
                        textCounter: {
                            title: 'Contador de Palabras y Caracteres: Guía Práctica',
                            excerpt: 'Optimiza tus textos para redes sociales, SEO y redacción. Aprende límites de caracteres, conteo de palabras y buenas prácticas de escritura.',
                            tag: 'Texto'
                        },
                        qrCode: {
                            title: 'Código QR: Cómo Crear y Usar Efectivamente',
                            excerpt: 'Guía completa sobre Códigos QR: creación, personalización, mejores prácticas e ideas creativas para marketing, eventos y negocios.',
                            tag: 'Generadores'
                        },
                        base64: {
                            title: 'Base64: Qué Es y Cómo Funciona',
                            excerpt: 'Entiende la codificación Base64, sus aplicaciones en desarrollo web, envío de imágenes y datos, con ejemplos prácticos y tutoriales.',
                            tag: 'Codificación'
                        },
                        md5: {
                            title: 'Hash MD5: Seguridad y Verificación de Integridad',
                            excerpt: 'Aprende sobre hashes MD5, verificación de archivos, seguridad de datos y cómo usar checksums para garantizar integridad de información.',
                            tag: 'Seguridad'
                        },
                        timestamp: {
                            title: 'Timestamp Unix: Guía Completa de Conversión',
                            excerpt: 'Domina timestamps Unix: qué son, cómo convertir, aplicaciones en programación y bases de datos, con ejemplos prácticos y consejos útiles.',
                            tag: 'Fecha/Hora'
                        }
                    },
                    date: 'Diciembre 2025',
                    backToBlog: '← Blog',
                    ctaButton: 'Usar Herramienta',
                    common: {
                        whatIs: 'Qué Es',
                        mainUses: 'Usos Principales',
                        howToUse: 'Cómo Usar',
                        bestPractices: 'Mejores Prácticas',
                        examples: 'Ejemplos Prácticos',
                        tips: 'Consejos',
                        benefits: 'Beneficios',
                        applications: 'Aplicaciones',
                        security: 'Seguridad',
                        commonUses: 'Casos de Uso Comunes'
                    }
                },
                about: {
                    title: 'Acerca de MyTools',
                    subtitle: 'Herramientas útiles y gratuitas para facilitar tu día a día',
                    mission: 'Nuestra Misión',
                    missionText: 'MyTools fue creado con el objetivo de proporcionar herramientas útiles, simples y gratuitas para facilitar las tareas diarias. Creemos que la tecnología debe ser accesible y fácil de usar, sin complicaciones innecesarias.',
                    whyTitle: '¿Por qué MyTools?',
                    simplicity: '⚡ Simplicidad',
                    simplicityText: 'Todas nuestras herramientas están diseñadas para ser intuitivas y fáciles de usar. Sin registros, sin complicaciones.',
                    privacy: '🔒 Privacidad',
                    privacyText: 'Todos los datos se procesan localmente en tu navegador. Nada se envía a nuestros servidores.',
                    responsive: '📱 Responsivo',
                    responsiveText: 'Nuestras herramientas funcionan perfectamente en cualquier dispositivo: móvil, tablet o escritorio.',
                    free: '🆓 Gratuito',
                    freeText: 'Todas las herramientas son 100% gratuitas y siempre lo serán. Sin tarifas ocultas, sin limitaciones.',
                    howTitle: 'Cómo Funciona',
                    howText: 'Todas nuestras herramientas funcionan 100% en tu navegador. Esto significa:',
                    howList: [
                        'Tus datos nunca salen de tu dispositivo',
                        'Puedes usar las herramientas incluso sin conexión (después de cargar la página)',
                        'No se requiere registro o inicio de sesión',
                        'Funciona en cualquier navegador moderno'
                    ],
                    techTitle: 'Tecnologías Utilizadas',
                    techText: 'MyTools está desarrollado con tecnologías web modernas y seguras:',
                    techList: [
                        'HTML5: Estructura semántica y accesible',
                        'CSS3: Diseño responsivo y moderno',
                        'JavaScript: Funcionalidad interactiva del lado del cliente',
                        'GitHub Pages: Alojamiento confiable y rápido'
                    ],
                    supportTitle: 'Soporte y Contribuciones',
                    supportText: 'Si encontraste un error, tienes una sugerencia de mejora o quieres contribuir con una nueva herramienta, ¡nos encantaría escucharte!',
                    contactButton: 'Contáctanos'
                },
                contact: {
                    title: 'Contáctanos',
                    subtitle: '¿Tienes alguna pregunta, sugerencia o comentario? ¡Nos encantaría escucharte!',
                    name: 'Nombre',
                    email: 'Correo',
                    subject: 'Asunto',
                    message: 'Mensaje',
                    send: 'Enviar Mensaje',
                    success: '¡Mensaje enviado exitosamente!',
                    error: 'Error al enviar mensaje. Inténtalo de nuevo.',
                    nameRequired: 'El nombre es obligatorio',
                    emailRequired: 'El correo es obligatorio',
                    emailInvalid: 'Correo inválido',
                    messageRequired: 'El mensaje es obligatorio'
                },
                qrCode: {
                    title: '📱 Generador de Código QR',
                    subtitle: 'Crea códigos QR para textos, URLs, emails y mucho más',
                    type: 'Tipo de Código QR:',
                    typeText: 'Texto',
                    typeUrl: 'URL/Enlace',
                    typeEmail: 'Email',
                    typePhone: 'Teléfono',
                    typeSms: 'SMS',
                    typeWifi: 'WiFi',
                    typeVcard: 'vCard (Contacto)',
                    content: 'Contenido:',
                    size: 'Tamaño:',
                    sizeSmall: '200x200 (Pequeño)',
                    sizeMedium: '300x300 (Mediano)',
                    sizeLarge: '400x400 (Grande)',
                    sizeXLarge: '500x500 (Extra Grande)',
                    generate: 'Generar Código QR',
                    download: 'Descargar Código QR',
                    copy: 'Copiar como Imagen',
                    clear: 'Limpiar',
                    howToUse: 'Cómo usar el Generador de Código QR',
                    howTo1: 'Elige el tipo de código QR que quieres crear',
                    howTo2: 'Completa la información necesaria',
                    howTo3: 'Selecciona el tamaño deseado',
                    howTo4: 'Haz clic en "Generar Código QR"',
                    howTo5: 'Descarga o copia la imagen generada',
                    supportedTypes: 'Tipos de Código QR Soportados',
                    textDescription: 'Cualquier texto simple',
                    urlDescription: 'Enlaces a sitios web o páginas',
                    emailDescription: 'Abre el cliente de email con destinatario pre-completado',
                    phoneDescription: 'Inicia una llamada telefónica',
                    smsDescription: 'Abre la app de mensajes con número y texto',
                    wifiDescription: 'Se conecta automáticamente a la red WiFi',
                    placeholder: {
                        text: 'Escribe tu texto aquí...',
                        url: 'https://ejemplo.com',
                        email: 'ejemplo@email.com',
                        phone: '+34 666 123 456',
                        sms: 'Tu mensaje SMS aquí...',
                        wifi: 'Nombre de la red WiFi',
                        vcard: 'Nombre completo'
                    },
                    wifi: {
                        network: 'Nombre de Red (SSID):',
                        password: 'Contraseña:',
                        security: 'Tipo de Seguridad:',
                        securityNone: 'Ninguna',
                        securityWep: 'WEP',
                        securityWpa: 'WPA/WPA2',
                        hidden: 'Red oculta'
                    },
                    vcard: {
                        name: 'Nombre Completo:',
                        company: 'Empresa:',
                        phone: 'Teléfono:',
                        email: 'Email:',
                        website: 'Sitio Web:',
                        address: 'Dirección:'
                    },
                    sms: {
                        number: 'Número de Teléfono:',
                        message: 'Mensaje:'
                    },
                    success: '¡Código QR generado exitosamente!',
                    error: 'Por favor, completa el campo de contenido.',
                    copied: '¡Código QR copiado al portapapeles!',
                    downloaded: '¡Código QR descargado exitosamente!'
                },
                temperatureConverter: {
                    title: '🌡️ Conversor de Temperatura',
                    subtitle: 'Convierte fácilmente entre Celsius, Fahrenheit y Kelvin',
                    temperature: 'Temperatura:',
                    temperaturePlaceholder: 'Ingresa la temperatura',
                    from: 'De:',
                    to: 'A:',
                    celsius: 'Celsius (°C)',
                    fahrenheit: 'Fahrenheit (°F)',
                    kelvin: 'Kelvin (K)',
                    convert: 'Convertir',
                    copyResult: 'Copiar Resultado',
                    clear: 'Limpiar',
                    howToUse: 'Cómo usar el Conversor de Temperatura',
                    howToUseSteps: [
                        'Ingresa el valor de temperatura que deseas convertir',
                        'Selecciona la unidad de origen (Celsius, Fahrenheit o Kelvin)',
                        'Selecciona la unidad de destino',
                        'Haz clic en "Convertir" para ver el resultado'
                    ],
                    formulas: 'Fórmulas de Conversión',
                    formulasList: [
                        'Celsius a Fahrenheit: °F = (°C × 9/5) + 32',
                        'Celsius a Kelvin: K = °C + 273.15',
                        'Fahrenheit a Celsius: °C = (°F - 32) × 5/9',
                        'Fahrenheit a Kelvin: K = (°F - 32) × 5/9 + 273.15',
                        'Kelvin a Celsius: °C = K - 273.15',
                        'Kelvin a Fahrenheit: °F = (K - 273.15) × 9/5 + 32'
                    ],
                    errorInvalid: 'Por favor, ingresa un valor numérico válido.',
                    sameUnit: 'misma unidad'
                },
                unitConverter: {
                    title: '📏 Conversor de Medidas',
                    subtitle: 'Convierte unidades de longitud, peso, volumen y área',
                    value: 'Valor:',
                    valuePlaceholder: 'Ingresa el valor',
                    from: 'De:',
                    to: 'A:',
                    convert: 'Convertir',
                    copyResult: 'Copiar Resultado',
                    clear: 'Limpiar',
                    quickConversions: 'Conversiones Rápidas',
                    supportedUnits: 'Unidades Soportadas',
                    categories: {
                        title: 'Categoría:',
                        length: 'Longitud',
                        weight: 'Peso',
                        volume: 'Volumen',
                        area: 'Área'
                    },
                    lengthUnits: 'Milímetros, Centímetros, Metros, Kilómetros, Pulgadas, Pies, Yardas, Millas',
                    weightUnits: 'Gramos, Kilogramos, Toneladas, Onzas, Libras, Piedras',
                    volumeUnits: 'Mililitros, Litros, Galones, Tazas, Cucharadas, Cucharaditas',
                    areaUnits: 'Metros cuadrados, Kilómetros cuadrados, Hectáreas, Pies cuadrados, Acres',
                    errorInvalid: 'Por favor, ingresa un valor numérico válido.',
                    sameUnit: 'misma unidad'
                },
                textCase: {
                    title: '🔤 Texto Mayúsculas/Minúsculas',
                    subtitle: 'Transforma texto a mayúsculas, minúsculas o capitalizar',
                    inputText: 'Ingresa tu texto:',
                    inputPlaceholder: 'Escribe o pega tu texto aquí...',
                    outputText: 'Resultado:',
                    outputPlaceholder: 'El resultado aparecerá aquí...',
                    uppercase: 'MAYÚSCULAS',
                    lowercase: 'minúsculas',
                    capitalize: 'Capitalizar',
                    titleCase: 'Título',
                    sentence: 'Oración',
                    alternating: 'AlTeRnAnDo',
                    copyResult: 'Copiar Resultado',
                    swap: 'Intercambiar ⇅',
                    clear: 'Limpiar Todo',
                    stats: 'Estadísticas del Texto',
                    characters: 'Caracteres',
                    words: 'Palabras',
                    lines: 'Líneas',
                    uppercaseLetters: 'Mayúsculas',
                    lowercaseLetters: 'Minúsculas',
                    formattingTypes: 'Tipos de Formato',
                    example: 'Ejemplo:',
                    uppercaseDescription: 'Convierte todo el texto a letras mayúsculas.',
                    uppercaseExample: '"hola mundo" → "HOLA MUNDO"',
                    lowercaseDescription: 'Convierte todo el texto a letras minúsculas.',
                    lowercaseExample: '"HOLA MUNDO" → "hola mundo"',
                    capitalizeDescription: 'Hace la primera letra de cada palabra mayúscula.',
                    capitalizeExample: '"hola mundo" → "Hola Mundo"',
                    titleDescription: 'Capitaliza palabras importantes, ignora artículos y preposiciones pequeñas.',
                    titleExample: '"el gato subió al tejado" → "El Gato Subió al Tejado"',
                    sentenceDescription: 'Hace mayúscula solo la primera letra de cada oración.',
                    sentenceExample: '"hola. ¿cómo estás?" → "Hola. ¿Cómo estás?"',
                    alternatingDescription: 'Alterna entre mayúsculas y minúsculas para cada letra.',
                    alternatingExample: '"hola mundo" → "HoLa MuNdO"'
                },
                removeAccents: {
                    title: '✂️ Quitar Acentos',
                    subtitle: 'Elimina acentos y caracteres especiales del texto',
                    inputText: 'Texto con acentos:',
                    inputPlaceholder: 'Escribe o pega el texto con acentos aquí...',
                    outputText: 'Texto sin acentos:',
                    outputPlaceholder: 'El resultado aparecerá aquí...',
                    remove: 'Quitar Acentos',
                    removeSpecial: 'Quitar Especiales',
                    removeAll: 'Quitar Todo',
                    createSlug: 'Crear Slug',
                    copyResult: 'Copiar Resultado',
                    swap: 'Intercambiar ⇅',
                    clear: 'Limpiar Todo',
                    advancedOptions: 'Opciones Avanzadas',
                    preserveSpaces: 'Preservar espacios',
                    preserveNumbers: 'Preservar números',
                    convertToLower: 'Convertir a minúsculas',
                    removePunctuation: 'Quitar puntuación',
                    comparison: 'Comparación Lado a Lado',
                    before: 'Antes:',
                    after: 'Después:',
                    removalTypes: 'Tipos de Eliminación',
                    example: 'Ejemplo:',
                    removeDescription: 'Elimina solo acentos, manteniendo letras básicas.',
                    removeExample: '"José, João e María" → "Jose, Joao e Maria"',
                    removeSpecialDescription: 'Elimina caracteres especiales, manteniendo letras, números y espacios.',
                    removeSpecialExample: '"José@email.com!" → "Josemailcom"',
                    removeAllDescription: 'Elimina acentos y caracteres especiales.',
                    removeAllExample: '"José@email.com!" → "Josemailcom"',
                    createSlugDescription: 'Crea un slug amigable para URLs (minúsculas, guiones en lugar de espacios).',
                    createSlugExample: '"José da Silva" → "jose-da-silva"',
                    supportedChars: 'Caracteres Soportados',
                    accents: 'Acentos',
                    specials: 'Especiales',
                    punctuation: 'Puntuación'
                },
                textCounter: {
                    title: '🔢 Contador de Texto',
                    subtitle: 'Cuenta palabras, caracteres, párrafos y líneas',
                    inputText: 'Ingresa tu texto:',
                    inputPlaceholder: 'Escribe o pega tu texto aquí para análisis...',
                    statistics: 'Estadísticas',
                    characters: 'Caracteres',
                    charactersNoSpaces: 'Caracteres (sin espacios)',
                    words: 'Palabras',
                    sentences: 'Oraciones',
                    paragraphs: 'Párrafos',
                    lines: 'Líneas',
                    readingTime: 'Min. lectura',
                    copyStats: 'Copiar Estadísticas',
                    clear: 'Limpiar',
                    detailedAnalysis: 'Análisis Detallado',
                    wordDensity: 'Densidad de palabras:',
                    wordsPerLine: 'palabras por línea',
                    avgWordLength: 'Longitud promedio de palabras:',
                    characters2: 'caracteres',
                    commonWords: 'Palabras más comunes:',
                    howToUse: 'Cómo usar el Contador de Texto',
                    howTo1: 'Escribe o pega tu texto en el área de texto de arriba',
                    howTo2: 'Las estadísticas se actualizan automáticamente en tiempo real',
                    howTo3: 'Usa el botón "Copiar Estadísticas" para copiar un resumen de los conteos',
                    howTo4: 'El tiempo de lectura se calcula basado en 200 palabras por minuto',
                    metricsInfo: 'Información sobre las Métricas',
                    charactersInfo: 'Caracteres:',
                    charactersDesc: 'Total de caracteres incluyendo espacios y puntuación',
                    noSpacesInfo: 'Sin espacios:',
                    noSpacesDesc: 'Caracteres excluyendo espacios en blanco',
                    wordsInfo: 'Palabras:',
                    wordsDesc: 'Secuencias de caracteres separadas por espacios',
                    linesInfo: 'Líneas:',
                    linesDesc: 'Número de saltos de línea en el texto',
                    paragraphsInfo: 'Párrafos:',
                    paragraphsDesc: 'Bloques de texto separados por líneas en blanco'
                },
                base64: {
                    title: '🔐 Codificador Base64',
                    subtitle: 'Codifica y decodifica textos en Base64',
                    inputText: 'Texto de entrada:',
                    inputTextEncode: 'Texto para codificar:',
                    inputTextDecode: 'Base64 para decodificar:',
                    inputPlaceholder: 'Escribe o pega tu texto aquí...',
                    inputPlaceholderEncode: 'Escribe el texto aquí...',
                    inputPlaceholderDecode: 'Pega el Base64 aquí...',
                    outputText: 'Resultado:',
                    outputTextEncode: 'Base64 codificado:',
                    outputTextDecode: 'Texto decodificado:',
                    outputPlaceholder: 'El resultado aparecerá aquí...',
                    encode: 'Codificar',
                    decode: 'Decodificar',
                    copyResult: 'Copiar Resultado',
                    swap: 'Intercambiar ⇅',
                    clear: 'Limpiar Todo',
                    fileSection: 'Codificación/Decodificación de Archivos',
                    selectFile: 'Seleccionar archivo:',
                    processFile: 'Procesar Archivo',
                    fileResult: 'Resultado del archivo:',
                    fileResultPlaceholder: 'El resultado del archivo aparecerá aquí...',
                    copy: 'Copiar',
                    download: 'Descargar',
                    aboutSection: 'Acerca de Base64',
                    aboutDescription: 'Base64 es un método de codificación que convierte datos binarios en texto ASCII usando 64 caracteres específicos (A-Z, a-z, 0-9, +, /).',
                    whenToUse: 'Cuándo usar Base64:',
                    dataTransmission: 'Transmisión de datos:',
                    dataTransmissionDesc: 'Para enviar datos binarios a través de protocolos que solo aceptan texto',
                    urlsEmails: 'URLs y emails:',
                    urlsEmailsDesc: 'Para incluir datos en URLs o emails sin romper el formato',
                    storage: 'Almacenamiento:',
                    storageDesc: 'Para guardar datos binarios en bases de datos que solo aceptan texto',
                    apis: 'APIs:',
                    apisDesc: 'Muchas APIs usan Base64 para transmitir imágenes y otros archivos',
                    characteristics: 'Características:',
                    notEncryption: 'No es criptografía - es solo codificación',
                    sizeIncrease: 'Aumenta el tamaño de los datos aproximadamente un 33%',
                    reversible: 'Es reversible - siempre puedes decodificar de vuelta',
                    urlSafe: 'Es seguro para URLs y sistemas que no soportan caracteres especiales',
                    errorDecode: 'Error al decodificar: texto Base64 inválido'
                },
                md5: {
                    title: '🔒 Generador MD5',
                    subtitle: 'Genera hashes MD5 para verificación de integridad',
                    inputText: 'Texto para generar MD5:',
                    inputPlaceholder: 'Escribe el texto aquí...',
                    outputText: 'Hash MD5:',
                    outputPlaceholder: 'El hash MD5 aparecerá aquí...',
                    generate: 'Generar MD5',
                    copyResult: 'Copiar MD5',
                    clear: 'Limpiar',
                    
                    // Verifier section
                    verifier: 'Verificador MD5',
                    verifierDescription: 'Compara dos hashes MD5 para verificar si son iguales:',
                    hash1: 'Hash 1:',
                    hash1Placeholder: 'Pega el primer hash MD5 aquí...',
                    hash2: 'Hash 2:',
                    hash2Placeholder: 'Pega el segundo hash MD5 aquí...',
                    compareHashes: 'Comparar Hashes',
                    
                    // File generation section
                    fileGeneration: 'Generación de MD5 para Archivos',
                    selectFile: 'Seleccionar archivo:',
                    generateFileMD5: 'Generar MD5 del Archivo',
                    fileMD5Result: 'MD5 del archivo:',
                    fileMD5Placeholder: 'El MD5 del archivo aparecerá aquí...',
                    copyFileMD5: 'Copiar MD5',
                    fileInfo: 'Información del Archivo:',
                    fileName: 'Nombre:',
                    fileSize: 'Tamaño:',
                    fileType: 'Tipo:',
                    
                    // About MD5 section
                    aboutMD5: 'Acerca de MD5',
                    md5Description: 'MD5 (Message Digest Algorithm 5) es una función de hash criptográfica que produce un valor hash de 128 bits (32 caracteres hexadecimales).',
                    commonUses: 'Usos Comunes de MD5:',
                    integrityVerification: 'Verificación de integridad:',
                    integrityDescription: 'Verificar si un archivo no fue corrompido durante la transferencia',
                    checksums: 'Checksums:',
                    checksumsDescription: 'Validar descargas y respaldos',
                    uniqueIdentification: 'Identificación única:',
                    uniqueDescription: 'Crear identificadores únicos para datos',
                    cacheDeduplication: 'Cache y deduplicación:',
                    cacheDescription: 'Identificar contenido duplicado',
                    characteristics: 'Características de MD5:',
                    char1: 'Siempre produce un hash de 32 caracteres',
                    char2: 'Es unidireccional - no puede ser "descifrado"',
                    char3: 'Pequeños cambios en la entrada resultan en hashes completamente diferentes',
                    char4: 'La misma entrada siempre produce el mismo hash',
                    securityWarningTitle: '⚠️ Importante sobre Seguridad:',
                    securityWarningDescription: 'MD5 ya no se considera seguro para uso criptográfico debido a vulnerabilidades conocidas. Para aplicaciones de seguridad, usa SHA-256 o algoritmos más modernos. MD5 sigue siendo útil para verificación básica de integridad y checksums.'
                },
                timestamp: {
                    title: '⏰ Conversor de Timestamp',
                    subtitle: 'Convierte timestamps Unix a fechas legibles',
                    
                    // Current time section
                    currentTime: 'Hora Actual',
                    unixTimestamp: 'Timestamp Unix',
                    currentDate: 'Fecha Actual',
                    copyTimestamp: 'Copiar Timestamp',
                    copyDate: 'Copiar Fecha',
                    
                    // Timestamp to date section
                    timestampToDate: 'Timestamp a Fecha',
                    timestamp: 'Timestamp',
                    timestampPlaceholder: 'Ingresa el timestamp...',
                    unit: 'Unidad',
                    seconds: 'Segundos',
                    milliseconds: 'Milisegundos',
                    convertToDate: 'Convertir a Fecha',
                    
                    // Date to timestamp section
                    dateToTimestamp: 'Fecha a Timestamp',
                    datetime: 'Fecha y Hora',
                    timezone: 'Zona Horaria',
                    local: 'Local',
                    utc: 'UTC',
                    saoPaulo: 'São Paulo (GMT-3)',
                    newYork: 'Nueva York (GMT-5)',
                    london: 'Londres (GMT+0)',
                    tokyo: 'Tokio (GMT+9)',
                    convertToTimestamp: 'Convertir a Timestamp',
                    copyResult: 'Copiar Resultado',
                    
                    // Time calculator section
                    timeCalculator: 'Calculadora de Tiempo',
                    addSubtractTime: 'Agregar/Quitar tiempo:',
                    valuePlaceholder: 'Valor',
                    minutes: 'Minutos',
                    hours: 'Horas',
                    days: 'Días',
                    weeks: 'Semanas',
                    months: 'Meses',
                    years: 'Años',
                    add: 'Agregar',
                    subtract: 'Quitar',
                    calculate: 'Calcular',
                    
                    // Date formats section
                    commonDateFormats: 'Formatos de Fecha Comunes',
                    
                    // About timestamps section
                    aboutTimestamps: 'Acerca de Timestamps',
                    timestampDefinition: 'El timestamp Unix es el número de segundos que han pasado desde el 1 de enero de 1970, 00:00:00 UTC (también conocido como Unix Epoch).',
                    characteristics: 'Características:',
                    universalStandard: 'Estándar universal:',
                    universalStandardDesc: 'Usado en sistemas Unix, Linux, macOS y muchos lenguajes de programación',
                    timezoneIndependent: 'Independiente de zona horaria:',
                    timezoneIndependentDesc: 'Siempre en UTC, facilitando cálculos globales',
                    easyCalculation: 'Fácil de calcular:',
                    easyCalculationDesc: 'Las diferencias de tiempo son simples restas',
                    compactFormat: 'Formato compacto:',
                    compactFormatDesc: 'Ocupa poco espacio para almacenamiento',
                    commonConversions: 'Conversiones Comunes:',
                    secondsDesc: 'Timestamp estándar (ej: 1641859200)',
                    millisecondsDesc: 'Usado en JavaScript (ej: 1641859200000)',
                    microseconds: 'Microsegundos:',
                    microsecondsDesc: 'Usado en algunos sistemas de alta precisión',
                    limitations: 'Limitaciones:',
                    year2038Problem: 'Problema del Año 2038:',
                    year2038ProblemDesc: 'Los timestamps de 32 bits pueden tener problemas en 2038',
                    leapSeconds: 'Segundos bisiestos:',
                    leapSecondsDesc: 'No considera segundos bisiestos',
                    precision: 'Precisión:',
                    precisionDesc: 'Limitado a precisión de segundos (o milisegundos)',
                    
                    // Common messages
                    errorInvalid: 'Timestamp inválido'
                }
            }
        };
    }

    t(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = this.translations['pt-BR'];
                for (const k of keys) {
                    if (translation && translation[k]) {
                        translation = translation[k];
                    } else {
                        return key;
                    }
                }
                break;
            }
        }
        
        return translation || key;
    }

    setLanguage(lang) {
        console.log('setLanguage called with:', lang); // Debug
        console.log('Available translations:', Object.keys(this.translations)); // Debug
        if (this.translations[lang]) {
            console.log('Language found in translations, changing from', this.currentLang, 'to', lang); // Debug
            this.currentLang = lang;
            this.setStoredLanguage(lang);
            this.updatePageContent();
            
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang }
            }));
            console.log('Language change completed successfully'); // Debug
        } else {
            console.error('Language not found in translations:', lang); // Debug
        }
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    updatePageContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });

        document.documentElement.lang = this.currentLang;
    }

    createLanguageSelector() {
        console.log('Creating language selector...'); // Debug
        console.log('Current language for selector:', this.currentLang); // Debug
        
        const languages = {                    
            'en': { name: 'English', flag: '🇺🇸', native: 'English' },
            'es': { name: 'Español', flag: '🇪🇸', native: 'Español' },
            'pt-BR': { name: 'Português', flag: '🇧🇷', native: 'Português' }
        };

        // Criar HTML diretamente como string para melhor compatibilidade
        const selectorHTML = `
            <div class="language-selector" data-no-close-menu="true">
                <select class="language-select" data-no-close-menu="true">
                    ${Object.entries(languages).map(([code, lang]) => 
                        `<option value="${code}" ${code === this.currentLang ? 'selected' : ''}>${lang.flag} ${lang.name}</option>`
                    ).join('')}
                </select>
            </div>
        `;
        
        // Criar elemento temporário para converter HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = selectorHTML;
        const selector = tempDiv.firstElementChild;
        
        // Adicionar event listener diretamente no elemento em vez de onchange inline
        const selectElement = selector.querySelector('.language-select');
        const self = this;
        
        console.log('*** Firefox: Adding event listener to select element:', selectElement); // Debug
        console.log('*** Firefox: Select element found:', !!selectElement); // Debug
        
        if (selectElement) {
            selectElement.addEventListener('change', function() {
                console.log('*** Firefox: Selector change event triggered with value:', this.value); // Debug
                console.log('*** Firefox: Previous language was:', self.currentLang); // Debug
                console.log('*** Firefox: Calling setLanguage directly...'); // Debug
                self.setLanguage(this.value);
                console.log('*** Firefox: setLanguage call completed, new language:', self.currentLang); // Debug
            });
            
            // Testar se o event listener foi adicionado
            console.log('*** Firefox: Event listener added successfully'); // Debug
            
            // Adicionar também um evento de click para debug
            selectElement.addEventListener('click', function() {
                console.log('*** Firefox: Select element clicked!'); // Debug
            });
            
            // Teste manual: adicionar um timer que verifica se o valor mudou
            let lastValue = selectElement.value;
            setInterval(function() {
                if (selectElement.value !== lastValue) {
                    console.log('*** Firefox: Manual detection - value changed from', lastValue, 'to', selectElement.value); // Debug
                    lastValue = selectElement.value;
                    self.setLanguage(selectElement.value);
                }
            }, 1000);
            
        } else {
            console.error('*** Firefox: Select element not found!'); // Debug
        }
        
        console.log('Language selector created:', selector); // Debug
        console.log('Selected option in created selector:', selector.querySelector('option[selected]')?.value); // Debug
        return selector;
    }

    testEmojiSupport() {
        // Testa se o navegador consegue renderizar emojis de bandeira
        const canvas = document.createElement('canvas');
        canvas.width = 20;
        canvas.height = 20;
        const ctx = canvas.getContext('2d');
        
        // Define fonte e desenha emoji de teste
        ctx.font = '16px Arial';
        ctx.fillText('🇺🇸', 0, 16);
        
        // Verifica se algo foi renderizado
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        return imageData.data.some(pixel => pixel !== 0);
    }

    createFlag(lang, code) {
        // Primeiro tenta usar a bandeira emoji
        if (lang.flag) {
            // Testa se o emoji será renderizado corretamente
            if (this.testEmojiSupport()) {
                return `<span style="font-size: 16px;">${lang.flag}</span>`;
            }
        }
        
        // Fallback para círculos coloridos apenas se emoji não funcionar
        const colors = {
            'pt-BR': { bg: '#009639', text: 'BR' },
            'en': { bg: '#B22234', text: 'US' },
            'es': { bg: '#AA151B', text: 'ES' }
        };
        const color = colors[code];
        return `<span style="background: ${color.bg}; color: white; border-radius: 50%; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; font-size: 9px; font-weight: bold; line-height: 1;">${color.text}</span>`;
    }

    updateLanguageButton(button, langInfo, code) {
        button.innerHTML = `
            <span class="language-flag">${this.createFlag(langInfo, code)}</span>
            <span class="language-code">${code}</span>
            <span class="language-arrow">▼</span>
        `;
    }

    updateActiveOption(dropdown, activeCode) {
        dropdown.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
        });
        const index = ['en', 'es', 'pt-BR'].indexOf(activeCode) + 1;
        const activeOption = dropdown.querySelector(`.language-option:nth-child(${index})`);
        if (activeOption) {
            activeOption.classList.add('active');
        }
    }

    init() {
        console.log('I18n init() called'); // Debug
        console.log('Current language on init:', this.currentLang); // Debug
        console.log('Stored language on init:', this.getStoredLanguage()); // Debug
        try {
            // Verificar se há idioma salvo e aplicá-lo antes de continuar
            const storedLang = this.getStoredLanguage();
            if (storedLang && storedLang !== this.currentLang) {
                console.log('Applying stored language:', storedLang); // Debug
                this.currentLang = storedLang;
            }
            
            this.updatePageContent();
            
            // Criar função global simples para mudança de idioma
            const self = this;
            window.i18nChangeLanguage = function(lang) {
                console.log('*** Firefox: Global language change function called with:', lang); // Debug
                console.log('*** Firefox: Current language before change:', self.currentLang); // Debug
                try {
                    self.setLanguage(lang);
                    console.log('*** Firefox: Language changed successfully to:', lang); // Debug
                } catch (error) {
                    console.error('*** Firefox: Error changing language:', error);
                }
            };
            
            // Detectar se está em uma página de ferramenta ou página principal
            const isToolPage = window.location.pathname.includes('/tools/');
            console.log('Is tool page:', isToolPage); // Debug
            
            // Sempre usar o search-container para consistência
            const searchContainer = document.querySelector('.nav .search-container');
            console.log('Search container found:', searchContainer); // Debug
            
            if (searchContainer) {
                const selector = this.createLanguageSelector();
                searchContainer.appendChild(selector);
                console.log('Language selector added to search container'); // Debug
                
                // Verificar se o seletor está mostrando o idioma correto
                const selectElement = selector.querySelector('.language-select');
                if (selectElement) {
                    console.log('Setting selector value to:', this.currentLang); // Debug
                    selectElement.value = this.currentLang;
                    console.log('Selector value set to:', selectElement.value); // Debug
                }
            } else {
                console.log('Search container NOT found!'); // Debug
            }
            
            window.i18n = this;
            console.log('I18n setup complete, window.i18n assigned'); // Debug
        } catch (error) {
            console.error('Error in I18n init():', error);
        }
    }
}

// Fallback para Chrome
if (typeof window !== 'undefined' && !window.i18nChangeLanguage) {
    window.i18nChangeLanguage = function(lang) {
        console.log('Fallback language change:', lang);
        if (window.i18n && typeof window.i18n.setLanguage === 'function') {
            window.i18n.setLanguage(lang);
        }
    };
}

// Chrome-specific auto-initialization (backup)
if (typeof window !== 'undefined' && /Chrome/.test(navigator.userAgent)) {
    console.log('Chrome detected - setting up backup initialization');
    
    // Tentar inicializar após um pequeno delay
    setTimeout(function() {
        if (!window.i18n && typeof I18n !== 'undefined') {
            console.log('Chrome backup: Initializing I18n');
            try {
                const i18n = new I18n();
                i18n.init();
                console.log('Chrome backup initialization successful');
            } catch (error) {
                console.error('Chrome backup initialization failed:', error);
            }
        }
    }, 100);
}
