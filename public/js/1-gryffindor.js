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
     H: { name: "Hydrogen", atomic: 1, fact: "The lightest element and a major component of stars, the source of their energy." },
     Li: { name: "Lithium", atomic: 3, fact: "Used in modern batteries and burns with a crimson flame." },
     Na: { name: "Sodium", atomic: 11, fact: "Reacts violently with water and produces a bright yellow flame." },
     K: { name: "Potassium", atomic: 19, fact: "Burns with a lilac flame and is found in many magical plant-based potions." },
     Rb: { name: "Rubidium", atomic: 37, fact: "A highly reactive metal that can ignite spontaneously when exposed to air." },
     Cs: { name: "Cesium", atomic: 55, fact: "One of the most reactive elements, exploding instantly upon contact with water." },
     He: { name: "Helium", atomic: 2, fact: "An inert noble gas used to fill balloons, known for making voices sound high-pitched." },
     Fr: { name: "Francium", atomic: 87, fact: "Extremely rare and highly radioactive, making it difficult to study or observe." },
     Be: { name: "Beryllium", atomic: 4, fact: "A strong but lightweight metal used in advanced materials and instruments." },
     Mg: { name: "Magnesium", atomic: 12, fact: "Burns with an intense white light, similar to a bright flash spell." },
     Ca: { name: "Calcium", atomic: 20, fact: "Essential for strong bones and teeth, forming the structure of living bodies." },
     Sr: { name: "Strontium", atomic: 38, fact: "Used in fireworks to produce deep red colors, like Gryffindor’s signature shade." },
     Ba: { name: "Barium", atomic: 56, fact: "Used in medical imaging to reveal internal structures, almost like a revealing charm." },
     Ra: { name: "Radium", atomic: 88, fact: "A radioactive element once used in glowing paints, giving off a mysterious green light." }
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