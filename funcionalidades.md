# Especificação de Funcionalidades e Requisitos

Este documento lista todas as funcionalidades do portfólio em estrita ordem de prioridade para planejamento, desenvolvimento e testes individuais.

> **Status Geral do Projeto:** 100% Concluído e Testado. Todas as 8 funcionalidades implementadas com HTML5 semântico, CSS3 e JavaScript puro.

---

## Ordem de Prioridade e Critérios de Aceite

### 1. Menu Fixo com Navegação Suave entre Seções
- **Prioridade:** 1 (Alta)
- **Status:** Concluído e Testado
- **Descrição:** Barra de navegação fixada no topo (`fixed`) com logotipo estilizado (`<Lorena.dev />`), links para as seções (`#inicio`, `#sobre`, `#projetos`, `#contato`), controle do tema claro/escuro e menu móvel (hambúrguer/drawer).
- **Critérios de Aceite:**
  - Rolagem suave (`scroll-behavior: smooth`) ao clicar nos links.
  - Indicador visual ativo marcando a seção atual da página visível na tela (Scrollspy dinâmico).
  - Menu responsivo adaptado para dispositivos móveis com fechamento automático ao clicar nos links.

---

### 2. Seção "Sobre Mim" com Foto e Apresentação Pessoal
- **Prioridade:** 2 (Alta)
- **Status:** Concluído e Aprovado
- **Descrição:** Apresentação da trajetória profissional, formação em Desenvolvimento de Sistemas, competências técnicas e foto de perfil real da Lorena Santana.
- **Critérios de Aceite:**
  - Layout balanceado entre imagem pessoal e narrativa textual com brilho roxo sutil ao fundo.
  - Badges de habilidades/tecnologias organizadas de forma visual e intuitiva (9 tecnologias).
  - Informações 100% autênticas fornecidas pela Lorena.

---

### 3. Seção "Projetos" com Galeria, Descrições e Links
- **Prioridade:** 3 (Alta)
- **Status:** Concluído e Aprovado
- **Descrição:** Vitrine visual para os 3 projetos reais (`perf-frontend`, `lo-frontback` e `OrgProva2`) com tags de tecnologias e botões com links diretos para o GitHub.
- **Critérios de Aceite:**
  - Cards com design consistente e efeito sutil de elevação no hover (`translateY(-6px)` e brilho roxo).
  - Tags semânticas para cada stack tecnológica.
  - Links com segurança (`target="_blank" rel="noopener noreferrer"`).

---

### 4. Animações Suaves Durante a Rolagem (Scroll Animations)
- **Prioridade:** 4 (Média)
- **Status:** Concluído e Testado
- **Descrição:** Efeitos de aparição gradual (*fade-in* e deslizamento suave para cima) conforme os blocos entram no campo de visão do usuário.
- **Critérios de Aceite:**
  - Implementado com a API nativa moderna `IntersectionObserver` em JavaScript puro (alta performance, 60fps).
  - Respeito à preferência de acessibilidade do sistema operacional (`prefers-reduced-motion`).

---

### 5. Formulário de Contato com Validação em Tempo Real
- **Prioridade:** 5 (Média)
- **Status:** Concluído e Testado
- **Descrição:** Campos para Nome, E-mail, Assunto e Mensagem com feedback visual imediato ao usuário.
- **Critérios de Aceite:**
  - Validação de campos obrigatórios e formato de e-mail via JavaScript puro (regex).
  - Mensagens de erro claras e informativas exibidas abaixo dos campos inválidos.
  - Estado de carregamento simulado ("Enviando mensagem..."), mensagem de sucesso amigável e limpeza automática dos campos.

---

### 6. Alternância de Tema Claro e Escuro (Dark/Light Mode)
- **Prioridade:** 6 (Média)
- **Status:** Concluído e Testado
- **Descrição:** Botão toggle no menu para alternar instantaneamente entre paleta escura (Modern Minimalist Dark + Roxo) e paleta clara limpa e moderna.
- **Critérios de Aceite:**
  - Transição suave entre as cores.
  - Persistência da preferência escolhida no navegador através de `localStorage` (`lorena-portfolio-theme`).
  - Detecção automática da preferência inicial do sistema operacional do visitante (`prefers-color-scheme`).

---

### 7. Links para Redes Sociais e Rodapé
- **Prioridade:** 7 (Secundária)
- **Status:** Concluído e Testado
- **Descrição:** Ícones vetoriais SVG e links diretos para o perfil oficial da Lorena Santana no GitHub (`@loresantana`) tanto na seção de contato quanto no rodapé da página.
- **Critérios de Aceite:**
  - Ícones vetoriais SVG limpos, acessíveis e com `aria-label`.
  - Efeito hover interativo nos ícones.

---

### 8. Botão Flutuante de Retorno ao Topo ("Back to Top")
- **Prioridade:** 8 (Secundária)
- **Status:** Concluído e Testado
- **Descrição:** Botão flutuante circular com gradiente roxo no canto inferior que surge suavemente apenas quando o visitante rola a página além de 350px.
- **Critérios de Aceite:**
  - Invisível no topo da página e visível após rolagem.
  - Ao ser clicado, retorna suavemente para o início da página.
