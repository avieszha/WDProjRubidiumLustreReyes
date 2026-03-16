(() => {
  // =========================================================
  // STORAGE KEYS
  // =========================================================
  const KEYS = {
    username: "pc_username",
    house: "pc_house",
    section: "pc_section",
    theme: "pc_theme"
  };
 
  const savedUsername = localStorage.getItem(KEYS.username);
  const savedHouse = localStorage.getItem(KEYS.house);
  const savedTheme = localStorage.getItem(KEYS.theme);

  if (!savedUsername || !savedHouse || !savedTheme) {
    window.location.href = "10-registration.html";
    return;
  }

  const body = document.body;
  const lumosBtn = document.getElementById("lumosToggle");

  // profile dashboard dom
  const welcomeMessage = document.getElementById("welcomeMessage");
  const profileUsername = document.getElementById("profileUsername");
  const profileHouse = document.getElementById("profileHouse");
  const profileTheme = document.getElementById("profileTheme");

  const editProfileBtn = document.getElementById("editProfileBtn");
  const deleteProfileBtn = document.getElementById("deleteProfileBtn");

  const editProfileSection = document.getElementById("editProfileSection");
  const editProfileForm = document.getElementById("editProfileForm");
  const editUsername = document.getElementById("editUsername");
  const editHouse = document.getElementById("editHouse");
  const editTheme = document.getElementById("editTheme");
  const cancelEditBtn = document.getElementById("cancelEditBtn");

  // periodic table dom
  const periodic = document.getElementById("periodic");
  const shell = document.getElementById("tableShell");

  const card = document.getElementById("hovercard");
  const hcNum = document.getElementById("hcNum");
  const hcMass = document.getElementById("hcMass");
  const hcSym = document.getElementById("hcSym");
  const hcName = document.getElementById("hcName");
  const hcMeta = document.getElementById("hcMeta");

  // =========================================================
  // THEME! lolllllll what if i die
  // =========================================================
  function setMode(theme) {
    const isLight = theme !== "dark";

    body.classList.toggle("lumos-on", isLight);
    body.classList.toggle("nox-on", !isLight);

    if (lumosBtn) {
      lumosBtn.textContent = isLight ? "Nox" : "Lumos";
    }

    localStorage.setItem(KEYS.theme, isLight ? "light" : "dark");
  }

  function loadSavedTheme() {
    const saved = localStorage.getItem(KEYS.theme) || "light";
    setMode(saved);
  }

  if (lumosBtn) {
    lumosBtn.addEventListener("click", () => {
      const current = localStorage.getItem(KEYS.theme) || "light";
      const next = current === "light" ? "dark" : "light";
      setMode(next);

      if (profileTheme) {
        profileTheme.textContent = next === "dark" ? "Dark (Nox)" : "Light (Lumos)";
      }
    });
  }

  // =========================================================
  // PROFILE DASHBOARD
  // =========================================================
  function loadProfileToPage() {
    const username = localStorage.getItem(KEYS.username) || "—";
    const house = localStorage.getItem(KEYS.house) || "—";
    const theme = localStorage.getItem(KEYS.theme) || "light";

    if (welcomeMessage) {
      welcomeMessage.textContent = `Welcome, ${username} of ${house}!`;
    }

    if (profileUsername) {
      profileUsername.textContent = username;
    }

    if (profileHouse) {
      profileHouse.textContent = house;
    }

    if (profileTheme) {
      profileTheme.textContent = theme === "dark" ? "Dark (Nox)" : "Light (Lumos)";
    }
  }

 function openEditForm() {
  if (!editProfileSection) return;

  const username = localStorage.getItem(KEYS.username) || "";
  const house = localStorage.getItem(KEYS.house) || "";
  const theme = localStorage.getItem(KEYS.theme) || "light";

  if (editUsername) editUsername.value = username;
  if (editHouse) editHouse.value = house;
  if (editTheme) editTheme.value = theme;

  editProfileSection.classList.add("show");
  editProfileSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

  function closeEditForm() {
    if (!editProfileSection) return;
    editProfileSection.classList.remove("show");
  }

if (editProfileBtn) {
  editProfileBtn.addEventListener("click", () => {
    console.log("Edit Profile button clicked");
    openEditForm();
  });
}

  if (cancelEditBtn) {
    cancelEditBtn.addEventListener("click", closeEditForm);
  }

  if (editProfileForm) {
    editProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const newUsername = editUsername?.value.trim() || "";
      const newHouse = editHouse?.value || "";
      const newTheme = editTheme?.value || "light";

      if (newUsername.length < 3) {
        alert("Username must be at least 3 characters.");
        return;
      }

      if (!newHouse) {
        alert("Please choose a Hogwarts house.");
        return;
      }

      localStorage.setItem(KEYS.username, newUsername);
      localStorage.setItem(KEYS.house, newHouse);
      localStorage.setItem(KEYS.theme, newTheme);

      setMode(newTheme);
      loadProfileToPage();
      closeEditForm();

      alert("Profile updated!");
    });
  }

  if (deleteProfileBtn) {
    deleteProfileBtn.addEventListener("click", () => {
      const confirmed = confirm("Are you sure you want to reset your saved profile?");
      if (!confirmed) return;

      localStorage.removeItem(KEYS.username);
      localStorage.removeItem(KEYS.house);
      localStorage.removeItem(KEYS.section);
      localStorage.removeItem(KEYS.theme);

      window.location.href = "10-registration.html";
    });
  }

  // =========================================================
  // There's Hydrogen then Helium then Lithium Beryllium!
  // =========================================================
  const ELEMENTS = [
    { n: 1, sym: "H",  name: "Hydrogen",    block: "s", group: 1,  period: 1, mass: "1.008" },
    { n: 2, sym: "He", name: "Helium",      block: "p", group: 18, period: 1, mass: "4.0026" },

    { n: 3, sym: "Li", name: "Lithium",     block: "s", group: 1,  period: 2, mass: "6.94" },
    { n: 4, sym: "Be", name: "Beryllium",   block: "s", group: 2,  period: 2, mass: "9.0122" },
    { n: 5, sym: "B",  name: "Boron",       block: "p", group: 13, period: 2, mass: "10.81" },
    { n: 6, sym: "C",  name: "Carbon",      block: "p", group: 14, period: 2, mass: "12.011" },
    { n: 7, sym: "N",  name: "Nitrogen",    block: "p", group: 15, period: 2, mass: "14.007" },
    { n: 8, sym: "O",  name: "Oxygen",      block: "p", group: 16, period: 2, mass: "15.999" },
    { n: 9, sym: "F",  name: "Fluorine",    block: "p", group: 17, period: 2, mass: "18.998" },
    { n: 10, sym: "Ne", name: "Neon",       block: "p", group: 18, period: 2, mass: "20.180" },

    { n: 11, sym: "Na", name: "Sodium",     block: "s", group: 1,  period: 3, mass: "22.990" },
    { n: 12, sym: "Mg", name: "Magnesium",  block: "s", group: 2,  period: 3, mass: "24.305" },
    { n: 13, sym: "Al", name: "Aluminium",  block: "p", group: 13, period: 3, mass: "26.982" },
    { n: 14, sym: "Si", name: "Silicon",    block: "p", group: 14, period: 3, mass: "28.085" },
    { n: 15, sym: "P",  name: "Phosphorus", block: "p", group: 15, period: 3, mass: "30.974" },
    { n: 16, sym: "S",  name: "Sulfur",     block: "p", group: 16, period: 3, mass: "32.06" },
    { n: 17, sym: "Cl", name: "Chlorine",   block: "p", group: 17, period: 3, mass: "35.45" },
    { n: 18, sym: "Ar", name: "Argon",      block: "p", group: 18, period: 3, mass: "39.948" },

    { n: 19, sym: "K",  name: "Potassium",  block: "s", group: 1,  period: 4, mass: "39.098" },
    { n: 20, sym: "Ca", name: "Calcium",    block: "s", group: 2,  period: 4, mass: "40.078" },
    { n: 21, sym: "Sc", name: "Scandium",   block: "d", group: 3,  period: 4, mass: "44.956" },
    { n: 22, sym: "Ti", name: "Titanium",   block: "d", group: 4,  period: 4, mass: "47.867" },
    { n: 23, sym: "V",  name: "Vanadium",   block: "d", group: 5,  period: 4, mass: "50.942" },
    { n: 24, sym: "Cr", name: "Chromium",   block: "d", group: 6,  period: 4, mass: "51.996" },
    { n: 25, sym: "Mn", name: "Manganese",  block: "d", group: 7,  period: 4, mass: "54.938" },
    { n: 26, sym: "Fe", name: "Iron",       block: "d", group: 8,  period: 4, mass: "55.845" },
    { n: 27, sym: "Co", name: "Cobalt",     block: "d", group: 9,  period: 4, mass: "58.933" },
    { n: 28, sym: "Ni", name: "Nickel",     block: "d", group: 10, period: 4, mass: "58.693" },
    { n: 29, sym: "Cu", name: "Copper",     block: "d", group: 11, period: 4, mass: "63.546" },
    { n: 30, sym: "Zn", name: "Zinc",       block: "d", group: 12, period: 4, mass: "65.38" },
    { n: 31, sym: "Ga", name: "Gallium",    block: "p", group: 13, period: 4, mass: "69.723" },
    { n: 32, sym: "Ge", name: "Germanium",  block: "p", group: 14, period: 4, mass: "72.630" },
    { n: 33, sym: "As", name: "Arsenic",    block: "p", group: 15, period: 4, mass: "74.922" },
    { n: 34, sym: "Se", name: "Selenium",   block: "p", group: 16, period: 4, mass: "78.971" },
    { n: 35, sym: "Br", name: "Bromine",    block: "p", group: 17, period: 4, mass: "79.904" },
    { n: 36, sym: "Kr", name: "Krypton",    block: "p", group: 18, period: 4, mass: "83.798" },

    { n: 37, sym: "Rb", name: "Rubidium",   block: "s", group: 1,  period: 5, mass: "85.468" },
    { n: 38, sym: "Sr", name: "Strontium",  block: "s", group: 2,  period: 5, mass: "87.62" },
    { n: 39, sym: "Y",  name: "Yttrium",    block: "d", group: 3,  period: 5, mass: "88.906" },
    { n: 40, sym: "Zr", name: "Zirconium",  block: "d", group: 4,  period: 5, mass: "91.224" },
    { n: 41, sym: "Nb", name: "Niobium",    block: "d", group: 5,  period: 5, mass: "92.906" },
    { n: 42, sym: "Mo", name: "Molybdenum", block: "d", group: 6,  period: 5, mass: "95.95" },
    { n: 43, sym: "Tc", name: "Technetium", block: "d", group: 7,  period: 5, mass: "(98)" },
    { n: 44, sym: "Ru", name: "Ruthenium",  block: "d", group: 8,  period: 5, mass: "101.07" },
    { n: 45, sym: "Rh", name: "Rhodium",    block: "d", group: 9,  period: 5, mass: "102.91" },
    { n: 46, sym: "Pd", name: "Palladium",  block: "d", group: 10, period: 5, mass: "106.42" },
    { n: 47, sym: "Ag", name: "Silver",     block: "d", group: 11, period: 5, mass: "107.87" },
    { n: 48, sym: "Cd", name: "Cadmium",    block: "d", group: 12, period: 5, mass: "112.41" },
    { n: 49, sym: "In", name: "Indium",     block: "p", group: 13, period: 5, mass: "114.82" },
    { n: 50, sym: "Sn", name: "Tin",        block: "p", group: 14, period: 5, mass: "118.71" },
    { n: 51, sym: "Sb", name: "Antimony",   block: "p", group: 15, period: 5, mass: "121.76" },
    { n: 52, sym: "Te", name: "Tellurium",  block: "p", group: 16, period: 5, mass: "127.60" },
    { n: 53, sym: "I",  name: "Iodine",     block: "p", group: 17, period: 5, mass: "126.90" },
    { n: 54, sym: "Xe", name: "Xenon",      block: "p", group: 18, period: 5, mass: "131.29" },

    { n: 55, sym: "Cs", name: "Cesium",     block: "s", group: 1,  period: 6, mass: "132.91" },
    { n: 56, sym: "Ba", name: "Barium",     block: "s", group: 2,  period: 6, mass: "137.33" },

    { n: 57, sym: "La", name: "Lanthanum",    block: "f", group: 4,  period: 8, mass: "138.91" },
    { n: 58, sym: "Ce", name: "Cerium",       block: "f", group: 5,  period: 8, mass: "140.12" },
    { n: 59, sym: "Pr", name: "Praseodymium", block: "f", group: 6,  period: 8, mass: "140.91" },
    { n: 60, sym: "Nd", name: "Neodymium",    block: "f", group: 7,  period: 8, mass: "144.24" },
    { n: 61, sym: "Pm", name: "Promethium",   block: "f", group: 8,  period: 8, mass: "(145)" },
    { n: 62, sym: "Sm", name: "Samarium",     block: "f", group: 9,  period: 8, mass: "150.36" },
    { n: 63, sym: "Eu", name: "Europium",     block: "f", group: 10, period: 8, mass: "151.96" },
    { n: 64, sym: "Gd", name: "Gadolinium",   block: "f", group: 11, period: 8, mass: "157.25" },
    { n: 65, sym: "Tb", name: "Terbium",      block: "f", group: 12, period: 8, mass: "158.93" },
    { n: 66, sym: "Dy", name: "Dysprosium",   block: "f", group: 13, period: 8, mass: "162.50" },
    { n: 67, sym: "Ho", name: "Holmium",      block: "f", group: 14, period: 8, mass: "164.93" },
    { n: 68, sym: "Er", name: "Erbium",       block: "f", group: 15, period: 8, mass: "167.26" },
    { n: 69, sym: "Tm", name: "Thulium",      block: "f", group: 16, period: 8, mass: "168.93" },
    { n: 70, sym: "Yb", name: "Ytterbium",    block: "f", group: 17, period: 8, mass: "173.05" },
    { n: 71, sym: "Lu", name: "Lutetium",     block: "f", group: 18, period: 8, mass: "174.97" },

    { n: 72, sym: "Hf", name: "Hafnium",    block: "d", group: 4,  period: 6, mass: "178.49" },
    { n: 73, sym: "Ta", name: "Tantalum",   block: "d", group: 5,  period: 6, mass: "180.95" },
    { n: 74, sym: "W",  name: "Tungsten",   block: "d", group: 6,  period: 6, mass: "183.84" },
    { n: 75, sym: "Re", name: "Rhenium",    block: "d", group: 7,  period: 6, mass: "186.21" },
    { n: 76, sym: "Os", name: "Osmium",     block: "d", group: 8,  period: 6, mass: "190.23" },
    { n: 77, sym: "Ir", name: "Iridium",    block: "d", group: 9,  period: 6, mass: "192.22" },
    { n: 78, sym: "Pt", name: "Platinum",   block: "d", group: 10, period: 6, mass: "195.08" },
    { n: 79, sym: "Au", name: "Gold",       block: "d", group: 11, period: 6, mass: "196.97" },
    { n: 80, sym: "Hg", name: "Mercury",    block: "d", group: 12, period: 6, mass: "200.59" },
    { n: 81, sym: "Tl", name: "Thallium",   block: "p", group: 13, period: 6, mass: "204.38" },
    { n: 82, sym: "Pb", name: "Lead",       block: "p", group: 14, period: 6, mass: "207.2" },
    { n: 83, sym: "Bi", name: "Bismuth",    block: "p", group: 15, period: 6, mass: "208.98" },
    { n: 84, sym: "Po", name: "Polonium",   block: "p", group: 16, period: 6, mass: "(209)" },
    { n: 85, sym: "At", name: "Astatine",   block: "p", group: 17, period: 6, mass: "(210)" },
    { n: 86, sym: "Rn", name: "Radon",      block: "p", group: 18, period: 6, mass: "(222)" },

    { n: 87, sym: "Fr", name: "Francium",   block: "s", group: 1,  period: 7, mass: "(223)" },
    { n: 88, sym: "Ra", name: "Radium",     block: "s", group: 2,  period: 7, mass: "(226)" },

    { n: 89,  sym: "Ac", name: "Actinium",     block: "f", group: 4,  period: 9, mass: "(227)" },
    { n: 90,  sym: "Th", name: "Thorium",      block: "f", group: 5,  period: 9, mass: "232.04" },
    { n: 91,  sym: "Pa", name: "Protactinium", block: "f", group: 6,  period: 9, mass: "231.04" },
    { n: 92,  sym: "U",  name: "Uranium",      block: "f", group: 7,  period: 9, mass: "238.03" },
    { n: 93,  sym: "Np", name: "Neptunium",    block: "f", group: 8,  period: 9, mass: "(237)" },
    { n: 94,  sym: "Pu", name: "Plutonium",    block: "f", group: 9,  period: 9, mass: "(244)" },
    { n: 95,  sym: "Am", name: "Americium",    block: "f", group: 10, period: 9, mass: "(243)" },
    { n: 96,  sym: "Cm", name: "Curium",       block: "f", group: 11, period: 9, mass: "(247)" },
    { n: 97,  sym: "Bk", name: "Berkelium",    block: "f", group: 12, period: 9, mass: "(247)" },
    { n: 98,  sym: "Cf", name: "Californium",  block: "f", group: 13, period: 9, mass: "(251)" },
    { n: 99,  sym: "Es", name: "Einsteinium",  block: "f", group: 14, period: 9, mass: "(252)" },
    { n: 100, sym: "Fm", name: "Fermium",      block: "f", group: 15, period: 9, mass: "(257)" },
    { n: 101, sym: "Md", name: "Mendelevium",  block: "f", group: 16, period: 9, mass: "(258)" },
    { n: 102, sym: "No", name: "Nobelium",     block: "f", group: 17, period: 9, mass: "(259)" },
    { n: 103, sym: "Lr", name: "Lawrencium",   block: "f", group: 18, period: 9, mass: "(266)" },

    { n: 104, sym: "Rf", name: "Rutherfordium", block: "d", group: 4,  period: 7, mass: "(267)" },
    { n: 105, sym: "Db", name: "Dubnium",       block: "d", group: 5,  period: 7, mass: "(268)" },
    { n: 106, sym: "Sg", name: "Seaborgium",    block: "d", group: 6,  period: 7, mass: "(269)" },
    { n: 107, sym: "Bh", name: "Bohrium",       block: "d", group: 7,  period: 7, mass: "(270)" },
    { n: 108, sym: "Hs", name: "Hassium",       block: "d", group: 8,  period: 7, mass: "(270)" },
    { n: 109, sym: "Mt", name: "Meitnerium",    block: "d", group: 9,  period: 7, mass: "(278)" },
    { n: 110, sym: "Ds", name: "Darmstadtium",  block: "d", group: 10, period: 7, mass: "(281)" },
    { n: 111, sym: "Rg", name: "Roentgenium",   block: "d", group: 11, period: 7, mass: "(282)" },
    { n: 112, sym: "Cn", name: "Copernicium",   block: "d", group: 12, period: 7, mass: "(285)" },
    { n: 113, sym: "Nh", name: "Nihonium",      block: "p", group: 13, period: 7, mass: "(286)" },
    { n: 114, sym: "Fl", name: "Flerovium",     block: "p", group: 14, period: 7, mass: "(289)" },
    { n: 115, sym: "Mc", name: "Moscovium",     block: "p", group: 15, period: 7, mass: "(290)" },
    { n: 116, sym: "Lv", name: "Livermorium",   block: "p", group: 16, period: 7, mass: "(293)" },
    { n: 117, sym: "Ts", name: "Tennessine",    block: "p", group: 17, period: 7, mass: "(294)" },
    { n: 118, sym: "Og", name: "Oganesson",     block: "p", group: 18, period: 7, mass: "(294)" }
  ];

  loadSavedTheme();
  loadProfileToPage();

  if (!periodic || !shell) {
    console.error("Periodic table containers not found. Check #tableShell and #periodic IDs.");
    return;
  }

  const hasCard = !!(card && hcNum && hcMass && hcSym && hcName && hcMeta);
  if (!hasCard) {
    console.warn("Hovercard elements not found. Add #hovercard and hc* ids to HTML to enable hover info.");
  }

  function prettyBlock(b) {
    if (b === "s") return "S-Block";
    if (b === "p") return "P-Block";
    if (b === "d") return "D-Block";
    if (b === "f") return "F-Block";
    return "—";
  }

  function showCard(el) {
    if (!hasCard) return;
    hcNum.textContent = el.n ?? "—";
    hcMass.textContent = el.mass ?? "—";
    hcSym.textContent = el.sym ?? "—";
    hcName.textContent = el.name ?? "—";
    hcMeta.textContent = `${prettyBlock(el.block)} • Group ${el.group} • Period ${el.period}`;
    card.classList.add("show");
    card.setAttribute("aria-hidden", "false");
  }

  function hideCard() {
    if (!hasCard) return;
    card.classList.remove("show");
    card.setAttribute("aria-hidden", "true");
  }

  function positionCard(x, y) {
    if (!hasCard) return;

    const padding = 12;
    const shellRect = shell.getBoundingClientRect();

    const cardW = card.offsetWidth;
    const cardH = card.offsetHeight;

    let left = x + 14;
    let top = y - 10;

    const maxLeft = shellRect.width - cardW - padding;
    const maxTop = shellRect.height - cardH - padding;

    if (left > maxLeft) left = x - cardW - 14;
    if (top > maxTop) top = maxTop;
    if (top < padding) top = padding;
    if (left < padding) left = padding;

    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
  }

  function render() {
    periodic.innerHTML = "";

    for (const el of ELEMENTS) {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = `el block-${el.block}`;
      tile.style.gridColumn = String(el.group);
      tile.style.gridRow = String(el.period);

      tile.innerHTML = `
        <span class="num">${el.n}</span>
        <span class="sym">${el.sym}</span>
        <span class="name">${el.name}</span>
      `;

      tile.addEventListener("mouseenter", () => showCard(el));
      tile.addEventListener("mouseleave", hideCard);
      tile.addEventListener("focus", () => showCard(el));
      tile.addEventListener("blur", hideCard);

      tile.addEventListener("click", (e) => {
        e.stopPropagation();
        showCard(el);

        if (hasCard) {
          const rect = tile.getBoundingClientRect();
          const shellRect = shell.getBoundingClientRect();
          const x = rect.left - shellRect.left + rect.width * 0.7;
          const y = rect.top - shellRect.top + rect.height * 0.2;
          positionCard(x, y);
        }
      });

      periodic.appendChild(tile);
    }

    console.log("Rendered elements:", ELEMENTS.length);
  }

  render();

  shell.addEventListener("mousemove", (e) => {
    if (!hasCard) return;
    if (!card.classList.contains("show")) return;

    const shellRect = shell.getBoundingClientRect();
    const x = e.clientX - shellRect.left;
    const y = e.clientY - shellRect.top;
    positionCard(x, y);
  });

  document.addEventListener("click", hideCard);
})();