document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Highlight the current page in the nav
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });

  // Hero background slideshow
  var heroSlides = document.querySelectorAll('#hero-slides .hero-slide');
  var dotsWrap = document.getElementById('hero-dots');
  if (heroSlides.length) {
    heroSlides.forEach(function (img) {
      img.addEventListener('error', function () {
        img.style.display = 'none';
      });
    });

    // Build dots
    heroSlides.forEach(function (img, i) {
      var dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Show slide ' + (i + 1));
      dot.addEventListener('click', function () { showSlide(i); });
      dotsWrap.appendChild(dot);
    });

    var currentSlide = 0;
    function showSlide(index) {
      heroSlides.forEach(function (img, i) {
        img.classList.toggle('active', i === index);
      });
      dotsWrap.querySelectorAll('button').forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
    }
    setInterval(function () {
      var next = (currentSlide + 1) % heroSlides.length;
      showSlide(next);
    }, 6000);
  }

  // Accordion toggle (Services "What's Included")
  document.querySelectorAll('.accordion-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.closest('.accordion-item').classList.toggle('open');
    });
  });

  // Contact form -> submits to Formspree (see README for one-time setup)
  var form = document.getElementById('contact-form');
  var statusBox = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            statusBox.style.display = 'block';
            statusBox.style.background = '#E8F5E9';
            statusBox.style.color = '#1B5E20';
            statusBox.textContent = "Thanks — your message has been sent. We'll be in touch shortly.";
            form.reset();
          } else {
            throw new Error('Submission failed');
          }
        })
        .catch(function () {
          statusBox.style.display = 'block';
          statusBox.style.background = '#FDECEA';
          statusBox.style.color = '#B3261E';
          statusBox.innerHTML = "Something went wrong sending this. Please email us directly at " +
            "<a href=\"mailto:leadstrategist@veritaseagles.org\" style=\"text-decoration:underline;\">leadstrategist@veritaseagles.org</a>.";
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message \u2192';
        });
    });
  }
});