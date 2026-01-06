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
   * 3) RAVENCLAW F-BLOCK ELEMENT MODAL
   * ========================================================== */
  const modal = document.getElementById("elementModal");
  const closeBtn = document.getElementById("modalClose");
  const cells = document.querySelectorAll(".element-cell");

  if (modal && closeBtn && cells.length) {
    const data = {
      Ce: { name: "Cerium", atomic: 58, fact: "This will be updated soon."},
      Pr: { name: "Praseodymium", atomic: 59, fact: "This will be updated soon." },
      Nd: { name: "Neodymium", atomic: 60, fact: "This will be updated soon." },
      Pm: { name: "Promethium", atomic: 61, fact: "This will be updated soon." },
      Sm: { name: "Samarium", atomic: 62, fact: "This will be updated soon." },
      Eu: { name: "Europium", atomic: 63, fact: "This will be updated soon." },
      Gd: { name: "Gadolinium", atomic: 64, fact: "This will be updated soon." },
      Tb: { name: "Terbium", atomic: 65, fact: "This will be updated soon." },
      Dy: { name: "Dysprosium", atomic: 66, fact: "This will be updated soon." },
      Ho: { name: "Holmium", atomic: 67, fact: "This will be updated soon." },
      Er: { name: "Erbium", atomic: 68, fact: "This will be updated soon." },
      Tm: { name: "Thulium", atomic: 69, fact: "This will be updated soon." },
      Yb: { name: "Ytterbium", atomic: 70, fact: "This will be updated soon." },
      Lu: { name: "Lutetium", atomic: 71, fact: "This will be updated soon." },
      Th: { name: "Thorium", atomic: 90, fact: "This will be updated soon." },
      Pa: { name: "Protactinium", atomic: 91, fact: "This will be updated soon." },
      U: { name: "Uranium", atomic: 92, fact: "This will be updated soon." },
      Np: { name: "Neptunium", atomic: 93, fact: "This will be updated soon." },
      Pu: { name: "Plutonium", atomic: 94, fact: "This will be updated soon." },
      Am: { name: "Americium", atomic: 95, fact: "This will be updated soon." },
      Cm: { name: "Curium", atomic: 96, fact: "This will be updated soon." },
      Bk: { name: "Berkelium", atomic: 97, fact: "This will be updated soon." },
      Cf: { name: "Californium", atomic: 98, fact: "This will be updated soon." },
      Es: { name: "Einsteinium", atomic: 99, fact: "This will be updated soon." },
      Fm: { name: "Fermium", atomic: 100, fact: "This will be updated soon." },
      Md: { name: "Mendelevium", atomic: 101, fact: "This will be updated soon." },
      Np: { name: "Nobelium", atomic: 102, fact: "This will be updated soon." },
      Lr: {name: "Lawrencium", atomic: 103, fact: "This will be updated soon."}
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