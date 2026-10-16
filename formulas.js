// Formula map (diagram) and formula library for the Formulas tab.
(function () {
  const SVG_NS = 'http://www.w3.org/2000/svg';

  // Lanes: A = means and proportions, B = chi-square, C = regression (Week 11)
  const LANES = [
    { y: 36, label: 'A · MEANS AND PROPORTIONS: CONFIDENCE INTERVALS AND z / t TESTS' },
    { y: 418, label: 'B · COUNTS IN A TABLE: CHI-SQUARE' },
    { y: 532, label: 'C · RELATIONSHIP BETWEEN TWO NUMERIC VARIABLES (WEEK 11)' }
  ];

  const COL = {
    A: ['#f0f4ff', '#4a6fa5'],
    B: ['#faf0ff', '#6a1b9a'],
    C: ['#f0f5ff', '#1565c0'],
    D: ['#e8f5e9', '#2e7d32']
  };

  // k = colour group, t = title, b = short body text, x/y/w/h = box position
  const NODES = [
    { id: 'pop',    k: 'A', t: 'Population',              b: 'μ, σ, π: the true values (usually unknown)', x: 20,  y: 60,  w: 200, h: 70 },
    { id: 'sdist',  k: 'A', t: 'Sampling distribution',   b: 'Centered on μ (or π). Its spread is the SE.', x: 260, y: 60,  w: 200, h: 70 },
    { id: 'crit',   k: 'A', t: 'Critical value',          b: 't* or z* for a CI; t_crit or z_crit for a test', x: 500, y: 190, w: 200, h: 70 },
    { id: 'ci',     k: 'D', t: 'Confidence interval',     b: 'estimate ± critical × SE', x: 500, y: 60,  w: 200, h: 70 },
    { id: 'samp',   k: 'A', t: 'Sample',                  b: 'Ȳ, s, p̂, N, n (from the data)', x: 20,  y: 190, w: 200, h: 70 },
    { id: 'se',     k: 'A', t: 'Standard error',          b: 's/√N, or √(p̂(1−p̂)/n); π₀ version for tests', x: 260, y: 190, w: 200, h: 70 },
    { id: 'null',   k: 'A', t: 'Null value from H₀',     b: 'μ₀ or π₀: the benchmark we test against', x: 20,  y: 320, w: 200, h: 70 },
    { id: 'tstat',  k: 'A', t: 'Test statistic',          b: '(estimate − null value) ÷ SE → t or z', x: 500, y: 320, w: 200, h: 70 },
    { id: 'dec',    k: 'D', t: 'Decision',                b: 'Reject H₀ if |statistic| > critical value', x: 740, y: 190, w: 150, h: 70 },

    { id: 'O',      k: 'B', t: 'Observed counts',         b: 'O: the count in each cell of the table', x: 20,  y: 432, w: 200, h: 70 },
    { id: 'E',      k: 'B', t: 'Expected counts',         b: 'E = (row total × column total) ÷ N', x: 260, y: 432, w: 200, h: 70 },
    { id: 'chi',    k: 'B', t: 'Chi-square statistic',    b: 'χ² = Σ(O − E)² ÷ E, df = (r−1)(c−1)', x: 500, y: 432, w: 200, h: 70 },
    { id: 'chidec', k: 'D', t: 'Decision',                b: 'χ² > χ²_crit ⇒ reject H₀', x: 740, y: 432, w: 150, h: 70 },

    { id: 'XY',     k: 'C', t: 'Paired X and Y',         b: 'Two numeric scores for each case', x: 20,  y: 546, w: 200, h: 70 },
    { id: 'cov',    k: 'C', t: 'Covariance and r',        b: 'cov = Σ(X−X̄)(Y−Ȳ)/(N−1); r = Σz_Xz_Y/(N−1)', x: 260, y: 546, w: 200, h: 70 },
    { id: 'reg',    k: 'C', t: 'Slope and intercept',     b: 'b = Σ(X−X̄)(Y−Ȳ)/Σ(X−X̄)²; a = Ȳ − bX̄', x: 500, y: 546, w: 200, h: 70 },
    { id: 'pred',   k: 'C', t: 'Predictions', b: 'Ŷ = a + bX; residual e = Y − Ŷ', x: 740, y: 546, w: 150, h: 70 }
  ];

  // f/t = from/to node, fa/ta = anchor points (fractions of box width/height),
  // s = 'line' (straight) or 'curve', dash = value from H₀ or a critical value table
  const EDGES = [
    { f: 'pop',   t: 'sdist', fa: [1, .5],  ta: [0, .5],  s: 'line' },
    { f: 'samp',  t: 'se',    fa: [1, .5],  ta: [0, .5],  s: 'line' },
    { f: 'sdist', t: 'se',    fa: [.5, 1],  ta: [.5, 0],  s: 'line', l: 'spread', lx: 368, ly: 166 },
    { f: 'se',    t: 'ci',    fa: [.85, 0], ta: [.15, 1], s: 'curve' },
    { f: 'se',    t: 'tstat', fa: [.85, 1], ta: [.15, 0], s: 'curve' },
    { f: 'null',  t: 'tstat', fa: [1, .5],  ta: [0, .5],  s: 'line', dash: true, l: 'value from H₀', lx: 300, ly: 348 },
    { f: 'crit',  t: 'ci',    fa: [.5, 0],  ta: [.5, 1],  s: 'line', dash: true, l: 't* or z*', lx: 606, ly: 166 },
    { f: 'crit',  t: 'tstat', fa: [.5, 1],  ta: [.5, 0],  s: 'line', dash: true, l: 't_crit or z_crit', lx: 606, ly: 296 },
    { f: 'ci',    t: 'dec',   fa: [1, .5],  ta: [.5, 0],  s: 'curve' },
    { f: 'tstat', t: 'dec',   fa: [1, .5],  ta: [.5, 1],  s: 'curve' },
    { f: 'crit',  t: 'dec',   fa: [1, .5],  ta: [0, .5],  s: 'line', dash: true },
    { f: 'O',     t: 'E',     fa: [1, .5],  ta: [0, .5],  s: 'line' },
    { f: 'E',     t: 'chi',   fa: [1, .5],  ta: [0, .5],  s: 'line' },
    { f: 'chi',   t: 'chidec', fa: [1, .5], ta: [0, .5],  s: 'line' },
    { f: 'XY',    t: 'cov',   fa: [1, .5],  ta: [0, .5],  s: 'line' },
    { f: 'cov',   t: 'reg',   fa: [1, .5],  ta: [0, .5],  s: 'line' },
    { f: 'reg',   t: 'pred',  fa: [1, .5],  ta: [0, .5],  s: 'line' }
  ];

  const DETAIL = {
    pop: {
      f: '\\mu,\\ \\sigma,\\ \\pi',
      p: 'The true values for the whole population: the average (μ), the spread (σ) and the share with a trait (π). We almost never observe them directly, so we estimate them from a sample.',
      u: 'Ask what the sample can tell us about these values. That question is the whole point of inference.'
    },
    samp: {
      f: '\\bar{Y}=\\frac{\\sum Y}{N},\\qquad \\hat{p}=\\frac{x}{n}',
      p: 'The numbers we compute from the data we actually collected. They are our best single guesses for the population values.',
      u: 'Use them as the estimate in a confidence interval, and as the observed value in a test.'
    },
    null: {
      f: 'H_0:\\ \\mu=\\mu_0\\ \\ \\text{or}\\ \\ \\pi=\\pi_0',
      p: 'The benchmark stated in the null hypothesis: the value we test against, such as a known average or a stated share.',
      u: 'Write it down before you calculate anything. It is the value that enters the test statistic.'
    },
    sdist: {
      f: '\\mu_{\\bar{Y}}=\\mu,\\qquad \\sigma_{\\bar{Y}}=\\frac{\\sigma}{\\sqrt{N}}',
      p: 'If we drew many samples of size N and computed the mean of each, those means would form a distribution. It is centered on the true μ, so sample means are right on average. Its spread is the standard error. For large N it is approximately normal (central limit theorem).',
      u: 'This is why CIs and t tests work. Proportions behave the same way: mean π, spread √(π(1−π)/n).'
    },
    se: {
      f: 'SE_{\\bar{Y}}=\\frac{s}{\\sqrt{N}},\\qquad SE_{\\hat{p}}=\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}',
      p: 'How much a statistic typically varies from sample to sample. It is the denominator of every CI and test statistic. A CI uses the estimated SE (with s or p̂). A z test uses the null-value SE (with π₀), because the test assumes H₀ is true.',
      u: 'Compute the SE once, then reuse it for the interval or the test statistic.'
    },
    crit: {
      f: 't^*,\\ z^*\\ \\text{(CI)};\\quad t_{\\text{crit}},\\ z_{\\text{crit}},\\ \\chi^2_{\\text{crit}}\\ \\text{(tests)}',
      p: 'The cutoff that marks an unusual result. It depends on the confidence level or α, and on df. For a one-sample t, df = N − 1; for the Welch two-sample t, df is the Welch value; for chi-square, df = (r−1)(c−1).',
      u: 'Look it up with the right df. For a one-tailed test, use only the side that matches H_A.'
    },
    ci: {
      f: '\\bar{Y}\\pm t^*\\cdot SE\\quad\\text{or}\\quad \\hat{p}\\pm z^*\\cdot SE',
      p: 'A range of plausible population values built around the sample estimate. Its width is set by the margin of error, which grows with the confidence level and shrinks as N grows.',
      u: 'Use it when the question asks you to estimate a value. For a mean, a 95% CI that excludes μ₀ gives the same decision as a two-tailed one-sample t test at α = .05. For proportions the CI and the test use different standard errors, so near the boundary they can disagree.'
    },
    tstat: {
      f: 't=\\frac{\\bar{Y}-\\mu_0}{SE},\\qquad z=\\frac{\\hat{p}-\\pi_0}{SE_{\\pi_0}}',
      p: 'How many standard errors the sample result lies from the value in H₀. A large absolute value would be unlikely if H₀ were true.',
      u: 'Use it when the question asks whether something differs from, or is greater or less than, a known value.'
    },
    dec: {
      f: '|\\text{statistic}|>\\text{critical value}\\ \\Rightarrow\\ \\text{reject } H_0',
      p: 'Reject H₀ if the statistic is beyond the critical value (equivalently, if p < α). Otherwise, fail to reject H₀. We never "accept" H₀.',
      u: 'Then write one plain-language sentence about what the result means for the research question.'
    },
    O: {
      f: 'O=\\text{the observed count in each cell}',
      p: 'The counts you actually observed for each combination of the two categorical variables.',
      u: 'Start here for any crosstab. Check that the row and column totals add up to N.'
    },
    E: {
      f: 'E=\\frac{\\text{row total}\\times\\text{column total}}{N}',
      p: 'The count each cell would contain if the two variables were unrelated, given the row and column totals. As a common rule of thumb, every E should be at least 5.',
      u: 'Compare what you observed with what independence predicts, cell by cell.'
    },
    chi: {
      f: '\\chi^2=\\sum\\frac{(O-E)^2}{E},\\qquad df=(r-1)(c-1)',
      p: 'Adds up how far each cell is from what independence predicts, scaled by its expected count. Larger values mean stronger evidence of association. The test is non-directional.',
      u: 'Test whether two categorical variables are related. It cannot say which direction the relationship runs; use the percentages in the table for that.'
    },
    chidec: {
      f: '\\chi^2_{\\text{obt}}>\\chi^2_{\\text{crit}}\\ \\Rightarrow\\ \\text{reject } H_0',
      p: 'If the statistic exceeds the critical value for your df and α, conclude that the two variables are associated.',
      u: 'Describe the pattern with percentages before you interpret it.'
    },
    XY: {
      f: '(X_i,\\,Y_i),\\quad i=1,\\dots,N',
      p: 'Two numeric variables measured on the same cases.',
      u: 'Make a scatter plot first, to check whether a straight-line pattern is reasonable.'
    },
    cov: {
      f: '\\text{cov}_{XY}=\\frac{\\sum(X-\\bar{X})(Y-\\bar{Y})}{N-1},\\qquad r=\\frac{\\sum z_Xz_Y}{N-1}',
      p: 'Covariance says whether X and Y move together. Dividing by both SDs gives r, which runs from −1 to +1, so strengths can be compared across variables.',
      u: 'Describe the strength and direction of a linear association.'
    },
    reg: {
      f: 'b=\\frac{\\sum(X-\\bar{X})(Y-\\bar{Y})}{\\sum(X-\\bar{X})^2}=r\\frac{s_Y}{s_X},\\qquad a=\\bar{Y}-b\\bar{X}',
      p: 'The best-fitting straight line. b is the predicted change in Y for a one-unit increase in X; a is the predicted Y when X = 0.',
      u: 'Predict Y from X, or describe how much Y changes per unit of X.'
    },
    pred: {
      f: '\\hat{Y}=a+bX,\\qquad e=Y-\\hat{Y}',
      p: 'The predicted value for each case, and how far off it is. Residuals show where the line fits poorly.',
      u: 'Check the fit and make predictions. Residuals should look random around zero.'
    }
  };

  const LIB = [
    { tag: 'Descriptive', title: 'Mean and standard deviation',
      f: '\\bar{Y}=\\frac{\\sum Y}{N},\\qquad s=\\sqrt{\\frac{\\sum(Y-\\bar{Y})^2}{N-1}}',
      when: 'Summarizing one numeric variable: its typical value and how spread out the values are.',
      plain: 'The mean is the balance point of the scores. The SD is the typical distance of a score from the mean. Dividing by N − 1 (not N) is used because the mean was estimated from the same data.',
      connects: 'The mean is the estimate in CIs and t tests; s feeds into the standard error.' },
    { tag: 'Descriptive', title: 'z-score',
      f: 'z=\\frac{Y-\\bar{Y}}{s}',
      when: 'Placing one score within its distribution, or using the normal table.',
      plain: 'How many standard deviations a score lies above or below the mean. A z of +1.5 is 1.5 SDs above average.',
      connects: 'The same idea as a test statistic: distance from a reference value in SD units.' },
    { tag: 'Sampling', title: 'Standard error of the mean',
      f: 'SE=\\frac{\\sigma}{\\sqrt{N}}\\approx\\frac{s}{\\sqrt{N}},\\qquad \\mu_{\\bar{Y}}=\\mu',
      when: 'Every CI and t test for a mean. Use s when σ is unknown, which is almost always.',
      plain: 'The SD of sample means. It shrinks with the square root of N, so a larger sample gives a more precise estimate. The sampling distribution is centered on μ.',
      connects: 'Denominator of the CI for a mean and of the one-sample t.' },
    { tag: 'Sampling', title: 'Standard error of a proportion',
      f: 'SE_{\\hat{p}}=\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}\\ \\text{(CI)},\\qquad SE_{\\pi_0}=\\sqrt{\\frac{\\pi_0(1-\\pi_0)}{n}}\\ \\text{(test)}',
      when: 'Every CI and z test for a proportion.',
      plain: 'The same idea as the SE of the mean, for yes/no data. The CI uses the observed p̂; the test uses the null value π₀, because the test assumes H₀ is true.',
      connects: 'Denominator of the proportion CI and of the one-proportion z test.' },
    { tag: 'Estimation', title: 'Confidence interval for a mean',
      f: '\\bar{Y}\\pm t^*\\cdot\\frac{s}{\\sqrt{N}},\\qquad df=N-1',
      when: 'Estimating a population mean from one sample.',
      plain: 'Plausible values for μ: the sample mean plus or minus the margin of error.',
      connects: 'Built from the sample mean, the standard error and the critical t.' },
    { tag: 'Estimation', title: 'Confidence interval for a proportion',
      f: '\\hat{p}\\pm z^*\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}',
      when: 'Estimating a population share from a yes/no sample.',
      plain: 'The sample share plus or minus the margin of error. For 95% confidence, z* = 1.96.',
      connects: 'Uses the proportion standard error and the critical z.' },
    { tag: 'Test', title: 'One-sample t test',
      f: 't=\\frac{\\bar{Y}-\\mu_0}{s/\\sqrt{N}},\\qquad df=N-1',
      when: 'One numeric sample compared with a known or stated mean (μ₀).',
      plain: 'How many standard errors the sample mean is from the benchmark in H₀. Compare |t| with t_crit (two-tailed), or use one side (one-tailed).',
      connects: 'Same standard error as the CI for a mean.' },
    { tag: 'Test', title: 'Two-sample t test (Welch)',
      f: 't=\\frac{\\bar{Y}_1-\\bar{Y}_2}{\\sqrt{\\dfrac{s_1^2}{N_1}+\\dfrac{s_2^2}{N_2}}}',
      when: 'Comparing the means of two independent groups, such as men and women.',
      plain: 'The difference between the two sample means, measured in standard errors. The SE combines both groups’ variances. The df comes from the Welch formula.',
      connects: 'Each group contributes its own variance divided by its own sample size.' },
    { tag: 'Test', title: 'One-proportion z test',
      f: 'z=\\frac{\\hat{p}-\\pi_0}{\\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}}}',
      when: 'One yes/no sample compared with a known or stated share (π₀).',
      plain: 'How many standard errors the sample share is from π₀, computed as if H₀ were true.',
      connects: 'Uses the null-value standard error from the proportion formulas.' },
    { tag: 'Test', title: 'Two-proportion z test',
      f: 'z=\\frac{\\hat{p}_1-\\hat{p}_2}{\\sqrt{\\hat{p}(1-\\hat{p})\\left(\\frac{1}{n_1}+\\frac{1}{n_2}\\right)}},\\quad \\hat{p}=\\frac{x_1+x_2}{n_1+n_2}',
      when: 'Comparing yes/no proportions between two independent groups.',
      plain: 'The difference between the two shares, measured in standard errors. The pooled p̂ is used because H₀ says both groups share one population proportion.',
      connects: 'For a 2×2 table, z² equals the chi-square statistic.' },
    { tag: 'Test', title: 'Chi-square test of association',
      f: 'E=\\frac{\\text{row}\\times\\text{column}}{N},\\qquad \\chi^2=\\sum\\frac{(O-E)^2}{E},\\qquad df=(r-1)(c-1)',
      when: 'Two categorical variables in a table of counts, testing whether they are related.',
      plain: 'Adds up how far each cell’s observed count is from what independence predicts. The test is non-directional.',
      connects: 'The expected counts come from the row and column totals.' },
    { tag: 'Association', title: 'Covariance and correlation',
      f: '\\text{cov}_{XY}=\\frac{\\sum(X-\\bar{X})(Y-\\bar{Y})}{N-1},\\qquad r=\\frac{\\text{cov}_{XY}}{s_Xs_Y}',
      when: 'Describing how strongly two numeric variables move together in a straight-line pattern.',
      plain: 'Covariance is in mixed units. Dividing by both SDs gives r, which runs from −1 to +1.',
      connects: 'The same sums of products are used in the regression slope.' },
    { tag: 'Association', title: 'Regression line',
      f: 'b=\\frac{\\sum(X-\\bar{X})(Y-\\bar{Y})}{\\sum(X-\\bar{X})^2}=r\\frac{s_Y}{s_X},\\qquad a=\\bar{Y}-b\\bar{X},\\qquad \\hat{Y}=a+bX',
      when: 'Predicting Y from X, or describing how much Y changes per unit of X.',
      plain: 'The straight line closest to the points in the least-squares sense. b is the slope; a is the intercept.',
      connects: 'Slope equals the correlation rescaled by the two SDs.' }
  ];

  function esc(s) {
    return String(s).replace(/[&<>]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]));
  }

  function el(tag, attrs, parent) {
    const node = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs).forEach(k => node.setAttribute(k, attrs[k]));
    if (parent) parent.appendChild(node);
    return node;
  }

  function wrap(text, max) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    words.forEach(w => {
      const candidate = line ? line + ' ' + w : w;
      if (candidate.length > max && line) { lines.push(line); line = w; }
      else { line = candidate; }
    });
    if (line) lines.push(line);
    return lines;
  }

  const byId = {};
  NODES.forEach(n => { byId[n.id] = n; });
  let selectedId = null;

  function typeset(node) {
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([node]);
  }

  function showDetail(id) {
    const panel = document.getElementById('detail');
    const n = byId[id];
    const d = DETAIL[id];
    if (!n || !d) return;
    const built = EDGES.filter(e => e.t === id).map(e => byId[e.f].t);
    const feeds = EDGES.filter(e => e.f === id).map(e => byId[e.t].t);
    panel.innerHTML = `
      <h3>${esc(n.t)}</h3>
      <div class="d-formula">\\[${d.f}\\]</div>
      <span class="d-label">What it means</span>
      <p>${esc(d.p)}</p>
      <span class="d-label">When to use it</span>
      <p>${esc(d.u)}</p>
      <span class="d-label">How it connects</span>
      <p>${built.length ? 'Built from: ' + esc(built.join(', ')) + '. ' : ''}${feeds.length ? 'Feeds into: ' + esc(feeds.join(', ')) + '.' : 'End of the chain.'}</p>`;
    typeset(panel);
  }

  function select(id) {
    selectedId = id;
    document.querySelectorAll('#map .node').forEach(g => {
      g.classList.toggle('selected', g.getAttribute('data-id') === id);
    });
    showDetail(id);
  }

  function drawNode(svg, n) {
    const [fill, stroke] = COL[n.k];
    const g = el('g', { class: 'node', 'data-id': n.id, tabindex: 0, role: 'button', 'aria-label': n.t }, svg);
    el('rect', { x: n.x, y: n.y, width: n.w, height: n.h, rx: 10, fill, stroke, 'stroke-width': 1.5 }, g);
    el('text', { x: n.x + 10, y: n.y + 20, 'font-size': 13, 'font-weight': 700, fill: '#12213a' }, g).textContent = n.t;
    wrap(n.b, Math.floor((n.w - 20) / 6)).slice(0, 3).forEach((line, i) => {
      el('text', { x: n.x + 10, y: n.y + 38 + i * 13, 'font-size': 11, fill: '#3a4a62' }, g).textContent = line;
    });
    g.addEventListener('click', () => select(n.id));
    g.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(n.id); }
    });
  }

  function drawEdge(svg, e) {
    const a = byId[e.f];
    const b = byId[e.t];
    const x1 = a.x + e.fa[0] * a.w;
    const y1 = a.y + e.fa[1] * a.h;
    const x2 = b.x + e.ta[0] * b.w;
    const y2 = b.y + e.ta[1] * b.h;
    const d = e.s === 'line'
      ? `M${x1} ${y1} L${x2} ${y2}`
      : `M${x1} ${y1} C${x1} ${(y1 + y2) / 2} ${x2} ${(y1 + y2) / 2} ${x2} ${y2}`;
    const attrs = { d, fill: 'none', stroke: e.dash ? '#9aa6bf' : '#5a6f94', 'stroke-width': 1.6 };
    if (e.dash) attrs['stroke-dasharray'] = '5 4';
    attrs['marker-end'] = e.dash ? 'url(#arrow-dash)' : 'url(#arrow)';
    el('path', attrs, svg);
    if (e.l) {
      el('text', { x: e.lx, y: e.ly, 'font-size': 10.5, fill: '#6b7a99', 'font-style': 'italic' }, svg).textContent = e.l;
    }
  }

  function drawMap() {
    const svg = document.getElementById('map');
    svg.innerHTML = '';
    const defs = el('defs', {}, svg);
    [['arrow', '#5a6f94'], ['arrow-dash', '#9aa6bf']].forEach(([id, colour]) => {
      const m = el('marker', { id, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }, defs);
      el('path', { d: 'M0,0 L10,5 L0,10 z', fill: colour }, m);
    });
    LANES.forEach(l => {
      el('text', { x: 20, y: l.y, class: 'lane-label' }, svg).textContent = l.label;
    });
    EDGES.forEach(e => drawEdge(svg, e));
    NODES.forEach(n => drawNode(svg, n));
    if (selectedId) select(selectedId);
  }

  function renderLibrary() {
    const grid = document.getElementById('library');
    grid.innerHTML = LIB.map(x => `
      <article class="lib-card">
        <span class="tag">${esc(x.tag)}</span>
        <h3>${esc(x.title)}</h3>
        <div class="lib-formula">\\[${x.f}\\]</div>
        <p><strong>Use when:</strong> ${esc(x.when)}</p>
        <p>${esc(x.plain)}</p>
        <p><strong>Connects to:</strong> ${esc(x.connects)}</p>
      </article>`).join('');
    typeset(grid);
  }

  window.onMathReady = function () {
    typeset(document.getElementById('map'));
    typeset(document.getElementById('library'));
    if (selectedId) showDetail(selectedId);
  };

  drawMap();
  renderLibrary();
  select('se');
  if (window.MathJax && window.MathJax.typesetPromise) window.onMathReady();
})();
