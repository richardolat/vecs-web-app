document.addEventListener('DOMContentLoaded', function () {
  var mount = document.getElementById('site-footer-include');
  if (!mount) return;

  mount.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="images/veritas-logo-transparent.png" alt="Veritas-Eagles Communications and Services Ltd logo">
            <span>Veritas-Eagles</span>
          </div>
          <div class="footer-tagline">Driving Visibility, Building Trust</div>
          <p style="color:rgba(255,255,255,0.65); font-size:0.9rem; max-width:280px;">
            Nigeria's fast-rising PR and strategic communication firm. We help
            organisations, leaders, and brands communicate with clarity and confidence.
          </p>
          <p style="color:rgba(255,255,255,0.5); font-size:0.8rem;">RC: 8083874 &middot; TIN: 32481332-0001</p>
          <div class="social-row">
            <a href="#" aria-label="X / Twitter"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="11" x2="8" y2="16"/><circle cx="8" cy="8" r="0.5"/><path d="M12 16v-3a2 2 0 0 1 4 0v3"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z"/></svg></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="work.html">Our Work</a></li>
            <li><a href="insight-hub.html">Insight Hub</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li><a href="services.html#media-pr">Media &amp; Public Relations</a></li>
            <li><a href="services.html#digital">Digital &amp; Social Media</a></li>
            <li><a href="services.html#political">Political Communications</a></li>
            <li><a href="services.html#crisis">Crisis Management</a></li>
            <li><a href="services.html#branding">Branding &amp; Corporate Comms</a></li>
            <li><a href="services.html#startup">Startup Advisory</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p style="font-size:0.92rem; margin-bottom:8px;">08146035283<br>08060193402</p>
          <p style="font-size:0.92rem; margin-bottom:8px;">leadstrategist@veritaseagles.org<br>arin@veritaseagles.org</p>
          <p style="font-size:0.92rem;">40 Majekodunmi Street, Off Allen,<br>Ikeja, Lagos State, Nigeria</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Veritas-Eagles Communication &amp; Services Ltd. All rights reserved.</span>
        <span>Strategic PR &amp; Communications &middot; Lagos, Nigeria</span>
      </div>
    </div>
  `;
});
