# Configuração do Sistema de Email - MyTools

## Como ativar o envio real de emails no formulário de contato

### Opção 1: EmailJS (Recomendado)

O EmailJS permite envio de emails diretamente do frontend sem necessidade de backend.

#### Passos para configurar:

1. **Criar conta no EmailJS**
   - Acesse: https://www.emailjs.com/
   - Crie uma conta gratuita

2. **Configurar um serviço de email**
   - No dashboard, vá em "Email Services"
   - Adicione um serviço (Gmail, Outlook, etc.)
   - Siga as instruções para conectar sua conta

3. **Criar um template de email**
   - Vá em "Email Templates"
   - Crie um novo template com os seguintes parâmetros:
     ```
     From: {{from_name}} <{{from_email}}>
     To: seu-email@dominio.com
     Subject: [MyTools] {{subject}}
     
     Nova mensagem do formulário de contato:
     
     Nome: {{from_name}}
     Email: {{from_email}}
     Assunto: {{subject}}
     
     Mensagem:
     {{message}}
     ```

4. **Obter as chaves de API**
   - Vá em "Account" > "General"
   - Copie sua "Public Key"
   - Copie o "Service ID" do serviço criado
   - Copie o "Template ID" do template criado

5. **Atualizar o código**
   - Abra `contact.html`
   - Substitua os seguintes valores no JavaScript:
     - `YOUR_PUBLIC_KEY` → sua Public Key
     - `YOUR_SERVICE_ID` → seu Service ID  
     - `YOUR_TEMPLATE_ID` → seu Template ID

#### Exemplo de configuração:
```javascript
emailjs.init("user_abc123xyz"); // Sua Public Key
emailjs.send('service_gmail', 'template_contact', templateParams) // Seus IDs
```

### Opção 2: Mailto (Fallback atual)

Se o EmailJS não estiver configurado, o sistema já usa automaticamente o mailto como fallback:
- Abre o cliente de email padrão do usuário
- Pré-preenche destinatário, assunto e corpo
- Funciona offline

### Opção 3: Backend próprio

Para implementar um backend próprio:

1. **Criar endpoint de email**
   - Configure um servidor (Node.js, PHP, Python, etc.)
   - Use um serviço como SendGrid, Mailgun, ou SMTP

2. **Atualizar o JavaScript**
   - Substitua a chamada do EmailJS por fetch para seu endpoint
   - Implemente tratamento de erro e sucesso

#### Exemplo com fetch:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(templateParams)
})
.then(response => response.json())
.then(data => {
    showContactMessage('Mensagem enviada com sucesso!', 'success');
})
.catch(error => {
    console.error('Erro:', error);
    sendViaMailto(name, email, subject, message); // Fallback
});
```

## Funcionalidades Atuais

✅ **Validação de formulário** - Campos obrigatórios e formato de email
✅ **Estado de loading** - Botão mostra "Enviando..." durante o processo
✅ **Fallback automático** - Se EmailJS falhar, usa mailto
✅ **Feedback visual** - Mensagens de sucesso, erro e informação
✅ **Limpar formulário** - Reset automático após envio bem-sucedido
✅ **Responsivo** - Funciona em desktop e mobile

## Observações

- **Gratuito**: EmailJS oferece 200 emails/mês no plano gratuito
- **Segurança**: Chaves públicas podem ser expostas no frontend
- **Confiabilidade**: Sempre há fallback para mailto
- **Sem backend**: Solução 100% frontend, ideal para sites estáticos

## Para desenvolvedores

Se você for usar este projeto:

1. Configure o EmailJS seguindo os passos acima
2. Ou mantenha apenas o fallback mailto (já funcional)
3. Ou implemente seu próprio backend de email

O sistema atual é robusto e sempre oferece uma forma de contato funcional, mesmo sem configuração adicional.
