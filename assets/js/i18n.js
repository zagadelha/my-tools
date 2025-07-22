// Sistema de Internacionalizacao - MyTools
class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.translations = {};
        this.loadTranslations();
    }

    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const supportedLangs = ['pt-BR', 'en', 'es'];
        
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
        return localStorage.getItem('mytools-lang');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('mytools-lang', lang);
    }

    loadTranslations() {
        this.translations = {
            'pt-BR': {
                nav: {
                    home: 'Início',
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
                    privacy: 'Privacidade',
                    terms: 'Termos de Uso',
                    description: 'Ferramentas úteis e gratuitas para facilitar seu dia a dia. Simples, rápido e seguro.',
                    copyright: '© 2025 MyTools. Todos os direitos reservados.'
                },
                messages: {
                    copied: 'Copiado para a área de transferência!',
                    copyError: 'Erro ao copiar texto'
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
                    generate: 'Gerar QR Code',
                    download: 'Baixar QR Code',
                    copy: 'Copiar como Imagem',
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
                    lowercaseLetters: 'Minúsculas'
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
                    clear: 'Limpar Tudo'
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
                    clear: 'Limpar'
                },
                base64: {
                    title: '🔐 Codificador Base64',
                    subtitle: 'Codifique e decodifique textos em Base64',
                    inputText: 'Texto de entrada:',
                    inputPlaceholder: 'Digite ou cole seu texto aqui...',
                    outputText: 'Resultado:',
                    encode: 'Codificar',
                    decode: 'Decodificar',
                    copyResult: 'Copiar Resultado',
                    clear: 'Limpar Tudo',
                    errorDecode: 'Erro ao decodificar: texto Base64 inválido'
                },
                md5: {
                    title: '🔒 Gerador MD5',
                    subtitle: 'Gere hashes MD5 para verificação de integridade',
                    inputText: 'Texto de entrada:',
                    inputPlaceholder: 'Digite ou cole seu texto aqui...',
                    outputText: 'Hash MD5:',
                    generate: 'Gerar MD5',
                    copyResult: 'Copiar Hash',
                    clear: 'Limpar Tudo'
                },
                timestamp: {
                    title: '⏰ Conversor de Timestamp',
                    subtitle: 'Converta timestamps Unix para datas legíveis',
                    timestamp: 'Timestamp Unix:',
                    timestampPlaceholder: 'Digite o timestamp...',
                    datetime: 'Data e Hora:',
                    datetimePlaceholder: 'Digite a data e hora...',
                    convert: 'Converter',
                    now: 'Agora',
                    copyResult: 'Copiar Resultado',
                    clear: 'Limpar',
                    errorInvalid: 'Timestamp inválido'
                }
            },
            'en': {
                nav: {
                    home: 'Home',
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
                    privacy: 'Privacy',
                    terms: 'Terms of Use',
                    description: 'Useful and free tools to make your daily life easier. Simple, fast and secure.',
                    copyright: '© 2025 MyTools. All rights reserved.'
                },
                messages: {
                    copied: 'Copied to clipboard!',
                    copyError: 'Error copying text'
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
                    generate: 'Generate QR Code',
                    download: 'Download QR Code',
                    copy: 'Copy as Image',
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
                    lowercaseLetters: 'Lowercase'
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
                    clear: 'Clear All'
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
                    clear: 'Clear'
                },
                base64: {
                    title: '🔐 Base64 Encoder',
                    subtitle: 'Encode and decode text in Base64',
                    inputText: 'Input text:',
                    inputPlaceholder: 'Type or paste your text here...',
                    outputText: 'Result:',
                    encode: 'Encode',
                    decode: 'Decode',
                    copyResult: 'Copy Result',
                    clear: 'Clear All',
                    errorDecode: 'Decode error: invalid Base64 text'
                },
                md5: {
                    title: '🔒 MD5 Generator',
                    subtitle: 'Generate MD5 hashes for integrity verification',
                    inputText: 'Input text:',
                    inputPlaceholder: 'Type or paste your text here...',
                    outputText: 'MD5 Hash:',
                    generate: 'Generate MD5',
                    copyResult: 'Copy Hash',
                    clear: 'Clear All'
                },
                timestamp: {
                    title: '⏰ Timestamp Converter',
                    subtitle: 'Convert Unix timestamps to readable dates',
                    timestamp: 'Unix Timestamp:',
                    timestampPlaceholder: 'Enter timestamp...',
                    datetime: 'Date and Time:',
                    datetimePlaceholder: 'Enter date and time...',
                    convert: 'Convert',
                    now: 'Now',
                    copyResult: 'Copy Result',
                    clear: 'Clear',
                    errorInvalid: 'Invalid timestamp'
                }
            },
            'es': {
                nav: {
                    home: 'Inicio',
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
                    privacy: 'Privacidad',
                    terms: 'Términos de Uso',
                    description: 'Herramientas útiles y gratuitas para facilitar tu día a día. Simple, rápido y seguro.',
                    copyright: '© 2025 MyTools. Todos los derechos reservados.'
                },
                messages: {
                    copied: '¡Copiado al portapapeles!',
                    copyError: 'Error al copiar texto'
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
                    generate: 'Generar Código QR',
                    download: 'Descargar Código QR',
                    copy: 'Copiar como Imagen',
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
                    lowercaseLetters: 'Minúsculas'
                },
                removeAccents: {
                    title: '✂️ Remover Acentos',
                    subtitle: 'Remueve acentos y caracteres especiales de textos',
                    inputText: 'Texto con acentos:',
                    inputPlaceholder: 'Escribe o pega texto con acentos aquí...',
                    outputText: 'Texto sin acentos:',
                    outputPlaceholder: 'El resultado aparecerá aquí...',
                    remove: 'Remover Acentos',
                    removeSpecial: 'Remover Especiales',
                    removeAll: 'Remover Todo',
                    createSlug: 'Crear Slug',
                    copyResult: 'Copiar Resultado',
                    swap: 'Intercambiar ⇅',
                    clear: 'Limpiar Todo'
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
                    clear: 'Limpiar'
                },
                base64: {
                    title: '🔐 Codificador Base64',
                    subtitle: 'Codifica y decodifica textos en Base64',
                    inputText: 'Texto de entrada:',
                    inputPlaceholder: 'Escribe o pega tu texto aquí...',
                    outputText: 'Resultado:',
                    encode: 'Codificar',
                    decode: 'Decodificar',
                    copyResult: 'Copiar Resultado',
                    clear: 'Limpiar Todo',
                    errorDecode: 'Error al decodificar: texto Base64 inválido'
                },
                md5: {
                    title: '🔒 Generador MD5',
                    subtitle: 'Genera hashes MD5 para verificación de integridad',
                    inputText: 'Texto de entrada:',
                    inputPlaceholder: 'Escribe o pega tu texto aquí...',
                    outputText: 'Hash MD5:',
                    generate: 'Generar MD5',
                    copyResult: 'Copiar Hash',
                    clear: 'Limpiar Todo'
                },
                timestamp: {
                    title: '⏰ Conversor de Timestamp',
                    subtitle: 'Convierte timestamps Unix a fechas legibles',
                    timestamp: 'Timestamp Unix:',
                    timestampPlaceholder: 'Ingresa el timestamp...',
                    datetime: 'Fecha y Hora:',
                    datetimePlaceholder: 'Ingresa fecha y hora...',
                    convert: 'Convertir',
                    now: 'Ahora',
                    copyResult: 'Copiar Resultado',
                    clear: 'Limpiar',
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
        if (this.translations[lang]) {
            this.currentLang = lang;
            this.setStoredLanguage(lang);
            this.updatePageContent();
            
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang }
            }));
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
        const languages = {
            'pt-BR': { 
                name: 'Português', 
                flag: '🇧🇷', // Bandeira do Brasil
                native: 'Português' 
            },
            'en': { 
                name: 'English', 
                flag: '🇺🇸', // Bandeira dos EUA
                native: 'English' 
            },
            'es': { 
                name: 'Español', 
                flag: '🇪🇸', // Bandeira da Espanha
                native: 'Español' 
            }
        };

        const selector = document.createElement('div');
        selector.className = 'language-selector';
        
        const button = document.createElement('button');
        button.className = 'language-button';
        button.setAttribute('aria-label', 'Selecionar idioma');
        
        const currentLang = languages[this.currentLang];
        button.innerHTML = `
            <span class="language-flag">${this.createFlag(currentLang, this.currentLang)}</span>
            <span class="language-code">${this.currentLang}</span>
            <span class="language-arrow">▼</span>
        `;
        
        const dropdown = document.createElement('div');
        dropdown.className = 'language-dropdown';
        
        Object.entries(languages).forEach(([code, lang]) => {
            const option = document.createElement('a');
            option.className = `language-option ${code === this.currentLang ? 'active' : ''}`;
            option.href = '#';
            option.innerHTML = `
                <span class="language-option-flag">${this.createFlag(lang, code)}</span>
                <div class="language-option-text">
                    <span class="language-option-name">${lang.name}</span>
                    <span class="language-option-native">${lang.native}</span>
                </div>
            `;
            
            option.addEventListener('click', (e) => {
                e.preventDefault();
                this.setLanguage(code);
                selector.classList.remove('open');
                this.updateLanguageButton(button, languages[code], code);
                this.updateActiveOption(dropdown, code);
            });
            
            dropdown.appendChild(option);
        });
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            selector.classList.toggle('open');
        });
        
        document.addEventListener('click', (e) => {
            if (!selector.contains(e.target)) {
                selector.classList.remove('open');
            }
        });
        
        selector.appendChild(button);
        selector.appendChild(dropdown);
        
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
        const index = ['pt-BR', 'en', 'es'].indexOf(activeCode) + 1;
        const activeOption = dropdown.querySelector(`.language-option:nth-child(${index})`);
        if (activeOption) {
            activeOption.classList.add('active');
        }
    }

    init() {
        this.updatePageContent();
        
        // Detectar se está em uma página de ferramenta ou página principal
        const isToolPage = window.location.pathname.includes('/tools/');
        const searchContainer = document.querySelector('.nav .search-container');
        
        if (searchContainer) {
            const selector = this.createLanguageSelector();
            searchContainer.appendChild(selector);
        }
        
        window.i18n = this;
    }
}
