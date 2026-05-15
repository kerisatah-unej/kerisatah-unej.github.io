/* ============================================================
   KeRis-Dimas ATAH — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Language Toggle ── */
  const body = document.body;
  const btnID = document.getElementById('btn-id');
  const btnEN = document.getElementById('btn-en');

  function setLang(lang) {
    if (lang === 'en') {
      body.classList.add('en');
      if (btnID) { btnID.classList.remove('active'); btnEN.classList.add('active'); }
    } else {
      body.classList.remove('en');
      if (btnID) { btnID.classList.add('active'); btnEN.classList.remove('active'); }
    }
    localStorage.setItem('atah-lang', lang);
  }

  const savedLang = localStorage.getItem('atah-lang') || 'id';
  setLang(savedLang);

  if (btnID) btnID.addEventListener('click', () => setLang('id'));
  if (btnEN) btnEN.addEventListener('click', () => setLang('en'));

  /* ── Mobile Hamburger ── */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded',
        navLinks.classList.contains('open') ? 'true' : 'false');
    });
    // close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ── Scroll-to-top button ── */
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Active nav link highlighting ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll-reveal animation ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.card, .focus-card, .team-card, .pub-card, .gallery-item, .news-card, .roadmap-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
    observer.observe(el);
  });

  /* ── Counter animation ── */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target + (el.getAttribute('data-suffix') || '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
      }
    }, 16);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.classList.contains('counted')) {
        e.target.classList.add('counted');
        animateCounter(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

  /* ── Tab switching ── */
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        // deactivate all
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // show/hide panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
          panel.style.display = panel.id === target ? 'block' : 'none';
        });
      });
    });
  });

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = '✓ Terkirim / Sent!';
      btn.disabled = true;
      btn.style.background = '#2E7D32';
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  /* ── Gallery lightbox (simple) ── */
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;';
      const clone = img.cloneNode();
      clone.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;object-fit:contain;';
      overlay.appendChild(clone);
      overlay.addEventListener('click', () => document.body.removeChild(overlay));
      document.body.appendChild(overlay);
    });
  });

});
