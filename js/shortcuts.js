// Global keyboard navigation shortcuts — TrainEnglish
// H=Home  S=Session  T=Tests  L=Library  P=Progress/Stats  Esc=Dashboard
(function() {
  var MAP = { h: 'dashboard.html', s: 'session.html', t: 'test.html', l: 'library.html', p: 'stats.html' };
  var PAGE = window.location.pathname.split('/').pop() || 'index.html';
  document.addEventListener('keydown', function(e) {
    // Don't fire in inputs/textareas/contenteditable
    var tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target.isContentEditable) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var key = e.key;
    // Escape → go to dashboard (unless already there or on login)
    if (key === 'Escape' && PAGE !== 'dashboard.html' && PAGE !== 'index.html') {
      e.preventDefault();
      window.location.href = 'dashboard.html';
      return;
    }
    var dest = MAP[key.toLowerCase()];
    if (dest && dest !== PAGE) {
      e.preventDefault();
      window.location.href = dest;
    }
  });
})();
