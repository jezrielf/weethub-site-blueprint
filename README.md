
# Weethub - Página Inicial HTML Estática

Este projeto contém uma versão estática em HTML da página inicial da Weethub, uma cópia exata da versão React original com todos os efeitos e funcionalidades preservados.

## 📁 Arquivos Incluídos

- `index.html` - Página principal com estrutura HTML completa
- `styles.css` - Todos os estilos CSS compilados (equivalente ao Tailwind)
- `script.js` - Funcionalidades JavaScript interativas
- `README.md` - Este arquivo de instruções

## ✨ Funcionalidades Implementadas

### 🎨 Efeitos Visuais
- **Background Lines Animadas**: Linhas SVG com animação de desenho
- **Spotlight Effect**: Efeito de luz animado no hero
- **Parallax Scrolling**: Movimento parallax nas seções de showcase
- **Flip Words Animation**: Rotação automática de palavras no título
- **Infinite Scroll**: Logos de clientes e parceiros em movimento infinito
- **Hover Effects**: Efeitos de hover em cards e botões

### 📱 Responsividade
- **Design Mobile-First**: Otimizado para dispositivos móveis
- **Breakpoints Responsivos**: Adaptação para tablet e desktop
- **Menu Mobile**: Menu hamburger funcional
- **Carrossel Mobile**: Carrossel de imagens para telas pequenas
- **Layout Adaptativo**: Grid responsivo em todas as seções

### 🚀 Interatividade
- **Navegação Suave**: Scroll suave entre seções
- **Formulário de Contato**: Validação e envio funcional
- **Animações on Scroll**: Elementos aparecem ao entrar na viewport
- **Menu Mobile Interativo**: Toggle e navegação funcionais
- **Carrossel de Imagens**: Navegação manual e automática

### 🛠️ Funcionalidades Técnicas
- **Lazy Loading**: Carregamento otimizado de imagens
- **Intersection Observer**: Animações performáticas
- **Event Delegation**: Gerenciamento eficiente de eventos
- **Error Handling**: Tratamento de erros JavaScript
- **Acessibilidade**: Navegação por teclado e atributos ARIA

## 📊 Detalhes de Implementação

### 1. Estrutura HTML
A estrutura HTML foi construída seguindo as melhores práticas semânticas, com seções bem definidas e uma hierarquia clara de elementos, replicando fielmente a versão React.

### 2. Estilização CSS
Todo o CSS foi convertido do Tailwind para CSS vanilla, mantendo a mesma aparência visual e comportamento responsivo. Variáveis CSS foram utilizadas para fácil personalização.

### 3. JavaScript
O JavaScript foi implementado de forma modular, com funções bem definidas para cada funcionalidade, mantendo todos os comportamentos interativos da versão React.

## 🚀 Como Usar

1. Baixe todos os arquivos para uma pasta em seu computador
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Alternativamente, hospede os arquivos em qualquer servidor web

## 📝 Personalização

### Cores e Estilos
As cores principais podem ser facilmente ajustadas editando as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #FFD700;  /* Cor principal (amarelo) */
    --primary-dark: #E6C200;   /* Variação mais escura */
    /* outras variáveis... */
}
```

### Conteúdo
O conteúdo pode ser editado diretamente no arquivo HTML, mantendo a estrutura de elementos e classes.

## 📱 Compatibilidade

- Chrome: 60+
- Firefox: 60+
- Safari: 12+
- Edge: 79+
- Opera: 60+
- Mobile Browsers: iOS Safari 12+, Chrome para Android 60+

## 🔒 Considerações de Performance

- Todas as imagens possuem atributo `loading="lazy"` para otimizar o carregamento
- Animações utilizam `requestAnimationFrame` para melhor performance
- Transições CSS são utilizadas em vez de animações JavaScript quando possível

## 📄 Licença

Este código é fornecido para uso exclusivo da Weethub e não deve ser redistribuído sem autorização.

---

Desenvolvido como uma cópia exata em HTML estático da versão React original da Weethub.
