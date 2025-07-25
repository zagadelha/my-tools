// Main JavaScript for global functionality
console.log('Main.js script loaded'); // Debug

// Usar a variável isChrome já declarada no HTML
console.log('Chrome detected in main.js:', window.isChrome);

// Mostrar o seletor correto baseado no navegador
document.addEventListener('DOMContentLoaded', function() {
    if (window.isChrome) {
        // Chrome: mostrar seletor HTML, esconder seletor i18n
        const chromeSelector = document.querySelector('.language-selector-chrome');
        const firefoxSelector = document.querySelector('.language-selector');
        
        if (chromeSelector) {
            chromeSelector.style.display = 'inline-block';
        }
        if (firefoxSelector) {
            firefoxSelector.style.display = 'none';
        }
    } else {
        // Firefox: esconder seletor Chrome, mostrar seletor i18n
        const chromeSelector = document.querySelector('.language-selector-chrome');
        const firefoxSelector = document.querySelector('.language-selector');
        
        if (chromeSelector) {
            chromeSelector.style.display = 'none';
        }
        if (firefoxSelector) {
            firefoxSelector.style.display = 'inline-block';
        }
    }
});

// Função global para Chrome (deve estar disponível quando o HTML chamar)
window.changeLanguageAndUpdateLinks = function(lang) {
    console.log('Chrome: Changing language to:', lang);
    
    // Store in localStorage usando a mesma chave do i18n
    try {
        localStorage.setItem('mytools-lang', lang);
    } catch (e) {
        console.log('Could not store language');
    }
    
    // Navigate to current page with language parameter
    window.location.href = window.location.pathname + '?lang=' + lang;
};

if (window.isChrome) {
    // Chrome-specific initialization
    console.log('Using Chrome-specific main.js initialization');
    
    function initMainForChrome() {
        try {
            console.log('Main.js Chrome initialization attempt');
            
            // Mobile menu toggle
            const navToggle = document.querySelector('.nav-toggle');
            const nav = document.querySelector('.nav');
            
            if (navToggle && nav) {
                navToggle.onclick = function() {
                    console.log('Chrome: Nav toggle clicked'); // Debug
                    nav.classList.toggle('active');
                };
            }
            
            // Simple menu close for Chrome
            document.onclick = function(e) {
                if (nav && nav.classList.contains('active')) {
                    const isLanguageRelated = e.target.closest('.language-selector') || 
                                            e.target.closest('.language-select');
                    
                    if (isLanguageRelated) {
                        console.log('Chrome: Click on language selector, keeping menu open');
                        return;
                    }
                    
                    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
                        console.log('Chrome: Closing menu due to outside click');
                        nav.classList.remove('active');
                    }
                }
            };
            
            console.log('Chrome main.js initialization complete');
        } catch (error) {
            console.error('Error in Chrome main.js:', error);
        }
    }
    
    // Try multiple initialization strategies for Chrome
    initMainForChrome();
    setTimeout(initMainForChrome, 10);
    document.addEventListener('DOMContentLoaded', initMainForChrome);
    
} else {
    // Standard initialization for other browsers (Firefox, etc.)
    try {
        document.addEventListener('DOMContentLoaded', function() {
        console.log('Main.js DOMContentLoaded executed'); // Debug
        
        // Firefox: Garantir que apenas o seletor i18n seja visível
        setTimeout(function() {
            const chromeSelector = document.querySelector('.language-selector-chrome');
            const firefoxSelector = document.querySelector('.language-selector:not(.language-selector-chrome)');
            
            if (chromeSelector) {
                chromeSelector.style.display = 'none';
                console.log('*** Firefox: Chrome selector hidden'); // Debug
            }
            
            if (firefoxSelector) {
                firefoxSelector.style.display = 'inline-block';
                firefoxSelector.style.visibility = 'visible';
                firefoxSelector.style.pointerEvents = 'auto';
                console.log('*** Firefox: Firefox selector made visible and clickable'); // Debug
                
                const selectElement = firefoxSelector.querySelector('.language-select');
                if (selectElement) {
                    selectElement.style.pointerEvents = 'auto';
                    selectElement.style.display = 'block';
                    console.log('*** Firefox: Select element made clickable'); // Debug
                }
            }
        }, 500);
        
        // Mobile menu toggle
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.nav');
        
        if (navToggle && nav) {
            navToggle.addEventListener('click', function() {
                console.log('Nav toggle clicked'); // Debug
                nav.classList.toggle('active');
            });
            
            // Firefox: Verificar se o seletor de idioma está sendo criado corretamente
            setTimeout(function() {
                const firefoxSelector = document.querySelector('.language-selector:not(.language-selector-chrome)');
                const chromeSelector = document.querySelector('.language-selector-chrome');
                console.log('*** Firefox Menu Debug: Firefox selector found:', !!firefoxSelector); // Debug
                console.log('*** Firefox Menu Debug: Chrome selector found:', !!chromeSelector); // Debug
                
                if (firefoxSelector) {
                    const selectElement = firefoxSelector.querySelector('.language-select');
                    console.log('*** Firefox Menu Debug: Select element in Firefox selector:', !!selectElement); // Debug
                    
                    if (selectElement) {
                        console.log('*** Firefox Menu Debug: Select element is visible:', getComputedStyle(selectElement).display !== 'none'); // Debug
                        console.log('*** Firefox Menu Debug: Select element pointer events:', getComputedStyle(selectElement).pointerEvents); // Debug
                    }
                }
            }, 1000);
        }

        // Search functionality
        const searchInput = document.querySelector('.search-input');
        const toolCards = document.querySelectorAll('.tool-card');
        
        if (searchInput && toolCards.length > 0) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                toolCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('p').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }

        // Simple menu close handler for Chrome compatibility
        document.addEventListener('click', function(e) {
            if (nav && nav.classList.contains('active')) {
                // Check if clicked on language selector
                const isLanguageRelated = e.target.closest('.language-selector') || 
                                        e.target.closest('.language-select') ||
                                        e.target.hasAttribute('data-no-close-menu');
                
                if (isLanguageRelated) {
                    console.log('Click on language selector, keeping menu open'); // Debug
                    return;
                }
                
                // Close menu if clicked outside
                if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
                    console.log('Closing menu due to outside click'); // Debug
                    nav.classList.remove('active');
                }
            }
        });
    });
} catch (error) {
    console.error('Error in main.js:', error);
}

} // Fecha o bloco else

// Utility functions (mantidas para compatibilidade)
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text).then(() => {
            const message = window.i18n ? window.i18n.t('messages.copied') : 'Copiado para a área de transferência!';
            showNotification(message, 'success');
        }).catch(err => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        const message = window.i18n ? window.i18n.t('messages.copied') : 'Copiado para a área de transferência!';
        showNotification(message, 'success');
    } catch (err) {
        const message = window.i18n ? window.i18n.t('messages.copyError') : 'Erro ao copiar texto';
        showNotification(message, 'error');
    }
    
    document.body.removeChild(textArea);
}

function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        max-width: 300px;
        word-wrap: break-word;
        animation: slideIn 0.3s ease;
    `;

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function validateInput(input, type) {
    const value = input.value.trim();
    
    switch(type) {
        case 'required':
            return value !== '';
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case 'number':
            return !isNaN(value) && value !== '';
        case 'url':
            try {
                new URL(value);
                return true;
            } catch {
                return false;
            }
        default:
            return true;
    }
}

function formatNumber(num) {
    return new Intl.NumberFormat('pt-BR').format(num);
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
