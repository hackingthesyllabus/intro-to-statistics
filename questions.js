// Practice questions (hypothetical data). Generated; do not edit by hand.
window.PRACTICE_QUESTIONS = [
 {
  "id": 1,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Social media use",
  "scenario": "A random sample of 25 people was asked about their hours per week on social media. The sample mean is 11.4 and the standard deviation is 4.2. Build a 95% confidence interval for the population mean.",
  "givens": [
   "N = 25",
   "\u0232 = 11.4",
   "s = 4.2",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the hours per week on social media. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 25\\), \\(\\bar{Y} = 11.4\\), \\(s = 4.2\\), and a confidence level of 95%, so \\(\\alpha = 0.05\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 24\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Because \\(N\\) is small, look at a histogram. If the variable is strongly skewed or has extreme outliers, treat this interval with caution."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 24\\) and the two-tailed column for \\(\\alpha = 0.05\\). Table row 24 gives \\(t^* = 2.064\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{4.2}{\\sqrt{25}} = \\dfrac{4.2}{5.0} = 0.8400\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.064 \\times 0.8400 = 1.7338\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(11.4 - 1.7338 = 9.67\\) and the upper limit is \\(11.4 + 1.7338 = 13.13\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that the true mean hours per week on social media in the population lies between 9.7 and 13. Across many samples drawn this way, about 95% of intervals would capture the true mean."
   }
  ],
  "answer": "95% CI = (9.7, 13), rounded to 2 significant figures."
 },
 {
  "id": 2,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Years of schooling",
  "scenario": "A random sample of 31 people was asked about their years of formal schooling. The sample mean is 13.6 and the standard deviation is 2.1. Build a 95% confidence interval for the population mean.",
  "givens": [
   "N = 31",
   "\u0232 = 13.6",
   "s = 2.1",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the years of formal schooling. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 31\\), \\(\\bar{Y} = 13.6\\), \\(s = 2.1\\), and a confidence level of 95%, so \\(\\alpha = 0.05\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 30\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Since \\(N \\geq 30\\), the central limit theorem usually makes the sampling distribution close to normal."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 30\\) and the two-tailed column for \\(\\alpha = 0.05\\). Table row 30 gives \\(t^* = 2.042\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.1}{\\sqrt{31}} = \\dfrac{2.1}{5.5678} = 0.3772\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.042 \\times 0.3772 = 0.7702\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(13.6 - 0.7702 = 12.83\\) and the upper limit is \\(13.6 + 0.7702 = 14.37\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that the true mean years of formal schooling in the population lies between 13 and 14. Across many samples drawn this way, about 95% of intervals would capture the true mean."
   }
  ],
  "answer": "95% CI = (13, 14), rounded to 2 significant figures."
 },
 {
  "id": 3,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Commute time",
  "scenario": "A random sample of 16 people was asked about their minutes of one-way commute. The sample mean is 34.5 and the standard deviation is 12.8. Build a 90% confidence interval for the population mean.",
  "givens": [
   "N = 16",
   "\u0232 = 34.5",
   "s = 12.8",
   "Confidence level = 90%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the minutes of one-way commute. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 16\\), \\(\\bar{Y} = 34.5\\), \\(s = 12.8\\), and a confidence level of 90%, so \\(\\alpha = 0.1\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 15\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Because \\(N\\) is small, look at a histogram. If the variable is strongly skewed or has extreme outliers, treat this interval with caution."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 15\\) and the two-tailed column for \\(\\alpha = 0.1\\). Table row 15 gives \\(t^* = 1.753\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{12.8}{\\sqrt{16}} = \\dfrac{12.8}{4.0} = 3.2000\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 1.753 \\times 3.2000 = 5.6096\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(34.5 - 5.6096 = 28.89\\) and the upper limit is \\(34.5 + 5.6096 = 40.11\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 90% confident that the true mean minutes of one-way commute in the population lies between 29 and 40. Across many samples drawn this way, about 90% of intervals would capture the true mean."
   }
  ],
  "answer": "90% CI = (29, 40), rounded to 2 significant figures."
 },
 {
  "id": 4,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Monthly rent",
  "scenario": "A random sample of 21 people was asked about their monthly rent in hundreds of dollars. The sample mean is 11.8 and the standard deviation is 2.15. Build a 99% confidence interval for the population mean.",
  "givens": [
   "N = 21",
   "\u0232 = 11.8",
   "s = 2.15",
   "Confidence level = 99%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the monthly rent in hundreds of dollars. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 21\\), \\(\\bar{Y} = 11.8\\), \\(s = 2.15\\), and a confidence level of 99%, so \\(\\alpha = 0.01\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 20\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Because \\(N\\) is small, look at a histogram. If the variable is strongly skewed or has extreme outliers, treat this interval with caution."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 20\\) and the two-tailed column for \\(\\alpha = 0.01\\). Table row 20 gives \\(t^* = 2.845\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.15}{\\sqrt{21}} = \\dfrac{2.15}{4.5826} = 0.4692\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.845 \\times 0.4692 = 1.3348\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(11.8 - 1.3348 = 10.47\\) and the upper limit is \\(11.8 + 1.3348 = 13.13\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 99% confident that the true mean monthly rent in hundreds of dollars in the population lies between 10 and 13. Across many samples drawn this way, about 99% of intervals would capture the true mean."
   }
  ],
  "answer": "99% CI = (10, 13), rounded to 2 significant figures."
 },
 {
  "id": 5,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Neighbourhood trust",
  "scenario": "A random sample of 41 people was asked about their trust score on a 0\u201310 scale. The sample mean is 6.2 and the standard deviation is 2.4. Build a 95% confidence interval for the population mean.",
  "givens": [
   "N = 41",
   "\u0232 = 6.2",
   "s = 2.4",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the trust score on a 0\u201310 scale. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 41\\), \\(\\bar{Y} = 6.2\\), \\(s = 2.4\\), and a confidence level of 95%, so \\(\\alpha = 0.05\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 40\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Since \\(N \\geq 30\\), the central limit theorem usually makes the sampling distribution close to normal."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 40\\) and the two-tailed column for \\(\\alpha = 0.05\\). Table row 40 gives \\(t^* = 2.021\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.4}{\\sqrt{41}} = \\dfrac{2.4}{6.4031} = 0.3748\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.021 \\times 0.3748 = 0.7575\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(6.2 - 0.7575 = 5.44\\) and the upper limit is \\(6.2 + 0.7575 = 6.96\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that the true mean trust score on a 0\u201310 scale in the population lies between 5.4 and 7.0. Across many samples drawn this way, about 95% of intervals would capture the true mean."
   }
  ],
  "answer": "95% CI = (5.4, 7.0), rounded to 2 significant figures."
 },
 {
  "id": 6,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Seminar GPA",
  "scenario": "A random sample of 11 people was asked about their GPA on a 4.0 scale. The sample mean is 3.42 and the standard deviation is 0.37. Build a 95% confidence interval for the population mean.",
  "givens": [
   "N = 11",
   "\u0232 = 3.42",
   "s = 0.37",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the GPA on a 4.0 scale. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 11\\), \\(\\bar{Y} = 3.42\\), \\(s = 0.37\\), and a confidence level of 95%, so \\(\\alpha = 0.05\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 10\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Because \\(N\\) is small, look at a histogram. If the variable is strongly skewed or has extreme outliers, treat this interval with caution."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 10\\) and the two-tailed column for \\(\\alpha = 0.05\\). Table row 10 gives \\(t^* = 2.228\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{0.37}{\\sqrt{11}} = \\dfrac{0.37}{3.3166} = 0.1116\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.228 \\times 0.1116 = 0.2486\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(3.42 - 0.2486 = 3.17\\) and the upper limit is \\(3.42 + 0.2486 = 3.67\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that the true mean GPA on a 4.0 scale in the population lies between 3.2 and 3.7. Across many samples drawn this way, about 95% of intervals would capture the true mean."
   }
  ],
  "answer": "95% CI = (3.2, 3.7), rounded to 2 significant figures."
 },
 {
  "id": 7,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Close friends",
  "scenario": "A random sample of 61 people was asked about their number of close friends. The sample mean is 4.8 and the standard deviation is 2.9. Build a 90% confidence interval for the population mean.",
  "givens": [
   "N = 61",
   "\u0232 = 4.8",
   "s = 2.9",
   "Confidence level = 90%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the number of close friends. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 61\\), \\(\\bar{Y} = 4.8\\), \\(s = 2.9\\), and a confidence level of 90%, so \\(\\alpha = 0.1\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 60\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Since \\(N \\geq 30\\), the central limit theorem usually makes the sampling distribution close to normal."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 60\\) and the two-tailed column for \\(\\alpha = 0.1\\). Table row 60 gives \\(t^* = 1.671\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.9}{\\sqrt{61}} = \\dfrac{2.9}{7.8102} = 0.3713\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 1.671 \\times 0.3713 = 0.6205\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(4.8 - 0.6205 = 4.18\\) and the upper limit is \\(4.8 + 0.6205 = 5.42\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 90% confident that the true mean number of close friends in the population lies between 4.2 and 5.4. Across many samples drawn this way, about 90% of intervals would capture the true mean."
   }
  ],
  "answer": "90% CI = (4.2, 5.4), rounded to 2 significant figures."
 },
 {
  "id": 8,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Sleep",
  "scenario": "A random sample of 26 people was asked about their hours of sleep per night. The sample mean is 6.9 and the standard deviation is 1.1. Build a 95% confidence interval for the population mean.",
  "givens": [
   "N = 26",
   "\u0232 = 6.9",
   "s = 1.1",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the hours of sleep per night. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 26\\), \\(\\bar{Y} = 6.9\\), \\(s = 1.1\\), and a confidence level of 95%, so \\(\\alpha = 0.05\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 25\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Because \\(N\\) is small, look at a histogram. If the variable is strongly skewed or has extreme outliers, treat this interval with caution."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 25\\) and the two-tailed column for \\(\\alpha = 0.05\\). Table row 25 gives \\(t^* = 2.06\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{1.1}{\\sqrt{26}} = \\dfrac{1.1}{5.099} = 0.2157\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.06 \\times 0.2157 = 0.4444\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(6.9 - 0.4444 = 6.46\\) and the upper limit is \\(6.9 + 0.4444 = 7.34\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that the true mean hours of sleep per night in the population lies between 6.5 and 7.3. Across many samples drawn this way, about 95% of intervals would capture the true mean."
   }
  ],
  "answer": "95% CI = (6.5, 7.3), rounded to 2 significant figures."
 },
 {
  "id": 9,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Age at first marriage",
  "scenario": "A random sample of 31 people was asked about their age at first marriage. The sample mean is 28.4 and the standard deviation is 4.6. Build a 99% confidence interval for the population mean.",
  "givens": [
   "N = 31",
   "\u0232 = 28.4",
   "s = 4.6",
   "Confidence level = 99%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the age at first marriage. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 31\\), \\(\\bar{Y} = 28.4\\), \\(s = 4.6\\), and a confidence level of 99%, so \\(\\alpha = 0.01\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 30\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Since \\(N \\geq 30\\), the central limit theorem usually makes the sampling distribution close to normal."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 30\\) and the two-tailed column for \\(\\alpha = 0.01\\). Table row 30 gives \\(t^* = 2.75\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{4.6}{\\sqrt{31}} = \\dfrac{4.6}{5.5678} = 0.8262\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.75 \\times 0.8262 = 2.2720\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(28.4 - 2.2720 = 26.13\\) and the upper limit is \\(28.4 + 2.2720 = 30.67\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 99% confident that the true mean age at first marriage in the population lies between 26 and 31. Across many samples drawn this way, about 99% of intervals would capture the true mean."
   }
  ],
  "answer": "99% CI = (26, 31), rounded to 2 significant figures."
 },
 {
  "id": 10,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Household size",
  "scenario": "A random sample of 21 people was asked about their people per household. The sample mean is 3.1 and the standard deviation is 1.3. Build a 95% confidence interval for the population mean.",
  "givens": [
   "N = 21",
   "\u0232 = 3.1",
   "s = 1.3",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the people per household. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 21\\), \\(\\bar{Y} = 3.1\\), \\(s = 1.3\\), and a confidence level of 95%, so \\(\\alpha = 0.05\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 20\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Because \\(N\\) is small, look at a histogram. If the variable is strongly skewed or has extreme outliers, treat this interval with caution."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 20\\) and the two-tailed column for \\(\\alpha = 0.05\\). Table row 20 gives \\(t^* = 2.086\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{1.3}{\\sqrt{21}} = \\dfrac{1.3}{4.5826} = 0.2837\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.086 \\times 0.2837 = 0.5918\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(3.1 - 0.5918 = 2.51\\) and the upper limit is \\(3.1 + 0.5918 = 3.69\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that the true mean people per household in the population lies between 2.5 and 3.7. Across many samples drawn this way, about 95% of intervals would capture the true mean."
   }
  ],
  "answer": "95% CI = (2.5, 3.7), rounded to 2 significant figures."
 },
 {
  "id": 11,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Volunteering",
  "scenario": "A random sample of 13 people was asked about their hours of volunteering per month. The sample mean is 5.6 and the standard deviation is 3.9. Build a 90% confidence interval for the population mean.",
  "givens": [
   "N = 13",
   "\u0232 = 5.6",
   "s = 3.9",
   "Confidence level = 90%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the hours of volunteering per month. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 13\\), \\(\\bar{Y} = 5.6\\), \\(s = 3.9\\), and a confidence level of 90%, so \\(\\alpha = 0.1\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 12\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Because \\(N\\) is small, look at a histogram. If the variable is strongly skewed or has extreme outliers, treat this interval with caution."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 12\\) and the two-tailed column for \\(\\alpha = 0.1\\). Table row 12 gives \\(t^* = 1.782\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{3.9}{\\sqrt{13}} = \\dfrac{3.9}{3.6056} = 1.0817\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 1.782 \\times 1.0817 = 1.9275\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(5.6 - 1.9275 = 3.67\\) and the upper limit is \\(5.6 + 1.9275 = 7.53\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 90% confident that the true mean hours of volunteering per month in the population lies between 3.7 and 7.5. Across many samples drawn this way, about 90% of intervals would capture the true mean."
   }
  ],
  "answer": "90% CI = (3.7, 7.5), rounded to 2 significant figures."
 },
 {
  "id": 12,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Civic knowledge",
  "scenario": "A random sample of 121 people was asked about their score on a 20-point civic quiz. The sample mean is 11.7 and the standard deviation is 3.4. Build a 95% confidence interval for the population mean.",
  "givens": [
   "N = 121",
   "\u0232 = 11.7",
   "s = 3.4",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the score on a 20-point civic quiz. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 121\\), \\(\\bar{Y} = 11.7\\), \\(s = 3.4\\), and a confidence level of 95%, so \\(\\alpha = 0.05\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 120\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Since \\(N \\geq 30\\), the central limit theorem usually makes the sampling distribution close to normal."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 120\\) and the two-tailed column for \\(\\alpha = 0.05\\). Table row 120 gives \\(t^* = 1.98\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{3.4}{\\sqrt{121}} = \\dfrac{3.4}{11.0} = 0.3091\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 1.98 \\times 0.3091 = 0.6120\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(11.7 - 0.6120 = 11.09\\) and the upper limit is \\(11.7 + 0.6120 = 12.31\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that the true mean score on a 20-point civic quiz in the population lies between 11 and 12. Across many samples drawn this way, about 95% of intervals would capture the true mean."
   }
  ],
  "answer": "95% CI = (11, 12), rounded to 2 significant figures."
 },
 {
  "id": 13,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Life satisfaction",
  "scenario": "A random sample of 16 people was asked about their life satisfaction on a 0\u201310 scale. The sample mean is 6.8 and the standard deviation is 1.9. Build a 99% confidence interval for the population mean.",
  "givens": [
   "N = 16",
   "\u0232 = 6.8",
   "s = 1.9",
   "Confidence level = 99%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the life satisfaction on a 0\u201310 scale. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 16\\), \\(\\bar{Y} = 6.8\\), \\(s = 1.9\\), and a confidence level of 99%, so \\(\\alpha = 0.01\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 15\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Because \\(N\\) is small, look at a histogram. If the variable is strongly skewed or has extreme outliers, treat this interval with caution."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 15\\) and the two-tailed column for \\(\\alpha = 0.01\\). Table row 15 gives \\(t^* = 2.947\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{1.9}{\\sqrt{16}} = \\dfrac{1.9}{4.0} = 0.4750\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.947 \\times 0.4750 = 1.3998\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(6.8 - 1.3998 = 5.40\\) and the upper limit is \\(6.8 + 1.3998 = 8.20\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 99% confident that the true mean life satisfaction on a 0\u201310 scale in the population lies between 5.4 and 8.2. Across many samples drawn this way, about 99% of intervals would capture the true mean."
   }
  ],
  "answer": "99% CI = (5.4, 8.2), rounded to 2 significant figures."
 },
 {
  "id": 14,
  "type": "ci-mean",
  "typeLabel": "CI \u00b7 mean",
  "path": "Estimate \u2192 measured number (mean) \u2192 confidence interval for a mean (t*)",
  "title": "Work hours",
  "scenario": "A random sample of 35 people was asked about their hours worked per week. The sample mean is 38.2 and the standard deviation is 6.5. Build a 95% confidence interval for the population mean.",
  "givens": [
   "N = 35",
   "\u0232 = 38.2",
   "s = 6.5",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population mean of the hours worked per week. We have one sample and want a range of plausible values for the population mean. That is a <strong>confidence interval for a mean</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 35\\), \\(\\bar{Y} = 38.2\\), \\(s = 6.5\\), and a confidence level of 95%, so \\(\\alpha = 0.05\\) split across two tails. We do not know \\(\\sigma\\), so we use \\(s\\) and the t distribution with \\(df = N - 1 = 34\\)."
   },
   {
    "q": "Are the conditions reasonable?",
    "a": "Since \\(N \\geq 30\\), the central limit theorem usually makes the sampling distribution close to normal."
   },
   {
    "q": "Find the critical value \\(t^*\\).",
    "a": "Use \\(df = 34\\) and the two-tailed column for \\(\\alpha = 0.05\\). Table row 30 gives \\(t^* = 2.042\\). The table has no row for 34, so use the next row down, 30."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{6.5}{\\sqrt{35}} = \\dfrac{6.5}{5.9161} = 1.0987\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(t^* \\times SE = 2.042 \\times 1.0987 = 2.2435\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\bar{Y} \\pm ME\\): the lower limit is \\(38.2 - 2.2435 = 35.96\\) and the upper limit is \\(38.2 + 2.2435 = 40.44\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that the true mean hours worked per week in the population lies between 36 and 40. Across many samples drawn this way, about 95% of intervals would capture the true mean."
   }
  ],
  "answer": "95% CI = (36, 40), rounded to 2 significant figures."
 },
 {
  "id": 15,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Voter turnout",
  "scenario": "A random survey of 180 adults asked whether they voted in the last municipal election. 72 answered yes. Estimate the population proportion with a 95% confidence interval.",
  "givens": [
   "n = 180",
   "x = 72 (yes responses)",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who voted in the last municipal election. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 180\\) people, and \\(x = 72\\) said yes, so \\(\\hat{p} = x/n = 72/180 = 0.4000\\). Confidence level = 95%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 72\\) and \\(n(1-\\hat{p}) = 108\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 95% confidence, \\(z^* = 1.96\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.4000 \\times 0.6000}{180}} = \\sqrt{0.001333} = 0.0365\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.96 \\times 0.0365 = 0.0716\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.4000 - 0.0716 = 0.3284\\), upper = \\(0.4000 + 0.0716 = 0.4716\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that between 33% and 47% of people voted in the last municipal election. Across many samples, about 95% of such intervals would capture the true share."
   }
  ],
  "answer": "95% CI = (0.33, 0.47) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 16,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Home ownership",
  "scenario": "A random survey of 250 adults asked whether they own the home they live in. 160 answered yes. Estimate the population proportion with a 95% confidence interval.",
  "givens": [
   "n = 250",
   "x = 160 (yes responses)",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who own the home they live in. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 250\\) people, and \\(x = 160\\) said yes, so \\(\\hat{p} = x/n = 160/250 = 0.6400\\). Confidence level = 95%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 160\\) and \\(n(1-\\hat{p}) = 90\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 95% confidence, \\(z^* = 1.96\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.6400 \\times 0.3600}{250}} = \\sqrt{0.000922} = 0.0304\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.96 \\times 0.0304 = 0.0595\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.6400 - 0.0595 = 0.5805\\), upper = \\(0.6400 + 0.0595 = 0.6995\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that between 58% and 70% of people own the home they live in. Across many samples, about 95% of such intervals would capture the true share."
   }
  ],
  "answer": "95% CI = (0.58, 0.70) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 17,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Workplace benefits",
  "scenario": "A random survey of 120 adults asked whether they have a workplace health benefit. 94 answered yes. Estimate the population proportion with a 90% confidence interval.",
  "givens": [
   "n = 120",
   "x = 94 (yes responses)",
   "Confidence level = 90%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who have a workplace health benefit. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 120\\) people, and \\(x = 94\\) said yes, so \\(\\hat{p} = x/n = 94/120 = 0.7833\\). Confidence level = 90%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 94\\) and \\(n(1-\\hat{p}) = 26\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 90% confidence, \\(z^* = 1.645\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.7833 \\times 0.2167}{120}} = \\sqrt{0.001414} = 0.0376\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.645 \\times 0.0376 = 0.0619\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.7833 - 0.0619 = 0.7215\\), upper = \\(0.7833 + 0.0619 = 0.8452\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 90% confident that between 72% and 85% of people have a workplace health benefit. Across many samples, about 90% of such intervals would capture the true share."
   }
  ],
  "answer": "90% CI = (0.72, 0.85) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 18,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Transit commuting",
  "scenario": "A random survey of 300 adults asked whether they usually commute by public transit. 87 answered yes. Estimate the population proportion with a 99% confidence interval.",
  "givens": [
   "n = 300",
   "x = 87 (yes responses)",
   "Confidence level = 99%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who usually commute by public transit. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 300\\) people, and \\(x = 87\\) said yes, so \\(\\hat{p} = x/n = 87/300 = 0.2900\\). Confidence level = 99%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 87\\) and \\(n(1-\\hat{p}) = 213\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 99% confidence, \\(z^* = 2.576\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.2900 \\times 0.7100}{300}} = \\sqrt{0.000686} = 0.0262\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 2.576 \\times 0.0262 = 0.0675\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.2900 - 0.0675 = 0.2225\\), upper = \\(0.2900 + 0.0675 = 0.3575\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 99% confident that between 22% and 36% of people usually commute by public transit. Across many samples, about 99% of such intervals would capture the true share."
   }
  ],
  "answer": "99% CI = (0.22, 0.36) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 19,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Union membership",
  "scenario": "A random survey of 150 adults asked whether they belong to a union. 24 answered yes. Estimate the population proportion with a 95% confidence interval.",
  "givens": [
   "n = 150",
   "x = 24 (yes responses)",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who belong to a union. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 150\\) people, and \\(x = 24\\) said yes, so \\(\\hat{p} = x/n = 24/150 = 0.1600\\). Confidence level = 95%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 24\\) and \\(n(1-\\hat{p}) = 126\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 95% confidence, \\(z^* = 1.96\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.1600 \\times 0.8400}{150}} = \\sqrt{0.000896} = 0.0299\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.96 \\times 0.0299 = 0.0587\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.1600 - 0.0587 = 0.1013\\), upper = \\(0.1600 + 0.0587 = 0.2187\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that between 10% and 22% of people belong to a union. Across many samples, about 95% of such intervals would capture the true share."
   }
  ],
  "answer": "95% CI = (0.10, 0.22) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 20,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Volunteering",
  "scenario": "A random survey of 400 adults asked whether they volunteered in the past year. 212 answered yes. Estimate the population proportion with a 90% confidence interval.",
  "givens": [
   "n = 400",
   "x = 212 (yes responses)",
   "Confidence level = 90%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who volunteered in the past year. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 400\\) people, and \\(x = 212\\) said yes, so \\(\\hat{p} = x/n = 212/400 = 0.5300\\). Confidence level = 90%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 212\\) and \\(n(1-\\hat{p}) = 188\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 90% confidence, \\(z^* = 1.645\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.5300 \\times 0.4700}{400}} = \\sqrt{0.000623} = 0.0250\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.645 \\times 0.0250 = 0.0411\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.5300 - 0.0411 = 0.4889\\), upper = \\(0.5300 + 0.0411 = 0.5711\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 90% confident that between 49% and 57% of people volunteered in the past year. Across many samples, about 90% of such intervals would capture the true share."
   }
  ],
  "answer": "90% CI = (0.49, 0.57) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 21,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Social trust",
  "scenario": "A random survey of 90 adults asked whether they agree that most people can be trusted. 45 answered yes. Estimate the population proportion with a 95% confidence interval.",
  "givens": [
   "n = 90",
   "x = 45 (yes responses)",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who agree that most people can be trusted. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 90\\) people, and \\(x = 45\\) said yes, so \\(\\hat{p} = x/n = 45/90 = 0.5000\\). Confidence level = 95%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 45\\) and \\(n(1-\\hat{p}) = 45\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 95% confidence, \\(z^* = 1.96\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.5000 \\times 0.5000}{90}} = \\sqrt{0.002778} = 0.0527\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.96 \\times 0.0527 = 0.1033\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.5000 - 0.1033 = 0.3967\\), upper = \\(0.5000 + 0.1033 = 0.6033\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that between 40% and 60% of people agree that most people can be trusted. Across many samples, about 95% of such intervals would capture the true share."
   }
  ],
  "answer": "95% CI = (0.40, 0.60) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 22,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Education",
  "scenario": "A random survey of 220 adults asked whether they hold a bachelor's degree. 121 answered yes. Estimate the population proportion with a 95% confidence interval.",
  "givens": [
   "n = 220",
   "x = 121 (yes responses)",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who hold a bachelor's degree. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 220\\) people, and \\(x = 121\\) said yes, so \\(\\hat{p} = x/n = 121/220 = 0.5500\\). Confidence level = 95%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 121\\) and \\(n(1-\\hat{p}) = 99\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 95% confidence, \\(z^* = 1.96\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.5500 \\times 0.4500}{220}} = \\sqrt{0.001125} = 0.0335\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.96 \\times 0.0335 = 0.0657\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.5500 - 0.0657 = 0.4843\\), upper = \\(0.5500 + 0.0657 = 0.6157\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that between 48% and 62% of people hold a bachelor's degree. Across many samples, about 95% of such intervals would capture the true share."
   }
  ],
  "answer": "95% CI = (0.48, 0.62) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 23,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "News habits",
  "scenario": "A random survey of 160 adults asked whether they read the news every day. 96 answered yes. Estimate the population proportion with a 99% confidence interval.",
  "givens": [
   "n = 160",
   "x = 96 (yes responses)",
   "Confidence level = 99%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who read the news every day. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 160\\) people, and \\(x = 96\\) said yes, so \\(\\hat{p} = x/n = 96/160 = 0.6000\\). Confidence level = 99%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 96\\) and \\(n(1-\\hat{p}) = 64\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 99% confidence, \\(z^* = 2.576\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.6000 \\times 0.4000}{160}} = \\sqrt{0.001500} = 0.0387\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 2.576 \\times 0.0387 = 0.0998\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.6000 - 0.0998 = 0.5002\\), upper = \\(0.6000 + 0.0998 = 0.6998\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 99% confident that between 50% and 70% of people read the news every day. Across many samples, about 99% of such intervals would capture the true share."
   }
  ],
  "answer": "99% CI = (0.50, 0.70) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 24,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Policy support",
  "scenario": "A random survey of 500 adults asked whether they support a new bike-lane policy. 285 answered yes. Estimate the population proportion with a 95% confidence interval.",
  "givens": [
   "n = 500",
   "x = 285 (yes responses)",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who support a new bike-lane policy. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 500\\) people, and \\(x = 285\\) said yes, so \\(\\hat{p} = x/n = 285/500 = 0.5700\\). Confidence level = 95%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 285\\) and \\(n(1-\\hat{p}) = 215\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 95% confidence, \\(z^* = 1.96\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.5700 \\times 0.4300}{500}} = \\sqrt{0.000490} = 0.0221\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.96 \\times 0.0221 = 0.0434\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.5700 - 0.0434 = 0.5266\\), upper = \\(0.5700 + 0.0434 = 0.6134\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that between 53% and 61% of people support a new bike-lane policy. Across many samples, about 95% of such intervals would capture the true share."
   }
  ],
  "answer": "95% CI = (0.53, 0.61) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 25,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Workplace friendship",
  "scenario": "A random survey of 75 adults asked whether they have a close friend at work. 48 answered yes. Estimate the population proportion with a 90% confidence interval.",
  "givens": [
   "n = 75",
   "x = 48 (yes responses)",
   "Confidence level = 90%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who have a close friend at work. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 75\\) people, and \\(x = 48\\) said yes, so \\(\\hat{p} = x/n = 48/75 = 0.6400\\). Confidence level = 90%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 48\\) and \\(n(1-\\hat{p}) = 27\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 90% confidence, \\(z^* = 1.645\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.6400 \\times 0.3600}{75}} = \\sqrt{0.003072} = 0.0554\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.645 \\times 0.0554 = 0.0912\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.6400 - 0.0912 = 0.5488\\), upper = \\(0.6400 + 0.0912 = 0.7312\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 90% confident that between 55% and 73% of people have a close friend at work. Across many samples, about 90% of such intervals would capture the true share."
   }
  ],
  "answer": "90% CI = (0.55, 0.73) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 26,
  "type": "ci-prop",
  "typeLabel": "CI \u00b7 proportion",
  "path": "Estimate \u2192 proportion (yes/no) \u2192 confidence interval for a proportion (z*)",
  "title": "Remote work",
  "scenario": "A random survey of 260 adults asked whether they work from home at least part of the week. 143 answered yes. Estimate the population proportion with a 95% confidence interval.",
  "givens": [
   "n = 260",
   "x = 143 (yes responses)",
   "Confidence level = 95%"
  ],
  "steps": [
   {
    "q": "What are we estimating?",
    "a": "The population share of people who work from home at least part of the week. The outcome is yes/no, so we use a <strong>confidence interval for a proportion</strong>."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 260\\) people, and \\(x = 143\\) said yes, so \\(\\hat{p} = x/n = 143/260 = 0.5500\\). Confidence level = 95%."
   },
   {
    "q": "Check the normal approximation.",
    "a": "\\(n\\hat{p} = 143\\) and \\(n(1-\\hat{p}) = 117\\). Both are at least 10, so the sampling distribution of \\(\\hat{p}\\) is close enough to normal for the z-based interval."
   },
   {
    "q": "Find \\(z^*\\).",
    "a": "For 95% confidence, \\(z^* = 1.96\\) from the normal table."
   },
   {
    "q": "Compute the standard error. (The CI uses \\(\\hat{p}\\), not a null value.)",
    "a": "\\(SE = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\dfrac{0.5500 \\times 0.4500}{260}} = \\sqrt{0.000952} = 0.0309\\)"
   },
   {
    "q": "Compute the margin of error.",
    "a": "\\(z^* \\times SE = 1.96 \\times 0.0309 = 0.0605\\)"
   },
   {
    "q": "Build the interval.",
    "a": "\\(\\hat{p} \\pm ME\\): lower = \\(0.5500 - 0.0605 = 0.4895\\), upper = \\(0.5500 + 0.0605 = 0.6105\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "We are 95% confident that between 49% and 61% of people work from home at least part of the week. Across many samples, about 95% of such intervals would capture the true share."
   }
  ],
  "answer": "95% CI = (0.49, 0.61) as proportions, rounded to 2 significant figures."
 },
 {
  "id": 27,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Schooling in one city",
  "scenario": "A sample of 21 people reports an average years of formal schooling of 12.9 (SD = 2.0). Is this different from the national average of 12.2? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 21",
   "\u0232 = 12.9",
   "s = 2.0",
   "\u03bc\u2080 = 12.2",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 12.2\\) (the mean equals the national average). \\(H_A: \\mu \\neq 12.2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 21\\), \\(\\bar{Y} = 12.9\\), \\(s = 2.0\\), \\(\\mu_0 = 12.2\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 20\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 20 degrees of freedom: table row 20 gives \\(t_{crit} = 2.086\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.086\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.0}{\\sqrt{21}} = 0.4364\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{12.9 - 12.2}{0.4364} = \\dfrac{0.7}{0.4364} = 1.604\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 1.604 \\lt 2.086\\), so we fail to reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is not enough evidence that the mean years of formal schooling differs from the national average (12.2) (t = 1.6, df = 20, p &gt; .05)."
   }
  ],
  "answer": "t = 1.6 (df = 20), critical value = 2.086, so we fail to reject H\u2080."
 },
 {
  "id": 28,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Commute time",
  "scenario": "A sample of 31 people reports an average minutes of commute of 28.4 (SD = 9.6). Is this different from the city target of 25? Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "N = 31",
   "\u0232 = 28.4",
   "s = 9.6",
   "\u03bc\u2080 = 25",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 25\\) (the mean equals the city target). \\(H_A: \\mu > 25\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 31\\), \\(\\bar{Y} = 28.4\\), \\(s = 9.6\\), \\(\\mu_0 = 25\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 30\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), 30 degrees of freedom: table row 30 gives \\(t_{crit} = 1.697\\). Decision rule: reject \\(H_0\\) if \\(t > 1.697\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{9.6}{\\sqrt{31}} = 1.7242\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{28.4 - 25}{1.7242} = \\dfrac{3.4}{1.7242} = 1.972\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(t = 1.972 \\gt 1.697\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "The mean minutes of commute is significantly greater than the city target (25) (t = 2.0, df = 30, p &lt; .05)."
   }
  ],
  "answer": "t = 2.0 (df = 30), critical value = 1.697, so we reject H\u2080."
 },
 {
  "id": 29,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Social media use",
  "scenario": "A sample of 26 people reports an average hours per week on social media of 9.3 (SD = 3.1). Is this different from the survey benchmark of 8? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 26",
   "\u0232 = 9.3",
   "s = 3.1",
   "\u03bc\u2080 = 8",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 8\\) (the mean equals the survey benchmark). \\(H_A: \\mu \\neq 8\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 26\\), \\(\\bar{Y} = 9.3\\), \\(s = 3.1\\), \\(\\mu_0 = 8\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 25\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 25 degrees of freedom: table row 25 gives \\(t_{crit} = 2.060\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.060\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{3.1}{\\sqrt{26}} = 0.608\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{9.3 - 8}{0.608} = \\dfrac{1.3}{0.608} = 2.138\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 2.138 \\gt 2.060\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is a statistically significant difference between the mean hours per week on social media and the survey benchmark (8) (t = 2.1, df = 25, p &lt; .05)."
   }
  ],
  "answer": "t = 2.1 (df = 25), critical value = 2.060, so we reject H\u2080."
 },
 {
  "id": 30,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Volunteering",
  "scenario": "A sample of 61 people reports an average hours of volunteering per month of 3.6 (SD = 2.2). Is this different from the provincial average of 4? Use \u03b1 = 0.05, one-tailed, lower.",
  "givens": [
   "N = 61",
   "\u0232 = 3.6",
   "s = 2.2",
   "\u03bc\u2080 = 4",
   "\u03b1 = 0.05, one-tailed, lower"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 4\\) (the mean equals the provincial average). \\(H_A: \\mu < 4\\) (one-tailed, lower)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 61\\), \\(\\bar{Y} = 3.6\\), \\(s = 2.2\\), \\(\\mu_0 = 4\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 60\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), 60 degrees of freedom: table row 60 gives \\(t_{crit} = 1.671\\). Decision rule: reject \\(H_0\\) if \\(t < -1.671\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.2}{\\sqrt{61}} = 0.2817\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{3.6 - 4}{0.2817} = \\dfrac{\u22120.4}{0.2817} = \u22121.420\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(t = \u22121.420 \\gt \u22121.671\\), so we fail to reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is not enough evidence that the mean hours of volunteering per month is less than the provincial average (4) (t = \u22121.4, df = 60, p &gt; .05)."
   }
  ],
  "answer": "t = \u22121.4 (df = 60), critical value = 1.671, so we fail to reject H\u2080."
 },
 {
  "id": 31,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Household size",
  "scenario": "A sample of 21 people reports an average people per household of 2.9 (SD = 1.1). Is this different from the census average of 2.5? Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "N = 21",
   "\u0232 = 2.9",
   "s = 1.1",
   "\u03bc\u2080 = 2.5",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 2.5\\) (the mean equals the census average). \\(H_A: \\mu > 2.5\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 21\\), \\(\\bar{Y} = 2.9\\), \\(s = 1.1\\), \\(\\mu_0 = 2.5\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 20\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), 20 degrees of freedom: table row 20 gives \\(t_{crit} = 1.725\\). Decision rule: reject \\(H_0\\) if \\(t > 1.725\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{1.1}{\\sqrt{21}} = 0.24\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{2.9 - 2.5}{0.24} = \\dfrac{0.4}{0.24} = 1.666\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(t = 1.666 \\lt 1.725\\), so we fail to reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is not enough evidence that the mean people per household is greater than the census average (2.5) (t = 1.7, df = 20, p &gt; .05)."
   }
  ],
  "answer": "t = 1.7 (df = 20), critical value = 1.725, so we fail to reject H\u2080."
 },
 {
  "id": 32,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Neighbourhood trust",
  "scenario": "A sample of 41 people reports an average trust score (0\u201310) of 6.1 (SD = 2.3). Is this different from the scale midpoint of 5? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 41",
   "\u0232 = 6.1",
   "s = 2.3",
   "\u03bc\u2080 = 5",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 5\\) (the mean equals the scale midpoint). \\(H_A: \\mu \\neq 5\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 41\\), \\(\\bar{Y} = 6.1\\), \\(s = 2.3\\), \\(\\mu_0 = 5\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 40\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 40 degrees of freedom: table row 40 gives \\(t_{crit} = 2.021\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.021\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.3}{\\sqrt{41}} = 0.3592\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{6.1 - 5}{0.3592} = \\dfrac{1.1}{0.3592} = 3.062\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 3.062 \\gt 2.021\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is a statistically significant difference between the mean trust score (0\u201310) and the scale midpoint (5) (t = 3.1, df = 40, p &lt; .01)."
   }
  ],
  "answer": "t = 3.1 (df = 40), critical value = 2.021, so we reject H\u2080."
 },
 {
  "id": 33,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Sleep",
  "scenario": "A sample of 26 people reports an average hours of sleep per night of 6.6 (SD = 1.2). Is this different from the recommended amount of 7? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 26",
   "\u0232 = 6.6",
   "s = 1.2",
   "\u03bc\u2080 = 7",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 7\\) (the mean equals the recommended amount). \\(H_A: \\mu \\neq 7\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 26\\), \\(\\bar{Y} = 6.6\\), \\(s = 1.2\\), \\(\\mu_0 = 7\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 25\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 25 degrees of freedom: table row 25 gives \\(t_{crit} = 2.060\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.060\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{1.2}{\\sqrt{26}} = 0.2353\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{6.6 - 7}{0.2353} = \\dfrac{\u22120.4}{0.2353} = \u22121.700\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 1.700 \\lt 2.060\\), so we fail to reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is not enough evidence that the mean hours of sleep per night differs from the recommended amount (7) (t = \u22121.7, df = 25, p &gt; .05)."
   }
  ],
  "answer": "t = \u22121.7 (df = 25), critical value = 2.060, so we fail to reject H\u2080."
 },
 {
  "id": 34,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Civic knowledge",
  "scenario": "A sample of 121 people reports an average score on a 20-point quiz of 11.2 (SD = 3.5). Is this different from the passing mark of 12? Use \u03b1 = 0.05, one-tailed, lower.",
  "givens": [
   "N = 121",
   "\u0232 = 11.2",
   "s = 3.5",
   "\u03bc\u2080 = 12",
   "\u03b1 = 0.05, one-tailed, lower"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 12\\) (the mean equals the passing mark). \\(H_A: \\mu < 12\\) (one-tailed, lower)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 121\\), \\(\\bar{Y} = 11.2\\), \\(s = 3.5\\), \\(\\mu_0 = 12\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 120\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), 120 degrees of freedom: table row 120 gives \\(t_{crit} = 1.658\\). Decision rule: reject \\(H_0\\) if \\(t < -1.658\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{3.5}{\\sqrt{121}} = 0.3182\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{11.2 - 12}{0.3182} = \\dfrac{\u22120.8}{0.3182} = \u22122.514\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(t = \u22122.514 \\lt \u22121.658\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "The mean score on a 20-point quiz is significantly less than the passing mark (12) (t = \u22122.5, df = 120, p &lt; .01)."
   }
  ],
  "answer": "t = \u22122.5 (df = 120), critical value = 1.658, so we reject H\u2080."
 },
 {
  "id": 35,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Study time",
  "scenario": "A sample of 16 people reports an average hours of study per week of 17.9 (SD = 6.0). Is this different from the university guideline of 20? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 16",
   "\u0232 = 17.9",
   "s = 6.0",
   "\u03bc\u2080 = 20",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 20\\) (the mean equals the university guideline). \\(H_A: \\mu \\neq 20\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 16\\), \\(\\bar{Y} = 17.9\\), \\(s = 6.0\\), \\(\\mu_0 = 20\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 15\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 15 degrees of freedom: table row 15 gives \\(t_{crit} = 2.131\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.131\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{6.0}{\\sqrt{16}} = 1.5\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{17.9 - 20}{1.5} = \\dfrac{\u22122.1}{1.5} = \u22121.400\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 1.400 \\lt 2.131\\), so we fail to reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is not enough evidence that the mean hours of study per week differs from the university guideline (20) (t = \u22121.4, df = 15, p &gt; .05)."
   }
  ],
  "answer": "t = \u22121.4 (df = 15), critical value = 2.131, so we fail to reject H\u2080."
 },
 {
  "id": 36,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Life satisfaction",
  "scenario": "A sample of 31 people reports an average life satisfaction (0\u201310) of 7.4 (SD = 1.6). Is this different from the 2019 national mean of 6.9? Use \u03b1 = 0.01, two-tailed.",
  "givens": [
   "N = 31",
   "\u0232 = 7.4",
   "s = 1.6",
   "\u03bc\u2080 = 6.9",
   "\u03b1 = 0.01, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 6.9\\) (the mean equals the 2019 national mean). \\(H_A: \\mu \\neq 6.9\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 31\\), \\(\\bar{Y} = 7.4\\), \\(s = 1.6\\), \\(\\mu_0 = 6.9\\), \\(\\alpha = 0.01\\). Degrees of freedom: \\(df = N - 1 = 30\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.01\\), 30 degrees of freedom: table row 30 gives \\(t_{crit} = 2.750\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.750\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{1.6}{\\sqrt{31}} = 0.2874\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{7.4 - 6.9}{0.2874} = \\dfrac{0.5}{0.2874} = 1.740\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 1.740 \\lt 2.750\\), so we fail to reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is not enough evidence that the mean life satisfaction (0\u201310) differs from the 2019 national mean (6.9) (t = 1.7, df = 30, p &gt; .05)."
   }
  ],
  "answer": "t = 1.7 (df = 30), critical value = 2.750, so we fail to reject H\u2080."
 },
 {
  "id": 37,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Close friends",
  "scenario": "A sample of 61 people reports an average number of close friends of 4.6 (SD = 2.6). Is this different from the 2010 survey mean of 3? Use \u03b1 = 0.01, one-tailed, upper.",
  "givens": [
   "N = 61",
   "\u0232 = 4.6",
   "s = 2.6",
   "\u03bc\u2080 = 3",
   "\u03b1 = 0.01, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 3\\) (the mean equals the 2010 survey mean). \\(H_A: \\mu > 3\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 61\\), \\(\\bar{Y} = 4.6\\), \\(s = 2.6\\), \\(\\mu_0 = 3\\), \\(\\alpha = 0.01\\). Degrees of freedom: \\(df = N - 1 = 60\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.01\\), 60 degrees of freedom: table row 60 gives \\(t_{crit} = 2.390\\). Decision rule: reject \\(H_0\\) if \\(t > 2.390\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.6}{\\sqrt{61}} = 0.3329\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{4.6 - 3}{0.3329} = \\dfrac{1.6}{0.3329} = 4.806\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(t = 4.806 \\gt 2.390\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "The mean number of close friends is significantly greater than the 2010 survey mean (3) (t = 4.8, df = 60, p &lt; .001)."
   }
  ],
  "answer": "t = 4.8 (df = 60), critical value = 2.390, so we reject H\u2080."
 },
 {
  "id": 38,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Age at first job",
  "scenario": "A sample of 21 people reports an average age at first full-time job of 19.6 (SD = 2.4). Is this different from age 18 of 18? Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "N = 21",
   "\u0232 = 19.6",
   "s = 2.4",
   "\u03bc\u2080 = 18",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 18\\) (the mean equals age 18). \\(H_A: \\mu > 18\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 21\\), \\(\\bar{Y} = 19.6\\), \\(s = 2.4\\), \\(\\mu_0 = 18\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 20\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), 20 degrees of freedom: table row 20 gives \\(t_{crit} = 1.725\\). Decision rule: reject \\(H_0\\) if \\(t > 1.725\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.4}{\\sqrt{21}} = 0.5237\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{19.6 - 18}{0.5237} = \\dfrac{1.6}{0.5237} = 3.055\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(t = 3.055 \\gt 1.725\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "The mean age at first full-time job is significantly greater than age 18 (18) (t = 3.1, df = 20, p &lt; .01)."
   }
  ],
  "answer": "t = 3.1 (df = 20), critical value = 1.725, so we reject H\u2080."
 },
 {
  "id": 39,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Commute distance",
  "scenario": "A sample of 16 people reports an average km of commute of 10.1 (SD = 4.4). Is this different from the regional average of 12? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 16",
   "\u0232 = 10.1",
   "s = 4.4",
   "\u03bc\u2080 = 12",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 12\\) (the mean equals the regional average). \\(H_A: \\mu \\neq 12\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 16\\), \\(\\bar{Y} = 10.1\\), \\(s = 4.4\\), \\(\\mu_0 = 12\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 15\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 15 degrees of freedom: table row 15 gives \\(t_{crit} = 2.131\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.131\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{4.4}{\\sqrt{16}} = 1.1\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{10.1 - 12}{1.1} = \\dfrac{\u22121.9}{1.1} = \u22121.727\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 1.727 \\lt 2.131\\), so we fail to reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is not enough evidence that the mean km of commute differs from the regional average (12) (t = \u22121.7, df = 15, p &gt; .05)."
   }
  ],
  "answer": "t = \u22121.7 (df = 15), critical value = 2.131, so we fail to reject H\u2080."
 },
 {
  "id": 40,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Rent burden",
  "scenario": "A sample of 31 people reports an average percent of income spent on rent of 33.8 (SD = 6.4). Is this different from the 30% guideline of 30? Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "N = 31",
   "\u0232 = 33.8",
   "s = 6.4",
   "\u03bc\u2080 = 30",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 30\\) (the mean equals the 30% guideline). \\(H_A: \\mu > 30\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 31\\), \\(\\bar{Y} = 33.8\\), \\(s = 6.4\\), \\(\\mu_0 = 30\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 30\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), 30 degrees of freedom: table row 30 gives \\(t_{crit} = 1.697\\). Decision rule: reject \\(H_0\\) if \\(t > 1.697\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{6.4}{\\sqrt{31}} = 1.1495\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{33.8 - 30}{1.1495} = \\dfrac{3.8}{1.1495} = 3.306\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(t = 3.306 \\gt 1.697\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "The mean percent of income spent on rent is significantly greater than the 30% guideline (30) (t = 3.3, df = 30, p &lt; .01)."
   }
  ],
  "answer": "t = 3.3 (df = 30), critical value = 1.697, so we reject H\u2080."
 },
 {
  "id": 41,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Paid work",
  "scenario": "A sample of 41 people reports an average paid hours per week of 37.5 (SD = 5.2). Is this different from the 40-hour standard of 40? Use \u03b1 = 0.05, one-tailed, lower.",
  "givens": [
   "N = 41",
   "\u0232 = 37.5",
   "s = 5.2",
   "\u03bc\u2080 = 40",
   "\u03b1 = 0.05, one-tailed, lower"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 40\\) (the mean equals the 40-hour standard). \\(H_A: \\mu < 40\\) (one-tailed, lower)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 41\\), \\(\\bar{Y} = 37.5\\), \\(s = 5.2\\), \\(\\mu_0 = 40\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 40\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), 40 degrees of freedom: table row 40 gives \\(t_{crit} = 1.684\\). Decision rule: reject \\(H_0\\) if \\(t < -1.684\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{5.2}{\\sqrt{41}} = 0.8121\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{37.5 - 40}{0.8121} = \\dfrac{\u22122.5}{0.8121} = \u22123.078\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(t = \u22123.078 \\lt \u22121.684\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "The mean paid hours per week is significantly less than the 40-hour standard (40) (t = \u22123.1, df = 40, p &lt; .01)."
   }
  ],
  "answer": "t = \u22123.1 (df = 40), critical value = 1.684, so we reject H\u2080."
 },
 {
  "id": 42,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Test anxiety",
  "scenario": "A sample of 11 people reports an average anxiety score (0\u201350) of 27.3 (SD = 6.1). Is this different from the scale midpoint of 25? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 11",
   "\u0232 = 27.3",
   "s = 6.1",
   "\u03bc\u2080 = 25",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 25\\) (the mean equals the scale midpoint). \\(H_A: \\mu \\neq 25\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 11\\), \\(\\bar{Y} = 27.3\\), \\(s = 6.1\\), \\(\\mu_0 = 25\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 10\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 10 degrees of freedom: table row 10 gives \\(t_{crit} = 2.228\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.228\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{6.1}{\\sqrt{11}} = 1.8392\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{27.3 - 25}{1.8392} = \\dfrac{2.3}{1.8392} = 1.251\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 1.251 \\lt 2.228\\), so we fail to reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is not enough evidence that the mean anxiety score (0\u201350) differs from the scale midpoint (25) (t = 1.3, df = 10, p &gt; .05)."
   }
  ],
  "answer": "t = 1.3 (df = 10), critical value = 2.228, so we fail to reject H\u2080."
 },
 {
  "id": 43,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Years in neighbourhood",
  "scenario": "A sample of 26 people reports an average years living in the neighbourhood of 11.2 (SD = 4.0). Is this different from the city average of 9? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 26",
   "\u0232 = 11.2",
   "s = 4.0",
   "\u03bc\u2080 = 9",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 9\\) (the mean equals the city average). \\(H_A: \\mu \\neq 9\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 26\\), \\(\\bar{Y} = 11.2\\), \\(s = 4.0\\), \\(\\mu_0 = 9\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 25\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 25 degrees of freedom: table row 25 gives \\(t_{crit} = 2.060\\). Decision rule: reject \\(H_0\\) if \\(|t| > 2.060\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{4.0}{\\sqrt{26}} = 0.7845\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{11.2 - 9}{0.7845} = \\dfrac{2.2}{0.7845} = 2.804\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 2.804 \\gt 2.060\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is a statistically significant difference between the mean years living in the neighbourhood and the city average (9) (t = 2.8, df = 25, p &lt; .01)."
   }
  ],
  "answer": "t = 2.8 (df = 25), critical value = 2.060, so we reject H\u2080."
 },
 {
  "id": 44,
  "type": "t1",
  "typeLabel": "One-sample t",
  "path": "Test a claim \u2192 mean \u2192 one group compared with a known value \u2192 one-sample t",
  "title": "Screen time",
  "scenario": "A sample of 121 people reports an average hours of screen time per day of 5.4 (SD = 2.1). Is this different from the national average of 5? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "N = 121",
   "\u0232 = 5.4",
   "s = 2.1",
   "\u03bc\u2080 = 5",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "We are comparing one sample mean with a known or claimed value, and the outcome is numeric, so this is a <strong>one-sample t test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu = 5\\) (the mean equals the national average). \\(H_A: \\mu \\neq 5\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(N = 121\\), \\(\\bar{Y} = 5.4\\), \\(s = 2.1\\), \\(\\mu_0 = 5\\), \\(\\alpha = 0.05\\). Degrees of freedom: \\(df = N - 1 = 120\\)."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), 120 degrees of freedom: table row 120 gives \\(t_{crit} = 1.980\\). Decision rule: reject \\(H_0\\) if \\(|t| > 1.980\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\dfrac{s}{\\sqrt{N}} = \\dfrac{2.1}{\\sqrt{121}} = 0.1909\\)"
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y} - \\mu_0}{SE} = \\dfrac{5.4 - 5}{0.1909} = \\dfrac{0.4}{0.1909} = 2.095\\)"
   },
   {
    "q": "Compare the statistic with the critical value and decide.",
    "a": "\\(|t| = 2.095 \\gt 1.980\\), so we reject \\(H_0\\)."
   },
   {
    "q": "Interpret in plain language.",
    "a": "There is a statistically significant difference between the mean hours of screen time per day and the national average (5) (t = 2.1, df = 120, p &lt; .05)."
   }
  ],
  "answer": "t = 2.1 (df = 120), critical value = 1.980, so we reject H\u2080."
 },
 {
  "id": 45,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Study hours",
  "scenario": "Compare mean hours of study per week for students with a part-time job (N = 40, mean = 9.2, SD = 3.1) and students without one (N = 45, mean = 11.0, SD = 3.6). Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "students with a part-time job: N = 40, \u0232 = 9.2, s = 3.1",
   "students without one: N = 45, \u0232 = 11.0, s = 3.6",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean hours of study per week between students with a part-time job and students without one). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Students with a part-time job: \\(N_1 = 40\\), \\(\\bar{Y}_1 = 9.2\\), \\(s_1 = 3.1\\). Students without one: \\(N_2 = 45\\), \\(\\bar{Y}_2 = 11.0\\), \\(s_2 = 3.6\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.24025\\) and \\(b = s_2^2/N_2 = 0.288\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.52825} = 0.7268\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.27905}{0.0033651} = 82.9\\). Round down to 82."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), df = 82: table row 60 gives \\(t_{crit} = 2.000\\). The table has no row for 82, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(|t| > 2.000\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{9.2 - 11.0}{0.7268} = \\dfrac{\u22121.8}{0.7268} = \u22122.477\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 2.477 \\gt 2.000\\), so we reject \\(H_0\\). There is a statistically significant difference in mean hours of study per week between students with a part-time job and students without one (t = \u22122.5, Welch df \u2248 82.9, p &lt; .05)."
   }
  ],
  "answer": "t = \u22122.5 (Welch df = 82), critical value = \u00b12.000, so we reject H\u2080."
 },
 {
  "id": 46,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Commute",
  "scenario": "Compare mean minutes of commute for urban residents (N = 60, mean = 32.4, SD = 10.1) and suburban residents (N = 55, mean = 41.7, SD = 12.3). Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "urban residents: N = 60, \u0232 = 32.4, s = 10.1",
   "suburban residents: N = 55, \u0232 = 41.7, s = 12.3",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean minutes of commute between urban residents and suburban residents). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Urban residents: \\(N_1 = 60\\), \\(\\bar{Y}_1 = 32.4\\), \\(s_1 = 10.1\\). Suburban residents: \\(N_2 = 55\\), \\(\\bar{Y}_2 = 41.7\\), \\(s_2 = 12.3\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 1.70017\\) and \\(b = s_2^2/N_2 = 2.75073\\). \\(SE = \\sqrt{a + b} = \\sqrt{4.45089} = 2.1097\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{19.81046}{0.1891130} = 104.8\\). Round down to 104."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), df = 104: table row 60 gives \\(t_{crit} = 2.000\\). The table has no row for 104, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(|t| > 2.000\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{32.4 - 41.7}{2.1097} = \\dfrac{\u22129.3}{2.1097} = \u22124.408\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 4.408 \\gt 2.000\\), so we reject \\(H_0\\). There is a statistically significant difference in mean minutes of commute between urban residents and suburban residents (t = \u22124.4, Welch df \u2248 104.8, p &lt; .001)."
   }
  ],
  "answer": "t = \u22124.4 (Welch df = 104), critical value = \u00b12.000, so we reject H\u2080."
 },
 {
  "id": 47,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Trust",
  "scenario": "Compare mean trust score (0\u201310) for homeowners (N = 80, mean = 6.4, SD = 2.0) and renters (N = 70, mean = 5.6, SD = 2.3). Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "homeowners: N = 80, \u0232 = 6.4, s = 2.0",
   "renters: N = 70, \u0232 = 5.6, s = 2.3",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean trust score (0\u201310) between homeowners and renters). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Homeowners: \\(N_1 = 80\\), \\(\\bar{Y}_1 = 6.4\\), \\(s_1 = 2.0\\). Renters: \\(N_2 = 70\\), \\(\\bar{Y}_2 = 5.6\\), \\(s_2 = 2.3\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.05\\) and \\(b = s_2^2/N_2 = 0.07557\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.12557} = 0.3544\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.01577}{0.0001144} = 137.8\\). Round down to 137."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), df = 137: table row 120 gives \\(t_{crit} = 1.980\\). The table has no row for 137, so use the next row down, 120. Decision rule: reject \\(H_0\\) if \\(|t| > 1.980\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{6.4 - 5.6}{0.3544} = \\dfrac{0.8}{0.3544} = 2.258\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 2.258 \\gt 1.980\\), so we reject \\(H_0\\). There is a statistically significant difference in mean trust score (0\u201310) between homeowners and renters (t = 2.3, Welch df \u2248 137.8, p &lt; .05)."
   }
  ],
  "answer": "t = 2.3 (Welch df = 137), critical value = \u00b11.980, so we reject H\u2080."
 },
 {
  "id": 48,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Income",
  "scenario": "Compare mean income in $1,000s for urban residents (N = 90, mean = 58.2, SD = 14.6) and rural residents (N = 85, mean = 49.8, SD = 13.9). Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "urban residents: N = 90, \u0232 = 58.2, s = 14.6",
   "rural residents: N = 85, \u0232 = 49.8, s = 13.9",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean income in $1,000s between urban residents and rural residents). \\(H_A: \\mu_1 > \\mu_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Urban residents: \\(N_1 = 90\\), \\(\\bar{Y}_1 = 58.2\\), \\(s_1 = 14.6\\). Rural residents: \\(N_2 = 85\\), \\(\\bar{Y}_2 = 49.8\\), \\(s_2 = 13.9\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 2.36844\\) and \\(b = s_2^2/N_2 = 2.27306\\). \\(SE = \\sqrt{a + b} = \\sqrt{4.6415} = 2.1544\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{21.54355}{0.1245379} = 173.0\\). Round down to 172."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), df = 172: table row 120 gives \\(t_{crit} = 1.658\\). The table has no row for 172, so use the next row down, 120. Decision rule: reject \\(H_0\\) if \\(t > 1.658\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{58.2 - 49.8}{2.1544} = \\dfrac{8.4}{2.1544} = 3.899\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(t = 3.899 \\gt 1.658\\), so we reject \\(H_0\\). Urban residents have a significantly higher mean income in $1,000s than rural residents (t = 3.9, Welch df \u2248 173.0, p &lt; .001)."
   }
  ],
  "answer": "t = 3.9 (Welch df = 172), critical value = \u00b11.658, so we reject H\u2080."
 },
 {
  "id": 49,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Sleep",
  "scenario": "Compare mean hours of sleep per night for shift workers (N = 50, mean = 6.1, SD = 1.4) and day workers (N = 50, mean = 6.9, SD = 1.1). Use \u03b1 = 0.05, one-tailed, lower.",
  "givens": [
   "shift workers: N = 50, \u0232 = 6.1, s = 1.4",
   "day workers: N = 50, \u0232 = 6.9, s = 1.1",
   "\u03b1 = 0.05, one-tailed, lower"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean hours of sleep per night between shift workers and day workers). \\(H_A: \\mu_1 < \\mu_2\\) (one-tailed, lower)."
   },
   {
    "q": "What do we know?",
    "a": "Shift workers: \\(N_1 = 50\\), \\(\\bar{Y}_1 = 6.1\\), \\(s_1 = 1.4\\). Day workers: \\(N_2 = 50\\), \\(\\bar{Y}_2 = 6.9\\), \\(s_2 = 1.1\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.0392\\) and \\(b = s_2^2/N_2 = 0.0242\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.0634} = 0.2518\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.00402}{0.0000433} = 92.8\\). Round down to 92."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), df = 92: table row 60 gives \\(t_{crit} = 1.671\\). The table has no row for 92, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(t < -1.671\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{6.1 - 6.9}{0.2518} = \\dfrac{\u22120.8}{0.2518} = \u22123.177\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(t = \u22123.177 \\lt \u22121.671\\), so we reject \\(H_0\\). Shift workers have a significantly lower mean hours of sleep per night than day workers (t = \u22123.2, Welch df \u2248 92.8, p &lt; .01)."
   }
  ],
  "answer": "t = \u22123.2 (Welch df = 92), critical value = \u00b11.671, so we reject H\u2080."
 },
 {
  "id": 50,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Volunteer hours",
  "scenario": "Compare mean volunteer hours per month for members of a faith group (N = 35, mean = 6.8, SD = 4.1) and non-members (N = 40, mean = 5.0, SD = 3.2). Use \u03b1 = 0.01, two-tailed.",
  "givens": [
   "members of a faith group: N = 35, \u0232 = 6.8, s = 4.1",
   "non-members: N = 40, \u0232 = 5.0, s = 3.2",
   "\u03b1 = 0.01, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean volunteer hours per month between members of a faith group and non-members). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Members of a faith group: \\(N_1 = 35\\), \\(\\bar{Y}_1 = 6.8\\), \\(s_1 = 4.1\\). Non-members: \\(N_2 = 40\\), \\(\\bar{Y}_2 = 5.0\\), \\(s_2 = 3.2\\). Use \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.48029\\) and \\(b = s_2^2/N_2 = 0.256\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.73629} = 0.8581\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.54212}{0.0084650} = 64.0\\). Round down to 64."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.01\\), df = 64: table row 60 gives \\(t_{crit} = 2.660\\). The table has no row for 64, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(|t| > 2.660\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{6.8 - 5.0}{0.8581} = \\dfrac{1.8}{0.8581} = 2.098\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 2.098 \\lt 2.660\\), so we fail to reject \\(H_0\\). There is not enough evidence of a difference in mean volunteer hours per month between members of a faith group and non-members (t = 2.1, Welch df \u2248 64.0, p &lt; .05)."
   }
  ],
  "answer": "t = 2.1 (Welch df = 64), critical value = \u00b12.660, so we fail to reject H\u2080."
 },
 {
  "id": 51,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Screen time",
  "scenario": "Compare mean screen hours per day for students in residence (N = 25, mean = 5.9, SD = 1.8) and commuter students (N = 30, mean = 4.8, SD = 1.6). Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "students in residence: N = 25, \u0232 = 5.9, s = 1.8",
   "commuter students: N = 30, \u0232 = 4.8, s = 1.6",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean screen hours per day between students in residence and commuter students). \\(H_A: \\mu_1 > \\mu_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Students in residence: \\(N_1 = 25\\), \\(\\bar{Y}_1 = 5.9\\), \\(s_1 = 1.8\\). Commuter students: \\(N_2 = 30\\), \\(\\bar{Y}_2 = 4.8\\), \\(s_2 = 1.6\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.1296\\) and \\(b = s_2^2/N_2 = 0.08533\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.21493} = 0.4636\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.04620}{0.0009509} = 48.6\\). Round down to 48."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), df = 48: table row 40 gives \\(t_{crit} = 1.684\\). The table has no row for 48, so use the next row down, 40. Decision rule: reject \\(H_0\\) if \\(t > 1.684\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{5.9 - 4.8}{0.4636} = \\dfrac{1.1}{0.4636} = 2.373\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(t = 2.373 \\gt 1.684\\), so we reject \\(H_0\\). Students in residence have a significantly higher mean screen hours per day than commuter students (t = 2.4, Welch df \u2248 48.6, p &lt; .05)."
   }
  ],
  "answer": "t = 2.4 (Welch df = 48), critical value = \u00b11.684, so we reject H\u2080."
 },
 {
  "id": 52,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Test scores",
  "scenario": "Compare mean test score (0\u2013100) for students in small classes (N = 48, mean = 74.3, SD = 9.8) and students in large classes (N = 52, mean = 69.1, SD = 11.2). Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "students in small classes: N = 48, \u0232 = 74.3, s = 9.8",
   "students in large classes: N = 52, \u0232 = 69.1, s = 11.2",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean test score (0\u2013100) between students in small classes and students in large classes). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Students in small classes: \\(N_1 = 48\\), \\(\\bar{Y}_1 = 74.3\\), \\(s_1 = 9.8\\). Students in large classes: \\(N_2 = 52\\), \\(\\bar{Y}_2 = 69.1\\), \\(s_2 = 11.2\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 2.00083\\) and \\(b = s_2^2/N_2 = 2.41231\\). \\(SE = \\sqrt{a + b} = \\sqrt{4.41314} = 2.1007\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{19.47581}{0.1992798} = 97.7\\). Round down to 97."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), df = 97: table row 60 gives \\(t_{crit} = 2.000\\). The table has no row for 97, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(|t| > 2.000\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{74.3 - 69.1}{2.1007} = \\dfrac{5.2}{2.1007} = 2.475\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 2.475 \\gt 2.000\\), so we reject \\(H_0\\). There is a statistically significant difference in mean test score (0\u2013100) between students in small classes and students in large classes (t = 2.5, Welch df \u2248 97.7, p &lt; .05)."
   }
  ],
  "answer": "t = 2.5 (Welch df = 97), critical value = \u00b12.000, so we reject H\u2080."
 },
 {
  "id": 53,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Monthly savings",
  "scenario": "Compare mean monthly savings in $ for two-parent households (N = 60, mean = 340, SD = 210) and single-parent households (N = 55, mean = 255, SD = 180). Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "two-parent households: N = 60, \u0232 = 340, s = 210",
   "single-parent households: N = 55, \u0232 = 255, s = 180",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean monthly savings in $ between two-parent households and single-parent households). \\(H_A: \\mu_1 > \\mu_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Two-parent households: \\(N_1 = 60\\), \\(\\bar{Y}_1 = 340\\), \\(s_1 = 210\\). Single-parent households: \\(N_2 = 55\\), \\(\\bar{Y}_2 = 255\\), \\(s_2 = 180\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 735.0\\) and \\(b = s_2^2/N_2 = 589.09091\\). \\(SE = \\sqrt{a + b} = \\sqrt{1324.09091} = 36.3881\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{1753216.73554}{15582.8022132} = 112.5\\). Round down to 112."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), df = 112: table row 60 gives \\(t_{crit} = 1.671\\). The table has no row for 112, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(t > 1.671\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{340 - 255}{36.3881} = \\dfrac{85}{36.3881} = 2.336\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(t = 2.336 \\gt 1.671\\), so we reject \\(H_0\\). Two-parent households have a significantly higher mean monthly savings in $ than single-parent households (t = 2.3, Welch df \u2248 112.5, p &lt; .05)."
   }
  ],
  "answer": "t = 2.3 (Welch df = 112), critical value = \u00b11.671, so we reject H\u2080."
 },
 {
  "id": 54,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Political interest",
  "scenario": "Compare mean interest score (1\u20137) for voters (N = 110, mean = 5.1, SD = 1.4) and non-voters (N = 60, mean = 3.9, SD = 1.6). Use \u03b1 = 0.01, two-tailed.",
  "givens": [
   "voters: N = 110, \u0232 = 5.1, s = 1.4",
   "non-voters: N = 60, \u0232 = 3.9, s = 1.6",
   "\u03b1 = 0.01, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean interest score (1\u20137) between voters and non-voters). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Voters: \\(N_1 = 110\\), \\(\\bar{Y}_1 = 5.1\\), \\(s_1 = 1.4\\). Non-voters: \\(N_2 = 60\\), \\(\\bar{Y}_2 = 3.9\\), \\(s_2 = 1.6\\). Use \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.01782\\) and \\(b = s_2^2/N_2 = 0.04267\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.06048} = 0.2459\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.00366}{0.0000338} = 108.3\\). Round down to 108."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.01\\), df = 108: table row 60 gives \\(t_{crit} = 2.660\\). The table has no row for 108, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(|t| > 2.660\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{5.1 - 3.9}{0.2459} = \\dfrac{1.2}{0.2459} = 4.879\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 4.879 \\gt 2.660\\), so we reject \\(H_0\\). There is a statistically significant difference in mean interest score (1\u20137) between voters and non-voters (t = 4.9, Welch df \u2248 108.3, p &lt; .001)."
   }
  ],
  "answer": "t = 4.9 (Welch df = 108), critical value = \u00b12.660, so we reject H\u2080."
 },
 {
  "id": 55,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Commute cost",
  "scenario": "Compare mean weekly commute cost in $ for car commuters (N = 45, mean = 46.2, SD = 12.5) and transit commuters (N = 50, mean = 28.4, SD = 9.1). Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "car commuters: N = 45, \u0232 = 46.2, s = 12.5",
   "transit commuters: N = 50, \u0232 = 28.4, s = 9.1",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean weekly commute cost in $ between car commuters and transit commuters). \\(H_A: \\mu_1 > \\mu_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Car commuters: \\(N_1 = 45\\), \\(\\bar{Y}_1 = 46.2\\), \\(s_1 = 12.5\\). Transit commuters: \\(N_2 = 50\\), \\(\\bar{Y}_2 = 28.4\\), \\(s_2 = 9.1\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 3.47222\\) and \\(b = s_2^2/N_2 = 1.6562\\). \\(SE = \\sqrt{a + b} = \\sqrt{5.12842} = 2.2646\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{26.30071}{0.3299870} = 79.7\\). Round down to 79."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), df = 79: table row 60 gives \\(t_{crit} = 1.671\\). The table has no row for 79, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(t > 1.671\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{46.2 - 28.4}{2.2646} = \\dfrac{17.8}{2.2646} = 7.860\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(t = 7.860 \\gt 1.671\\), so we reject \\(H_0\\). Car commuters have a significantly higher mean weekly commute cost in $ than transit commuters (t = 7.9, Welch df \u2248 79.7, p &lt; .001)."
   }
  ],
  "answer": "t = 7.9 (Welch df = 79), critical value = \u00b11.671, so we reject H\u2080."
 },
 {
  "id": 56,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Neighbourhood safety",
  "scenario": "Compare mean safety rating (1\u201310) for residents of ward A (N = 70, mean = 6.0, SD = 2.4) and residents of ward B (N = 75, mean = 6.9, SD = 2.1). Use \u03b1 = 0.05, one-tailed, lower.",
  "givens": [
   "residents of ward A: N = 70, \u0232 = 6.0, s = 2.4",
   "residents of ward B: N = 75, \u0232 = 6.9, s = 2.1",
   "\u03b1 = 0.05, one-tailed, lower"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean safety rating (1\u201310) between residents of ward A and residents of ward B). \\(H_A: \\mu_1 < \\mu_2\\) (one-tailed, lower)."
   },
   {
    "q": "What do we know?",
    "a": "Residents of ward A: \\(N_1 = 70\\), \\(\\bar{Y}_1 = 6.0\\), \\(s_1 = 2.4\\). Residents of ward B: \\(N_2 = 75\\), \\(\\bar{Y}_2 = 6.9\\), \\(s_2 = 2.1\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.08229\\) and \\(b = s_2^2/N_2 = 0.0588\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.14109} = 0.3756\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.01991}{0.0001449} = 137.4\\). Round down to 137."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), df = 137: table row 120 gives \\(t_{crit} = 1.658\\). The table has no row for 137, so use the next row down, 120. Decision rule: reject \\(H_0\\) if \\(t < -1.658\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{6.0 - 6.9}{0.3756} = \\dfrac{\u22120.9}{0.3756} = \u22122.396\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(t = \u22122.396 \\lt \u22121.658\\), so we reject \\(H_0\\). Residents of ward A have a significantly lower mean safety rating (1\u201310) than residents of ward B (t = \u22122.4, Welch df \u2248 137.4, p &lt; .01)."
   }
  ],
  "answer": "t = \u22122.4 (Welch df = 137), critical value = \u00b11.658, so we reject H\u2080."
 },
 {
  "id": 57,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Age at marriage",
  "scenario": "Compare mean age at first marriage for women with a degree (N = 40, mean = 29.1, SD = 4.4) and women without a degree (N = 45, mean = 26.3, SD = 3.9). Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "women with a degree: N = 40, \u0232 = 29.1, s = 4.4",
   "women without a degree: N = 45, \u0232 = 26.3, s = 3.9",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean age at first marriage between women with a degree and women without a degree). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Women with a degree: \\(N_1 = 40\\), \\(\\bar{Y}_1 = 29.1\\), \\(s_1 = 4.4\\). Women without a degree: \\(N_2 = 45\\), \\(\\bar{Y}_2 = 26.3\\), \\(s_2 = 3.9\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.484\\) and \\(b = s_2^2/N_2 = 0.338\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.822} = 0.9066\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.67568}{0.0086030} = 78.5\\). Round down to 78."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), df = 78: table row 60 gives \\(t_{crit} = 2.000\\). The table has no row for 78, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(|t| > 2.000\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{29.1 - 26.3}{0.9066} = \\dfrac{2.8}{0.9066} = 3.088\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 3.088 \\gt 2.000\\), so we reject \\(H_0\\). There is a statistically significant difference in mean age at first marriage between women with a degree and women without a degree (t = 3.1, Welch df \u2248 78.5, p &lt; .01)."
   }
  ],
  "answer": "t = 3.1 (Welch df = 78), critical value = \u00b12.000, so we reject H\u2080."
 },
 {
  "id": 58,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Internet use",
  "scenario": "Compare mean hours online per day for adults 65 and over (N = 60, mean = 3.4, SD = 1.9) and adults under 35 (N = 60, mean = 6.2, SD = 2.3). Use \u03b1 = 0.01, two-tailed.",
  "givens": [
   "adults 65 and over: N = 60, \u0232 = 3.4, s = 1.9",
   "adults under 35: N = 60, \u0232 = 6.2, s = 2.3",
   "\u03b1 = 0.01, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean hours online per day between adults 65 and over and adults under 35). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Adults 65 and over: \\(N_1 = 60\\), \\(\\bar{Y}_1 = 3.4\\), \\(s_1 = 1.9\\). Adults under 35: \\(N_2 = 60\\), \\(\\bar{Y}_2 = 6.2\\), \\(s_2 = 2.3\\). Use \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.06017\\) and \\(b = s_2^2/N_2 = 0.08817\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.14833} = 0.3851\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.02200}{0.0001931} = 113.9\\). Round down to 113."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.01\\), df = 113: table row 60 gives \\(t_{crit} = 2.660\\). The table has no row for 113, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(|t| > 2.660\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{3.4 - 6.2}{0.3851} = \\dfrac{\u22122.8}{0.3851} = \u22127.270\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 7.270 \\gt 2.660\\), so we reject \\(H_0\\). There is a statistically significant difference in mean hours online per day between adults 65 and over and adults under 35 (t = \u22127.3, Welch df \u2248 113.9, p &lt; .001)."
   }
  ],
  "answer": "t = \u22127.3 (Welch df = 113), critical value = \u00b12.660, so we reject H\u2080."
 },
 {
  "id": 59,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Exam preparation",
  "scenario": "Compare mean study hours before an exam for first-year students (N = 36, mean = 8.1, SD = 2.6) and upper-year students (N = 33, mean = 7.0, SD = 2.2). Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "first-year students: N = 36, \u0232 = 8.1, s = 2.6",
   "upper-year students: N = 33, \u0232 = 7.0, s = 2.2",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean study hours before an exam between first-year students and upper-year students). \\(H_A: \\mu_1 \\neq \\mu_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "First-year students: \\(N_1 = 36\\), \\(\\bar{Y}_1 = 8.1\\), \\(s_1 = 2.6\\). Upper-year students: \\(N_2 = 33\\), \\(\\bar{Y}_2 = 7.0\\), \\(s_2 = 2.2\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.18778\\) and \\(b = s_2^2/N_2 = 0.14667\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.33444} = 0.5783\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.11185}{0.0016797} = 66.6\\). Round down to 66."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\), df = 66: table row 60 gives \\(t_{crit} = 2.000\\). The table has no row for 66, so use the next row down, 60. Decision rule: reject \\(H_0\\) if \\(|t| > 2.000\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{8.1 - 7.0}{0.5783} = \\dfrac{1.1}{0.5783} = 1.902\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|t| = 1.902 \\lt 2.000\\), so we fail to reject \\(H_0\\). There is not enough evidence of a difference in mean study hours before an exam between first-year students and upper-year students (t = 1.9, Welch df \u2248 66.6, p &gt; .05)."
   }
  ],
  "answer": "t = 1.9 (Welch df = 66), critical value = \u00b12.000, so we fail to reject H\u2080."
 },
 {
  "id": 60,
  "type": "t2",
  "typeLabel": "Two-sample t",
  "path": "Test a claim \u2192 mean \u2192 two groups \u2192 two-sample t (Welch)",
  "title": "Gym visits",
  "scenario": "Compare mean visits per month for members who joined in January (N = 28, mean = 6.4, SD = 2.9) and members who joined later (N = 32, mean = 4.9, SD = 2.4). Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "members who joined in January: N = 28, \u0232 = 6.4, s = 2.9",
   "members who joined later: N = 32, \u0232 = 4.9, s = 2.4",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two independent groups compared on a numeric outcome, so this is a <strong>two-sample t test</strong>. The groups may have different spreads, so we use the unequal-variance (Welch) version, the same method as the decision tree."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\mu_1 = \\mu_2\\) (no difference in mean visits per month between members who joined in January and members who joined later). \\(H_A: \\mu_1 > \\mu_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Members who joined in January: \\(N_1 = 28\\), \\(\\bar{Y}_1 = 6.4\\), \\(s_1 = 2.9\\). Members who joined later: \\(N_2 = 32\\), \\(\\bar{Y}_2 = 4.9\\), \\(s_2 = 2.4\\). Use \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(a = s_1^2/N_1 = 0.30036\\) and \\(b = s_2^2/N_2 = 0.18\\). \\(SE = \\sqrt{a + b} = \\sqrt{0.48036} = 0.6931\\)"
   },
   {
    "q": "Compute the Welch degrees of freedom.",
    "a": "\\(df = \\dfrac{(a+b)^2}{a^2/(N_1-1) + b^2/(N_2-1)} = \\dfrac{0.23074}{0.0043864} = 52.6\\). Round down to 52."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\), df = 52: table row 40 gives \\(t_{crit} = 1.684\\). The table has no row for 52, so use the next row down, 40. Decision rule: reject \\(H_0\\) if \\(t > 1.684\\)."
   },
   {
    "q": "Compute the test statistic.",
    "a": "\\(t = \\dfrac{\\bar{Y}_1 - \\bar{Y}_2}{SE} = \\dfrac{6.4 - 4.9}{0.6931} = \\dfrac{1.5}{0.6931} = 2.164\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(t = 2.164 \\gt 1.684\\), so we reject \\(H_0\\). Members who joined in January have a significantly higher mean visits per month than members who joined later (t = 2.2, Welch df \u2248 52.6, p &lt; .05)."
   }
  ],
  "answer": "t = 2.2 (Welch df = 52), critical value = \u00b11.684, so we reject H\u2080."
 },
 {
  "id": 61,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Transit use",
  "scenario": "A random sample of 400 adults was asked whether they usually ride transit to work. 74 said yes. Compare this with the city target of 20%. Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "n = 400",
   "x = 74",
   "\u03c0\u2080 = 0.20",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.20\\) (the share equals the city target of 20%). \\(H_A: \\pi \\neq 0.20\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 400\\), \\(x = 74\\), so \\(\\hat{p} = x/n = 74/400 = 0.1850\\). \\(\\pi_0 = 0.20\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 80\\) and \\(n(1-\\pi_0) = 320\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.20 \\times 0.80}{400}} = 0.0200\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.1850 - 0.20}{0.0200} = \u22120.750\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 0.750 \\lt 1.96\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who usually ride transit to work differs from the city target of 20% (z = \u22120.75, p &gt; .05)."
   }
  ],
  "answer": "z = \u22120.75, critical value = \u00b11.96, so we fail to reject H\u2080."
 },
 {
  "id": 62,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Voter turnout",
  "scenario": "A random sample of 350 adults was asked whether they voted in the last election. 238 said yes. Compare this with the 60% turnout reported in 2018. Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "n = 350",
   "x = 238",
   "\u03c0\u2080 = 0.60",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.60\\) (the share equals the 60% turnout reported in 2018). \\(H_A: \\pi \\neq 0.60\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 350\\), \\(x = 238\\), so \\(\\hat{p} = x/n = 238/350 = 0.6800\\). \\(\\pi_0 = 0.60\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 210\\) and \\(n(1-\\pi_0) = 140\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.60 \\times 0.40}{350}} = 0.0262\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.6800 - 0.60}{0.0262} = 3.055\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 3.055 \\gt 1.96\\), so we reject \\(H_0\\). The share who voted in the last election is significantly different from the 60% turnout reported in 2018 (z = 3.1, p &lt; .01)."
   }
  ],
  "answer": "z = 3.1, critical value = \u00b11.96, so we reject H\u2080."
 },
 {
  "id": 63,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Home ownership",
  "scenario": "A random sample of 180 adults was asked whether they own their home. 107 said yes. Compare this with the regional rate of 65%. Use \u03b1 = 0.05, one-tailed, lower.",
  "givens": [
   "n = 180",
   "x = 107",
   "\u03c0\u2080 = 0.65",
   "\u03b1 = 0.05, one-tailed, lower"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.65\\) (the share equals the regional rate of 65%). \\(H_A: \\pi < 0.65\\) (one-tailed, lower)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 180\\), \\(x = 107\\), so \\(\\hat{p} = x/n = 107/180 = 0.5944\\). \\(\\pi_0 = 0.65\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 117\\) and \\(n(1-\\pi_0) = 63\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z < -1.645\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.65 \\times 0.35}{180}} = 0.0356\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.5944 - 0.65}{0.0356} = \u22121.563\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = \u22121.563 \\gt \u22121.645\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who own their home is lower than the regional rate of 65% (z = \u22121.6, p &gt; .05)."
   }
  ],
  "answer": "z = \u22121.6, critical value = \u22121.645, so we fail to reject H\u2080."
 },
 {
  "id": 64,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Bachelor's degree",
  "scenario": "A random sample of 250 adults was asked whether they hold a bachelor's degree. 100 said yes. Compare this with the 35% benchmark. Use \u03b1 = 0.01, two-tailed.",
  "givens": [
   "n = 250",
   "x = 100",
   "\u03c0\u2080 = 0.35",
   "\u03b1 = 0.01, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.35\\) (the share equals the 35% benchmark). \\(H_A: \\pi \\neq 0.35\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 250\\), \\(x = 100\\), so \\(\\hat{p} = x/n = 100/250 = 0.4000\\). \\(\\pi_0 = 0.35\\) and \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 87.5\\) and \\(n(1-\\pi_0) = 162.5\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.01\\): \\(z_{crit} = 2.576\\). Decision rule: reject \\(H_0\\) if \\(|z| > 2.576\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.35 \\times 0.65}{250}} = 0.0302\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.4000 - 0.35}{0.0302} = 1.657\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 1.657 \\lt 2.576\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who hold a bachelor's degree differs from the 35% benchmark (z = 1.7, p &gt; .05)."
   }
  ],
  "answer": "z = 1.7, critical value = \u00b12.576, so we fail to reject H\u2080."
 },
 {
  "id": 65,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Health insurance",
  "scenario": "A random sample of 300 adults was asked whether they have workplace health insurance. 231 said yes. Compare this with the 70% benchmark. Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "n = 300",
   "x = 231",
   "\u03c0\u2080 = 0.70",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.70\\) (the share equals the 70% benchmark). \\(H_A: \\pi > 0.70\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 300\\), \\(x = 231\\), so \\(\\hat{p} = x/n = 231/300 = 0.7700\\). \\(\\pi_0 = 0.70\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 210\\) and \\(n(1-\\pi_0) = 90\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z > 1.645\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.70 \\times 0.30}{300}} = 0.0265\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.7700 - 0.70}{0.0265} = 2.646\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = 2.646 \\gt 1.645\\), so we reject \\(H_0\\). The share who have workplace health insurance is significantly higher than the 70% benchmark (z = 2.6, p &lt; .01)."
   }
  ],
  "answer": "z = 2.6, critical value = 1.645, so we reject H\u2080."
 },
 {
  "id": 66,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Union membership",
  "scenario": "A random sample of 150 adults was asked whether they belong to a union. 27 said yes. Compare this with the 12% benchmark. Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "n = 150",
   "x = 27",
   "\u03c0\u2080 = 0.12",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.12\\) (the share equals the 12% benchmark). \\(H_A: \\pi > 0.12\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 150\\), \\(x = 27\\), so \\(\\hat{p} = x/n = 27/150 = 0.1800\\). \\(\\pi_0 = 0.12\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 18\\) and \\(n(1-\\pi_0) = 132\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z > 1.645\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.12 \\times 0.88}{150}} = 0.0265\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.1800 - 0.12}{0.0265} = 2.261\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = 2.261 \\gt 1.645\\), so we reject \\(H_0\\). The share who belong to a union is significantly higher than the 12% benchmark (z = 2.3, p &lt; .05)."
   }
  ],
  "answer": "z = 2.3, critical value = 1.645, so we reject H\u2080."
 },
 {
  "id": 67,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Park levy support",
  "scenario": "A random sample of 220 adults was asked whether they support the new park levy. 90 said yes. Compare this with the 50% benchmark. Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "n = 220",
   "x = 90",
   "\u03c0\u2080 = 0.50",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.50\\) (the share equals the 50% benchmark). \\(H_A: \\pi \\neq 0.50\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 220\\), \\(x = 90\\), so \\(\\hat{p} = x/n = 90/220 = 0.4091\\). \\(\\pi_0 = 0.50\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 110\\) and \\(n(1-\\pi_0) = 110\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.50 \\times 0.50}{220}} = 0.0337\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.4091 - 0.50}{0.0337} = \u22122.697\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 2.697 \\gt 1.96\\), so we reject \\(H_0\\). The share who support the new park levy is significantly different from the 50% benchmark (z = \u22122.7, p &lt; .01)."
   }
  ],
  "answer": "z = \u22122.7, critical value = \u00b11.96, so we reject H\u2080."
 },
 {
  "id": 68,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Remote work",
  "scenario": "A random sample of 200 adults was asked whether they work from home most days. 66 said yes. Compare this with the 25% benchmark. Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "n = 200",
   "x = 66",
   "\u03c0\u2080 = 0.25",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.25\\) (the share equals the 25% benchmark). \\(H_A: \\pi \\neq 0.25\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 200\\), \\(x = 66\\), so \\(\\hat{p} = x/n = 66/200 = 0.3300\\). \\(\\pi_0 = 0.25\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 50\\) and \\(n(1-\\pi_0) = 150\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.25 \\times 0.75}{200}} = 0.0306\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.3300 - 0.25}{0.0306} = 2.613\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 2.613 \\gt 1.96\\), so we reject \\(H_0\\). The share who work from home most days is significantly different from the 25% benchmark (z = 2.6, p &lt; .01)."
   }
  ],
  "answer": "z = 2.6, critical value = \u00b11.96, so we reject H\u2080."
 },
 {
  "id": 69,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Volunteering",
  "scenario": "A random sample of 120 adults was asked whether they volunteered this year. 40 said yes. Compare this with the 40% benchmark. Use \u03b1 = 0.01, one-tailed, lower.",
  "givens": [
   "n = 120",
   "x = 40",
   "\u03c0\u2080 = 0.40",
   "\u03b1 = 0.01, one-tailed, lower"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.40\\) (the share equals the 40% benchmark). \\(H_A: \\pi < 0.40\\) (one-tailed, lower)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 120\\), \\(x = 40\\), so \\(\\hat{p} = x/n = 40/120 = 0.3333\\). \\(\\pi_0 = 0.40\\) and \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 48\\) and \\(n(1-\\pi_0) = 72\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.01\\): \\(z_{crit} = 2.326\\). Decision rule: reject \\(H_0\\) if \\(z < -2.326\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.40 \\times 0.60}{120}} = 0.0447\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.3333 - 0.40}{0.0447} = \u22121.491\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = \u22121.491 \\gt \u22122.326\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who volunteered this year is lower than the 40% benchmark (z = \u22121.5, p &gt; .05)."
   }
  ],
  "answer": "z = \u22121.5, critical value = \u22122.326, so we fail to reject H\u2080."
 },
 {
  "id": 70,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Cycling to work",
  "scenario": "A random sample of 400 adults was asked whether they commute by bike. 46 said yes. Compare this with the 8% benchmark. Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "n = 400",
   "x = 46",
   "\u03c0\u2080 = 0.08",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.08\\) (the share equals the 8% benchmark). \\(H_A: \\pi > 0.08\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 400\\), \\(x = 46\\), so \\(\\hat{p} = x/n = 46/400 = 0.1150\\). \\(\\pi_0 = 0.08\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 32\\) and \\(n(1-\\pi_0) = 368\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z > 1.645\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.08 \\times 0.92}{400}} = 0.0136\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.1150 - 0.08}{0.0136} = 2.580\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = 2.580 \\gt 1.645\\), so we reject \\(H_0\\). The share who commute by bike is significantly higher than the 8% benchmark (z = 2.6, p &lt; .01)."
   }
  ],
  "answer": "z = 2.6, critical value = 1.645, so we reject H\u2080."
 },
 {
  "id": 71,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Phone use while driving",
  "scenario": "A random sample of 260 adults was asked whether they report using a phone while driving. 58 said yes. Compare this with the 30% benchmark. Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "n = 260",
   "x = 58",
   "\u03c0\u2080 = 0.30",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.30\\) (the share equals the 30% benchmark). \\(H_A: \\pi \\neq 0.30\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 260\\), \\(x = 58\\), so \\(\\hat{p} = x/n = 58/260 = 0.2231\\). \\(\\pi_0 = 0.30\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 78\\) and \\(n(1-\\pi_0) = 182\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.30 \\times 0.70}{260}} = 0.0284\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.2231 - 0.30}{0.0284} = \u22122.707\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 2.707 \\gt 1.96\\), so we reject \\(H_0\\). The share who report using a phone while driving is significantly different from the 30% benchmark (z = \u22122.7, p &lt; .01)."
   }
  ],
  "answer": "z = \u22122.7, critical value = \u00b11.96, so we reject H\u2080."
 },
 {
  "id": 72,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Food insecurity",
  "scenario": "A random sample of 180 adults was asked whether they report food insecurity. 22 said yes. Compare this with the 15% benchmark. Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "n = 180",
   "x = 22",
   "\u03c0\u2080 = 0.15",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.15\\) (the share equals the 15% benchmark). \\(H_A: \\pi > 0.15\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 180\\), \\(x = 22\\), so \\(\\hat{p} = x/n = 22/180 = 0.1222\\). \\(\\pi_0 = 0.15\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 27\\) and \\(n(1-\\pi_0) = 153\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z > 1.645\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.15 \\times 0.85}{180}} = 0.0266\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.1222 - 0.15}{0.0266} = \u22121.044\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = \u22121.044 \\lt 1.645\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who report food insecurity is higher than the 15% benchmark (z = \u22121.0, p &gt; .05)."
   }
  ],
  "answer": "z = \u22121.0, critical value = 1.645, so we fail to reject H\u2080."
 },
 {
  "id": 73,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Second language",
  "scenario": "A random sample of 150 adults was asked whether they speak a second language at home. 41 said yes. Compare this with the 22% benchmark. Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "n = 150",
   "x = 41",
   "\u03c0\u2080 = 0.22",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.22\\) (the share equals the 22% benchmark). \\(H_A: \\pi \\neq 0.22\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 150\\), \\(x = 41\\), so \\(\\hat{p} = x/n = 41/150 = 0.2733\\). \\(\\pi_0 = 0.22\\) and \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 33\\) and \\(n(1-\\pi_0) = 117\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.22 \\times 0.78}{150}} = 0.0338\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.2733 - 0.22}{0.0338} = 1.577\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 1.577 \\lt 1.96\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who speak a second language at home differs from the 22% benchmark (z = 1.6, p &gt; .05)."
   }
  ],
  "answer": "z = 1.6, critical value = \u00b11.96, so we fail to reject H\u2080."
 },
 {
  "id": 74,
  "type": "z1",
  "typeLabel": "One-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 one group compared with a known value \u2192 one-proportion z",
  "title": "Home internet",
  "scenario": "A random sample of 400 adults was asked whether they have home internet. 344 said yes. Compare this with the 90% benchmark. Use \u03b1 = 0.01, one-tailed, lower.",
  "givens": [
   "n = 400",
   "x = 344",
   "\u03c0\u2080 = 0.90",
   "\u03b1 = 0.01, one-tailed, lower"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "One yes/no sample compared with a known or claimed proportion \\(\\pi_0\\), so this is a <strong>one-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi = 0.90\\) (the share equals the 90% benchmark). \\(H_A: \\pi < 0.90\\) (one-tailed, lower)."
   },
   {
    "q": "What do we know?",
    "a": "\\(n = 400\\), \\(x = 344\\), so \\(\\hat{p} = x/n = 344/400 = 0.8600\\). \\(\\pi_0 = 0.90\\) and \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Check the conditions.",
    "a": "\\(n\\pi_0 = 360\\) and \\(n(1-\\pi_0) = 40\\). Both are at least 10, so the normal approximation works."
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.01\\): \\(z_{crit} = 2.326\\). Decision rule: reject \\(H_0\\) if \\(z < -2.326\\)."
   },
   {
    "q": "Compute the standard error under \\(H_0\\).",
    "a": "Use \\(\\pi_0\\), not \\(\\hat{p}\\), because the test assumes \\(H_0\\) is true: \\(SE = \\sqrt{\\dfrac{\\pi_0(1-\\pi_0)}{n}} = \\sqrt{\\dfrac{0.90 \\times 0.10}{400}} = 0.0150\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p} - \\pi_0}{SE} = \\dfrac{0.8600 - 0.90}{0.0150} = \u22122.667\\)"
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = \u22122.667 \\lt \u22122.326\\), so we reject \\(H_0\\). The share who have home internet is significantly lower than the 90% benchmark (z = \u22122.7, p &lt; .01)."
   }
  ],
  "answer": "z = \u22122.7, critical value = \u22122.326, so we reject H\u2080."
 },
 {
  "id": 75,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Vaccination",
  "scenario": "Among Group A (urban), 150 of 200 were vaccinated this year. Among Group B (rural), 126 of 180 did. Is the share different between the groups? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "Group A (urban): x = 150, n = 200",
   "Group B (rural): x = 126, n = 180",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Group A (urban): \\(x_1 = 150\\), \\(n_1 = 200\\), \\(\\hat{p}_1 = 0.7500\\). Group B (rural): \\(x_2 = 126\\), \\(n_2 = 180\\), \\(\\hat{p}_2 = 0.7000\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{276}{380} = 0.7263\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.7263 \\times 0.2737 \\times 0.010556} = 0.0458\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.7500 - 0.7000}{0.0458} = 1.092\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 1.092 \\lt 1.96\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who were vaccinated this year differs between Group A (urban) and Group B (rural) (z = 1.1, p &gt; .05)."
   }
  ],
  "answer": "z = 1.1, critical value = \u00b11.96, so we fail to reject H\u2080."
 },
 {
  "id": 76,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Voting",
  "scenario": "Among young adults (18\u201329), 49 of 140 voted in the last election. Among adults 30 and over, 130 of 260 did. Is the share different between the groups? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "young adults (18\u201329): x = 49, n = 140",
   "adults 30 and over: x = 130, n = 260",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Young adults (18\u201329): \\(x_1 = 49\\), \\(n_1 = 140\\), \\(\\hat{p}_1 = 0.3500\\). Adults 30 and over: \\(x_2 = 130\\), \\(n_2 = 260\\), \\(\\hat{p}_2 = 0.5000\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{179}{400} = 0.4475\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.4475 \\times 0.5525 \\times 0.010989} = 0.0521\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.3500 - 0.5000}{0.0521} = \u22122.878\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 2.878 \\gt 1.96\\), so we reject \\(H_0\\). The share who voted in the last election differs significantly between young adults (18\u201329) and adults 30 and over (z = \u22122.9, p &lt; .01)."
   }
  ],
  "answer": "z = \u22122.9, critical value = \u00b11.96, so we reject H\u2080."
 },
 {
  "id": 77,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Homeownership",
  "scenario": "Among city residents, 120 of 300 own their home. Among suburban residents, 110 of 250 did. Is the share different between the groups? Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "city residents: x = 120, n = 300",
   "suburban residents: x = 110, n = 250",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 > \\pi_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "City residents: \\(x_1 = 120\\), \\(n_1 = 300\\), \\(\\hat{p}_1 = 0.4000\\). Suburban residents: \\(x_2 = 110\\), \\(n_2 = 250\\), \\(\\hat{p}_2 = 0.4400\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{230}{550} = 0.4182\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.4182 \\times 0.5818 \\times 0.007333} = 0.0422\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.4000 - 0.4400}{0.0422} = \u22120.947\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z > 1.645\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = \u22120.947 \\lt 1.645\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who own their home is higher in city residents than in suburban residents (z = \u22120.95, p &gt; .05)."
   }
  ],
  "answer": "z = \u22120.95, critical value = 1.645, so we fail to reject H\u2080."
 },
 {
  "id": 78,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Transit commuting",
  "scenario": "Among downtown residents, 66 of 120 commute by transit. Among outer-ring residents, 42 of 140 did. Is the share different between the groups? Use \u03b1 = 0.01, two-tailed.",
  "givens": [
   "downtown residents: x = 66, n = 120",
   "outer-ring residents: x = 42, n = 140",
   "\u03b1 = 0.01, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Downtown residents: \\(x_1 = 66\\), \\(n_1 = 120\\), \\(\\hat{p}_1 = 0.5500\\). Outer-ring residents: \\(x_2 = 42\\), \\(n_2 = 140\\), \\(\\hat{p}_2 = 0.3000\\). \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{108}{260} = 0.4154\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.4154 \\times 0.5846 \\times 0.015476} = 0.0613\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.5500 - 0.3000}{0.0613} = 4.078\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.01\\): \\(z_{crit} = 2.576\\). Decision rule: reject \\(H_0\\) if \\(|z| > 2.576\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 4.078 \\gt 2.576\\), so we reject \\(H_0\\). The share who commute by transit differs significantly between downtown residents and outer-ring residents (z = 4.1, p &lt; .001)."
   }
  ],
  "answer": "z = 4.1, critical value = \u00b12.576, so we reject H\u2080."
 },
 {
  "id": 79,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Union membership",
  "scenario": "Among men, 40 of 160 belong to a union. Among women, 33 of 150 did. Is the share different between the groups? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "men: x = 40, n = 160",
   "women: x = 33, n = 150",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Men: \\(x_1 = 40\\), \\(n_1 = 160\\), \\(\\hat{p}_1 = 0.2500\\). Women: \\(x_2 = 33\\), \\(n_2 = 150\\), \\(\\hat{p}_2 = 0.2200\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{73}{310} = 0.2355\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.2355 \\times 0.7645 \\times 0.012917} = 0.0482\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.2500 - 0.2200}{0.0482} = 0.622\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 0.622 \\lt 1.96\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who belong to a union differs between men and women (z = 0.62, p &gt; .05)."
   }
  ],
  "answer": "z = 0.62, critical value = \u00b11.96, so we fail to reject H\u2080."
 },
 {
  "id": 80,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Health insurance",
  "scenario": "Among full-time workers, 176 of 200 have workplace health insurance. Among part-time workers, 90 of 120 did. Is the share different between the groups? Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "full-time workers: x = 176, n = 200",
   "part-time workers: x = 90, n = 120",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 > \\pi_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Full-time workers: \\(x_1 = 176\\), \\(n_1 = 200\\), \\(\\hat{p}_1 = 0.8800\\). Part-time workers: \\(x_2 = 90\\), \\(n_2 = 120\\), \\(\\hat{p}_2 = 0.7500\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{266}{320} = 0.8313\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.8313 \\times 0.1687 \\times 0.013333} = 0.0432\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.8800 - 0.7500}{0.0432} = 3.006\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z > 1.645\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = 3.006 \\gt 1.645\\), so we reject \\(H_0\\). The share who have workplace health insurance is significantly higher in full-time workers than in part-time workers (z = 3.0, p &lt; .01)."
   }
  ],
  "answer": "z = 3.0, critical value = 1.645, so we reject H\u2080."
 },
 {
  "id": 81,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Trust in institutions",
  "scenario": "Among adults 50 and over, 99 of 180 trust public institutions. Among adults under 35, 78 of 170 did. Is the share different between the groups? Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "adults 50 and over: x = 99, n = 180",
   "adults under 35: x = 78, n = 170",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 > \\pi_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Adults 50 and over: \\(x_1 = 99\\), \\(n_1 = 180\\), \\(\\hat{p}_1 = 0.5500\\). Adults under 35: \\(x_2 = 78\\), \\(n_2 = 170\\), \\(\\hat{p}_2 = 0.4588\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{177}{350} = 0.5057\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.5057 \\times 0.4943 \\times 0.011438} = 0.0535\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.5500 - 0.4588}{0.0535} = 1.705\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z > 1.645\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = 1.705 \\gt 1.645\\), so we reject \\(H_0\\). The share who trust public institutions is significantly higher in adults 50 and over than in adults under 35 (z = 1.7, p &lt; .05)."
   }
  ],
  "answer": "z = 1.7, critical value = 1.645, so we reject H\u2080."
 },
 {
  "id": 82,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Smoking",
  "scenario": "Among neighbourhood A, 52 of 260 smoke daily. Among neighbourhood B, 36 of 240 did. Is the share different between the groups? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "neighbourhood A: x = 52, n = 260",
   "neighbourhood B: x = 36, n = 240",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Neighbourhood A: \\(x_1 = 52\\), \\(n_1 = 260\\), \\(\\hat{p}_1 = 0.2000\\). Neighbourhood B: \\(x_2 = 36\\), \\(n_2 = 240\\), \\(\\hat{p}_2 = 0.1500\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{88}{500} = 0.1760\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.1760 \\times 0.8240 \\times 0.008013} = 0.0341\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.2000 - 0.1500}{0.0341} = 1.467\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 1.467 \\lt 1.96\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who smoke daily differs between neighbourhood A and neighbourhood B (z = 1.5, p &gt; .05)."
   }
  ],
  "answer": "z = 1.5, critical value = \u00b11.96, so we fail to reject H\u2080."
 },
 {
  "id": 83,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Graduate school plans",
  "scenario": "Among first-year students, 54 of 90 plan to attend graduate school. Among final-year students, 52 of 80 did. Is the share different between the groups? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "first-year students: x = 54, n = 90",
   "final-year students: x = 52, n = 80",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "First-year students: \\(x_1 = 54\\), \\(n_1 = 90\\), \\(\\hat{p}_1 = 0.6000\\). Final-year students: \\(x_2 = 52\\), \\(n_2 = 80\\), \\(\\hat{p}_2 = 0.6500\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{106}{170} = 0.6235\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.6235 \\times 0.3765 \\times 0.023611} = 0.0744\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.6000 - 0.6500}{0.0744} = \u22120.672\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 0.672 \\lt 1.96\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who plan to attend graduate school differs between first-year students and final-year students (z = \u22120.67, p &gt; .05)."
   }
  ],
  "answer": "z = \u22120.67, critical value = \u00b11.96, so we fail to reject H\u2080."
 },
 {
  "id": 84,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Food bank use",
  "scenario": "Among households with children, 44 of 110 used a food bank this year. Among households without children, 38 of 190 did. Is the share different between the groups? Use \u03b1 = 0.01, two-tailed.",
  "givens": [
   "households with children: x = 44, n = 110",
   "households without children: x = 38, n = 190",
   "\u03b1 = 0.01, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Households with children: \\(x_1 = 44\\), \\(n_1 = 110\\), \\(\\hat{p}_1 = 0.4000\\). Households without children: \\(x_2 = 38\\), \\(n_2 = 190\\), \\(\\hat{p}_2 = 0.2000\\). \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{82}{300} = 0.2733\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.2733 \\times 0.7267 \\times 0.014354} = 0.0534\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.4000 - 0.2000}{0.0534} = 3.746\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.01\\): \\(z_{crit} = 2.576\\). Decision rule: reject \\(H_0\\) if \\(|z| > 2.576\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 3.746 \\gt 2.576\\), so we reject \\(H_0\\). The share who used a food bank this year differs significantly between households with children and households without children (z = 3.7, p &lt; .001)."
   }
  ],
  "answer": "z = 3.7, critical value = \u00b12.576, so we reject H\u2080."
 },
 {
  "id": 85,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Sought counselling",
  "scenario": "Among women, 58 of 130 sought counselling in the past year. Among men, 35 of 140 did. Is the share different between the groups? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "women: x = 58, n = 130",
   "men: x = 35, n = 140",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Women: \\(x_1 = 58\\), \\(n_1 = 130\\), \\(\\hat{p}_1 = 0.4462\\). Men: \\(x_2 = 35\\), \\(n_2 = 140\\), \\(\\hat{p}_2 = 0.2500\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{93}{270} = 0.3444\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.3444 \\times 0.6556 \\times 0.014835} = 0.0579\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.4462 - 0.2500}{0.0579} = 3.389\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 3.389 \\gt 1.96\\), so we reject \\(H_0\\). The share who sought counselling in the past year differs significantly between women and men (z = 3.4, p &lt; .001)."
   }
  ],
  "answer": "z = 3.4, critical value = \u00b11.96, so we reject H\u2080."
 },
 {
  "id": 86,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Remote work preference",
  "scenario": "Among managers, 31 of 60 prefer to work remotely. Among staff, 36 of 90 did. Is the share different between the groups? Use \u03b1 = 0.05, one-tailed, upper.",
  "givens": [
   "managers: x = 31, n = 60",
   "staff: x = 36, n = 90",
   "\u03b1 = 0.05, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 > \\pi_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Managers: \\(x_1 = 31\\), \\(n_1 = 60\\), \\(\\hat{p}_1 = 0.5167\\). Staff: \\(x_2 = 36\\), \\(n_2 = 90\\), \\(\\hat{p}_2 = 0.4000\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{67}{150} = 0.4467\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.4467 \\times 0.5533 \\times 0.027778} = 0.0829\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.5167 - 0.4000}{0.0829} = 1.408\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.645\\). Decision rule: reject \\(H_0\\) if \\(z > 1.645\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = 1.408 \\lt 1.645\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who prefer to work remotely is higher in managers than in staff (z = 1.4, p &gt; .05)."
   }
  ],
  "answer": "z = 1.4, critical value = 1.645, so we fail to reject H\u2080."
 },
 {
  "id": 87,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Transit safety",
  "scenario": "Among day riders, 130 of 200 rate night travel as safe. Among night riders, 84 of 150 did. Is the share different between the groups? Use \u03b1 = 0.05, two-tailed.",
  "givens": [
   "day riders: x = 130, n = 200",
   "night riders: x = 84, n = 150",
   "\u03b1 = 0.05, two-tailed"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 \\neq \\pi_2\\) (two-tailed)."
   },
   {
    "q": "What do we know?",
    "a": "Day riders: \\(x_1 = 130\\), \\(n_1 = 200\\), \\(\\hat{p}_1 = 0.6500\\). Night riders: \\(x_2 = 84\\), \\(n_2 = 150\\), \\(\\hat{p}_2 = 0.5600\\). \\(\\alpha = 0.05\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{214}{350} = 0.6114\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.6114 \\times 0.3886 \\times 0.011667} = 0.0526\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.6500 - 0.5600}{0.0526} = 1.709\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "Two-tailed \\(\\alpha = 0.05\\): \\(z_{crit} = 1.96\\). Decision rule: reject \\(H_0\\) if \\(|z| > 1.96\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(|z| = 1.709 \\lt 1.96\\), so we fail to reject \\(H_0\\). There is not enough evidence that the share who rate night travel as safe differs between day riders and night riders (z = 1.7, p &gt; .05)."
   }
  ],
  "answer": "z = 1.7, critical value = \u00b11.96, so we fail to reject H\u2080."
 },
 {
  "id": 88,
  "type": "z2",
  "typeLabel": "Two-proportion z",
  "path": "Test a claim \u2192 proportion \u2192 two groups \u2192 two-proportion z",
  "title": "Support for a tax",
  "scenario": "Among residents of province A, 183 of 300 support the proposed tax. Among residents of province B, 140 of 280 did. Is the share different between the groups? Use \u03b1 = 0.01, one-tailed, upper.",
  "givens": [
   "residents of province A: x = 183, n = 300",
   "residents of province B: x = 140, n = 280",
   "\u03b1 = 0.01, one-tailed, upper"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "A yes/no outcome compared between two independent groups, so this is a <strong>two-proportion z test</strong>."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0: \\pi_1 = \\pi_2\\) (the same population share in both groups). \\(H_A: \\pi_1 > \\pi_2\\) (one-tailed, upper)."
   },
   {
    "q": "What do we know?",
    "a": "Residents of province A: \\(x_1 = 183\\), \\(n_1 = 300\\), \\(\\hat{p}_1 = 0.6100\\). Residents of province B: \\(x_2 = 140\\), \\(n_2 = 280\\), \\(\\hat{p}_2 = 0.5000\\). \\(\\alpha = 0.01\\)."
   },
   {
    "q": "Pool the proportions.",
    "a": "Because \\(H_0\\) says both groups share one proportion, we pool: \\(\\hat{p} = \\dfrac{x_1 + x_2}{n_1 + n_2} = \\dfrac{323}{580} = 0.5569\\). Each group has at least 10 expected yes and no answers, so the normal approximation works."
   },
   {
    "q": "Compute the standard error.",
    "a": "\\(SE = \\sqrt{\\hat{p}(1-\\hat{p})\\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2}\\right)} = \\sqrt{0.5569 \\times 0.4431 \\times 0.006905} = 0.0413\\)"
   },
   {
    "q": "Compute the z statistic.",
    "a": "\\(z = \\dfrac{\\hat{p}_1 - \\hat{p}_2}{SE} = \\dfrac{0.6100 - 0.5000}{0.0413} = 2.665\\)"
   },
   {
    "q": "Find the critical value and write the decision rule.",
    "a": "One-tailed \\(\\alpha = 0.01\\): \\(z_{crit} = 2.326\\). Decision rule: reject \\(H_0\\) if \\(z > 2.326\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(z = 2.665 \\gt 2.326\\), so we reject \\(H_0\\). The share who support the proposed tax is significantly higher in residents of province A than in residents of province B (z = 2.7, p &lt; .01)."
   }
  ],
  "answer": "z = 2.7, critical value = 2.326, so we reject H\u2080."
 },
 {
  "id": 89,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Commute and age",
  "scenario": "265 people were surveyed on two categorical variables: age group and commute mode. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 2 \u00d7 3",
   "N = 265",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): age group and commute mode are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Under 30 = 130; 30 and over = 135. Column totals: Car = 150; Transit = 75; Walk or bike = 40. Grand total \\(N = 265\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (2-1)(3-1) = 2\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 5.991\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Under 30: Car 73.6, Transit 36.8, Walk or bike 19.6; 30 and over: Car 76.4, Transit 38.2, Walk or bike 20.4"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 19.6, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Under 30: Car 2.51, Transit 1.83, Walk or bike 1.47; 30 and over: Car 2.42, Transit 1.76, Walk or bike 1.42. Sum: \\(\\chi^2 = 11.41\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(11.41 \\gt 5.991\\), so we reject \\(H_0\\). There is a statistically significant association between age group and commute mode (\u03c7\u00b2 = 11, df = 2, p &lt; .01). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 11 (df = 2), critical value = 5.991, so we reject H\u2080."
 },
 {
  "id": 90,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Support and region",
  "scenario": "330 people were surveyed on two categorical variables: region and support for a policy. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 2 \u00d7 2",
   "N = 330",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): region and support for a policy are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Urban = 180; Rural = 150. Column totals: Support = 190; Oppose = 140. Grand total \\(N = 330\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (2-1)(2-1) = 1\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 3.841\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Urban: Support 103.6, Oppose 76.4; Rural: Support 86.4, Oppose 63.6"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 63.6, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Urban: Support 2.58, Oppose 3.51; Rural: Support 3.10, Oppose 4.21. Sum: \\(\\chi^2 = 13.40\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(13.40 \\gt 3.841\\), so we reject \\(H_0\\). There is a statistically significant association between region and support for a policy (\u03c7\u00b2 = 13, df = 1, p &lt; .001). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 13 (df = 1), critical value = 3.841, so we reject H\u2080."
 },
 {
  "id": 91,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Internet access and income",
  "scenario": "320 people were surveyed on two categorical variables: income group and home internet. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 2 \u00d7 2",
   "N = 320",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): income group and home internet are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Lower income = 150; Higher income = 170. Column totals: Has home internet = 238; No home internet = 82. Grand total \\(N = 320\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (2-1)(2-1) = 1\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 3.841\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Lower income: Has home internet 111.6, No home internet 38.4; Higher income: Has home internet 126.4, No home internet 43.6"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 38.4, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Lower income: Has home internet 4.98, No home internet 14.44; Higher income: Has home internet 4.39, No home internet 12.74. Sum: \\(\\chi^2 = 36.56\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(36.56 \\gt 3.841\\), so we reject \\(H_0\\). There is a statistically significant association between income group and home internet (\u03c7\u00b2 = 37, df = 1, p &lt; .001). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 37 (df = 1), critical value = 3.841, so we reject H\u2080."
 },
 {
  "id": 92,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Smoking and education",
  "scenario": "240 people were surveyed on two categorical variables: education and smoking status. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 2 \u00d7 3",
   "N = 240",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): education and smoking status are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Degree = 100; No degree = 140. Column totals: Current = 60; Former = 65; Never = 115. Grand total \\(N = 240\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (2-1)(3-1) = 2\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 5.991\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Degree: Current 25.0, Former 27.1, Never 47.9; No degree: Current 35.0, Former 37.9, Never 67.1"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 25.0, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Degree: Current 4.00, Former 0.16, Never 3.05; No degree: Current 2.86, Former 0.11, Never 2.18. Sum: \\(\\chi^2 = 12.36\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(12.36 \\gt 5.991\\), so we reject \\(H_0\\). There is a statistically significant association between education and smoking status (\u03c7\u00b2 = 12, df = 2, p &lt; .01). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 12 (df = 2), critical value = 5.991, so we reject H\u2080."
 },
 {
  "id": 93,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Union membership and sector",
  "scenario": "200 people were surveyed on two categorical variables: sector and union membership. Use the counts in the table to test whether the two are related (\u03b1 = 0.01).",
  "givens": [
   "Table size: 2 \u00d7 2",
   "N = 200",
   "\u03b1 = 0.01"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): sector and union membership are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Public = 100; Private = 100. Column totals: Member = 110; Non-member = 90. Grand total \\(N = 200\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (2-1)(2-1) = 1\\). With \\(\\alpha = 0.01\\), the table gives \\(\\chi^2_{crit} = 6.635\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Public: Member 55.0, Non-member 45.0; Private: Member 55.0, Non-member 45.0"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 45.0, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Public: Member 4.09, Non-member 5.00; Private: Member 4.09, Non-member 5.00. Sum: \\(\\chi^2 = 18.18\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(18.18 \\gt 6.635\\), so we reject \\(H_0\\). There is a statistically significant association between sector and union membership (\u03c7\u00b2 = 18, df = 1, p &lt; .001). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 18 (df = 1), critical value = 6.635, so we reject H\u2080."
 },
 {
  "id": 94,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Living arrangement and marital status",
  "scenario": "200 people were surveyed on two categorical variables: living arrangement and marital status. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 2 \u00d7 3",
   "N = 200",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): living arrangement and marital status are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Living alone = 75; Living with others = 125. Column totals: Married = 90; Never married = 65; Divorced or widowed = 45. Grand total \\(N = 200\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (2-1)(3-1) = 2\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 5.991\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Living alone: Married 33.8, Never married 24.4, Divorced or widowed 16.9; Living with others: Married 56.2, Never married 40.6, Divorced or widowed 28.1"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 16.9, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Living alone: Married 0.42, Never married 0.02, Divorced or widowed 0.58; Living with others: Married 0.25, Never married 0.01, Divorced or widowed 0.35. Sum: \\(\\chi^2 = 1.62\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(1.62 \\lt 5.991\\), so we fail to reject \\(H_0\\). There is not enough evidence of an association between living arrangement and marital status (\u03c7\u00b2 = 1.6, df = 2, p &gt; .05). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 1.6 (df = 2), critical value = 5.991, so we fail to reject H\u2080."
 },
 {
  "id": 95,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Employment and voting",
  "scenario": "300 people were surveyed on two categorical variables: employment status and voting. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 3 \u00d7 2",
   "N = 300",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): employment status and voting are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Employed = 170; Unemployed = 55; Not in labour force = 75. Column totals: Voted = 185; Did not vote = 115. Grand total \\(N = 300\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (3-1)(2-1) = 2\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 5.991\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Employed: Voted 104.8, Did not vote 65.2; Unemployed: Voted 33.9, Did not vote 21.1; Not in labour force: Voted 46.2, Did not vote 28.8"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 21.1, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Employed: Voted 2.19, Did not vote 3.53; Unemployed: Voted 2.34, Did not vote 3.77; Not in labour force: Voted 0.84, Did not vote 1.36. Sum: \\(\\chi^2 = 14.04\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(14.04 \\gt 5.991\\), so we reject \\(H_0\\). There is a statistically significant association between employment status and voting (\u03c7\u00b2 = 14, df = 2, p &lt; .001). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 14 (df = 2), critical value = 5.991, so we reject H\u2080."
 },
 {
  "id": 96,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Recycling and housing",
  "scenario": "300 people were surveyed on two categorical variables: housing type and recycling habit. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 3 \u00d7 3",
   "N = 300",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): housing type and recycling habit are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: House = 100; Apartment = 100; Condo = 100. Column totals: Always = 105; Sometimes = 95; Rarely = 100. Grand total \\(N = 300\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (3-1)(3-1) = 4\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 9.488\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). House: Always 35.0, Sometimes 31.7, Rarely 33.3; Apartment: Always 35.0, Sometimes 31.7, Rarely 33.3; Condo: Always 35.0, Sometimes 31.7, Rarely 33.3"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 31.7, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. House: Always 6.43, Sometimes 0.09, Rarely 5.33; Apartment: Always 2.86, Sometimes 2.19, Rarely 0.08; Condo: Always 0.71, Sometimes 1.40, Rarely 4.08. Sum: \\(\\chi^2 = 23.18\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(23.18 \\gt 9.488\\), so we reject \\(H_0\\). There is a statistically significant association between housing type and recycling habit (\u03c7\u00b2 = 23, df = 4, p &lt; .001). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 23 (df = 4), critical value = 9.488, so we reject H\u2080."
 },
 {
  "id": 97,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Religious attendance and age",
  "scenario": "300 people were surveyed on two categorical variables: age group and attendance. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 3 \u00d7 4",
   "N = 300",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): age group and attendance are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: 18\u201334 = 100; 35\u201354 = 100; 55 and over = 100. Column totals: Weekly = 70; Monthly = 70; Rarely = 80; Never = 80. Grand total \\(N = 300\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (3-1)(4-1) = 6\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 12.592\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). 18\u201334: Weekly 23.3, Monthly 23.3, Rarely 26.7, Never 26.7; 35\u201354: Weekly 23.3, Monthly 23.3, Rarely 26.7, Never 26.7; 55 and over: Weekly 23.3, Monthly 23.3, Rarely 26.7, Never 26.7"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 23.3, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. 18\u201334: Weekly 2.98, Monthly 0.48, Rarely 0.42, Never 2.60; 35\u201354: Weekly 0.48, Monthly 0.12, Rarely 0.42, Never 0.10; 55 and over: Weekly 5.83, Monthly 0.12, Rarely 1.67, Never 1.67. Sum: \\(\\chi^2 = 16.88\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(16.88 \\gt 12.592\\), so we reject \\(H_0\\). There is a statistically significant association between age group and attendance (\u03c7\u00b2 = 17, df = 6, p &lt; .01). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 17 (df = 6), critical value = 12.592, so we reject H\u2080."
 },
 {
  "id": 98,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "School attitude and parental education",
  "scenario": "280 people were surveyed on two categorical variables: parental education and attitude to school. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 3 \u00d7 3",
   "N = 280",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): parental education and attitude to school are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Low = 100; Middle = 90; High = 90. Column totals: Enjoy = 100; Neutral = 95; Dislike = 85. Grand total \\(N = 280\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (3-1)(3-1) = 4\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 9.488\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Low: Enjoy 35.7, Neutral 33.9, Dislike 30.4; Middle: Enjoy 32.1, Neutral 30.5, Dislike 27.3; High: Enjoy 32.1, Neutral 30.5, Dislike 27.3"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 27.3, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Low: Enjoy 3.21, Neutral 0.03, Dislike 3.06; Middle: Enjoy 0.14, Neutral 0.01, Dislike 0.26; High: Enjoy 5.14, Neutral 0.01, Dislike 5.56. Sum: \\(\\chi^2 = 17.43\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(17.43 \\gt 9.488\\), so we reject \\(H_0\\). There is a statistically significant association between parental education and attitude to school (\u03c7\u00b2 = 17, df = 4, p &lt; .01). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 17 (df = 4), critical value = 9.488, so we reject H\u2080."
 },
 {
  "id": 99,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Transit use and neighbourhood",
  "scenario": "280 people were surveyed on two categorical variables: neighbourhood and transit use. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 3 \u00d7 4",
   "N = 280",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): neighbourhood and transit use are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Downtown = 80; Midtown = 100; Suburban = 100. Column totals: Daily = 75; Weekly = 65; Rarely = 65; Never = 75. Grand total \\(N = 280\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (3-1)(4-1) = 6\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 12.592\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Downtown: Daily 21.4, Weekly 18.6, Rarely 18.6, Never 21.4; Midtown: Daily 26.8, Weekly 23.2, Rarely 23.2, Never 26.8; Suburban: Daily 26.8, Weekly 23.2, Rarely 23.2, Never 26.8"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 18.6, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Downtown: Daily 16.10, Weekly 0.11, Rarely 3.96, Never 6.10; Midtown: Daily 0.12, Weekly 1.98, Rarely 0.14, Never 1.72; Suburban: Daily 10.52, Weekly 2.91, Rarely 1.98, Never 12.39. Sum: \\(\\chi^2 = 58.01\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(58.01 \\gt 12.592\\), so we reject \\(H_0\\). There is a statistically significant association between neighbourhood and transit use (\u03c7\u00b2 = 58, df = 6, p &lt; .001). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 58 (df = 6), critical value = 12.592, so we reject H\u2080."
 },
 {
  "id": 100,
  "type": "chi",
  "typeLabel": "Chi-square",
  "path": "Test a claim \u2192 categorical outcome \u2192 are two categorical variables related? \u2192 chi-square",
  "title": "Health coverage and job type",
  "scenario": "365 people were surveyed on two categorical variables: job type and health coverage. Use the counts in the table to test whether the two are related (\u03b1 = 0.05).",
  "givens": [
   "Table size: 3 \u00d7 2",
   "N = 365",
   "\u03b1 = 0.05"
  ],
  "steps": [
   {
    "q": "Which test fits?",
    "a": "Two categorical variables arranged in a table of counts, and the question is whether they are related. That calls for a <strong>chi-square test of association</strong>. It is non-directional: it tells us whether an association exists, not which way it runs."
   },
   {
    "q": "State the hypotheses.",
    "a": "\\(H_0\\): job type and health coverage are independent (not related). \\(H_A\\): they are associated."
   },
   {
    "q": "Find the row and column totals.",
    "a": "Row totals: Full-time = 180; Part-time = 120; Self-employed = 65. Column totals: Covered = 270; Not covered = 95. Grand total \\(N = 365\\)."
   },
   {
    "q": "Find the degrees of freedom and the critical value.",
    "a": "\\(df = (r-1)(c-1) = (3-1)(2-1) = 2\\). With \\(\\alpha = 0.05\\), the table gives \\(\\chi^2_{crit} = 5.991\\)."
   },
   {
    "q": "Compute the expected counts.",
    "a": "\\(E = \\dfrac{\\text{row total} \\times \\text{column total}}{N}\\). Full-time: Covered 133.2, Not covered 46.8; Part-time: Covered 88.8, Not covered 31.2; Self-employed: Covered 48.1, Not covered 16.9"
   },
   {
    "q": "Check the expected counts.",
    "a": "The smallest expected count is 16.9, which is at least 5, so the chi-square approximation is reasonable."
   },
   {
    "q": "Compute each cell's contribution and add them.",
    "a": "\\((O-E)^2/E\\) for each cell. Full-time: Covered 5.41, Not covered 15.39; Part-time: Covered 3.97, Not covered 11.28; Self-employed: Covered 1.36, Not covered 3.86. Sum: \\(\\chi^2 = 41.27\\)."
   },
   {
    "q": "Compare, decide, and interpret.",
    "a": "\\(41.27 \\gt 5.991\\), so we reject \\(H_0\\). There is a statistically significant association between job type and health coverage (\u03c7\u00b2 = 41, df = 2, p &lt; .001). To see the direction, compare percentages within each row."
   }
  ],
  "answer": "\u03c7\u00b2 = 41 (df = 2), critical value = 5.991, so we reject H\u2080."
 }
];
