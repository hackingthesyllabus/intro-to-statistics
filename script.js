// ─────────────────────────────────────────────────────────────────
//  DECISION TREE DATA
// ─────────────────────────────────────────────────────────────────
const TREE = {
  id: "root",
  question: "What are you trying to do?",
  hint: "Read the question carefully — the first word or phrase usually gives this away.",
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
    hint: "Numeric outcomes (scores, years, amounts) use t. Categorical outcomes (yes/no, proportions, rates) use z.",
    answers: [
      {
        label: "Numeric — mean, average, score, years",
        sublabel: "e.g., average burnout score, mean years of education",
        next: "result_ci_mean"
      },
      {
        label: "Categorical — proportion, percent, yes/no",
        sublabel: "e.g., proportion who voted, percent victimized",
        next: "result_ci_prop"
      }
    ]
  },

  outcome_type: {
    id: "outcome_type",
    question: "What type of outcome variable do you have?",
    hint: "Ask yourself: am I working with a mean or average? Or a proportion/percent?",
    answers: [
      {
        label: "Numeric — mean, average, score, years",
        sublabel: "e.g., job satisfaction score, years of education",
        next: "t_samples"
      },
      {
        label: "Categorical — proportion, percent, yes/no",
        sublabel: "e.g., poverty rate, treatment-seeking yes/no",
        next: "z_or_chi"
      }
    ]
  },

  t_samples: {
    id: "t_samples",
    question: "How many groups or samples?",
    hint: "Are you comparing your sample to a known population value? Or comparing two groups to each other?",
    answers: [
      {
        label: "One sample — comparing to a known/hypothesized value",
        sublabel: "e.g., is our mean different from the national average?",
        next: "result_t1"
      },
      {
        label: "Two samples — comparing two groups",
        sublabel: "e.g., is the mean for men different from the mean for women?",
        next: "result_t2"
      }
    ]
  },

  z_or_chi: {
    id: "z_or_chi",
    question: "Are both variables categorical, or just the outcome?",
    hint: "Chi-square is for when you want to test the relationship between two categorical variables in a table of counts. If you're just testing one proportion (or comparing two proportions), use a z test.",
    answers: [
      {
        label: "Just the outcome is categorical — testing a proportion",
        sublabel: "e.g., is the poverty rate less than 5%? Is there a gender difference in treatment?",
        next: "z_samples"
      },
      {
        label: "Both variables are categorical — table of counts",
        sublabel: "e.g., is victimization associated with concern about crime? (cross-tabulation)",
        next: "result_chi"
      }
    ]
  },

  z_samples: {
    id: "z_samples",
    question: "How many groups or samples?",
    hint: "One group compared to a known population value → one-proportion z test. Two groups compared to each other → two-proportion z test.",
    answers: [
      {
        label: "One sample — comparing to a known/hypothesized proportion",
        sublabel: "e.g., is the proportion of South Asians in Mississauga different from 12%?",
        next: "result_z1"
      },
      {
        label: "Two samples — comparing proportions of two groups",
        sublabel: "e.g., is the proportion who sought treatment different for men vs. women?",
        next: "result_z2"
      }
    ]
  }
};

// ─────────────────────────────────────────────────────────────────
//  RESULTS
// ─────────────────────────────────────────────────────────────────
const RESULTS = {

  result_ci_mean: {
    badge: "CI",
    badgeClass: "badge-ci",
    name: "Confidence Interval for a Mean",
    when: "Use this when you have a numeric outcome and want to estimate a population mean with a margin of error.",
    formula: "Ȳ ± t* (s<sub>Y</sub> / √N)",
    formulaSub: "df = N − 1  |  Find t* in the t table for your confidence level",
    example: "\"Construct a 95% confidence interval for the average burnout score for social workers.\" A random sample of 100 social workers has a mean score of 10.3, SD = 2.7.",
    steps: [
      "Identify: Ȳ = 10.3, s<sub>Y</sub> = 2.7, N = 100",
      "Calculate SE: s<sub>Y</sub> / √N = 2.7 / √100 = 0.27",
      "Find t*: df = 99, 95% CI → t* ≈ 1.984",
      "Margin of error: 1.984 × 0.27 = 0.536",
      "CI: 10.3 ± 0.536 → [9.76, 10.84]"
    ],
    interpretation: "\"We are 95% confident that the true mean burnout score in the population lies between 9.76 and 10.84.\""
  },

  result_ci_prop: {
    badge: "CI",
    badgeClass: "badge-ci",
    name: "Confidence Interval for a Proportion",
    when: "Use this when you have a categorical (yes/no) outcome and want to estimate a population proportion with a margin of error.",
    formula: "p̂ ± z* √( p̂(1 − p̂) / n )",
    formulaSub: "z* = 1.96 for 95% CI  |  z* = 2.576 for 99% CI",
    example: "\"Estimate the proportion of adults in the city who support the new transit policy, with a 95% confidence interval.\" Sample: n = 400, 240 support it (p̂ = 0.60).",
    steps: [
      "Identify: p̂ = 0.60, n = 400",
      "Calculate SE: √(0.60 × 0.40 / 400) = √(0.0006) = 0.0245",
      "z* = 1.96 for 95% CI",
      "Margin of error: 1.96 × 0.0245 = 0.048",
      "CI: 0.60 ± 0.048 → [0.552, 0.648]"
    ],
    interpretation: "\"We are 95% confident that the true proportion of adults who support the policy is between 55.2% and 64.8%.\""
  },

  result_t1: {
    badge: "t",
    badgeClass: "badge-t",
    name: "One-Sample t Test",
    when: "Use this when you have a numeric outcome and want to test whether your sample mean is significantly different from (or greater/less than) a known or hypothesized population mean.",
    formula: "t = (Ȳ − μ<sub>0</sub>) / (s<sub>Y</sub> / √N)",
    formulaSub: "df = N − 1  |  SE = s<sub>Y</sub> / √N",
    example: "\"A random sample of 423 Albertans has finished an average of 12.7 years of formal education (SD = 1.7). Is this significantly different from the national average of 12.2 years? (α = 0.05, two-tailed)\"",
    steps: [
      "H₀: μ = 12.2; H<sub>A</sub>: μ ≠ 12.2 (two-tailed)",
      "α = 0.05, df = 422; t<sub>critical</sub> ≈ ±1.966",
      "SE = 1.7 / √423 = 1.7 / 20.57 = 0.083",
      "t<sub>obtained</sub> = (12.7 − 12.2) / 0.083 = 0.5 / 0.083 = 6.02",
      "6.02 &gt; 1.966 → Reject H₀"
    ],
    interpretation: "\"There is a statistically significant difference between the average years of education for Albertans and the national average (t = 6.02, df = 422, p &lt; 0.05).\""
  },

  result_t2: {
    badge: "t",
    badgeClass: "badge-t",
    name: "Two-Sample t Test",
    when: "Use this when you have a numeric outcome and want to compare the means of two independent groups.",
    formula: "t = (Ȳ<sub>1</sub> − Ȳ<sub>2</sub>) / SE<sub>Ȳ₁−Ȳ₂</sub>",
    formulaSub: "SE<sub>Ȳ₁−Ȳ₂</sub> = √( s<sub>1</sub>² / N<sub>1</sub> + s<sub>2</sub>² / N<sub>2</sub> )  |  df = (N₁−1) + (N₂−1)",
    example: "\"Is there a gender difference in job satisfaction? Men (n=100): mean=7.0, SD=1.2. Women (n=120): mean=7.5, SD=1.5. Use α=0.05.\"",
    steps: [
      "H₀: μ<sub>men</sub> = μ<sub>women</sub>; H<sub>A</sub>: μ<sub>men</sub> ≠ μ<sub>women</sub>",
      "df = (100−1) + (120−1) = 218; t<sub>critical</sub> ≈ ±1.971",
      "SE = √(1.44/100 + 2.25/120) = √(0.0144 + 0.01875) = √0.03315 = 0.182",
      "t<sub>obtained</sub> = (7.0 − 7.5) / 0.182 = −0.5 / 0.182 = −2.747",
      "|−2.747| &gt; 1.971 → Reject H₀"
    ],
    interpretation: "\"There is a statistically significant difference in job satisfaction between men and women (t = −2.747, df = 218, p &lt; 0.05).\""
  },

  result_z1: {
    badge: "z",
    badgeClass: "badge-z",
    name: "One-Proportion z Test",
    when: "Use this when you have a categorical (yes/no) outcome and want to test whether your sample proportion is significantly different from a known or hypothesized population proportion.",
    formula: "z = (p̂ − π<sub>0</sub>) / s<sub>π₀</sub>",
    formulaSub: "s<sub>π₀</sub> = √( π<sub>0</sub>(1 − π<sub>0</sub>) / n )",
    example: "\"A survey shows that 10% of the population are victims of property crime each year. A random sample of 527 older adults shows a victimization rate of 14%. Are older people more likely to be victimized? (one-tailed, α=0.05)\"",
    steps: [
      "H₀: p = 0.10; H<sub>A</sub>: p &gt; 0.10 (one-tailed)",
      "α = 0.05, one-tailed; z<sub>critical</sub> = +1.645",
      "s<sub>π₀</sub> = √(0.10 × 0.90 / 527) = √(0.000171) = 0.01308",
      "z<sub>obtained</sub> = (0.14 − 0.10) / 0.01308 = 0.04 / 0.01308 = 3.059",
      "3.059 &gt; 1.645 → Reject H₀"
    ],
    interpretation: "\"There is sufficient evidence to conclude that older adults are significantly more likely to be victimized than the general population (z = 3.059, p &lt; 0.05).\""
  },

  result_z2: {
    badge: "z",
    badgeClass: "badge-z",
    name: "Two-Proportion z Test",
    when: "Use this when you have a categorical (yes/no) outcome and want to compare the proportions of two independent groups.",
    formula: "z = (p̂<sub>1</sub> − p̂<sub>2</sub>) / SE<sub>p̂₁−p̂₂</sub>",
    formulaSub: "SE = √( p̂(1−p̂)(1/n<sub>1</sub> + 1/n<sub>2</sub>) )  where  p̂ = (x<sub>1</sub>+x<sub>2</sub>) / (n<sub>1</sub>+n<sub>2</sub>)",
    example: "\"Is there a gender difference in seeking mental health treatment? 150 men: 30 sought treatment. 120 women: 60 sought treatment. α=0.05, two-tailed.\"",
    steps: [
      "p̂<sub>men</sub> = 30/150 = 0.20; p̂<sub>women</sub> = 60/120 = 0.50",
      "H₀: p<sub>1</sub> = p<sub>2</sub>; H<sub>A</sub>: p<sub>1</sub> ≠ p<sub>2</sub>; z<sub>critical</sub> = ±1.96",
      "p̂<sub>pooled</sub> = (30+60)/(150+120) = 90/270 = 0.333",
      "SE = √(0.333 × 0.667 × (1/150 + 1/120)) = √(0.222 × 0.01500) = 0.0578",
      "z = (0.20 − 0.50) / 0.0578 = −5.19; |−5.19| &gt; 1.96 → Reject H₀"
    ],
    interpretation: "\"There is a statistically significant gender difference in seeking mental health treatment — women sought treatment at a significantly higher rate than men (z = −5.19, p &lt; 0.05).\""
  },

  result_chi: {
    badge: "χ²",
    badgeClass: "badge-chi",
    name: "Chi-Square Test of Association",
    when: "Use this when both variables are categorical and your data are presented in a contingency table of counts. You are testing whether the two variables are associated or independent.",
    formula: "χ² = Σ ( (O − E)² / E )",
    formulaSub: "E = (row total × column total) / grand total  |  df = (rows−1)(columns−1)",
    example: "\"Is there an association between having been a victim of robbery (Yes/No) and concern about crime (Not/Moderate/Very)? (α=0.05)\"",
    steps: [
      "H₀: victimization and concern are independent; H<sub>A</sub>: they are associated",
      "df = (2−1)(3−1) = 2; χ²<sub>critical</sub> = 5.991",
      "Calculate expected counts for each cell: E = (row total × column total) / 20",
      "Calculate (O−E)²/E for each cell and sum them all",
      "If χ²<sub>obtained</sub> &gt; 5.991 → reject H₀"
    ],
    interpretation: "\"There is [not] evidence of an association between victimization and concern about crime (χ² = [value], df = 2, p [&lt;/≥] 0.05).\""
  }
};

// ─────────────────────────────────────────────────────────────────
//  FLOWCHART STATE
// ─────────────────────────────────────────────────────────────────
let history = [];   // array of node ids visited
let current = "root";

// ─────────────────────────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────────────────────────
function getNode(id) {
  return NODES[id] || null;
}

function isResult(id) {
  return id.startsWith("result_");
}

function renderStep(nodeId, stepIndex, isActive) {
  const node = getNode(nodeId);
  if (!node) return null;

  const div = document.createElement("div");
  div.className = "step-block" + (isActive ? " active" : " visited");
  div.dataset.stepIndex = stepIndex;

  const qDiv = document.createElement("div");
  qDiv.className = "step-question";

  const badge = document.createElement("span");
  badge.className = "step-badge";
  badge.textContent = stepIndex + 1;
  qDiv.appendChild(badge);

  const qText = document.createElement("div");
  qText.className = "step-q-text";

  const q = document.createElement("p");
  q.className = "step-q-main";
  q.textContent = node.question;
  qText.appendChild(q);

  if (node.hint) {
    const hint = document.createElement("p");
    hint.className = "step-hint";
    hint.textContent = node.hint;
    qText.appendChild(hint);
  }

  qDiv.appendChild(qText);
  div.appendChild(qDiv);

  const answersDiv = document.createElement("div");
  answersDiv.className = "step-answers";

  node.answers.forEach((ans, ai) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.dataset.next = ans.next;
    btn.dataset.answerIndex = ai;

    const label = document.createElement("span");
    label.className = "answer-label";
    label.innerHTML = ans.label;
    btn.appendChild(label);

    if (ans.sublabel) {
      const sub = document.createElement("span");
      sub.className = "answer-sublabel";
      sub.textContent = ans.sublabel;
      btn.appendChild(sub);
    }

    if (isActive) {
      btn.addEventListener("click", () => handleAnswer(ans.next, btn));
    } else {
      btn.disabled = true;
      // Mark the chosen answer if this is a visited step
      const chosenNext = history[stepIndex + 1];
      if (chosenNext === ans.next || (isResult(chosenNext) && ans.next === chosenNext)) {
        btn.classList.add("chosen");
      }
    }

    answersDiv.appendChild(btn);
  });

  div.appendChild(answersDiv);
  return div;
}

function handleAnswer(nextId, btn) {
  // Mark chosen
  btn.closest(".step-answers").querySelectorAll(".answer-btn").forEach(b => {
    b.classList.remove("chosen");
    b.disabled = true;
  });
  btn.classList.add("chosen");
  btn.closest(".step-block").classList.remove("active");
  btn.closest(".step-block").classList.add("visited");

  history.push(nextId);
  current = nextId;

  if (isResult(nextId)) {
    showResult(nextId);
  } else {
    addNextStep(nextId);
  }

  updateProgress();
  drawFlowmap();
}

function addNextStep(nodeId) {
  const stack = document.getElementById("step-stack");
  const stepIndex = history.length - 1;
  const stepEl = renderStep(nodeId, stepIndex, true);
  if (stepEl) {
    stack.appendChild(stepEl);
    setTimeout(() => stepEl.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  }
}

function showResult(resultId) {
  const r = RESULTS[resultId];
  if (!r) return;

  document.getElementById("result-badge").className = "result-badge " + r.badgeClass;
  document.getElementById("result-badge").textContent = r.badge;
  document.getElementById("result-name").textContent = r.name;
  document.getElementById("result-when").textContent = r.when;
  document.getElementById("result-formula").innerHTML = r.formula;

  const fSub = document.getElementById("result-formula-sub");
  fSub.innerHTML = r.formulaSub || "";
  fSub.style.display = r.formulaSub ? "block" : "none";

  document.getElementById("result-example").textContent = r.example;

  const stepsList = document.getElementById("result-steps");
  stepsList.innerHTML = "";
  r.steps.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = s;
    stepsList.appendChild(li);
  });

  document.getElementById("result-interp").innerHTML = r.interpretation;

  const rc = document.getElementById("result-card");
  rc.classList.remove("hidden");
  rc.classList.add("visible");
  setTimeout(() => rc.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
}

function updateProgress() {
  const totalSteps = 4; // approximate max depth
  const done = history.length;
  const pct = Math.min(100, Math.round((done / totalSteps) * 100));
  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-label").textContent = `Step ${done} of ~${totalSteps}`;
}

function resetAll() {
  history = [];
  current = "root";
  const stack = document.getElementById("step-stack");
  stack.innerHTML = "";
  const rc = document.getElementById("result-card");
  rc.classList.add("hidden");
  rc.classList.remove("visible");
  document.getElementById("progress-bar").style.width = "0%";
  document.getElementById("progress-label").textContent = "Step 1 of ~4";

  // Render first step
  const first = renderStep("root", 0, true);
  if (first) stack.appendChild(first);

  history.push("root");
  drawFlowmap();
}

// ─────────────────────────────────────────────────────────────────
//  SVG FLOWMAP
// ─────────────────────────────────────────────────────────────────
const MAP_NODES = [
  // id, label, x, y, w, h, type
  { id: "root",       label: "Start: Estimating or Testing?", x: 85,  y: 10,  w: 150, h: 36, type: "start" },
  { id: "ci_branch",  label: "CI: Mean or Proportion?",       x: 10,  y: 90,  w: 120, h: 30, type: "node" },
  { id: "outcome_type",label: "Numeric or Categorical?",      x: 170, y: 90,  w: 120, h: 30, type: "node" },
  { id: "result_ci_mean",  label: "CI for a Mean",            x: 0,   y: 170, w: 90,  h: 26, type: "result-ci" },
  { id: "result_ci_prop",  label: "CI for a Proportion",      x: 105, y: 170, w: 90,  h: 26, type: "result-ci" },
  { id: "t_samples",  label: "One or Two Samples?",           x: 155, y: 170, w: 120, h: 30, type: "node" },
  { id: "z_or_chi",   label: "Proportion or Both Categ.?",    x: 155, y: 250, w: 120, h: 30, type: "node" },
  { id: "result_t1",  label: "One-Sample t Test",             x: 145, y: 330, w: 90,  h: 26, type: "result-t" },
  { id: "result_t2",  label: "Two-Sample t Test",             x: 250, y: 330, w: 90,  h: 26, type: "result-t" },
  { id: "z_samples",  label: "One or Two Samples?",           x: 145, y: 330, w: 120, h: 30, type: "node", hidden: true },
  { id: "result_z1",  label: "One-Proportion z Test",         x: 145, y: 410, w: 90,  h: 26, type: "result-z" },
  { id: "result_z2",  label: "Two-Proportion z Test",         x: 250, y: 410, w: 90,  h: 26, type: "result-z" },
  { id: "result_chi", label: "Chi-Square Test",               x: 260, y: 330, w: 90,  h: 26, type: "result-chi" },
];

// Simplified visual map using a clean vertical layout
function drawFlowmap() {
  const svg = document.getElementById("flowmap");
  svg.innerHTML = "";

  const activePath = new Set(history);

  // Colors
  const colors = {
    start: { fill: "#1e3a5f", stroke: "#1e3a5f", text: "#fff" },
    node: { fill: "#f0f4ff", stroke: "#4a6fa5", text: "#1e3a5f" },
    "result-ci": { fill: "#e8f5e9", stroke: "#2e7d32", text: "#1b5e20" },
    "result-t": { fill: "#fff3e0", stroke: "#e65100", text: "#bf360c" },
    "result-z": { fill: "#e3f2fd", stroke: "#1565c0", text: "#0d47a1" },
    "result-chi": { fill: "#f3e5f5", stroke: "#6a1b9a", text: "#4a148c" },
  };

  // Use a vertical tree layout
  const layout = buildLayout();

  // Draw edges first
  drawEdges(svg, layout, activePath);

  // Draw nodes
  layout.forEach(n => {
    const c = colors[n.type] || colors.node;
    const isActive = activePath.has(n.id);
    const isCurrent = history[history.length - 1] === n.id;

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", n.x);
    rect.setAttribute("y", n.y);
    rect.setAttribute("width", n.w);
    rect.setAttribute("height", n.h);
    rect.setAttribute("rx", "6");
    rect.setAttribute("fill", isActive ? (isCurrent ? "#2347a8" : c.fill) : "#f8f9fc");
    rect.setAttribute("stroke", isActive ? (isCurrent ? "#2347a8" : c.stroke) : "#e0e4ef");
    rect.setAttribute("stroke-width", isActive ? "2" : "1");
    if (isCurrent) {
      rect.setAttribute("filter", "url(#glow)");
    }
    g.appendChild(rect);

    // Text (wrap at ~18 chars)
    const words = n.label.split(" ");
    const lines = [];
    let line = "";
    words.forEach(w => {
      if ((line + w).length > 18 && line !== "") {
        lines.push(line.trim());
        line = w + " ";
      } else {
        line += w + " ";
      }
    });
    if (line.trim()) lines.push(line.trim());

    const textColor = isActive ? (isCurrent ? "#fff" : c.text) : "#9ca3af";
    const lineH = 10;
    const totalH = lines.length * lineH;
    const startY = n.y + n.h / 2 - totalH / 2 + lineH * 0.75;

    lines.forEach((l, i) => {
      const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
      txt.setAttribute("x", n.x + n.w / 2);
      txt.setAttribute("y", startY + i * lineH);
      txt.setAttribute("text-anchor", "middle");
      txt.setAttribute("font-size", "8");
      txt.setAttribute("font-family", "DM Sans, sans-serif");
      txt.setAttribute("font-weight", isActive ? "600" : "400");
      txt.setAttribute("fill", textColor);
      txt.textContent = l;
      g.appendChild(txt);
    });

    svg.appendChild(g);
  });

  // Glow filter
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `<filter id="glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
  svg.insertBefore(defs, svg.firstChild);
}

function buildLayout() {
  // Fixed positions for a vertical tree — viewBox 0 0 320 520
  return [
    { id: "root",           label: "Estimating or Testing?",      x: 85,  y: 8,   w: 150, h: 32, type: "start" },
    { id: "_edge_ci",       label: "Estimate",                     x: 30,  y: 55,  w: 60,  h: 20, type: "label" },
    { id: "_edge_test",     label: "Test",                         x: 230, y: 55,  w: 60,  h: 20, type: "label" },
    { id: "ci_branch",      label: "CI: Mean or Proportion?",      x: 20,  y: 75,  w: 120, h: 32, type: "node" },
    { id: "outcome_type",   label: "Numeric or Categorical?",      x: 180, y: 75,  w: 120, h: 32, type: "node" },
    { id: "result_ci_mean", label: "CI for a Mean",                x: 5,   y: 158, w: 65,  h: 28, type: "result-ci" },
    { id: "result_ci_prop", label: "CI for Proportion",            x: 80,  y: 158, w: 65,  h: 28, type: "result-ci" },
    { id: "t_samples",      label: "One or Two Samples?",          x: 170, y: 158, w: 130, h: 32, type: "node" },
    { id: "result_t1",      label: "One-Sample t",                 x: 158, y: 240, w: 64,  h: 28, type: "result-t" },
    { id: "result_t2",      label: "Two-Sample t",                 x: 238, y: 240, w: 64,  h: 28, type: "result-t" },
    { id: "z_or_chi",       label: "Proportion or Both Categ.?",   x: 170, y: 300, w: 130, h: 32, type: "node" },
    { id: "z_samples",      label: "One or Two Samples?",          x: 158, y: 382, w: 130, h: 32, type: "node" },
    { id: "result_chi",     label: "Chi-Square Test",              x: 248, y: 382, w: 68,  h: 28, type: "result-chi" },
    { id: "result_z1",      label: "One-Prop z",                   x: 150, y: 464, w: 64,  h: 28, type: "result-z" },
    { id: "result_z2",      label: "Two-Prop z",                   x: 228, y: 464, w: 64,  h: 28, type: "result-z" },
  ];
}

const EDGES = [
  ["root", "ci_branch"],
  ["root", "outcome_type"],
  ["ci_branch", "result_ci_mean"],
  ["ci_branch", "result_ci_prop"],
  ["outcome_type", "t_samples"],
  ["outcome_type", "z_or_chi"],
  ["t_samples", "result_t1"],
  ["t_samples", "result_t2"],
  ["z_or_chi", "z_samples"],
  ["z_or_chi", "result_chi"],
  ["z_samples", "result_z1"],
  ["z_samples", "result_z2"],
];

function drawEdges(svg, layout, activePath) {
  const byId = {};
  layout.forEach(n => byId[n.id] = n);

  EDGES.forEach(([fromId, toId]) => {
    const from = byId[fromId];
    const to = byId[toId];
    if (!from || !to) return;

    const isActive = activePath.has(fromId) && activePath.has(toId);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const x1 = from.x + from.w / 2;
    const y1 = from.y + from.h;
    const x2 = to.x + to.w / 2;
    const y2 = to.y;

    // Use a path for curved connectors
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    path.setAttribute("d", `M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}`);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", isActive ? "#2347a8" : "#d1d9e6");
    path.setAttribute("stroke-width", isActive ? "2" : "1");
    path.setAttribute("stroke-dasharray", isActive ? "none" : "3 3");

    // Arrow marker
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    const markerId = "arr_" + fromId + "_" + toId;
    marker.setAttribute("id", markerId);
    marker.setAttribute("markerWidth", "6");
    marker.setAttribute("markerHeight", "6");
    marker.setAttribute("refX", "3");
    marker.setAttribute("refY", "3");
    marker.setAttribute("orient", "auto");
    const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    poly.setAttribute("points", "0 0, 6 3, 0 6");
    poly.setAttribute("fill", isActive ? "#2347a8" : "#c0c8da");
    marker.appendChild(poly);
    svg.appendChild(marker);

    path.setAttribute("marker-end", `url(#${markerId})`);
    svg.appendChild(path);
  });
}

// ─────────────────────────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  resetAll();

  document.getElementById("btn-reset").addEventListener("click", resetAll);
  document.getElementById("btn-restart").addEventListener("click", resetAll);

  // Update SVG viewBox to fit content
  const svg = document.getElementById("flowmap");
  if (svg) svg.setAttribute("viewBox", "0 0 320 500");
});
