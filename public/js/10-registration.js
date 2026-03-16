const form = document.getElementById("profileForm");
const errorBox = document.getElementById("errorBox");
const lumosToggle = document.getElementById("lumosToggle");
const welcomeLine = document.getElementById("welcomeLine");

const viewProfileBtn = document.getElementById("viewProfileBtn");
const profileModal = document.getElementById("profileModal");

const pUsername = document.getElementById("pUsername");
const pHouse = document.getElementById("pHouse");
const pSection = document.getElementById("pSection");
const pTheme = document.getElementById("pTheme");

const clearProfileBtn = document.getElementById("clearProfileBtn");

/* houses dropdown */
const housesToggle = document.getElementById("housesToggle");
const housesMenu = document.getElementById("housesMenu");

const KEYS = {
  username: "pc_username",
  house: "pc_house",
  section: "pc_section",
  theme: "pc_theme"
};

function getCheckedValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : "";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (lumosToggle) {
    lumosToggle.textContent = theme === "dark" ? "🌙 Nox" : "💡 Lumos";
  }
}

function loadTheme() {
  const saved = localStorage.getItem(KEYS.theme);
  applyTheme(saved === "dark" ? "dark" : "light");
}

function loadProfileIntoHeader() {
  const u = localStorage.getItem(KEYS.username);
  const h = localStorage.getItem(KEYS.house);

  if (u && h) {
    welcomeLine.textContent = `Welcome, ${u} of ${h}.`;
  } else if (u) {
    welcomeLine.textContent = `Welcome, ${u}.`;
  } else {
    welcomeLine.textContent = `Welcome, Wizard.`;
  }
}

function validate(username, house, section, theme, consent) {
  if (!username || username.trim().length < 3) {
    return "Username must be at least 3 characters.";
  }
  if (username.trim().length > 24) {
    return "Username must be 24 characters or less.";
  }
  if (!house) {
    return "Please choose a Hogwarts house.";
  }
  if (!section) {
    return "Please choose your preferred section.";
  }
  if (!theme) {
    return "Please choose a default theme mode.";
  }
  if (!consent) {
    return "You must agree to save your profile on this device.";
  }
  return "";
}

/* ==========================================================
   INITIAL LOAD
   ========================================================== */
loadTheme();
loadProfileIntoHeader();

/* ==========================================================
   HOUSES DROPDOWN
   ========================================================== */
if (housesToggle && housesMenu) {
  housesToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    housesMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!housesMenu.contains(e.target) && !housesToggle.contains(e.target)) {
      housesMenu.classList.remove("show");
    }
  });
}

/* ==========================================================
   THEME TOGGLE
   ========================================================== */
lumosToggle?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";

  localStorage.setItem(KEYS.theme, next);
  applyTheme(next);
});

/* ==========================================================
   PROFILE MODAL
   ========================================================== */
viewProfileBtn?.addEventListener("click", () => {
  const u = localStorage.getItem(KEYS.username) || "—";
  const h = localStorage.getItem(KEYS.house) || "—";
  const s = localStorage.getItem(KEYS.section) || "—";
  const t = localStorage.getItem(KEYS.theme) || "light";

  pUsername.textContent = u;
  pHouse.textContent = h;
  pSection.textContent = s;
  pTheme.textContent = t === "dark" ? "Dark (Nox)" : "Light (Lumos)";

  profileModal.classList.add("show");
  profileModal.setAttribute("aria-hidden", "false");
});

profileModal?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.dataset && target.dataset.close === "true") {
    profileModal.classList.remove("show");
    profileModal.setAttribute("aria-hidden", "true");
  }
});

/* ==========================================================
   CLEAR PROFILE
   ========================================================== */
clearProfileBtn?.addEventListener("click", () => {
  localStorage.removeItem(KEYS.username);
  localStorage.removeItem(KEYS.house);
  localStorage.removeItem(KEYS.section);

  loadProfileIntoHeader();
  alert("Profile cleared (theme kept).");
});

/* ==========================================================
   SAVE PROFILE
   ========================================================== */
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  errorBox.textContent = "";

  const username = document.getElementById("username").value.trim();
  const house = document.getElementById("house").value;
  const section = getCheckedValue("section");
  const theme = getCheckedValue("theme");
  const consent = document.getElementById("consent").checked;

  const msg = validate(username, house, section, theme, consent);
  if (msg) {
    errorBox.textContent = msg;
    return;
  }

  localStorage.setItem(KEYS.username, username);
  localStorage.setItem(KEYS.house, house);
  localStorage.setItem(KEYS.section, section);
  localStorage.setItem(KEYS.theme, theme);

  applyTheme(theme);
  loadProfileIntoHeader();

  window.location.href = "../index.html";
});