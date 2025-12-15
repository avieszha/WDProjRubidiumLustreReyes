document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================
   * 1) NAVIGATION: HOUSES DROPDOWN
   * ========================================================== */
  const dropdownToggle = document.querySelector(".nav-dropdown-toggle");
  const dropdownMenu = document.querySelector(".nav-dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", () => {
      dropdownMenu.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (
        !dropdownToggle.contains(e.target) &&
        !dropdownMenu.contains(e.target)
      ) {
        dropdownMenu.classList.remove("open");
      }
    });
  }

  /* ==========================================================
   * 2) LUMOS / NOX TOGGLE
   * ========================================================== */
  const lumosButton = document.getElementById("lumosToggle");

  if (lumosButton) {
    const savedMode = localStorage.getItem("periodi-lumos");

    if (savedMode === "on") {
      document.body.classList.add("lumos-on");
      lumosButton.textContent = "Nox";
    }

    lumosButton.addEventListener("click", () => {
      const isOn = document.body.classList.toggle("lumos-on");
      lumosButton.textContent = isOn ? "Nox" : "Lumos";
      localStorage.setItem("periodi-lumos", isOn ? "on" : "off");
    });
  }

  /* ==========================================================
   * 3) GRYFFINDOR S-BLOCK ELEMENT MODAL
   * ========================================================== */
  const modal = document.getElementById("elementModal");
  const closeBtn = document.getElementById("modalClose");
  const cells = document.querySelectorAll(".element-cell");

  if (modal && closeBtn && cells.length) {
    const data = {
      B: { name: "Boron", atomic: 5, fact: "h2o"},
      C: { name: "Carbon", atomic: 6, fact: "Burns crimson red." },
      N: { name: "Nitrogen", atomic: 7, fact: "Reacts violently with water." },
      O: { name: "Oxygen", atomic: 8, fact: "grabs ur toes" },
      F: { name: "Fluorine", atomic: 9, fact: "won paskorus" },
      Ne: { name: "Neon", atomic: 10, fact: "kiko" },
      Al: { name: "Aluminum", atomic: 13, fact: "makes yo voice squeeky"},
      Si: { name: "Silicon", atomic: 14, fact: "francis warren" },
      P: { name: "Phosphorus", atomic: 15, fact: "enzos better" },
      S: { name: "Sulfur", atomic: 16, fact: "PEEKABOO" },
      Cl: { name: "Chlorine", atomic: 17, fact: "avi hottie" },
      Ar: { name: "Argon", atomic: 18, fact: "i miss avi" },
      Ga: { name: "Gallium", atomic: 31, fact: "enzo was here" },
      Ge: { name: "Germanium", atomic: 32, fact: "ahamsjsjwmsn" },
      As: {name: "Arsenic", atomic: 33, fact: "h2o"},
      Se: { name: "Selenium", atomic: 34, fact: "Burns crimson red." },
      Br: { name: "Bromine", atomic: 35, fact: "Reacts violently with water." },
      Kr: { name: "Krypton", atomic: 36, fact: "grabs ur toes" },
      In: { name: "Indium", atomic: 49, fact: "won paskorus" },
      Sn: { name: "Tin", atomic: 50, fact: "kiko" },
      Sb: { name: "Antimony", atomic: 51, fact: "makes yo voice squeeky"},
      Te: { name: "Tellurium", atomic: 52, fact: "francis warren" },
      I: { name: "Iodine", atomic: 53, fact: "enzos better" },
      Xe: { name: "Xenon", atomic: 54, fact: "PEEKABOO" },
      Tl: { name: "Thallium", atomic: 81, fact: "avi hottie" },
      Pb: { name: "Lead", atomic: 82, fact: "i miss avi" },
      Bi: { name: "Bismuth", atomic: 83, fact: "enzo was here" },
      Po: {name: "Polonium", atomic: 84, fact: "h2o"},
      At: { name: "Astatine", atomic: 85, fact: "Burns crimson red." },
      Rn: { name: "Radon", atomic: 86, fact: "Reacts violently with water." },
      Nh: { name: "Nihonium", atomic: 113, fact: "grabs ur toes" },
      Fl: { name: "Flerovium", atomic: 114, fact: "won paskorus" },
      Mc: { name: "Moscovium", atomic: 115, fact: "kiko" },
      Lv: { name: "Livermorium", atomic: 116, fact: "makes yo voice squeeky"},
      Ts: { name: "Tennessine", atomic: 117, fact: "francis warren" },
      Og: { name: "Oganesson", atomic: 118, fact: "enzos better" }
    };

    const modalName = document.getElementById("modalName");
    const modalSymbol = document.getElementById("modalSymbol");
    const modalAtomic = document.getElementById("modalAtomic");
    const modalFact = document.getElementById("modalFact");

    cells.forEach(cell => {
      cell.addEventListener("click", () => {
        const key = cell.dataset.element;
        const el = data[key];

        modalName.textContent = el.name;
        modalSymbol.textContent = key;
        modalAtomic.textContent = el.atomic;
        modalFact.textContent = el.fact;

        modal.classList.remove("hidden");
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.classList.add("hidden");
    });
  }

});