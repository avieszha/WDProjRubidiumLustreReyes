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
    B: { name: "Boron", atomic: 5, fact: "Used in heat-resistant glass and materials, making it strong under extreme conditions." },
    C: { name: "Carbon", atomic: 6, fact: "Forms diamonds and graphite, showing how one element can take many powerful forms." },
    N: { name: "Nitrogen", atomic: 7, fact: "Makes up most of the air and is essential for life and plant growth." },
    O: { name: "Oxygen", atomic: 8, fact: "Supports breathing and combustion, essential for life and fire alike." },
    F: { name: "Fluorine", atomic: 9, fact: "The most reactive nonmetal, capable of forming extremely strong compounds." },
    Ne: { name: "Neon", atomic: 10, fact: "A noble gas that glows brightly in signs, often used for lighting effects." },
    Al: { name: "Aluminum", atomic: 13, fact: "A lightweight metal used in many structures and protective materials." },
    Si: { name: "Silicon", atomic: 14, fact: "The foundation of modern electronics, powering computers and technology." },
    P: { name: "Phosphorus", atomic: 15, fact: "Glows faintly in the dark and is used in matches, reminiscent of magical light." },
    S: { name: "Sulfur", atomic: 16, fact: "Often associated with strong smells and used in many chemical reactions." },
    Cl: { name: "Chlorine", atomic: 17, fact: "A highly reactive gas used in disinfectants and water purification." },
    Ar: { name: "Argon", atomic: 18, fact: "An inert noble gas that does not easily react, like a perfectly controlled substance." },
    Ga: { name: "Gallium", atomic: 31, fact: "Melts in your hand, behaving in ways that seem almost magical." },
    Ge: { name: "Germanium", atomic: 32, fact: "Used in semiconductors, helping control electrical signals precisely." },
    As: { name: "Arsenic", atomic: 33, fact: "A well-known poison throughout history, often linked to stealth and secrecy." },
    Se: { name: "Selenium", atomic: 34, fact: "Used in electronics and glass, and important in small amounts for health." },
    Br: { name: "Bromine", atomic: 35, fact: "A reddish liquid at room temperature, rare among elements." },
    Kr: { name: "Krypton", atomic: 36, fact: "A noble gas that produces a bright white light in lamps." },
    In: { name: "Indium", atomic: 49, fact: "Soft metal used in touchscreens and modern displays." },
    Sn: { name: "Tin", atomic: 50, fact: "Used to coat other metals and prevent corrosion." },
    Sb: { name: "Antimony", atomic: 51, fact: "Used in flame retardants, helping slow the spread of fire." },
    Te: { name: "Tellurium", atomic: 52, fact: "Used in solar panels and can make materials more efficient." },
    I: { name: "Iodine", atomic: 53, fact: "A purple vapor element essential for thyroid function and health." },
    Xe: { name: "Xenon", atomic: 54, fact: "Used in powerful lamps and flashes, similar to a sudden burst of light." },
    Tl: { name: "Thallium", atomic: 81, fact: "A toxic metal once used in poisons, requiring careful handling." },
    Pb: { name: "Lead", atomic: 82, fact: "A dense metal used in shielding against radiation." },
    Bi: { name: "Bismuth", atomic: 83, fact: "Known for its colorful crystal structures and low toxicity." },
    Po: { name: "Polonium", atomic: 84, fact: "A highly radioactive element discovered by Marie Curie." },
    At: { name: "Astatine", atomic: 85, fact: "Extremely rare and radioactive, with properties still being studied." },
    Rn: { name: "Radon", atomic: 86, fact: "A radioactive gas that can accumulate in enclosed spaces." },
    Nh: { name: "Nihonium", atomic: 113, fact: "A synthetic element created in laboratories and highly unstable." },
    Fl: { name: "Flerovium", atomic: 114, fact: "A superheavy element with very short-lived atoms." },
    Mc: { name: "Moscovium", atomic: 115, fact: "An artificial element that exists only for fractions of a second." },
    Lv: { name: "Livermorium", atomic: 116, fact: "A heavy synthetic element studied for its nuclear properties." },
    Ts: { name: "Tennessine", atomic: 117, fact: "A rare synthetic halogen with highly reactive behavior." },
    Og: { name: "Oganesson", atomic: 118, fact: "The heaviest known element, with properties unlike typical noble gases." }
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