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
        
        const nav = document.querySelector('.nav .search-container');
        if (nav) {
            const selector = this.createLanguageSelector();
            nav.parentNode.appendChild(selector);
        }
        
        window.i18n = this;
    }
}
