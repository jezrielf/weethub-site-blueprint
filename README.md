
# Weethub - Website Estático

Este é um website estático criado em HTML, CSS e JavaScript puro, reproduzindo fielmente a homepage da Weethub com todos os efeitos visuais e interatividade.

## 📁 Estrutura dos Arquivos

```
/
├── index.html          # Página principal
├── styles.css          # Todos os estilos e animações
├── script.js          # Funcionalidades JavaScript
└── README.md          # Este arquivo
```

## ✨ Funcionalidades Implementadas

### 🎨 Design e Layout
- **Design responsivo** para desktop, tablet e mobile
- **Cores da marca Weethub** (#FFD700 - dourado)
- **Tipografia Inter** via Google Fonts
- **Layout moderno** com gradientes e efeitos glassmorphism

### 🚀 Efeitos Visuais
- **Background Lines animadas** na seção hero
- **Spotlight effect** com animação CSS
- **Parallax scrolling** na seção de showcase de lojas virtuais
- **Flip Words** - animação de palavras alternadas
- **Fade in animations** em elementos durante o scroll
- **Hover effects** em cards e botões

### 📱 Navegação
- **Menu responsivo** com versão mobile
- **Navegação smooth scroll** entre seções
- **Header fixo** com efeito de transparência no scroll
- **Indicadores visuais** para seção ativa

### 🖼️ Showcase de Lojas Virtuais
- **Desktop**: Três linhas com efeito parallax
- **Mobile**: Carrossel touch-friendly com indicadores
- **Lazy loading** das imagens para performance
- **Efeitos hover** com overlay de informações

### 📋 Formulário de Contato
- **Validação** de campos obrigatórios
- **Validação de email** com regex
- **Feedback visual** durante envio
- **Design acessível** com labels apropriadas

### ⚡ Performance
- **CSS e JavaScript otimizados** para carregamento rápido
- **Lazy loading** de imagens
- **Throttling** de eventos de scroll
- **Animações suaves** com requestAnimationFrame

## 🚀 Como Usar

### 1. Hospedagem Simples
Faça upload dos arquivos para qualquer servidor web:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Servidor Apache/Nginx**

### 2. Visualização Local
Abra o arquivo `index.html` diretamente no navegador ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

### 3. Customização

#### Alterar Cores da Marca
No arquivo `styles.css`, modifique as variáveis CSS:
```css
:root {
    --weethub-yellow: #FFD700;  /* Cor principal */
    --weethub-yellow-dark: #E6C200;  /* Cor mais escura */
}
```

#### Modificar Conteúdo
Edite diretamente o arquivo `index.html` para:
- Alterar textos e títulos
- Adicionar/remover seções
- Modificar informações de contato
- Atualizar links e URLs

#### Personalizar Animações
No arquivo `script.js`, você pode ajustar:
- Velocidade das animações
- Timing dos efeitos
- Comportamento do carrossel
- Configurações do parallax

## 🎯 Seções Incluídas

1. **Hero Section** - Título principal com efeitos visuais
2. **Hero Parallax** - Showcase das lojas virtuais
3. **Services** - Serviços oferecidos
4. **Results** - Resultados e métricas
5. **Contact** - Formulário de contato
6. **Footer** - Informações da empresa

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

### Adaptações Mobile
- Menu hambúrguer
- Carrossel em vez de parallax
- Layout em coluna única
- Botões e textos otimizados para touch

## 🌐 Compatibilidade

- **Chrome** 60+
- **Firefox** 60+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📧 Configuração do Formulário

O formulário atualmente simula o envio. Para integrar com um backend real:

1. **Modificar action** no HTML:
```html
<form class="contact-form" action="https://seu-backend.com/contact" method="POST">
```

2. **Ou usar serviços** como:
   - Formspree
   - Netlify Forms
   - EmailJS
   - Google Forms

## 🔧 Manutenção

### Atualizar Imagens
Substitua as URLs das imagens no HTML pelas suas próprias:
```html
<img src="https://sua-cdn.com/imagem.jpg" alt="Descrição">
```

### Adicionar Analytics
Inclua o código do Google Analytics no `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### SEO Optimization
- Personalize meta tags no `<head>`
- Adicione structured data
- Configure robots.txt
- Implemente sitemap.xml

## 🚀 Deploy Recomendado

### Netlify (Recomendado)
1. Faça upload dos arquivos via drag & drop
2. Configure domínio personalizado
3. SSL automático incluído

### GitHub Pages
1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

## 📞 Suporte

Para dúvidas ou customizações:
- 📧 Email: contato@weethub.com
- 🌐 Website: https://weethub.com

---

**Desenvolvido com ❤️ para a Weethub**

*Este website estático mantém toda a funcionalidade e design da versão React original, otimizado para performance e compatibilidade máxima.*
