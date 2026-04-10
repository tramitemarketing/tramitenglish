// Toast notification system — TrainEnglish
(function(global) {
  var container;
  function getContainer() {
    if (!container || !document.body.contains(container)) {
      container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
      }
    }
    return container;
  }
  var ICONS = {
    success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    error:   '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    info:    '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
  };
  function dismiss(el) {
    el.classList.add('toast-out');
    setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 220);
  }
  function show(msg, type, duration) {
    type = type || 'info';
    duration = duration || 3000;
    var el = document.createElement('div');
    el.className = 'toast toast-' + type;
    el.innerHTML = (ICONS[type] || ICONS.info) + '<span>' + msg + '</span>';
    getContainer().appendChild(el);
    var t = setTimeout(function() { dismiss(el); }, duration);
    el.addEventListener('click', function() { clearTimeout(t); dismiss(el); });
    return el;
  }
  global.Toast = {
    show:    function(m, t, d) { return show(m, t, d); },
    success: function(m, d)    { return show(m, 'success', d); },
    error:   function(m, d)    { return show(m, 'error', d); },
    info:    function(m, d)    { return show(m, 'info', d); }
  };
})(window);
