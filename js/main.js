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
    var validSlides = [];
    heroSlides.forEach(function (img, i) {
      img.addEventListener('error', function () {
        img.style.display = 'none';
      });
      validSlides.push(img);
    });

    // Build dots
    heroSlides.forEach(function (img, i) {
      var dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Show slide ' + (i + 1));
      dot.addEventListener('click', function () { showSlide(i); });
      dotsWrap.appendChild(dot);
    });

    var current = 0;
    function showSlide(index) {
      heroSlides.forEach(function (img, i) {
        img.classList.toggle('active', i === index);
      });
      dotsWrap.querySelectorAll('button').forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
      current = index;
    }
    setInterval(function () {
      var next = (current + 1) % heroSlides.length;
      showSlide(next);
    }, 6000);
  }

  // Accordion toggle (Services "What's Included")
  document.querySelectorAll('.accordion-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.closest('.accordion-item').classList.toggle('open');
    });
  });

  // Simple contact form handler -> mailto fallback (no backend required)
  var form = document.querySelector('form.enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value;
      var email = form.querySelector('#email').value;
      var industry = form.querySelector('#industry').value;
      var engagement = form.querySelector('#engagement').value;
      var message = form.querySelector('#message').value;

      var subject = encodeURIComponent('New enquiry from ' + name + ' (' + industry + ')');
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Industry: ' + industry + '\n' +
        'Engagement type: ' + engagement + '\n\n' +
        'Message:\n' + message
      );
      window.location.href = 'mailto:leadstrategist@veritaseagles.org?subject=' + subject + '&body=' + body;
    });
  }
});
