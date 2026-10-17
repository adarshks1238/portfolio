// Interactive 3D toolkit sphere. Selecting a category brings ALL of its tools to the front with a glow.
(() => {
  const T = { Java: '#ED8B00', 'Spring Boot': '#6DB33F', Python: '#3776AB', C: '#5C6BC0', HTML: '#E34F26', CSS: '#1572B6', JavaScript: '#F7DF1E', SQL: '#4479A1', MongoDB: '#47A248', Git: '#F05032', GitHub: '#24292f', Postman: '#FF6C37', YOLO: '#7c3aed', LSTM: '#d6336c', RAG: '#0ca678' };
  const TXT = { 'REST APIs': '#0b7285', YOLO: '#7c3aed', LSTM: '#d6336c', RAG: '#0ca678' };
  Object.assign(T, { 'REST APIs': '#0b7285' });
  const C = {
    'All': { i: Object.keys(T), t: 'Everything I have worked with' },
    'Backend': { i: ['Java', 'Spring Boot', 'REST APIs', 'Python', 'C'], t: 'Java, Spring Boot (learning), REST APIs, Python, C' },
    'Web': { i: ['HTML', 'CSS', 'JavaScript'], t: 'HTML, CSS, JavaScript (front-end basics)' },
    'Databases': { i: ['SQL', 'MongoDB'], t: 'SQL, MongoDB, DBMS' },
    'AI / ML': { i: ['Python', 'YOLO', 'LSTM', 'RAG'], t: 'Python, YOLO, LSTM, Retrieval-Augmented Generation' },
    'Tools': { i: ['Git', 'GitHub', 'Postman'], t: 'Git, GitHub, Postman' }
  };
  const stage = document.getElementById('stage'); if (!stage) return;
  const cv = document.getElementById('cv'), ctx = cv.getContext('2d'), catsEl = document.getElementById('cats'), names = Object.keys(C);
  let cur = 1, auto = !matchMedia('(prefers-reduced-motion:reduce)').matches;
  const keys = Object.keys(T);
  const els = keys.map(k => {
    const d = document.createElement('div'); d.className = 'ic'; const ic = window.ICONS && window.ICONS[k];
    d.innerHTML = '<i' + (ic ? '' : ' style="background:' + T[k] + '"') + '>' + (ic ? '<svg viewBox="0 0 24 24"><path fill="' + ic.c + '" d="' + ic.d + '"/></svg>' : (k === 'REST APIs' ? 'API' : k.slice(0, k === 'RAG' ? 3 : 2))) + '</i><span>' + k + '</span>';
    stage.appendChild(d); return { k, d, b: 0 }
  });
  const N = els.length, pts = els.map((e, i) => { const y = 1 - 2 * (i + .5) / N, r = Math.sqrt(1 - y * y), a = i * 2.39996; return [Math.cos(a) * r, y, Math.sin(a) * r] });
  const dots = Array.from({ length: 380 }, () => { const u = Math.random() * 2 - 1, a = Math.random() * 6.283, r = Math.sqrt(1 - u * u), k = .35 + Math.random() * .7; return [Math.cos(a) * r * k, u * k, Math.sin(a) * r * k] });
  names.forEach((n, i) => { const b = document.createElement('button'); b.textContent = n; b.onclick = () => sel(i); catsEl.appendChild(b) });
  function sel(i) {
    cur = (i + names.length) % names.length; const c = C[names[cur]];[...catsEl.children].forEach((b, j) => b.classList.toggle('on', j === cur));
    document.getElementById('ct').textContent = names[cur]; document.getElementById('cl').innerHTML = c.t.split(', ').map(s => '<span>' + s + '</span>').join('');
    els.forEach(e => e.d.classList.toggle('act', c.i.includes(e.k) && names[cur] !== 'All'))
  }
  sel(0);
  document.getElementById('pv').onclick = () => sel(cur - 1); document.getElementById('nx').onclick = () => sel(cur + 1);
  const ps = document.getElementById('ps'), lab = () => ps.textContent = auto ? '❚❚' : '▶'; lab(); ps.onclick = () => { auto = !auto; lab() };
  let ax = .35, ay = 0, vx = 0, vy = .004, drag = false, lx = 0, ly = 0, W = 0, H = 0;
  function size() { const r = stage.getBoundingClientRect(), dp = devicePixelRatio || 1; W = r.width; H = r.height; cv.width = W * dp; cv.height = H * dp; ctx.setTransform(dp, 0, 0, dp, 0, 0) }
  size(); addEventListener('resize', size);
  stage.addEventListener('pointerdown', e => { drag = true; lx = e.clientX; ly = e.clientY; stage.setPointerCapture(e.pointerId) });
  stage.addEventListener('pointermove', e => { if (!drag) return; vy = (e.clientX - lx) * .004; vx = -(e.clientY - ly) * .004; ay += vy; ax += vx; lx = e.clientX; ly = e.clientY });
  ['pointerup', 'pointercancel'].forEach(ev => stage.addEventListener(ev, () => drag = false));
  function rot(p) { const [x, y, z] = p, cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax), x1 = x * cy + z * sy, z1 = -x * sy + z * cy; return [x1, y * cx - z1 * sx, y * sx + z1 * cx] }
  let vis = true; new IntersectionObserver(e => vis = e[0].isIntersecting).observe(stage);
  const dark = matchMedia('(prefers-color-scheme:dark)');
  function frame() {
    requestAnimationFrame(frame); if (!vis) return;
    if (!drag) { if (auto) { vy += (.004 - vy) * .03; vx *= .95 } else { vy *= .92; vx *= .92 } ay += vy; ax += vx; ax = Math.max(-1.2, Math.min(1.2, ax)) }
    const R = Math.min(W, H) * .4, cx = W / 2, cy = H / 2; ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = dark.matches ? 'rgba(190,200,240,.6)' : 'rgba(70,80,140,.5)';
    for (const d of dots) { const [x, y, z] = rot(d), s = .6 + (z + 1) * .5; ctx.globalAlpha = .22 + (z + 1) * .2; ctx.beginPath(); ctx.arc(cx + x * R * 1.25, cy + y * R * 1.25, s, 0, 6.283); ctx.fill() }
    ctx.globalAlpha = 1;
    const sel = C[names[cur]].i, all = names[cur] === 'All', m = sel.length, cols = m <= 3 ? m : Math.ceil(m / 2), rows = Math.ceil(m / cols), gap = Math.min(104, (W - 40) / cols);
    els.forEach((e, i) => {
      const j = sel.indexOf(e.k), active = all || j >= 0; e.b += (((!all && active) ? 1 : 0) - e.b) * .09;
      const [x, y, z] = rot(pts[i]); let sc = .7 + (z + 1) * .25, op = .4 + (z + 1) * .3, px = cx + x * R, py = cy + y * R;
      if (!all && !active) { sc *= .78; op *= .45 }
      if (!all && active) {
        const row = Math.floor(j / cols), inRow = row === rows - 1 ? m - row * cols : cols, k = j - row * cols, gx = cx + (k - (inRow - 1) / 2) * gap, gy = cy + (row - (rows - 1) / 2) * gap * 1.05;
        px += (gx - px) * e.b; py += (gy - py) * e.b; sc += (1.1 - sc) * e.b; op += (1 - op) * e.b
      }
      e.d.style.transform = 'translate(' + (px - 38) + 'px,' + (py - 36) + 'px) scale(' + sc + ')'; e.d.style.opacity = op; e.d.style.zIndex = Math.round(e.b * 100 + (z + 1) * 40)
    })
  }
  frame();
})();
