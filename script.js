// ─────────────────────────────────────────────────────────────────
//  DECISION TREE DATA — friendlier language
// ─────────────────────────────────────────────────────────────────
const TREE = {
  id: "root",
  question: "What's the goal of your analysis?",
  hint: "Are you trying to estimate something (like "what is the average?"), or test a claim (like "is this different from the national average?")?",
  answers: [
    {
      label: "I want to estimate a population value",
      sublabel: "Look for words like: estimate, construct a confidence interval, margin of error",
      next: "ci_branch"
    },
    {
      label: "I want to test a hypothesis",
      sublabel: "Look for words like: test, significant, different from, greater than, less than",
      next: "outcome_type"
    }
  ]
};

const NODES = {
  root: TREE,

  ci_branch: {
    id: "ci_branch",
    question: "What kind of number are you working with?",
    hint: "Is your outcome a measurement or score (like years of education, income, a scale rating)? Or is it a yes/no type result where you're looking at a percentage or proportion?",
    answers: [
      {
        label: "A measured number — mean, average, score",
        sublabel: "e.g., average burnout score, mean years of education, typical salary",
        next: "result_ci_mean"
      },
      {
        label: "A proportion or percentage — yes/no outcome",
        sublabel: "e.g., proportion who voted, percent victimized, rate of support",
        next: "result_ci_prop"
      }
    ]
  },

  outcome_type: {
    id: "outcome_type",
    question: "What kind of outcome are you measuring?",
    hint: "A mean or average is a numeric outcome (you could calculate a mean from it). A proportion or percentage is a categorical outcome — it comes from counting how many people fall into a category.",
    answers: [
      {
        label: "A mean or average — numeric measurement",
        sublabel: "e.g., job satisfaction score, years of education, age",
        next: "t_samples"
      },
      {
        label: "A proportion or percentage — yes/no or category",
        sublabel: "e.g., poverty rate, treatment-seeking yes/no, voted/didn't vote",
        next: "z_or_chi"
      }
    ]
  },

  t_samples: {
    id: "t_samples",
    question: "How many groups are you comparing?",
    hint: "Are you comparing your one sample to a known benchmark (like a national average)? Or are you comparing two separate groups to each other (like men vs. women)?",
    answers: [
      {
        label: "One group — comparing to a known or official value",
        sublabel: "e.g., is our city's average different from the national average?",
        next: "result_t1"
      },
      {
        label: "Two groups — comparing the two groups to each other",
        sublabel: "e.g., is the average for Group A different from Group B?",
        next: "result_t2"
      }
    ]
  },

  z_or_chi: {
    id: "z_or_chi",
    question: "Are both of your variables categories, or just the outcome?",
    hint: "Chi-square is used when you have a table of counts — two categorical variables crossed together (like a crosstab). If you're just testing one proportion or comparing two proportions, use a z test.",
    answers: [
      {
        label: "Just the outcome is a category — I'm testing a proportion",
        sublabel: "e.g., is the poverty rate below 5%? Is there a gender gap in treatment-seeking?",
        next: "z_samples"
      },
      {
        label: "Both variables are categories — I have a crosstab (table of counts)",
        sublabel: "e.g., is victimization associated with concern about crime?",
        next: "result_chi"
      }
    ]
  },

  z_samples: {
    id: "z_samples",
    question: "How many groups are you comparing?",
    hint: "Are you comparing your one sample proportion to a known population proportion? Or are you comparing the proportions of two separate groups?",
    answers: [
      {
        label: "One group — comparing to a known or stated proportion",
        sublabel: "e.g., is the proportion of South Asians in Mississauga different from 12%?",
        next: "result_z1"
      },
      {
        label: "Two groups — comparing proportions between two groups",
        sublabel: "e.g., is the proportion who sought treatment different for men vs. women?",
        next: "result_z2"
      }
    ]
  }
};

// ─────────────────────────────────────────────────────────────────
//  RESULTS — with MathJax formulas, legend, and measures
// ─────────────────────────────────────────────────────────────────
const RESULTS = {

  result_ci_mean: {
    badge: "CI",
    badgeClass: "badge-ci",
    name: "Confidence Interval for a Mean",
    when: "Use this when you have a numeric outcome (like a score, measurement, or average) and you want to estimate the true population mean with a margin of error.",
    // MathJax LaTeX formula
    formulaLatex: `\\[ \\bar{Y} \\pm t^* \\left( \\frac{s_Y}{\\sqrt{N}} \\right) \\]`,
    formulaSubLatex: `\\( df = N - 1 \\) — look up \\(t^*\\) in the t-table for your confidence level and degrees of freedom`,
    legend: [
      { sym: "\\(\\bar{Y}\\)",        desc: "Your sample mean — the average you calculated from your data" },
      { sym: "\\(t^*\\)",             desc: "Critical value from the t-table — depends on your confidence level (e.g., 95%) and degrees of freedom" },
      { sym: "\\(s_Y\\)",             desc: "Standard deviation of your sample — how spread out the scores are" },
      { sym: "\\(N\\)",               desc: "Sample size — how many people are in your sample" },
      { sym: "\\(s_Y / \\sqrt{N}\\)", desc: "Standard error (SE) — how much the sample mean is expected to vary from sample to sample" },
      { sym: "\\(df\\)",              desc: "Degrees of freedom — equal to N − 1; used to look up the critical t value" },
    ],
    measures: [
      "Your sample mean (\\(\\bar{Y}\\)) — usually given in the problem",
      "Your sample standard deviation (\\(s_Y\\)) — usually given",
      "Your sample size (\\(N\\))",
      "Degrees of freedom: \\(df = N - 1\\)",
      "The critical t-value (\\(t^*\\)) — look this up in a t-table using your df and confidence level",
    ],
    example: "\"Construct a 95% confidence interval for the average burnout score for social workers.\" A random sample of 100 social workers has a mean score of 10.3, SD = 2.7.",
    steps: [
      "Identify your values: \\(\\bar{Y} = 10.3\\), \\(s_Y = 2.7\\), \\(N = 100\\)",
      "Calculate SE: \\(s_Y / \\sqrt{N} = 2.7 / \\sqrt{100} = 2.7 / 10 = 0.27\\)",
      "Find \\(t^*\\): \\(df = 99\\), 95% CI → \\(t^* \\approx 1.984\\)",
      "Margin of error: \\(1.984 \\times 0.27 = 0.536\\)",
      "CI: \\(10.3 \\pm 0.536 \\rightarrow [9.76,\\ 10.84]\\)"
    ],
    interpretation: "\"We are 95% confident that the true mean burnout score in the population lies between 9.76 and 10.84.\""
  },

  result_ci_prop: {
    badge: "CI",
    badgeClass: "badge-ci",
    name: "Confidence Interval for a Proportion",
    when: "Use this when you have a yes/no outcome and you want to estimate the true population proportion with a margin of error.",
    formulaLatex: `\\[ \\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}} \\]`,
    formulaSubLatex: `\\(z^* = 1.96\\) for a 95% CI \\(\\quad\\) \\(z^* = 2.576\\) for a 99% CI`,
    legend: [
      { sym: "\\(\\hat{p}\\)",                    desc: "Sample proportion — the fraction in your sample who said yes (e.g., 240/400 = 0.60)" },
      { sym: "\\(z^*\\)",                         desc: "Critical z-value — 1.96 for 95% confidence, 2.576 for 99% confidence" },
      { sym: "\\(n\\)",                           desc: "Sample size — how many people are in your sample" },
      { sym: "\\(\\hat{p}(1-\\hat{p})\\)",        desc: "Variance of the proportion — measures spread; largest when p̂ = 0.50" },
      { sym: "\\(\\sqrt{\\hat{p}(1-\\hat{p})/n}\\)", desc: "Standard error — how much the sample proportion is expected to vary" },
    ],
    measures: [
      "Your sample proportion (\\(\\hat{p}\\)) — e.g., number who said yes divided by total sample size",
      "Your sample size (\\(n\\))",
      "The critical z-value (\\(z^*\\)) — 1.96 for 95% CI, 2.576 for 99% CI",
    ],
    example: "\"Estimate the proportion of adults who support the new transit policy, with a 95% confidence interval.\" Sample: n = 400, 240 support it (p̂ = 0.60).",
    steps: [
      "Identify: \\(\\hat{p} = 0.60\\), \\(n = 400\\)",
      "Calculate SE: \\(\\sqrt{(0.60 \\times 0.40) / 400} = \\sqrt{0.0006} = 0.0245\\)",
      "\\(z^* = 1.96\\) for 95% CI",
      "Margin of error: \\(1.96 \\times 0.0245 = 0.048\\)",
      "CI: \\(0.60 \\pm 0.048 \\rightarrow [0.552,\\ 0.648]\\)"
    ],
    interpretation: "\"We are 95% confident that the true proportion of adults who support the policy is between 55.2% and 64.8%.\""
  },

  result_t1: {
    badge: "t",
    badgeClass: "badge-t",
    name: "One-Sample t Test",
    when: "Use this when you have a numeric outcome and want to test whether your sample mean is significantly different from (or greater/less than) a known or official population mean.",
    formulaLatex: `\\[ t = \\frac{\\bar{Y} - \\mu_0}{s_Y / \\sqrt{N}} \\]`,
    formulaSubLatex: `\\(df = N - 1\\) \\(\\quad\\) Standard Error \\(= s_Y / \\sqrt{N}\\)`,
    legend: [
      { sym: "\\(t\\)",           desc: "The test statistic you calculate — compare this to the critical value" },
      { sym: "\\(\\bar{Y}\\)",    desc: "Your sample mean — the average from your data" },
      { sym: "\\(\\mu_0\\)",      desc: "The hypothesized population mean — the benchmark you're testing against (from H₀)" },
      { sym: "\\(s_Y\\)",         desc: "Your sample standard deviation — how spread out the scores are" },
      { sym: "\\(N\\)",           desc: "Sample size — how many people are in your sample" },
      { sym: "\\(s_Y/\\sqrt{N}\\)", desc: "Standard error (SE) — the denominator; how much sampling variation to expect" },
      { sym: "\\(df\\)",          desc: "Degrees of freedom = N − 1; used to find the critical t-value in a table" },
    ],
    measures: [
      "Your sample mean (\\(\\bar{Y}\\)) — from the data given",
      "The hypothesized population mean (\\(\\mu_0\\)) — usually stated in H₀",
      "Your sample standard deviation (\\(s_Y\\))",
      "Your sample size (\\(N\\))",
      "Degrees of freedom: \\(df = N - 1\\)",
      "Critical t-value from a t-table at your chosen α and df",
    ],
    example: "\"A random sample of 423 Albertans has finished an average of 12.7 years of formal education (SD = 1.7). Is this significantly different from the national average of 12.2 years? (α = 0.05, two-tailed)\"",
    steps: [
      "State hypotheses: \\(H_0: \\mu = 12.2\\); \\(H_A: \\mu \\neq 12.2\\) (two-tailed)",
      "\\(\\alpha = 0.05\\), \\(df = 422\\); \\(t_{critical} \\approx \\pm 1.966\\)",
      "Calculate SE: \\(s_Y / \\sqrt{N} = 1.7 / \\sqrt{423} = 1.7 / 20.57 = 0.083\\)",
      "Calculate \\(t_{obtained} = (12.7 - 12.2) / 0.083 = 0.5 / 0.083 = 6.02\\)",
      "\\(|6.02| > 1.966\\) → Reject \\(H_0\\)"
    ],
    interpretation: "\"There is a statistically significant difference between the average years of education for Albertans and the national average (t = 6.02, df = 422, p < 0.05).\""
  },

  result_t2: {
    badge: "t",
    badgeClass: "badge-t",
    name: "Two-Sample t Test",
    when: "Use this when you have a numeric outcome and want to compare the means of two independent groups — like men vs. women, or two different cities.",
    formulaLatex: `\\[ t = \\frac{\\bar{Y}_1 - \\bar{Y}_2}{SE_{\\bar{Y}_1 - \\bar{Y}_2}} \\]`,
    formulaSubLatex: `\\(SE_{\\bar{Y}_1 - \\bar{Y}_2} = \\sqrt{\\dfrac{s_1^2}{N_1} + \\dfrac{s_2^2}{N_2}}\\) \\(\\quad\\) \\(df = (N_1 - 1) + (N_2 - 1)\\)`,
    legend: [
      { sym: "\\(t\\)",                                    desc: "The test statistic you calculate — compare to critical value" },
      { sym: "\\(\\bar{Y}_1,\\ \\bar{Y}_2\\)",            desc: "The sample means for Group 1 and Group 2" },
      { sym: "\\(s_1^2,\\ s_2^2\\)",                      desc: "The variances (SD squared) for Group 1 and Group 2" },
      { sym: "\\(N_1,\\ N_2\\)",                          desc: "Sample sizes for Group 1 and Group 2" },
      { sym: "\\(SE_{\\bar{Y}_1 - \\bar{Y}_2}\\)",        desc: "Standard error of the difference — the denominator of the t formula" },
      { sym: "\\(df\\)",                                   desc: "Degrees of freedom = (N₁ − 1) + (N₂ − 1); used to find critical t" },
    ],
    measures: [
      "Means for both groups: \\(\\bar{Y}_1\\) and \\(\\bar{Y}_2\\)",
      "Standard deviations for both groups: \\(s_1\\) and \\(s_2\\)",
      "Sample sizes for both groups: \\(N_1\\) and \\(N_2\\)",
      "Degrees of freedom: \\(df = (N_1 - 1) + (N_2 - 1)\\)",
      "Standard error: \\(SE = \\sqrt{s_1^2/N_1 + s_2^2/N_2}\\)",
      "Critical t-value from a t-table at your chosen α and df",
    ],
    example: "\"Is there a gender difference in job satisfaction? Men (n = 100): mean = 7.0, SD = 1.2. Women (n = 120): mean = 7.5, SD = 1.5. Use α = 0.05.\"",
    steps: [
      "State hypotheses: \\(H_0: \\mu_{men} = \\mu_{women}\\); \\(H_A: \\mu_{men} \\neq \\mu_{women}\\)",
      "\\(df = (100-1) + (120-1) = 218\\); \\(t_{critical} \\approx \\pm 1.971\\)",
      "SE \\(= \\sqrt{1.44/100 + 2.25/120} = \\sqrt{0.0144 + 0.01875} = \\sqrt{0.03315} = 0.182\\)",
      "\\(t_{obtained} = (7.0 - 7.5) / 0.182 = -0.5 / 0.182 = -2.747\\)",
      "\\(|-2.747| > 1.971\\) → Reject \\(H_0\\)"
    ],
    interpretation: "\"There is a statistically significant difference in job satisfaction between men and women (t = −2.747, df = 218, p < 0.05).\""
  },

  result_z1: {
    badge: "z",
    badgeClass: "badge-z",
    name: "One-Proportion z Test",
    when: "Use this when you have a yes/no outcome and want to test whether your sample proportion is significantly different from (or higher/lower than) a known population proportion.",
    formulaLatex: `\\[ z = \\frac{\\hat{p} - \\pi_0}{s_{\\pi_0}} \\]`,
    formulaSubLatex: `\\(s_{\\pi_0} = \\sqrt{\\dfrac{\\pi_0 (1 - \\pi_0)}{n}}\\)`,
    legend: [
      { sym: "\\(z\\)",           desc: "The test statistic you calculate — compare to the critical z-value" },
      { sym: "\\(\\hat{p}\\)",    desc: "Your sample proportion — the fraction in your sample with the outcome (e.g., 0.14 = 14%)" },
      { sym: "\\(\\pi_0\\)",      desc: "The hypothesized population proportion stated in H₀ (e.g., 0.10 = 10%)" },
      { sym: "\\(s_{\\pi_0}\\)",  desc: "Standard error under H₀ — how much sampling variation to expect if H₀ is true" },
      { sym: "\\(n\\)",           desc: "Sample size — how many people are in your sample" },
    ],
    measures: [
      "Your sample proportion (\\(\\hat{p}\\)) — e.g., 74/527 = 0.14",
      "The hypothesized proportion (\\(\\pi_0\\)) — stated in H₀",
      "Your sample size (\\(n\\))",
      "Standard error: \\(s_{\\pi_0} = \\sqrt{\\pi_0(1-\\pi_0)/n}\\)",
      "Critical z-value: ±1.96 (two-tailed, α = 0.05), +1.645 (one-tailed, α = 0.05)",
    ],
    example: "\"A survey shows that 10% of the population are victims of property crime each year. A random sample of 527 older adults shows a victimization rate of 14%. Are older people more likely to be victimized? (one-tailed, α = 0.05)\"",
    steps: [
      "State hypotheses: \\(H_0: p = 0.10\\); \\(H_A: p > 0.10\\) (one-tailed)",
      "\\(\\alpha = 0.05\\), one-tailed; \\(z_{critical} = +1.645\\)",
      "\\(s_{\\pi_0} = \\sqrt{0.10 \\times 0.90 / 527} = \\sqrt{0.000171} = 0.01308\\)",
      "\\(z_{obtained} = (0.14 - 0.10) / 0.01308 = 0.04 / 0.01308 = 3.059\\)",
      "\\(3.059 > 1.645\\) → Reject \\(H_0\\)"
    ],
    interpretation: "\"There is sufficient evidence to conclude that older adults are significantly more likely to be victimized than the general population (z = 3.059, p < 0.05).\""
  },

  result_z2: {
    badge: "z",
    badgeClass: "badge-z",
    name: "Two-Proportion z Test",
    when: "Use this when you have a yes/no outcome and want to compare the proportions of two independent groups — like men vs. women, or two different cities.",
    formulaLatex: `\\[ z = \\frac{\\hat{p}_1 - \\hat{p}_2}{SE_{\\hat{p}_1 - \\hat{p}_2}} \\]`,
    formulaSubLatex: `\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)}\\) where \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2}\\)`,
    legend: [
      { sym: "\\(z\\)",                               desc: "The test statistic you calculate — compare to the critical z-value" },
      { sym: "\\(\\hat{p}_1,\\ \\hat{p}_2\\)",        desc: "Sample proportions for Group 1 and Group 2 (e.g., 30/150 = 0.20)" },
      { sym: "\\(\\hat{p}\\) (pooled)",               desc: "Pooled proportion — total successes divided by total sample size across both groups" },
      { sym: "\\(n_1,\\ n_2\\)",                      desc: "Sample sizes for Group 1 and Group 2" },
      { sym: "\\(x_1,\\ x_2\\)",                      desc: "Number of 'successes' (yes responses) in each group" },
      { sym: "\\(SE_{\\hat{p}_1 - \\hat{p}_2}\\)",    desc: "Standard error of the difference between the two proportions" },
    ],
    measures: [
      "Proportions for both groups: \\(\\hat{p}_1\\) and \\(\\hat{p}_2\\)",
      "Sample sizes for both groups: \\(n_1\\) and \\(n_2\\)",
      "Number of successes in each group: \\(x_1\\) and \\(x_2\\)",
      "Pooled proportion: \\(\\hat{p} = (x_1 + x_2) / (n_1 + n_2)\\)",
      "Standard error using the pooled proportion formula above",
      "Critical z-value: ±1.96 (two-tailed, α = 0.05)",
    ],
    example: "\"Is there a gender difference in seeking mental health treatment? 150 men: 30 sought treatment. 120 women: 60 sought treatment. α = 0.05, two-tailed.\"",
    steps: [
      "\\(\\hat{p}_{men} = 30/150 = 0.20\\); \\(\\hat{p}_{women} = 60/120 = 0.50\\)",
      "\\(H_0: p_1 = p_2\\); \\(H_A: p_1 \\neq p_2\\); \\(z_{critical} = \\pm 1.96\\)",
      "\\(\\hat{p}_{pooled} = (30+60)/(150+120) = 90/270 = 0.333\\)",
      "\\(SE = \\sqrt{0.333 \\times 0.667 \\times (1/150 + 1/120)} = \\sqrt{0.222 \\times 0.01500} = 0.0578\\)",
      "\\(z = (0.20 - 0.50) / 0.0578 = -5.19\\); \\(|-5.19| > 1.96\\) → Reject \\(H_0\\)"
    ],
    interpretation: "\"There is a statistically significant gender difference in seeking mental health treatment — women sought treatment at a significantly higher rate than men (z = −5.19, p < 0.05).\""
  },

  result_chi: {
    badge: "χ²",
    badgeClass: "badge-chi",
    name: "Chi-Square Test of Association",
    when: "Use this when both of your variables are categories and your data are in a table of counts (a crosstab). You're testing whether the two variables are associated with each other, or just independent by chance.",
    formulaLatex: `\\[ \\chi^2 = \\sum \\frac{(O - E)^2}{E} \\]`,
    formulaSubLatex: `Expected count: \\(E = \\dfrac{(\\text{row total} \\times \\text{column total})}{\\text{grand total}}\\) \\(\\quad\\) \\(df = (\\text{rows}-1)(\\text{columns}-1)\\)`,
    legend: [
      { sym: "\\(\\chi^2\\)",  desc: "Chi-square statistic — the larger it is, the more the observed data differs from what you'd expect under H₀" },
      { sym: "\\(O\\)",        desc: "Observed count — the actual number in each cell of your table" },
      { sym: "\\(E\\)",        desc: "Expected count — what the count would be if there were NO relationship between the variables" },
      { sym: "\\(O - E\\)",    desc: "The difference between what you observed and what you expected in each cell" },
      { sym: "\\(\\Sigma\\)",  desc: "Summation — add up the (O−E)²/E value for every cell in the table" },
      { sym: "\\(df\\)",       desc: "Degrees of freedom = (rows − 1) × (columns − 1); used to find the critical chi-square value" },
    ],
    measures: [
      "Your observed counts (\\(O\\)) — from each cell of your crosstab",
      "Row totals, column totals, and grand total — to calculate expected counts",
      "Expected counts (\\(E\\)) for each cell: \\(E = (row\\ total \\times col\\ total) / grand\\ total\\)",
      "Degrees of freedom: \\(df = (rows - 1)(cols - 1)\\)",
      "Critical chi-square value from a \\(\\chi^2\\) table at your chosen α and df",
    ],
    example: "\"Is there an association between having been a victim of robbery (Yes/No) and concern about crime (Not concerned / Moderately / Very concerned)? (α = 0.05)\"",
    steps: [
      "State hypotheses: \\(H_0\\): victimization and concern are independent; \\(H_A\\): they are associated",
      "\\(df = (2-1)(3-1) = 2\\); \\(\\chi^2_{critical} = 5.991\\)",
      "Calculate expected count for each cell: \\(E = (\\text{row total} \\times \\text{col total}) / \\text{grand total}\\)",
      "For each cell, calculate \\((O - E)^2 / E\\) and add all cells together to get \\(\\chi^2_{obtained}\\)",
      "If \\(\\chi^2_{obtained} > 5.991\\) → Reject \\(H_0\\)"
    ],
    interpretation: "\"There is [not] sufficient evidence of an association between victimization and concern about crime (χ² = [value], df = 2, p [</≥] 0.05).\""
  }
};

// ─────────────────────────────────────────────────────────────────
//  FLOWCHART STATE
// ─────────────────────────────────────────────────────────────────
let history = [];
let current = "root";

// ─────────────────────────────────────────────────────────────────
//  RENDER STEPS
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

// ─────────────────────────────────────────────────────────────────
//  SHOW RESULT (with MathJax typesetting)
// ─────────────────────────────────────────────────────────────────
function showResult(resultId) {
  const r = RESULTS[resultId];
  if (!r) return;

  document.getElementById("result-badge").className = "result-badge " + r.badgeClass;
  document.getElementById("result-badge").textContent = r.badge;
  document.getElementById("result-name").textContent = r.name;
  document.getElementById("result-when").textContent = r.when;

  // Formula — LaTeX
  const formulaBox = document.getElementById("result-formula");
  formulaBox.innerHTML = r.formulaLatex || "";

  const fSub = document.getElementById("result-formula-sub");
  fSub.innerHTML = r.formulaSubLatex || "";
  fSub.style.display = r.formulaSubLatex ? "block" : "none";

  // Legend
  const legendWrap = document.getElementById("result-legend-wrap");
  const legendGrid = document.getElementById("result-legend");
  legendGrid.innerHTML = "";
  if (r.legend && r.legend.length) {
    r.legend.forEach(item => {
      const row = document.createElement("div");
      row.className = "legend-row";
      row.innerHTML = `<span class="legend-sym">${item.sym}</span><span class="legend-desc">${item.desc}</span>`;
      legendGrid.appendChild(row);
    });
    legendWrap.style.display = "block";
  } else {
    legendWrap.style.display = "none";
  }

  // Measures needed
  const measuresWrap = document.getElementById("result-measures-wrap");
  const measuresList = document.getElementById("result-measures");
  measuresList.innerHTML = "";
  if (r.measures && r.measures.length) {
    r.measures.forEach(m => {
      const li = document.createElement("li");
      li.innerHTML = m;
      measuresList.appendChild(li);
    });
    measuresWrap.style.display = "block";
  } else {
    measuresWrap.style.display = "none";
  }

  // Example
  document.getElementById("result-example").textContent = r.example;

  // Steps
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

  // Re-typeset MathJax after injecting content
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([rc]).then(() => {
      setTimeout(() => rc.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    });
  } else {
    setTimeout(() => rc.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  }
}

function updateProgress() {
  const totalSteps = 4;
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

  const first = renderStep("root", 0, true);
  if (first) stack.appendChild(first);

  history.push("root");
  drawFlowmap();
}

// ─────────────────────────────────────────────────────────────────
//  SVG FLOWMAP — scaled to fill the wider column
// ─────────────────────────────────────────────────────────────────
function drawFlowmap() {
  const svg = document.getElementById("flowmap");
  svg.innerHTML = "";

  const activePath = new Set(history);

  const colors = {
    start:       { fill: "#1e3a5f", stroke: "#1e3a5f", text: "#fff" },
    node:        { fill: "#f0f4ff", stroke: "#4a6fa5", text: "#1e3a5f" },
    "result-ci": { fill: "#e8f5e9", stroke: "#2e7d32", text: "#1b5e20" },
    "result-t":  { fill: "#fff3e0", stroke: "#e65100", text: "#bf360c" },
    "result-z":  { fill: "#e3f2fd", stroke: "#1565c0", text: "#0d47a1" },
    "result-chi":{ fill: "#f3e5f5", stroke: "#6a1b9a", text: "#4a148c" },
  };

  const layout = buildLayout();

  drawEdges(svg, layout, activePath);

  layout.forEach(n => {
    if (n.type === "label") return;
    const c = colors[n.type] || colors.node;
    const isActive = activePath.has(n.id);
    const isCurrent = history[history.length - 1] === n.id;

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", n.x);
    rect.setAttribute("y", n.y);
    rect.setAttribute("width", n.w);
    rect.setAttribute("height", n.h);
    rect.setAttribute("rx", "7");
    rect.setAttribute("fill", isActive ? (isCurrent ? "#2347a8" : c.fill) : "#f8f9fc");
    rect.setAttribute("stroke", isActive ? (isCurrent ? "#2347a8" : c.stroke) : "#e0e4ef");
    rect.setAttribute("stroke-width", isActive ? "2.5" : "1.5");
    if (isCurrent) {
      rect.setAttribute("filter", "url(#glow)");
    }
    g.appendChild(rect);

    // Text wrapping
    const words = n.label.split(" ");
    const lines = [];
    let line = "";
    words.forEach(w => {
      if ((line + w).length > 16 && line !== "") {
        lines.push(line.trim());
        line = w + " ";
      } else {
        line += w + " ";
      }
    });
    if (line.trim()) lines.push(line.trim());

    const textColor = isActive ? (isCurrent ? "#fff" : c.text) : "#9ca3af";
    const lineH = 11;
    const totalH = lines.length * lineH;
    const startY = n.y + n.h / 2 - totalH / 2 + lineH * 0.75;

    lines.forEach((l, i) => {
      const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
      txt.setAttribute("x", n.x + n.w / 2);
      txt.setAttribute("y", startY + i * lineH);
      txt.setAttribute("text-anchor", "middle");
      txt.setAttribute("font-size", "9");
      txt.setAttribute("font-family", "DM Sans, sans-serif");
      txt.setAttribute("font-weight", isActive ? "700" : "400");
      txt.setAttribute("fill", textColor);
      txt.textContent = l;
      g.appendChild(txt);
    });

    svg.appendChild(g);
  });

  // Glow filter
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `<filter id="glow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
  svg.insertBefore(defs, svg.firstChild);
}

function buildLayout() {
  // viewBox 0 0 440 560
  return [
    { id: "root",            label: "Estimating or Testing?",    x: 120, y: 10,  w: 200, h: 38, type: "start" },
    { id: "ci_branch",       label: "CI: Mean or Proportion?",   x: 15,  y: 95,  w: 160, h: 38, type: "node" },
    { id: "outcome_type",    label: "Numeric or Categorical?",   x: 265, y: 95,  w: 160, h: 38, type: "node" },
    { id: "result_ci_mean",  label: "CI for a Mean",             x: 5,   y: 195, w: 85,  h: 34, type: "result-ci" },
    { id: "result_ci_prop",  label: "CI for a Proportion",       x: 100, y: 195, w: 85,  h: 34, type: "result-ci" },
    { id: "t_samples",       label: "One or Two Samples?",       x: 250, y: 195, w: 175, h: 38, type: "node" },
    { id: "result_t1",       label: "One-Sample t Test",         x: 230, y: 295, w: 90,  h: 34, type: "result-t" },
    { id: "result_t2",       label: "Two-Sample t Test",         x: 340, y: 295, w: 90,  h: 34, type: "result-t" },
    { id: "z_or_chi",        label: "Proportion or Both Categ.?",x: 230, y: 390, w: 185, h: 38, type: "node" },
    { id: "z_samples",       label: "One or Two Samples?",       x: 220, y: 490, w: 175, h: 38, type: "node" },
    { id: "result_chi",      label: "Chi-Square Test",           x: 350, y: 450, w: 85,  h: 34, type: "result-chi" },
    { id: "result_z1",       label: "One-Prop z Test",           x: 210, y: 585, w: 85,  h: 34, type: "result-z" },
    { id: "result_z2",       label: "Two-Prop z Test",           x: 310, y: 585, w: 85,  h: 34, type: "result-z" },
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

    const x1 = from.x + from.w / 2;
    const y1 = from.y + from.h;
    const x2 = to.x + to.w / 2;
    const y2 = to.y;
    const my = (y1 + y2) / 2;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}`);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", isActive ? "#2347a8" : "#d1d9e6");
    path.setAttribute("stroke-width", isActive ? "2.5" : "1.5");
    path.setAttribute("stroke-dasharray", isActive ? "none" : "4 3");

    const markerId = "arr_" + fromId + "_" + toId;
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", markerId);
    marker.setAttribute("markerWidth", "7");
    marker.setAttribute("markerHeight", "7");
    marker.setAttribute("refX", "3.5");
    marker.setAttribute("refY", "3.5");
    marker.setAttribute("orient", "auto");
    const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    poly.setAttribute("points", "0 0, 7 3.5, 0 7");
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

  const svg = document.getElementById("flowmap");
  if (svg) svg.setAttribute("viewBox", "0 0 440 640");
});
