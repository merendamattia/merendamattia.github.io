/* Broadsheet behaviors: mobile navigation, cookie notice and notes live search.
   Content is fully usable with JS off — everything here is progressive. */
document.addEventListener('DOMContentLoaded', function () {

  // A local notice avoids loading a third-party banner library and stylesheet.
  var cookieNotice = document.querySelector('.cookie-notice');
  var cookieDismiss = document.querySelector('[data-dismiss-cookies]');
  if (cookieNotice && cookieDismiss) {
    var dismissed = false;
    try { dismissed = localStorage.getItem('analytics-notice-dismissed') === 'true'; } catch (_) {}
    cookieNotice.hidden = dismissed;
    cookieDismiss.addEventListener('click', function () {
      cookieNotice.hidden = true;
      try { localStorage.setItem('analytics-notice-dismissed', 'true'); } catch (_) {}
    });
  }

	// Mobile navigation remains visible as a no-JavaScript fallback.
	var masthead = document.querySelector('.masthead');
	var menuToggle = document.querySelector('.menu-toggle');
	var navigation = document.getElementById('site-navigation');
	if (masthead && menuToggle && navigation) {
		masthead.classList.add('menu-ready');
		var setMenu = function (open) {
			masthead.toggleAttribute('data-menu-open', open);
			menuToggle.setAttribute('aria-expanded', String(open));
			menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
			var icon = menuToggle.querySelector('i');
			if (icon) icon.className = open ? 'ph ph-x' : 'ph ph-list';
		};
		menuToggle.addEventListener('click', function () {
			setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
		});
		navigation.addEventListener('click', function (event) {
			if (event.target.closest('a')) setMenu(false);
		});
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape') {
				setMenu(false);
				menuToggle.focus();
			}
		});
	}

	// ── notes live search ──
  var input = document.getElementById('course-search');
  if (input) {
    var courses = Array.prototype.slice.call(document.querySelectorAll('.course'));
    var groups = Array.prototype.slice.call(document.querySelectorAll('.yeargroup'));
    var count = document.getElementById('course-count');
    var noRes = document.getElementById('no-results');
    var total = courses.length;
    var years = groups.length;
    var update = function () {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      courses.forEach(function (c) {
        var hit = !q || (c.getAttribute('data-name') || '').indexOf(q) !== -1;
        c.style.display = hit ? '' : 'none';
        if (hit) shown++;
      });
      groups.forEach(function (g) {
        var vis = Array.prototype.slice.call(g.querySelectorAll('.course')).some(function (c) {
          return c.style.display !== 'none';
        });
        g.style.display = vis ? '' : 'none';
      });
      if (count) count.textContent = q ? shown + ' di ' + total + ' corsi' : total + ' corsi · ' + years + ' anni';
      if (noRes) {
        noRes.style.display = shown === 0 ? 'block' : 'none';
        noRes.textContent = 'Nessun corso corrisponde a “' + input.value.trim() + '”.';
      }
    };
    input.addEventListener('input', update);
    update();
  }
});
