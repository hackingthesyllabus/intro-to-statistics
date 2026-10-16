// Practice page: 100 step-by-step problems. Each step title is shown first; the worked
// answer is revealed on click. Completion is remembered in localStorage (per browser).
(function () {
  const QUESTIONS = Array.isArray(window.PRACTICE_QUESTIONS) ? window.PRACTICE_QUESTIONS : [];
  const TOTAL = QUESTIONS.length;
  const DONE_KEY = 'soc222-practice-done-v1';

  const TYPES = [
    { key: 'all', label: 'All' },
    { key: 'ci-mean', label: 'CI · mean' },
    { key: 'ci-prop', label: 'CI · proportion' },
    { key: 't1', label: 'One-sample t' },
    { key: 't2', label: 'Two-sample t' },
    { key: 'z1', label: 'One-proportion z' },
    { key: 'z2', label: 'Two-proportion z' },
    { key: 'chi', label: 'Chi-square' }
  ];

  const cards = [];
  let typeFilter = 'all';
  let query = '';
  let done = readDone();

  function readDone() {
    try {
      return new Set(JSON.parse(localStorage.getItem(DONE_KEY) || '[]'));
    } catch (e) {
      return new Set();
    }
  }

  function writeDone() {
    try {
      localStorage.setItem(DONE_KEY, JSON.stringify(Array.from(done)));
    } catch (e) {
      // Storage can be blocked (private window); the page still works without it.
    }
  }

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function typeset(node) {
    if (node.dataset.typeset === '1') return;
    if (window.MathJax && window.MathJax.typesetPromise) {
      node.dataset.typeset = '1';
      window.MathJax.typesetPromise([node]).catch(() => { node.dataset.typeset = ''; });
    }
  }

  function buildCard(q) {
    const card = el('article', 'q-card');
    card.dataset.id = String(q.id);
    card.dataset.type = q.type;
    if (done.has(q.id)) card.classList.add('done');

    const top = el('div', 'q-top');
    top.append(el('span', 'q-num', `Question ${q.id} of ${TOTAL}`), el('span', 'q-type', q.typeLabel));

    const title = el('h3', 'q-title', q.title);
    const scenario = el('p', 'q-scenario', q.scenario);

    const givens = el('ul', 'q-givens');
    q.givens.forEach(g => givens.appendChild(el('li', null, g)));

    const path = el('p', 'q-path', 'Decision path: ' + q.path);

    const actions = el('div', 'q-actions');
    const primary = el('button', 'btn', 'Start step by step');
    primary.type = 'button';
    const full = el('button', 'btn ghost', 'Show full solution');
    full.type = 'button';
    const reset = el('button', 'btn ghost', 'Reset');
    reset.type = 'button';
    reset.hidden = true;
    const progress = el('span', 'q-progress', done.has(q.id) ? 'Completed earlier' : '');
    actions.append(primary, full, reset, progress);

    const steps = el('ol', 'steps');
    steps.hidden = true;
    const answer = el('div', 'answer-box');
    answer.hidden = true;
    const answerLabel = el('strong', null, 'Final answer. ');
    answer.append(answerLabel, document.createTextNode(q.answer));

    card.append(top, title, scenario, givens, path, actions, steps, answer);

    const S = { cur: -1, bodyShown: false, built: false, items: [] };
    const n = q.steps.length;

    function ensureBuilt() {
      if (S.built) return;
      q.steps.forEach((s, i) => {
        const li = el('li', 'step');
        li.hidden = true;
        li.append(el('span', 's-title', `Step ${i + 1}. ${s.q}`));
        const body = el('div', 's-body');
        body.hidden = true;
        body.innerHTML = s.a;
        li.appendChild(body);
        steps.appendChild(li);
        S.items.push({ li, body });
      });
      S.built = true;
    }

    function showTitle(i) {
      S.items.forEach((item, j) => item.li.classList.toggle('current', j === i));
      S.items[i].li.hidden = false;
      S.items[i].body.hidden = true;
    }

    function revealBody(i) {
      S.items[i].body.hidden = false;
      typeset(S.items[i].body);
    }

    function updateButtons() {
      if (S.cur < 0) {
        primary.textContent = 'Start step by step';
        primary.disabled = false;
      } else if (!S.bodyShown) {
        primary.textContent = `Show answer to step ${S.cur + 1}`;
        primary.disabled = false;
      } else if (S.cur < n - 1) {
        primary.textContent = `Next step (${S.cur + 2} of ${n})`;
        primary.disabled = false;
      } else {
        primary.textContent = 'Completed';
        primary.disabled = true;
      }
      reset.hidden = S.cur < 0;
      if (S.cur >= 0) progress.textContent = `Step ${Math.min(S.cur + 1, n)} of ${n}`;
    }

    function finish() {
      answer.hidden = false;
      done.add(q.id);
      writeDone();
      card.classList.add('done');
      progress.textContent = 'Completed';
      updateButtons();
      updateCounts();
    }

    function start() {
      ensureBuilt();
      steps.hidden = false;
      S.cur = 0;
      S.bodyShown = false;
      showTitle(0);
      updateButtons();
    }

    function revealCurrent() {
      revealBody(S.cur);
      S.bodyShown = true;
      if (S.cur === n - 1) {
        finish();
      } else {
        updateButtons();
      }
    }

    function nextStep() {
      S.cur += 1;
      S.bodyShown = false;
      showTitle(S.cur);
      updateButtons();
    }

    function showFull() {
      ensureBuilt();
      steps.hidden = false;
      S.items.forEach((item, i) => {
        item.li.hidden = false;
        item.li.classList.toggle('current', i === n - 1);
        revealBody(i);
      });
      S.cur = n - 1;
      S.bodyShown = true;
      finish();
    }

    function resetCard() {
      S.cur = -1;
      S.bodyShown = false;
      S.items.forEach(item => {
        item.li.hidden = true;
        item.li.classList.remove('current');
      });
      steps.hidden = true;
      answer.hidden = true;
      progress.textContent = done.has(q.id) ? 'Completed earlier' : '';
      updateButtons();
    }

    primary.addEventListener('click', () => {
      if (S.cur < 0) start();
      else if (!S.bodyShown) revealCurrent();
      else if (S.cur < n - 1) nextStep();
    });
    full.addEventListener('click', showFull);
    reset.addEventListener('click', resetCard);

    return { q, card, S, primary };
  }

  function updateCounts() {
    const shown = cards.filter(c => !c.card.hidden).length;
    const completed = cards.filter(c => done.has(c.q.id)).length;
    document.getElementById('count').textContent =
      `Showing ${shown} of ${TOTAL} problems · Completed ${completed} of ${TOTAL}`;
    document.getElementById('empty').hidden = shown !== 0;
  }

  function applyFilters() {
    cards.forEach(c => {
      const q = c.q;
      const hay = (q.title + ' ' + q.scenario + ' ' + q.typeLabel + ' ' + q.path).toLowerCase();
      const visible = (typeFilter === 'all' || q.type === typeFilter) && (!query || hay.includes(query));
      c.card.hidden = !visible;
    });
    updateCounts();
  }

  function buildChips() {
    const wrap = document.getElementById('chips');
    TYPES.forEach(t => {
      const b = el('button', 'chip', t.label);
      b.type = 'button';
      b.dataset.type = t.key;
      b.setAttribute('aria-pressed', t.key === typeFilter ? 'true' : 'false');
      if (t.key === typeFilter) b.classList.add('active');
      b.addEventListener('click', () => {
        typeFilter = t.key;
        wrap.querySelectorAll('.chip').forEach(x => {
          const on = x.dataset.type === typeFilter;
          x.classList.toggle('active', on);
          x.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        applyFilters();
      });
      wrap.appendChild(b);
    });
  }

  function randomQuestion() {
    const visible = cards.filter(c => !c.card.hidden);
    if (!visible.length) return;
    const open = visible.filter(c => !done.has(c.q.id));
    const pool = open.length ? open : visible;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    pick.card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (pick.S.cur < 0) pick.primary.click();
  }

  function init() {
    const list = document.getElementById('list');
    QUESTIONS.forEach(q => {
      const c = buildCard(q);
      cards.push(c);
      list.appendChild(c.card);
    });

    document.getElementById('search').addEventListener('input', e => {
      query = e.target.value.trim().toLowerCase();
      applyFilters();
    });
    document.getElementById('btn-random').addEventListener('click', randomQuestion);

    buildChips();
    applyFilters();
  }

  // Typeset any revealed step or answer once MathJax is ready.
  window.onMathReady = function () {
    document.querySelectorAll('.s-body:not([hidden])').forEach(typeset);
  };

  init();
  if (window.MathJax && window.MathJax.typesetPromise) window.onMathReady();
})();
