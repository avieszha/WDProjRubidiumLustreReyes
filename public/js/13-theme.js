const THEME_KEY = "pc_theme";

function applyTheme(theme) {
  const finalTheme = theme === "dark" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", finalTheme);
  document.body.classList.toggle("lumos-on", finalTheme === "light");
  document.body.classList.toggle("nox-on", finalTheme === "dark");

  const lumosToggle = document.getElementById("lumosToggle");
  if (lumosToggle) {
    lumosToggle.textContent = finalTheme === "dark" ? "Nox" : "Lumos";
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  const lumosToggle = document.getElementById("lumosToggle");

  loadTheme();

  lumosToggle?.addEventListener("click", () => {
    const currentTheme = localStorage.getItem(THEME_KEY) || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
});