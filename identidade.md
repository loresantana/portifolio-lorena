# Identidade Visual e Informações Pessoais

Este documento consolida a identidade visual, paleta cromática, tipografia e dados profissionais de **Lorena Santana**.

> **Status:** Projeto 100% implementado e finalizado com sucesso. Identidade visual, referências, seções e funcionalidades ativas.

---

## 1. Dados Pessoais e Profissionais

- **Nome Completo:** Lorena Santana
- **Área de Atuação:** Desenvolvedora Front-end
- **Frase de Apresentação (Hero):** Desenvolvedora Front-end focada na criação de produtos digitais modernos com estética refinada, alta performance e usabilidade.
- **Minibio / Sobre Mim:** Sou estudante da área de Desenvolvimento de Sistemas e tenho interesse em desenvolvimento Front-end. Estou aprendendo e aprimorando minhas habilidades na criação de sites e interfaces, buscando evoluir cada vez mais na área de tecnologia.
- **Habilidades & Tecnologias:** HTML5, CSS3, JavaScript, TypeScript, React Native, Java, MySQL, Git e GitHub.
- **Foto de Perfil:** `assets/perfil.png` (integrada)
- **Localização:** Brasil
- **Redes Sociais e Contato:**
  - **GitHub:** [github.com/loresantana](https://github.com/loresantana)
  - **LinkedIn:** *(Aguardando definição/link)*
  - **E-mail de Contato:** *(Aguardando definição)*
- **Projetos em Destaque:**
  - **`perf-frontend`:** Aplicação com foco em desenvolvimento Front-end, arquitetura de componentes e desempenho ([Link no GitHub](https://github.com/loresantana/perf-frontend)).
  - **`lo-frontback`:** Projeto de integração Full-stack conectando Front-end e lógica de Back-end ([Link no GitHub](https://github.com/loresantana/lo-frontback)).
  - **`OrgProva2`:** Aplicação acadêmica prática do curso de Desenvolvimento de Sistemas ([Link no GitHub](https://github.com/loresantana/OrgProva2)).

---

## 2. Direção de Estilo Visual

- **Estilo Geral:** *Modern Minimalist Dark* com toques de iluminação púrpura (Tech, elegante e autoral).
  - Uso de superfícies em grafite profundo com bordas sutis translúcidas.
  - Brilhos difusos suaves (*ambient purple glow*) para destacar elementos-chave.
  - Cartões com elevação sutil e estados de foco e hover receptivos.
- **Tom de Comunicação:** Confiante, moderno, técnico e acolhedor. Focado em clareza, usabilidade e precisão visual.

---

## 3. Paleta Cromática Definida (Tema Escuro Primário & Tema Claro)

### Tema Escuro (Padrão)
| Função | Nome / Token | Código Hex / RGBA | Aplicação |
|---|---|---|---|
| **Fundo Primário** | `--bg-primary` | `#0b0c10` | Fundo principal da página |
| **Fundo Secundário** | `--bg-surface` | `#15161f` | Cards, menus e blocos de conteúdo |
| **Bordas Sutis** | `--border-color` | `rgba(255, 255, 255, 0.08)` | Divisões limpas sem peso visual |
| **Bordas Ativas/Hover** | `--border-accent` | `rgba(168, 85, 247, 0.35)` | Realce ao passar o mouse |
| **Texto Principal** | `--text-primary` | `#f3f4f6` | Títulos e textos de alto contraste |
| **Texto Secundário** | `--text-secondary` | `#9ca3af` | Descrições, metadados e legendas |
| **Cor de Destaque (Accent)** | `--accent-purple` | `#a855f7` | Botões de ação, links, badges e destaques |
| **Gradiente de Destaque** | `--accent-gradient` | `linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)` | Botões primários e detalhes visuais |
| **Brilho Ambiente (Glow)** | `--accent-glow` | `rgba(168, 85, 247, 0.25)` | Sombras iluminadas em botões e títulos |

### Tema Claro (Alternativo via Switch)
| Função | Nome / Token | Código Hex / RGBA | Aplicação |
|---|---|---|---|
| **Fundo Primário** | `--bg-primary` | `#fafafc` | Fundo claro e limpo |
| **Fundo Secundário** | `--bg-surface` | `#ffffff` | Cartões com sombra suave |
| **Texto Principal** | `--text-primary` | `#0f172a` | Máxima legibilidade |
| **Texto Secundário** | `--text-secondary` | `#64748b` | Apoio visual |
| **Cor de Destaque** | `--accent-purple` | `#7c3aed` | Roxo profundo com ótimo contraste |

---

## 4. Tipografia do Projeto

- **Fonte dos Títulos (`--font-heading`):** [`Space Grotesk`](https://fonts.google.com/specimen/Space+Grotesk) — Geométrica, moderna, com personalidade tecnológica marcante.
- **Fonte dos Textos (`--font-body`):** [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — Extremamente nítida, amigável e confortável para leitura contínua.
- **Fonte Monospace (`--font-mono`):** `JetBrains Mono, monospace` — Para tags de tecnologias e elementos de código.

---

## 5. Micro-interações e Componentes

- **Botões de Ação (CTA):** Gradiente roxo com elevação suave e leve efeito de brilho no hover (`transform: translateY(-2px)`).
- **Transições:** Suaves e unificadas em `all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
- **Efeitos de Vidro (Glassmorphism sutil):** Barra de navegação com `backdrop-filter: blur(12px)` e fundo translúcido.
