/* Broadsheet behaviors: scroll reveal and notes live search.
   Content is fully usable with JS off — everything here is progressive. */
document.addEventListener('DOMContentLoaded', function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  // ── scroll reveal (DESIGN.md 3.5) ──
  if (!reduce && 'IntersectionObserver' in window && document.querySelector('.reveal')) {
    document.body.setAttribute('data-anim', '');
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (n) { io.observe(n); });
    // safety: reveal anything still hidden after 2.5s
    setTimeout(function () {
      document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('in'); });
    }, 2500);
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
