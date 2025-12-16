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
      H: {name: "Hydrogen", atomic: 1, fact: "This will be updated soon."},
      Li: { name: "Lithium", atomic: 3, fact: "Burns crimson red." },
      Na: { name: "Sodium", atomic: 11, fact: "Reacts violently with water." },
      K: { name: "Potassium", atomic: 19, fact: "This will be updated soon." },
      Rb: { name: "Rubidium", atomic: 37, fact: "Won Paskorus!" },
      Cs: { name: "Cesium", atomic: 55, fact: "This will be updated soon." },
      He: { name: "Helium", atomic: 2, fact: "This will be updated soon."},
      Fr: { name: "Francium", atomic: 87, fact: "This will be updated soon." },
      Be: { name: "Beryllium", atomic: 4, fact: "This will be updated soon." },
      Mg: { name: "Magnesium", atomic: 12, fact: "This will be updated soon." },
      Ca: { name: "Calcium", atomic: 20, fact: "This will be updated soon." },
      Sr: { name: "Strontium", atomic: 38, fact: "This will be updated soon." },
      Ba: { name: "Barium", atomic: 56, fact: "This will be updated soon." },
      Ra: { name: "Radium", atomic: 88, fact: "This will be updated soon." }
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