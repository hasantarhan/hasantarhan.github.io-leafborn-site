// Shared chrome · Leafborn (dark, compact)
(function () {
  const page = document.body.dataset.page || '';
  const PRESS_URL = 'https://drive.google.com/drive/folders/15gKPdIHlTpyjEYhTx8Up7fSwOddZMytq?usp=sharing';
  const STEAM_URL = 'https://store.steampowered.com/app/4247440/Leafborn/?utm_source=website';

  const navHTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="brand" aria-label="Leafborn home">
      <img src="img/logo.webp" alt="Leafborn" class="brand-logo"/>
    </a>
    <div class="nav-links">
      <a href="index.html" ${page === 'home' ? 'class="active"' : ''}>Home</a>
      <a href="about.html" ${page === 'about' ? 'class="active"' : ''}>About</a>
      <a class="ext" href="${PRESS_URL}" target="_blank" rel="noopener">
        Press Kit
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9 L 9 3 M 5 3 L 9 3 L 9 7"/></svg>
      </a>
      <a class="nav-steam" href="${STEAM_URL}" target="_blank" rel="noopener">
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 13.5 L 2.8 8.4 C 1 6.7, 2.4 3.5, 4.7 3.8 C 6 4, 7 4.8, 8 6 C 9 4.8, 10 4, 11.3 3.8 C 13.6 3.5, 15 6.7, 13.2 8.4 Z"/></svg>
        Wishlist
      </a>
    </div>
  </div>
</nav>`;

  const footerHTML = `
<footer class="footer">
  <div class="footer-inner">
    <div>© 2026 HASAN TARHAN · LEAFBORN</div>
    <div class="footer-links">
      <a href="${STEAM_URL}" target="_blank" rel="noopener">STEAM</a>
      <a href="${PRESS_URL}" target="_blank" rel="noopener">PRESS</a>
      <a href="https://www.instagram.com/leafborngame/" target="_blank" rel="noopener">INSTAGRAM</a>
      <a href="https://x.com/hasan_tarhann" target="_blank" rel="noopener">X</a>
      <a href="https://discord.gg/J9mUnDV4tP" target="_blank" rel="noopener">DISCORD</a>
    </div>
  </div>
</footer>`;

  const widgetHTML = `
<aside class="steam-widget" id="steam-widget" aria-label="Leafborn on Steam">
  <div class="steam-widget-head">
    <div class="steam-widget-label">Wishlist · Steam</div>
    <button class="steam-widget-toggle" id="steam-widget-toggle" aria-label="Collapse widget">
      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path id="steam-toggle-icon" d="M2 8 L 6 4 L 10 8"/></svg>
    </button>
  </div>
  <iframe
    class="steam-widget-frame"
    src="https://store.steampowered.com/widget/4247440/"
    title="Leafborn on Steam"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
</aside>`;

  const navMount = document.getElementById('site-nav');
  if (navMount) navMount.outerHTML = navHTML;
  const footerMount = document.getElementById('site-footer');
  if (footerMount) footerMount.outerHTML = footerHTML;
  const widgetMount = document.getElementById('steam-widget-mount');
  if (widgetMount) widgetMount.outerHTML = widgetHTML;

  // Widget collapse toggle
  const widget = document.getElementById('steam-widget');
  const toggle = document.getElementById('steam-widget-toggle');
  const icon = document.getElementById('steam-toggle-icon');
  if (widget && toggle && icon) {
    // restore from localStorage
    if (localStorage.getItem('lb-widget-collapsed') === '1') {
      widget.classList.add('collapsed');
      icon.setAttribute('d', 'M2 4 L 6 8 L 10 4');
      toggle.setAttribute('aria-label', 'Expand widget');
    }
    toggle.addEventListener('click', () => {
      const collapsed = widget.classList.toggle('collapsed');
      icon.setAttribute('d', collapsed ? 'M2 4 L 6 8 L 10 4' : 'M2 8 L 6 4 L 10 8');
      toggle.setAttribute('aria-label', collapsed ? 'Expand widget' : 'Collapse widget');
      localStorage.setItem('lb-widget-collapsed', collapsed ? '1' : '0');
    });
  }
})();
