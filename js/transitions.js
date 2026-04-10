// Smooth page transitions — intercept internal link clicks
(function() {
  function navigate(href) {
    document.body.classList.add('page-exit');
    setTimeout(function() { window.location.href = href; }, 150);
  }
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href) return;
    // Skip external, anchor, javascript, and _blank links
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('#') ||
        href.startsWith('javascript') || href.startsWith('mailto') || a.target === '_blank') return;
    // Skip if modifier key held (open in new tab intent)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(href);
  });
})();
