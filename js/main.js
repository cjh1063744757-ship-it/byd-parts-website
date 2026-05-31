// ============================================================
// GreenMotion Global - Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ============================================================
  // STICKY HEADER
  // ============================================================
  const header = document.querySelector('header');
  function handleScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  if (header) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ============================================================
  // MOBILE MENU
  // ============================================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // ============================================================
  // MOBILE DROPDOWN TOGGLE
  // ============================================================
  document.querySelectorAll('.nav-dropdown-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        var dropdown = trigger.closest('.nav-dropdown');
        dropdown.classList.toggle('open');
      }
    });
  });

  // ============================================================
  // ACTIVE NAV LINK
  // ============================================================
  var productPages = ['products.html', 'tires.html', 'pricelist.html', 'byd-parts.html', 'sinotruk-parts.html', 'car-accessories.html'];
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  // Mark dropdown items active & highlight trigger when on a product sub-page
  document.querySelectorAll('.dropdown-item').forEach(function (item) {
    var href = item.getAttribute('href');
    if (href === currentFile) {
      item.classList.add('active');
    }
  });
  if (productPages.indexOf(currentFile) !== -1) {
    var trigger = document.querySelector('.nav-dropdown-trigger');
    if (trigger) trigger.classList.add('active');
  }

  // ============================================================
  // SCROLL REVEAL
  // ============================================================
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // ============================================================
  // COUNTER ANIMATION
  // ============================================================
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target') || '0');
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  // ============================================================
  // PRODUCTS PAGE FILTER
  // ============================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-full-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      productCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ============================================================
  // CONTACT FORM SUBMISSION
  // ============================================================
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('.form-submit');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(form)).toString()
        });
      } catch (err) {
        console.warn('Form submit error:', err);
      }

      const formContent = document.getElementById('formContent');
      const formSuccess = document.getElementById('formSuccess');
      if (formContent) formContent.style.display = 'none';
      if (formSuccess) formSuccess.style.display = 'block';
    });
  }

  // ============================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ============================================================
  // FAQ ACCORDION — TAB SWITCHING
  // ============================================================
  document.querySelectorAll('.faq-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-target');
      document.querySelectorAll('.faq-tab-btn').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.faq-group').forEach(function (g) { g.classList.remove('active'); });
      btn.classList.add('active');
      var group = document.getElementById(target);
      if (group) group.classList.add('active');
    });
  });

  // FAQ ACCORDION — ITEM TOGGLE
  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      // Close all siblings in same group
      var group = item.closest('.faq-group') || item.parentElement;
      if (group) {
        group.querySelectorAll('.faq-item.open').forEach(function (i) { i.classList.remove('open'); });
      }
      if (!isOpen) item.classList.add('open');
    });
  });

  // ============================================================
  // BACK TO TOP BUTTON — INJECT & ACTIVATE
  // ============================================================
  var btt = document.createElement('button');
  btt.id = 'backToTop';
  btt.className = 'back-to-top';
  btt.setAttribute('aria-label', 'Back to top');
  btt.innerHTML = '&#8679;'; // ↑
  document.body.appendChild(btt);

  window.addEventListener('scroll', function () {
    btt.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btt.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================================================
  // MOBILE STICKY CTA BAR — INJECT
  // ============================================================
  var stickyBar = document.createElement('div');
  stickyBar.className = 'sticky-cta-bar';
  stickyBar.innerHTML =
    '<a href="https://wa.me/8617318305222?text=Hello%2C%20I%27m%20interested%20in%20your%20products." ' +
    'class="scta-btn scta-whatsapp" target="_blank" rel="noopener">💬 WhatsApp</a>' +
    '<a href="contact.html" class="scta-btn scta-quote">📋 Get a Quote</a>';
  document.body.appendChild(stickyBar);

});
