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
   * 3) HUFFLEPUFF D-BLOCK ELEMENT MODAL
   * ========================================================== */
  const modal = document.getElementById("elementModal");
  const closeBtn = document.getElementById("modalClose");
  const cells = document.querySelectorAll(".element-cell");

  if (modal && closeBtn && cells.length) {
    const data = {
      Sc: { name: "Scandium", atomic: 21, fact: "This will be updated soon."},
      Ti: { name: "Titanium", atomic: 22, fact: "This will be updated soon." },
      V: { name: "Vanadium", atomic: 23, fact: "This will be updated soon." },
      Cr: { name: "Chromium", atomic: 24, fact: "This will be updated soon." },
      Mn: { name: "Manganese", atomic: 25, fact: "This will be updated soon." },
      Fe: { name: "Iron", atomic: 26, fact: "This will be updated soon." },
      Co: { name: "Cobalt", atomic: 27, fact: "This will be updated soon."},
      Ni: { name: "Nickel", atomic: 28, fact: "This will be updated soon." },
      Cu: { name: "Copper", atomic: 29, fact: "This will be updated soon." },
      Zn: { name: "Zinc", atomic: 30, fact: "This will be updated soon." },
      Y: { name: "Yttrium", atomic: 39, fact: "This will be updated soon." },
      Zr: { name: "Zirconium", atomic: 40, fact: "This will be updated soon." },
      Nb: { name: "Niobium", atomic: 41, fact: "This will be updated soon." },
      Mo: { name: "Molybdenum", atomic: 42, fact: "This will be updated soon." },
      Tc: {name: "Technetium", atomic: 43, fact: "This will be updated soon."},
      Ru: { name: "Ruthenium", atomic: 44, fact: "This will be updated soon." },
      Rh: { name: "Rhodium", atomic: 45, fact: "This will be updated soon." },
      Pd: { name: "Palladium", atomic: 46, fact: "This will be updated soon." },
      Ag: { name: "Silver", atomic: 47, fact: "This will be updated soon." },
      Cd: { name: "Cadmium", atomic: 48, fact: "This will be updated soon." },
      La: { name: "Lanthanum", atomic: 57, fact: "This will be updated soon."},
      Hf: { name: "Hofnium", atomic: 72, fact: "This will be updated soon." },
      Ta: { name: "Tantalum", atomic: 73, fact: "This will be updated soon." },
      W: { name: "Tungsten", atomic: 74, fact: "This will be updated soon." },
      Re: { name: "Rhenium", atomic: 75, fact: "This will be updated soon." },
      Os: { name: "Osmium", atomic: 76, fact: "This will be updated soon." },
      Ir: { name: "Iridium", atomic: 77, fact: "This will be updated soon." },
      Pt: {name: "Platinum", atomic: 78, fact: "This will be updated soon."},
      Au: { name: "Gold", atomic: 79, fact: "This will be updated soon." },
      Hg: { name: "Mercury", atomic: 80, fact: "This will be updated soon." },
      Ac: { name: "Actinium", atomic: 89, fact: "This will be updated soon."},
      Rf: { name: "Rutherfordium", atomic: 104, fact: "This will be updated soon." },
      Db: { name: "Dubnium", atomic: 105, fact: "This will be updated soon." },
      Sg: { name: "Seaborgium", atomic: 106, fact: "This will be updated soon."},
      Bh: { name: "Bohrium", atomic: 107, fact: "This will be updated soon." },
      Hs: { name: "Hassium", atomic: 108, fact: "This will be updated soon." },
      Mt: { name: "Meitnerium", atomic: 109, fact: "This will be updated soon." },
      Ds: { name: "Darmstadtium", atomic: 110, fact: "This will be updated soon."},
      Rg: { name: "Roentgenium", atomic: 111, fact: "This will be updated soon." },
      Cn: { name: "Copernicium", atomic: 112, fact: "This will be updated soon." }
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