function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
}

// Detect system preference
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Initial theme setup
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const themeToApply = savedTheme || getSystemTheme();
  applyTheme(themeToApply);
}

// Handle system theme change
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches ? "dark" : "light");
  }
});

// Toggle on button click
document.getElementById("toogleTheme").addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// Run on load
initTheme();
