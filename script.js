/**
 * ARYAN KUMAR - PORTFOLIO INTERACTIVITY
 * Fast, lightweight, zero-dependency client-side script.
 * Fully compatible with GitHub Pages.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DOM SELECTORS
  // -------------------------------------------------------------------------
  const navbarHeader = document.getElementById('navbar-header');
  const scrollProgressBar = document.getElementById('scroll-progress');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const revealElements = document.querySelectorAll('.reveal-fade');
  const termTabBtns = document.querySelectorAll('.term-tab-btn');
  const copyCodeBtn = document.getElementById('copy-code-btn');
  const heroCopyEmailBtn = document.getElementById('hero-copy-email-btn');
  const contactCopyEmailBtn = document.getElementById('contact-copy-email-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const demoModal = document.getElementById('demo-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalProjectCategory = document.getElementById('modal-project-category');
  const modalProjectDesc = document.getElementById('modal-project-desc');
  const modalProjectHighlights = document.getElementById('modal-project-highlights');
  const modalProjectTech = document.getElementById('modal-project-tech');
  const modalRepoLink = document.getElementById('modal-repo-link');
  const previewProjectBtns = document.querySelectorAll('.preview-project-btn');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  const CANDIDATE_EMAIL = 'aryan.kumar.placeholder@email.com';

  // -------------------------------------------------------------------------
  // 2. SCROLL PROGRESS & STICKY NAVBAR
  // -------------------------------------------------------------------------
  function updateScrollState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Reading progress indicator
    if (scrollProgressBar && docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgressBar.style.width = `${scrollPercent}%`;
    }

    // Sticky navbar backdrop
    if (navbarHeader) {
      if (scrollTop > 25) {
        navbarHeader.classList.add('scrolled');
      } else {
        navbarHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollTop > 320) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 3. RESPONSIVE MOBILE NAVIGATION DRAWER
  // -------------------------------------------------------------------------
  function toggleMobileMenu(forceClose = false) {
    const isOpen = forceClose ? false : !mobileMenu.classList.contains('open');

    if (isOpen) {
      mobileMenu.classList.add('open');
      mobileOverlay.classList.add('active');
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      mobileOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('open');
      mobileOverlay.classList.remove('active');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => toggleMobileMenu(true));
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      toggleMobileMenu(true);
    }
  });

  // -------------------------------------------------------------------------
  // 4. ACTIVE LINK TRACKING (INTERSECTION OBSERVER)
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          
          navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          mobileNavLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // -------------------------------------------------------------------------
  // 5. SCROLL REVEAL ANIMATIONS
  // -------------------------------------------------------------------------
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // -------------------------------------------------------------------------
  // 6. HERO CODE TERMINAL - TAB SWITCHING & CLIPBOARD COPY
  // -------------------------------------------------------------------------
  termTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      termTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabId = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });

      const activeContent = document.getElementById(`tab-${tabId}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });

  async function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      showToast(successMessage);
    } catch (err) {
      showToast('Copied!');
    }
  }

  // Terminal Snippet Copy
  if (copyCodeBtn) {
    const developerSnippet = `const aryan = {
  name: "Aryan Kumar",
  education: "B.Tech Computer Science & Engineering (3rd Year)",
  targetRole: "Software Development Intern",
  coreSkills: ["C++", "Python", "Java", "JavaScript", "MySQL"],
  focusAreas: ["DSA", "Web Development", "AI/ML"],
  openForInternships: true,
  email: "aryan.kumar.placeholder@email.com"
};`;

    copyCodeBtn.addEventListener('click', () => {
      copyToClipboard(developerSnippet, 'Developer snippet copied!');
      const tooltip = copyCodeBtn.querySelector('.copy-tooltip');
      if (tooltip) {
        tooltip.style.display = 'block';
        setTimeout(() => { tooltip.style.display = 'none'; }, 2000);
      }
    });
  }

  // Quick Copy Email in Hero
  if (heroCopyEmailBtn) {
    heroCopyEmailBtn.addEventListener('click', () => {
      copyToClipboard(CANDIDATE_EMAIL, 'Email copied to clipboard!');
    });
  }

  // Quick Copy Email in Contact Section
  if (contactCopyEmailBtn) {
    contactCopyEmailBtn.addEventListener('click', () => {
      copyToClipboard(CANDIDATE_EMAIL, 'Email copied to clipboard!');
    });
  }

  // -------------------------------------------------------------------------
  // 7. PROJECTS FILTERING (ALL / WEB / ML)
  // -------------------------------------------------------------------------
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 240);
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 8. PROJECT DETAILS MODAL
  // -------------------------------------------------------------------------
  function openProjectModal(data) {
    if (!demoModal) return;
    modalProjectTitle.textContent = data.title || 'Project Details';
    modalProjectCategory.textContent = data.category || 'Engineering Project';
    modalProjectDesc.textContent = data.description || '';
    
    // Highlights list
    modalProjectHighlights.innerHTML = '';
    if (data.highlights) {
      const items = data.highlights.split(';').map(h => h.trim()).filter(Boolean);
      items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-check"></i> <span>${escapeHtml(item)}</span>`;
        modalProjectHighlights.appendChild(li);
      });
    }

    // Tech pills
    modalProjectTech.innerHTML = '';
    if (data.tech) {
      const techs = data.tech.split(',').map(t => t.trim()).filter(Boolean);
      techs.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = t;
        modalProjectTech.appendChild(tag);
      });
    }

    if (modalRepoLink && data.repo) {
      modalRepoLink.href = data.repo;
    }

    demoModal.classList.add('active');
    demoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!demoModal) return;
    demoModal.classList.remove('active');
    demoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  previewProjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const data = {
        title: btn.getAttribute('data-project') || '',
        category: btn.getAttribute('data-category') || '',
        description: btn.getAttribute('data-description') || '',
        highlights: btn.getAttribute('data-highlights') || '',
        tech: btn.getAttribute('data-tech') || '',
        repo: btn.getAttribute('data-repo') || 'https://github.com/your-username'
      };
      openProjectModal(data);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal && demoModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // -------------------------------------------------------------------------
  // 9. CONTACT FORM INTERACTION & FEEDBACK
  // -------------------------------------------------------------------------
  /*
    CONNECTING EMAIL SERVICE (FORMSPREE / EMAILJS GUIDE):
    -----------------------------------------------------
    This portfolio is hosted statically on GitHub Pages. To forward contact
    inquiries directly to your inbox:

    Option A: Formspree (Easiest - 2 minutes)
    1. Register free at https://formspree.io
    2. Create a form and copy your Form ID (e.g., "mqkvabzr")
    3. In `index.html`, set:
       <form action="https://formspree.io/f/YOUR_ID" method="POST" id="contact-form">
    4. Submissions will automatically be emailed to your personal inbox.

    Option B: EmailJS
    1. Register at https://emailjs.com
    2. Include EmailJS SDK in `index.html` head
    3. Call emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) in the submit handler below.
  */

  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formFeedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('input-error');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        nameInput.classList.remove('input-error');
        nameError.classList.remove('visible');
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailInput.classList.remove('input-error');
        emailError.classList.remove('visible');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('input-error');
        messageError.classList.add('visible');
        isValid = false;
      } else {
        messageInput.classList.remove('input-error');
        messageError.classList.remove('visible');
      }

      if (!isValid) return;

      // Simulated sending feedback
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending Message...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong><i class="fa-solid fa-circle-check"></i> Message Received!</strong><br>
          Thank you, <em>${escapeHtml(nameInput.value.trim())}</em>. Since this website is currently hosted statically on GitHub Pages, this demonstration has validated your message locally. To receive live messages directly to your email, connect Formspree as described in the source code comments.
        `;

        showToast('Message processed successfully!');
        contactForm.reset();

        setTimeout(() => {
          formFeedback.style.display = 'none';
        }, 12000);
      }, 900);
    });

    [nameInput, emailInput, messageInput].forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('input-error');
        const err = input.parentElement.parentElement.querySelector('.error-msg');
        if (err) err.classList.remove('visible');
      });
    });
  }

  // -------------------------------------------------------------------------
  // 10. UTILITY TOAST NOTIFICATION
  // -------------------------------------------------------------------------
  let toastTimeout;
  function showToast(message, duration = 3200) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
