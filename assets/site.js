/* תפריט עליון משותף וכלים קטנים. כל עמוד מסמן את עצמו ב-<body data-page="..."> */
(function () {
  'use strict';

  var NAV = [
    { key: 'home', href: 'index.html', label: 'בית' },
    { key: 'spec', href: 'spec.html', label: 'מסמך אפיון' },
    { key: 'components', href: 'components.html', label: 'רכיבים' },
    { key: 'references', href: 'references.html', label: 'רפרנסים' },
    { key: 'studio', href: 'studio/layout-studio.html', label: 'Layout Studio ↗', ext: true }
  ];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* משקל בק"ג: עד 2 ספרות אחרי הנקודה, בלי אפסים מיותרים */
  function kg(n) {
    if (n == null || !isFinite(n)) return '–';
    return (Math.round(n * 100) / 100).toString();
  }

  function renderTopbar() {
    var host = document.getElementById('topbar');
    if (!host) return;
    var page = document.body.getAttribute('data-page');
    var links = NAV.map(function (n) {
      var cls = [n.key === page ? 'on' : '', n.soon ? 'soon' : '', n.ext ? 'ext' : ''].join(' ').trim();
      var extra = n.ext ? ' target="_blank" rel="noopener"' : '';
      /* בקובץ היחיד (IV-WORKSPACE.html) כל עמוד הוא חלק באותו קובץ */
      var href = window.IV_BUNDLE ? (n.key === 'studio' ? (window.IV_STUDIO_URL || '#') : '#' + n.key) : n.href;
      return '<a href="' + href + '"' + (cls ? ' class="' + cls + '"' : '') + extra + '>' + esc(n.label) + '</a>';
    }).join('');
    host.className = 'topbar';
    host.innerHTML =
      '<div class="topbar-in">' +
        '<a class="brand" href="' + (window.IV_BUNDLE ? '#home' : 'index.html') + '">IV-WORKSPACE <span>· מערכת עירוי אוטונומית</span></a>' +
        '<nav class="nav">' + links + '</nav>' +
      '</div>';
  }

  /* שמות: מגיעים מ-data/private.js, שקיים רק במחשב ולא עולה ל-GitHub. בלעדיו השורות נעלמות */
  function fillPrivate() {
    var P = window.PRIVATE || {};
    document.querySelectorAll('[data-private]').forEach(function (el) {
      var v = P[el.getAttribute('data-private')];
      el.textContent = v ? (el.getAttribute('data-prefix') || '') + v : '';
    });
    document.querySelectorAll('[data-private-row]').forEach(function (row) {
      if (!P[row.getAttribute('data-private-row')]) row.remove();
    });
  }

  window.SITE = { esc: esc, kg: kg, renderTopbar: renderTopbar };
  document.addEventListener('DOMContentLoaded', function () { renderTopbar(); fillPrivate(); });
})();
