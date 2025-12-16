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
   * 3) SLYTHERIN P-BLOCK ELEMENT MODAL
   * ========================================================== */
  const modal = document.getElementById("elementModal");
  const closeBtn = document.getElementById("modalClose");
  const cells = document.querySelectorAll(".element-cell");

  if (modal && closeBtn && cells.length) {
    const data = {
      B: { name: "Boron", atomic: 5, fact: "This will be updated soon."},
      C: { name: "Carbon", atomic: 6, fact: "This will be updated soon." },
      N: { name: "Nitrogen", atomic: 7, fact: "This will be updated soon." },
      O: { name: "Oxygen", atomic: 8, fact: "This will be updated soon." },
      F: { name: "Fluorine", atomic: 9, fact: "This will be updated soon." },
      Ne: { name: "Neon", atomic: 10, fact: "This will be updated soon." },
      Al: { name: "Aluminum", atomic: 13, fact: "This will be updated soon."},
      Si: { name: "Silicon", atomic: 14, fact: "This will be updated soon." },
      P: { name: "Phosphorus", atomic: 15, fact: "This will be updated soon." },
      S: { name: "Sulfur", atomic: 16, fact: "This will be updated soon." },
      Cl: { name: "Chlorine", atomic: 17, fact: "This will be updated soon." },
      Ar: { name: "Argon", atomic: 18, fact: "This will be updated soon." },
      Ga: { name: "Gallium", atomic: 31, fact: "This will be updated soon." },
      Ge: { name: "Germanium", atomic: 32, fact: "This will be updated soon." },
      As: {name: "Arsenic", atomic: 33, fact: "This will be updated soon."},
      Se: { name: "Selenium", atomic: 34, fact: "This will be updated soon." },
      Br: { name: "Bromine", atomic: 35, fact: "This will be updated soon." },
      Kr: { name: "Krypton", atomic: 36, fact: "This will be updated soon." },
      In: { name: "Indium", atomic: 49, fact: "This will be updated soon." },
      Sn: { name: "Tin", atomic: 50, fact: "This will be updated soon." },
      Sb: { name: "Antimony", atomic: 51, fact: "This will be updated soon."},
      Te: { name: "Tellurium", atomic: 52, fact: "This will be updated soon." },
      I: { name: "Iodine", atomic: 53, fact: "This will be updated soon." },
      Xe: { name: "Xenon", atomic: 54, fact: "This will be updated soon." },
      Tl: { name: "Thallium", atomic: 81, fact: "This will be updated soon." },
      Pb: { name: "Lead", atomic: 82, fact: "This will be updated soon." },
      Bi: { name: "Bismuth", atomic: 83, fact: "This will be updated soon." },
      Po: {name: "Polonium", atomic: 84, fact: "This will be updated soon."},
      At: { name: "Astatine", atomic: 85, fact: "This will be updated soon." },
      Rn: { name: "Radon", atomic: 86, fact: "This will be updated soon." },
      Nh: { name: "Nihonium", atomic: 113, fact: "This will be updated soon." },
      Fl: { name: "Flerovium", atomic: 114, fact: "This will be updated soon." },
      Mc: { name: "Moscovium", atomic: 115, fact: "This will be updated soon." },
      Lv: { name: "Livermorium", atomic: 116, fact: "This will be updated soon."},
      Ts: { name: "Tennessine", atomic: 117, fact: "This will be updated soon." },
      Og: { name: "Oganesson", atomic: 118, fact: "This will be updated soon." }
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