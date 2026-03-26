const TREE = {
  id: "root",
  question: "What are you trying to do?",
  hint: "Start by deciding whether the question asks you to estimate a value or test a claim.",
  answers: [
    {
      label: "Estimate a population value",
      sublabel: "Keywords: estimate, construct, confidence interval",
      next: "ci_branch"
    },
    {
      label: "Test a hypothesis",
      sublabel: "Keywords: test, significant, different from, greater than, less than",
      next: "outcome_type"
    }
  ]
};

const NODES = {
  root: TREE,
  ci_branch: {
    id: "ci_branch",
    question: "What type of outcome variable do you have?",
    hint: "Numeric outcomes use the mean confidence interval. Categorical outcomes use the proportion confidence interval.",
    answers: [
      { label: "Numeric outcome", sublabel: "Mean, average, score, years", next: "result_ci_mean" },
      { label: "Categorical outcome", sublabel: "Proportion, percent, yes or no", next: "result_ci_prop" }
    ]
  },
  outcome_type: {
    id: "outcome_type",
    question: "What type of outcome variable do you have?",
    hint: "Mean and average questions use t procedures. Proportion and rate questions use z or chi square.",
    answers: [
      { label: "Numeric outcome", sublabel: "Mean, average, score, years", next: "t_samples" },
      { label: "Categorical outcome", sublabel: "Proportion, percent, yes or no", next: "z_or_chi" }
    ]
  },
  t_samples: {
    id: "t_samples",
    question: "How many groups or samples?",
    hint: "Compare one sample to a known value, or compare two groups to each other.",
    answers: [
      { label: "One sample", sublabel: "Compare one mean to a known or hypothesized population value", next: "result_t1" },
      { label: "Two samples", sublabel: "Compare the means of two groups", next: "result_t2" }
    ]
  },
  z_or_chi: {
    id: "z_or_chi",
    question: "Are both variables categorical, or just the outcome?",
    hint: "A full table of counts with two categorical variables uses chi square. Proportion questions use z tests.",
    answers: [
      { label: "Just the outcome is categorical", sublabel: "You are testing one proportion or comparing two proportions", next: "z_samples" },
      { label: "Both variables are categorical", sublabel: "You have a cross tab or contingency table of counts", next: "result_chi" }
    ]
  },
  z_samples: {
    id: "z_samples",
    question: "How many groups or samples?",
    hint: "One group compared to a known population value uses one proportion z. Two groups use two proportion z.",
    answers: [
      { label: "One sample", sublabel: "Compare one sample proportion to a known or hypothesized population proportion", next: "result_z1" },
      { label: "Two samples", sublabel: "Compare the proportions of two groups", next: "result_z2" }
    ]
  }
};

const RESULTS = {
  result_ci_mean: {
    badge: "CI",
    badgeClass: "badge-ci",
    name: "Confidence Interval for a Mean",
    when: "Use this when the outcome is numeric and the question asks you to estimate a population mean.",
    formula: "\\[\\bar{Y} \\pm t^* s_{\\bar{Y}}\\]",
    formulaSub: "\\[s_{\\bar{Y}} = \\frac{s_Y}{\\sqrt{N}}, \\quad df = N - 1\\]",
    example: "Construct a 95 percent confidence interval for the average burnout score for social workers.",
    steps: [
      "Identify the sample mean, the sample standard deviation, and the sample size.",
      "Calculate the standard error of the mean: \\(s_{\\bar{Y}} = s_Y / \\sqrt{N}\\).",
      "Find the critical value for your confidence level using the t table.",
      "Compute the margin of error: \\(t^* s_{\\bar{Y}}\\).",
      "State the interval and interpret it in words."
    ],
    interpretation: "We are 95 percent confident that the true population mean lies between the lower and upper limits of the interval."
  },
  result_ci_prop: {
    badge: "CI",
    badgeClass: "badge-ci",
    name: "Confidence Interval for a Proportion",
    when: "Use this when the outcome is categorical and the question asks you to estimate a population proportion.",
    formula: "\\[\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}\\]",
    formulaSub: "\\[z^* = 1.96 \\text{ for a 95 percent confidence interval}\\]",
    example: "Estimate the proportion of adults who support the policy and give a 95 percent confidence interval.",
    steps: [
      "Calculate the sample proportion \\(\\hat{p}\\).",
      "Calculate the standard error using the proportion formula.",
      "Find the critical z value for the requested confidence level.",
      "Compute the margin of error.",
      "State the interval and interpret it in words."
    ],
    interpretation: "We are 95 percent confident that the true population proportion lies between the lower and upper limits of the interval."
  },
  result_t1: {
    badge: "t",
    badgeClass: "badge-t",
    name: "One Sample t Test",
    when: "Use this when you have one sample mean and want to test it against a known or hypothesized population mean.",
    formula: "\\[t = \\frac{\\bar{Y} - \\mu_0}{s_{\\bar{Y}}}\\]",
    formulaSub: "\\[s_{\\bar{Y}} = \\frac{s_Y}{\\sqrt{N}}, \\quad df = N - 1\\]",
    example: "Is the average number of years of education significantly different from the national average of 12.2 years?",
    steps: [
      "State \\(H_0\\) and \\(H_A\\). Decide whether the test is one tailed or two tailed.",
      "Choose alpha and find the critical t value using \\(df = N - 1\\).",
      "Calculate the standard error of the mean.",
      "Calculate the obtained t statistic.",
      "Compare the obtained t to the critical value and state the conclusion."
    ],
    interpretation: "There is or is not a statistically significant difference between the sample mean and the hypothesized population mean."
  },
  result_t2: {
    badge: "t",
    badgeClass: "badge-t",
    name: "Two Sample t Test",
    when: "Use this when you want to compare the means of two independent groups.",
    formula: "\\[t = \\frac{\\bar{Y}_1 - \\bar{Y}_2}{s_{\\bar{Y}_1 - \\bar{Y}_2}}\\]",
    formulaSub: "\\[s_{\\bar{Y}_1 - \\bar{Y}_2} = \\sqrt{\\left(s_{\\bar{Y}_1}\\right)^2 + \\left(s_{\\bar{Y}_2}\\right)^2}\\]",
    example: "Is there a gender difference in job satisfaction?",
    steps: [
      "State \\(H_0\\) and \\(H_A\\). Usually this is a two tailed test if the wording says different.",
      "Calculate the standard error of the difference between means.",
      "Calculate the obtained t statistic.",
      "Find the critical t value using the appropriate degrees of freedom.",
      "Compare the obtained t to the critical value and state the conclusion."
    ],
    interpretation: "There is or is not a statistically significant difference between the two group means."
  },
  result_z1: {
    badge: "z",
    badgeClass: "badge-z",
    name: "One Proportion z Test",
    when: "Use this when you want to compare one sample proportion to a known or hypothesized population proportion.",
    formula: "\\[z = \\frac{\\hat{p} - \\pi_0}{s_{\\pi_0}}\\]",
    formulaSub: "\\[s_{\\pi_0} = \\sqrt{\\frac{\\pi_0(1-\\pi_0)}{n}}\\]",
    example: "Is the poverty rate less than 5 percent? Are older adults more likely to be victimized than the general population?",
    steps: [
      "State \\(H_0\\) and \\(H_A\\) using the population proportion notation.",
      "Choose alpha and determine whether the test is one tailed or two tailed.",
      "Calculate the standard error under the null hypothesis.",
      "Calculate the obtained z statistic.",
      "Compare the obtained z to the critical value and state the conclusion."
    ],
    interpretation: "There is or is not sufficient evidence that the population proportion differs from the hypothesized value."
  },
  result_z2: {
    badge: "z",
    badgeClass: "badge-z",
    name: "Two Proportion z Test",
    when: "Use this when you want to compare the proportions of two independent groups.",
    formula: "\\[z = \\frac{\\hat{p}_1 - \\hat{p}_2}{SE_{\\hat{p}_1-\\hat{p}_2}}\\]",
    formulaSub: "\\[SE_{\\hat{p}_1-\\hat{p}_2} = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\frac{1}{n_1}+\\frac{1}{n_2}\\right)}\\]",
    example: "Is there a gender difference in seeking mental health treatment?",
    steps: [
      "Calculate the sample proportions for each group.",
      "State \\(H_0\\) and \\(H_A\\).",
      "Calculate the pooled proportion if your course uses the pooled standard error for the test.",
      "Calculate the obtained z statistic.",
      "Compare the obtained z to the critical value and state the conclusion."
    ],
    interpretation: "There is or is not a statistically significant difference between the two group proportions."
  },
  result_chi: {
    badge: "χ²",
    badgeClass: "badge-chi",
    name: "Chi Square Test of Association",
    when: "Use this when both variables are categorical and the data are presented in a contingency table of counts.",
    formula: "\\[\\chi^2 = \\sum \\frac{(f_o-f_e)^2}{f_e}\\]",
    formulaSub: "\\[f_e = \\frac{(\\text{column total})(\\text{row total})}{n}, \\quad df = (r-1)(c-1)\\]",
    example: "Is there an association between having been a victim of robbery and concern about crime?",
    steps: [
      "State \\(H_0\\): the variables are independent. State \\(H_A\\): the variables are related.",
      "Choose alpha and calculate the degrees of freedom.",
      "Calculate the expected count for every cell.",
      "Calculate \\((f_o-f_e)^2/f_e\\) for every cell and add them up.",
      "Compare the obtained chi square statistic to the critical value and state the conclusion."
    ],
    interpretation: "There is or is not evidence of an association between the two categorical variables."
  }
};

let history = [];
let current = 'root';

function getNode(id) {
  return NODES[id] || null;
}

function renderSteps() {
  const stack = document.getElementById('step-stack');
  stack.innerHTML = '';

  history.forEach((id, idx) => {
    const node = getNode(id);
    if (!node) return;
    const nextId = history[idx + 1];
    const chosen = nextId ? node.answers.find(a => a.next === nextId) : null;

    const block = document.createElement('div');
    block.className = 'step-block visited';
    block.innerHTML = `
      <div class="step-question">
        <div class="step-badge">${idx + 1}</div>
        <div class="step-q-text">
          <div class="step-q-main">${node.question}</div>
          <div class="step-hint">${node.hint}</div>
        </div>
      </div>
      ${chosen ? `<div class="step-answers"><div class="answer-btn"><strong>${chosen.label}</strong><span>${chosen.sublabel || ''}</span></div></div>` : ''}
    `;
    stack.appendChild(block);
  });

  const node = getNode(current);
  if (!node) return;

  const active = document.createElement('div');
  active.className = 'step-block active';
  active.innerHTML = `
    <div class="step-question">
      <div class="step-badge">${history.length + 1}</div>
      <div class="step-q-text">
        <div class="step-q-main">${node.question}</div>
        <div class="step-hint">${node.hint}</div>
      </div>
    </div>
    <div class="step-answers">
      ${node.answers.map(a => `
        <button class="answer-btn" data-next="${a.next}">
          <strong>${a.label}</strong>
          <span>${a.sublabel || ''}</span>
        </button>`).join('')}
    </div>
  `;
  stack.appendChild(active);

  active.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      history.push(current);
      goTo(btn.dataset.next);
    });
  });
}

function renderResult(id) {
  const data = RESULTS[id];
  if (!data) return;
  const card = document.getElementById('result-card');
  card.classList.remove('hidden');

  const badge = document.getElementById('result-badge');
  badge.className = `result-badge ${data.badgeClass}`;
  badge.textContent = data.badge;

  document.getElementById('result-name').textContent = data.name;
  document.getElementById('result-when').textContent = data.when;
  document.getElementById('result-formula').innerHTML = data.formula;
  document.getElementById('result-formula-sub').innerHTML = data.formulaSub;
  document.getElementById('result-example').textContent = data.example;
  document.getElementById('result-steps').innerHTML = data.steps.map(s => `<li>${s}</li>`).join('');
  document.getElementById('result-interp').textContent = data.interpretation;

  typesetMath(card);
}

function hideResult() {
  document.getElementById('result-card').classList.add('hidden');
}

function updateProgress() {
  const total = 4;
  const step = Math.min(history.length + 1, total);
  document.getElementById('progress-bar').style.width = `${(step / total) * 100}%`;
  document.getElementById('progress-label').textContent = `Step ${step} of ${total}`;
}

function updateMapHighlights() {
  const path = new Set([...history, current]);
  document.querySelectorAll('.map-node[data-id]').forEach(node => {
    const id = node.dataset.id;
    node.classList.toggle('current-path', path.has(id));
    node.classList.toggle('current-node', id === current);
  });
}

function typesetMath(scope = document.body) {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([scope]).catch(() => {});
  }
}

function goTo(id) {
  current = id;
  updateProgress();
  updateMapHighlights();
  if (RESULTS[id]) {
    document.getElementById('step-stack').innerHTML = '';
    renderResult(id);
  } else {
    hideResult();
    renderSteps();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetAll() {
  history = [];
  current = 'root';
  hideResult();
  renderSteps();
  updateProgress();
  updateMapHighlights();
  typesetMath(document.body);
}

document.getElementById('btn-reset').addEventListener('click', resetAll);
document.getElementById('btn-restart').addEventListener('click', resetAll);
window.addEventListener('load', () => {
  resetAll();
});
