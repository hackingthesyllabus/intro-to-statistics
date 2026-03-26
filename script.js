
const map = {
  formulas: "hide-formulas",
  examples: "hide-examples",
  triggers: "hide-triggers",
  interpretation: "hide-interpretation"
};

document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.toggle;
    const className = map[key];
    document.body.classList.toggle(className);
    btn.classList.toggle("active");
  });
});
