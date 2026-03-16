console.log("theme.js loaded");

const THEME_KEY = "pc_theme";

function getSavedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  return savedTheme === "dark" ? "dark" : "light";
}

function updateThemeButton(theme) {
  const lumosToggle = document.getElementById("lumosToggle");
  if (!lumosToggle) return;

  lumosToggle.textContent = theme === "dark" ? "Nox" : "Lumos";
  lumosToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
}

function applyTheme(theme) {
  const finalTheme = theme === "dark" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", finalTheme);

  if (document.body) {
    document.body.classList.toggle("lumos-on", finalTheme === "light");
    document.body.classList.toggle("nox-on", finalTheme === "dark");
  }

  updateThemeButton(finalTheme);
}

function saveTheme(theme) {
  const finalTheme = theme === "dark" ? "dark" : "light";
  localStorage.setItem(THEME_KEY, finalTheme);
}

function toggleTheme() {
  const currentTheme = getSavedTheme();
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  saveTheme(nextTheme);
  applyTheme(nextTheme);
}

function setupThemeToggle() {
  const lumosToggle = document.getElementById("lumosToggle");
  if (!lumosToggle) return;

  lumosToggle.addEventListener("click", toggleTheme);
}

function initializeTheme() {
  applyTheme(getSavedTheme());
  setupThemeToggle();
}

document.addEventListener("DOMContentLoaded", initializeTheme);