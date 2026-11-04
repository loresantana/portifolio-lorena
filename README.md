# Portfólio Pessoal — Lorena Santana

Portfólio pessoal moderno, autoral, performático e 100% responsivo, desenvolvido com foco em engenharia de interface, estética refinada e código limpo, sem dependência de frameworks externos ou bibliotecas desnecessárias.

- **Desenvolvedora:** Lorena Santana
- **Área:** Desenvolvedora Front-end
- **GitHub:** [github.com/loresantana](https://github.com/loresantana)

---

## 🛠 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica, acessível e otimizada para SEO.
- **CSS3 Moderno:** Custom Properties (variáveis CSS), Flexbox, CSS Grid, iluminação ambiente (*glow*), transições fluidas e suporte nativo a temas Claro e Escuro.
- **JavaScript Puro (ES6+ Vanilla):** Alternância de temas com persistência em `localStorage`, barra de navegação com *Scrollspy*, menu móvel (*drawer*), observadores de rolagem com a API moderna `IntersectionObserver` e validação em tempo real de formulário.

---

## ✨ Funcionalidades Implementadas

1. **Menu Fixo com Navegação Suave (Scrollspy):** Cabeçalho com efeito de vidro (*frosted glass*), destaque automático da seção visível e menu responsivo hambúrguer para celular.
2. **Seção Hero de Alto Impacto:** Apresentação profissional com efeito de iluminação púrpura, badge pulsante de disponibilidade e chamadas para ação (CTA).
3. **Seção Sobre Mim:** Foto de perfil real integrada com moldura e brilho sutil, trajetória autêntica em Desenvolvimento de Sistemas e vitrine com 9 tecnologias/habilidades.
4. **Galeria de Projetos:** Cards estilizados no padrão *Modern Minimalist Dark* para os 3 projetos reais (`perf-frontend`, `lo-frontback` e `OrgProva2`), com mockups visuais e botões diretos para o GitHub.
5. **Formulário de Contato com Validação em Tempo Real:** Checagem de campos, validação de e-mail via regex, feedback de envio simulado e limpeza automática.
6. **Alternância entre Modo Claro e Escuro (Dark/Light Mode):** Botão interativo com ícones Sol/Lua, persistência no navegador e detecção da preferência do sistema operacional.
7. **Canal Oficial no GitHub e Rodapé:** Acesso rápido ao perfil `@loresantana` com ícones vetoriais SVG e copyright.
8. **Botão Flutuante Voltar ao Topo (Back to Top):** Aparece suavemente conforme a rolagem da página e retorna ao topo com transição fluida.

---

## 📁 Estrutura de Arquivos

```text
portfolio/
├── AGENTS.md            # Regras e diretrizes mandatórias para a IA e desenvolvimento
├── referencias.md       # Análise de referências visuais (Awwwards, Siteinspire, Mobbin)
├── identidade.md        # Documentação da identidade visual, cores, tipografia e dados
├── funcionalidades.md   # Especificação e status de todas as 8 funcionalidades
├── README.md            # Visão geral do projeto, tecnologias e guia de execução
├── index.html           # Documento HTML5 principal
├── style.css            # Estilos visuais, variáveis de tema e responsividade
├── script.js            # Lógica interativa modular em Vanilla JS
└── assets/              # Recursos estáticos
    ├── perfil.png       # Foto de perfil real da Lorena Santana
    └── README.txt       # Guia da pasta de mídias
```

---

## 🚀 Como Executar o Projeto

Como o site é construído 100% em tecnologias web nativas, você não precisa instalar nenhuma ferramenta de compilação ou Node.js.

### Opção 1: Abrir diretamente no navegador (Mais simples)
Basta dar dois cliques no arquivo [`index.html`](file:///C:/Users/Silvana/.gemini/antigravity/scratch/portfolio/index.html) ou arrastá-lo para dentro de qualquer navegador (Chrome, Edge, Firefox, Safari).

### Opção 2: Extensão Live Server (VS Code / Antigravity)
1. Abra a pasta `portfolio` no seu editor.
2. Clique com o botão direito sobre o arquivo `index.html`.
3. Selecione **"Open with Live Server"**.

### Opção 3: Servidor Local via Terminal (Opcional)
Se desejar rodar como servidor HTTP local, execute no terminal dentro da pasta `portfolio`:
```bash
python -m http.server 8000
```
Em seguida, acesse no navegador: `http://localhost:8000`.
