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
      Sc: { name: "Scandium", atomic: 5, fact: "h2o"},
      Ti: { name: "Titanium", atomic: 6, fact: "Burns crimson red." },
      V: { name: "Vanadium", atomic: 7, fact: "Reacts violently with water." },
      Cr: { name: "Chromium", atomic: 8, fact: "grabs ur toes" },
      Mn: { name: "Manganese", atomic: 9, fact: "won paskorus" },
      Fe: { name: "Iron", atomic: 10, fact: "kiko" },
      Co: { name: "Cobalt", atomic: 13, fact: "makes yo voice squeeky"},
      Ni: { name: "Nickel", atomic: 14, fact: "francis warren" },
      Cu: { name: "Copper", atomic: 15, fact: "enzos better" },
      Zn: { name: "Zinc", atomic: 16, fact: "PEEKABOO" },
      Y: { name: "Yttrium", atomic: 17, fact: "avi hottie" },
      Zr: { name: "Zirconium", atomic: 18, fact: "i miss avi" },
      Nb: { name: "Niobium", atomic: 31, fact: "enzo was here" },
      Mo: { name: "Molybdenum", atomic: 32, fact: "ahamsjsjwmsn" },
      Tc: {name: "Technetium", atomic: 33, fact: "h2o"},
      Ru: { name: "Ruthenium", atomic: 34, fact: "Burns crimson red." },
      Rh: { name: "Rhodium", atomic: 35, fact: "Reacts violently with water." },
      Pd: { name: "Palladium", atomic: 36, fact: "grabs ur toes" },
      Ag: { name: "Silver", atomic: 49, fact: "won paskorus" },
      Cd: { name: "Cadmium", atomic: 50, fact: "kiko" },
      La: { name: "Lanthanum", atomic: "", fact: ""},
      Hf: { name: "Hofnium", atomic: 52, fact: "francis warren" },
      Ta: { name: "Tantalum", atomic: 53, fact: "enzos better" },
      W: { name: "Tungsten", atomic: 54, fact: "PEEKABOO" },
      Re: { name: "Rhenium", atomic: 81, fact: "avi hottie" },
      Os: { name: "Osmium", atomic: 82, fact: "i miss avi" },
      Ir: { name: "Iridium", atomic: 83, fact: "enzo was here" },
      Pt: {name: "Platinum", atomic: 84, fact: "h2o"},
      Au: { name: "Gold", atomic: 85, fact: "Burns crimson red." },
      Hg: { name: "Mercury", atomic: 86, fact: "Reacts violently with water." },
      Ac: { name: "Actinium", atomic: "", fact: ""},
      Rf: { name: "Rutherfordium", atomic: 114, fact: "won paskorus" },
      Db: { name: "Dubnium", atomic: 115, fact: "kiko" },
      Sg: { name: "Seaborgium", atomic: 116, fact: "makes yo voice squeeky"},
      Bh: { name: "Bohrium", atomic: 117, fact: "francis warren" },
      Hs: { name: "Hassium", atomic: 118, fact: "enzos better" },
      Mt: { name: "Meitnerium", atomic: 115, fact: "kiko" },
      Ds: { name: "Darmstadtium", atomic: 116, fact: "makes yo voice squeeky"},
      Rg: { name: "Roentgenium", atomic: 117, fact: "francis warren" },
      Cn: { name: "Copernicium", atomic: 118, fact: "enzos better" }
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