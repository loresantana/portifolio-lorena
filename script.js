/**
 * PORTFÓLIO LORENA SANTANA - JAVASCRIPT VANILLA (ES6+)
 * 
 * Funcionalidades nativas:
 * 1. Alternância de Tema Claro / Escuro (com persistência em localStorage)
 * 2. Menu Fixo com Scrollspy (destaque da seção ativa) e Drawer Mobile
 * 3. Rolagem Suave para todas as âncoras internas
 * 4. Animações Suaves de Entrada (IntersectionObserver)
 * 5. Botão Flutuante Voltar ao Topo (Back to Top)
 * 6. Validação em Tempo Real e Feedback do Formulário de Contato
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderNavigation();
  initSmoothScroll();
  initScrollReveal();
  initBackToTop();
  initContactForm();
});

/* ==========================================================================
   1. ALTERNÂNCIA DE TEMA CLARO / ESCURO (DARK / LIGHT MODE)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootHtml = document.documentElement;

  // 1. Recupera preferência salva ou detecta preferência do sistema
  const savedTheme = localStorage.getItem('lorena-portfolio-theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  const currentTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
  applyTheme(currentTheme);

  if (!themeToggleBtn) return;

  // 2. Clique para alternar
  themeToggleBtn.addEventListener('click', () => {
    const isDark = rootHtml.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('lorena-portfolio-theme', newTheme);
  });

  function applyTheme(theme) {
    rootHtml.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro');
    }
  }
}

/* ==========================================================================
   2. CABEÇALHO, MENU MOBILE E SCROLLSPY
   ========================================================================== */
function initHeaderNavigation() {
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Sombra no cabeçalho ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Toggle do menu mobile hambúrguer
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Fecha ao clicar em um link do menu móvel
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Fecha ao clicar fora do menu
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mobileNav.classList.contains('open')) {
        closeMobileNav();
      }
    });
  }

  function openMobileNav() {
    mobileNav.classList.add('open');
    mobileMenuBtn.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  // Scrollspy: Destaca o link correspondente à seção atual visível
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ==========================================================================
   3. ROLAGEM SUAVE (SMOOTH SCROLL)
   ========================================================================== */
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ==========================================================================
   4. ANIMAÇÕES DE ENTRADA SUAVES (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

/* ==========================================================================
   5. BOTÃO VOLTAR AO TOPO (BACK TO TOP)
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   6. VALIDAÇÃO E FEEDBACK DO FORMULÁRIO DE CONTATO
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const feedbackBox = document.getElementById('form-feedback');
  const submitButton = document.getElementById('btn-submit');

  const fields = [
    { input: nameInput, errorId: 'error-name', validator: validateName },
    { input: emailInput, errorId: 'error-email', validator: validateEmail },
    { input: subjectInput, errorId: 'error-subject', validator: validateSubject },
    { input: messageInput, errorId: 'error-message', validator: validateMessage }
  ];

  // Limpeza de erros em tempo real ao digitar
  fields.forEach(({ input, errorId }) => {
    if (!input) return;
    input.addEventListener('input', () => {
      clearFieldError(input, errorId);
      if (feedbackBox.classList.contains('show-error')) {
        feedbackBox.className = 'form-feedback';
        feedbackBox.textContent = '';
      }
    });
  });

  // Envio e validação
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;
    let firstInvalidInput = null;

    fields.forEach(({ input, errorId, validator }) => {
      const errorMessage = validator(input.value.trim());
      if (errorMessage) {
        setFieldError(input, errorId, errorMessage);
        isFormValid = false;
        if (!firstInvalidInput) {
          firstInvalidInput = input;
        }
      } else {
        clearFieldError(input, errorId);
      }
    });

    if (!isFormValid) {
      if (firstInvalidInput) {
        firstInvalidInput.focus();
      }
      showFeedback('Por favor, corrija os campos destacados acima.', 'error');
      return;
    }

    // Feedback de carregamento durante envio
    const originalButtonHtml = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <span>Enviando mensagem...</span>
      <svg class="btn-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
    `;

    setTimeout(() => {
      form.reset();
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonHtml;

      showFeedback('✨ Mensagem enviada com sucesso! Obrigada pelo contato, Lorena responderá em breve.', 'success');

      setTimeout(() => {
        if (feedbackBox.classList.contains('show-success')) {
          feedbackBox.className = 'form-feedback';
          feedbackBox.textContent = '';
        }
      }, 7000);
    }, 900);
  });

  function validateName(value) {
    if (!value) return 'Por favor, informe seu nome.';
    if (value.length < 2) return 'O nome deve ter no mínimo 2 caracteres.';
    return '';
  }

  function validateEmail(value) {
    if (!value) return 'Por favor, informe seu e-mail.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Por favor, insira um e-mail válido (ex: seu@email.com).';
    return '';
  }

  function validateSubject(value) {
    if (!value) return 'Por favor, informe o assunto da mensagem.';
    if (value.length < 3) return 'O assunto deve ter no mínimo 3 caracteres.';
    return '';
  }

  function validateMessage(value) {
    if (!value) return 'Por favor, escreva sua mensagem.';
    if (value.length < 10) return 'A mensagem deve ter pelo menos 10 caracteres.';
    return '';
  }

  function setFieldError(input, errorId, message) {
    input.classList.add('input-error');
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function clearFieldError(input, errorId) {
    input.classList.remove('input-error');
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
      errorElement.textContent = '';
    }
  }

  function showFeedback(message, type) {
    feedbackBox.textContent = message;
    feedbackBox.className = `form-feedback show-${type}`;
  }
}
