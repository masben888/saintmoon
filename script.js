/* ============================================================
   SAINTMOON — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });


  /* ── MOBILE NAV ── */
  const menuToggle   = document.getElementById('menuToggle');
  const mobileNav    = document.getElementById('mobileNav');
  const mobileClose  = document.getElementById('mobileNavClose');
  const mobileLinks  = mobileNav.querySelectorAll('a');

  function openMobileNav() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', openMobileNav);
  mobileClose.addEventListener('click', closeMobileNav);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  /* Close mobile nav on outside click */
  mobileNav.addEventListener('click', function (e) {
    if (e.target === mobileNav) {
      closeMobileNav();
    }
  });


  /* ── FAQ ACCORDION ── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const btn = item.querySelector('.faq-question');

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      /* Close all */
      faqItems.forEach(function (i) {
        i.classList.remove('open');
      });

      /* Toggle clicked */
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });


  /* ── SMOOTH ACTIVE NAV LINK ── */
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-menu a');

  function setActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

});
