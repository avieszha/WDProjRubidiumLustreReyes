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
      Li: { name: "Lithium", atomic: 3, fact: "Burns crimson red." },
      Na: { name: "Sodium", atomic: 11, fact: "Reacts violently with water." },
      K: { name: "Potassium", atomic: 19, fact: "grabs ur toes" },
      Rb: { name: "Rubidium", atomic: 37, fact: "won paskorus" },
      Cs: { name: "Cesium", atomic: 55, fact: "kiko" },
      Fr: { name: "Francium", atomic: 87, fact: "stinks" },
      Be: { name: "Beryllium", atomic: 4, fact: "enzos better" },
      Mg: { name: "Magnesium", atomic: 12, fact: "PEEKABOO" },
      Ca: { name: "Calcium", atomic: 20, fact: "avi hottie" },
      Sr: { name: "Strontium", atomic: 38, fact: "i miss avi" },
      Ba: { name: "Barium", atomic: 56, fact: "enzo was here" },
      Ra: { name: "Radium", atomic: 88, fact: "ahamsjsjwmsn" }
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