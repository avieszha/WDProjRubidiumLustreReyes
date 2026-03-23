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
      Sc: { name: "Scandium", atomic: 21, fact: "A lightweight transition metal used in aerospace alloys to increase strength without adding much mass."},

Ti: { name: "Titanium", atomic: 22, fact: "Strong, corrosion-resistant metal used in aircraft, implants, and even armor—valued for its durability." },

V: { name: "Vanadium", atomic: 23, fact: "Used to strengthen steel, making tools and structures more durable and resistant to wear." },

Cr: { name: "Chromium", atomic: 24, fact: "Gives stainless steel its corrosion resistance and is known for its shiny, mirror-like finish." },

Mn: { name: "Manganese", atomic: 25, fact: "Essential in steel production and also important in biological systems for enzyme function." },

Fe: { name: "Iron", atomic: 26, fact: "A key component of steel and also found in hemoglobin, allowing blood to carry oxygen." },

Co: { name: "Cobalt", atomic: 27, fact: "Used in blue pigments and rechargeable batteries; gives glass and ceramics a deep blue color."},

Ni: { name: "Nickel", atomic: 28, fact: "Corrosion-resistant metal used in coins and alloys like stainless steel." },

Cu: { name: "Copper", atomic: 29, fact: "Excellent conductor of electricity, widely used in wiring and electrical systems." },

Zn: { name: "Zinc", atomic: 30, fact: "Used to galvanize iron to prevent rust and is also essential for human immune function." },

Y: { name: "Yttrium", atomic: 39, fact: "Used in LEDs and phosphors, helping produce bright colors in screens and lighting." },

Zr: { name: "Zirconium", atomic: 40, fact: "Highly resistant to corrosion and used in nuclear reactors and ceramic materials." },

Nb: { name: "Niobium", atomic: 41, fact: "Strengthens steel and is used in superconducting magnets." },

Mo: { name: "Molybdenum", atomic: 42, fact: "Improves strength and heat resistance in steel alloys used in high-temperature environments." },

Tc: {name: "Technetium", atomic: 43, fact: "A radioactive element used in medical imaging, especially in diagnostic scans."},

Ru: { name: "Ruthenium", atomic: 44, fact: "Used in electronics and as a catalyst in chemical reactions." },

Rh: { name: "Rhodium", atomic: 45, fact: "Highly reflective and resistant to corrosion, used in catalytic converters and jewelry plating." },

Pd: { name: "Palladium", atomic: 46, fact: "Absorbs hydrogen efficiently and is widely used in catalytic converters and electronics." },

Ag: { name: "Silver", atomic: 47, fact: "Best electrical conductor among all elements and also known for antimicrobial properties—famously associated with protection against dark creatures in folklore." },

Cd: { name: "Cadmium", atomic: 48, fact: "Used in batteries and pigments but is toxic and must be handled carefully." },

La: { name: "Lanthanum", atomic: 57, fact: "Used in camera lenses and hybrid car batteries due to its optical and electrical properties."},

Hf: { name: "Hafnium", atomic: 72, fact: "Resistant to heat and corrosion, used in control rods for nuclear reactors." },

Ta: { name: "Tantalum", atomic: 73, fact: "Highly corrosion-resistant metal used in electronics like capacitors." },

W: { name: "Tungsten", atomic: 74, fact: "Has the highest melting point of all metals, used in light bulb filaments and high-temperature tools." },

Re: { name: "Rhenium", atomic: 75, fact: "Used in jet engines due to its ability to withstand extremely high temperatures." },

Os: { name: "Osmium", atomic: 76, fact: "One of the densest elements, used in specialized alloys and fountain pen tips." },

Ir: { name: "Iridium", atomic: 77, fact: "Extremely corrosion-resistant and found in meteorites, linking it to asteroid impact studies." },

Pt: {name: "Platinum", atomic: 78, fact: "Precious metal used in catalytic converters and fine jewelry—valued for its rarity and stability."},

Au: { name: "Gold", atomic: 79, fact: "Highly unreactive metal used in electronics and currency—its resistance to tarnish reflects Hufflepuff’s enduring loyalty." },

Hg: { name: "Mercury", atomic: 80, fact: "The only metal liquid at room temperature, historically used in thermometers and alchemy." },

Ac: { name: "Actinium", atomic: 89, fact: "A radioactive element that glows faintly in the dark due to its intense radioactivity."},

Rf: { name: "Rutherfordium", atomic: 104, fact: "A synthetic element studied for its chemical properties; not found naturally." },

Db: { name: "Dubnium", atomic: 105, fact: "A highly unstable synthetic element used only in scientific research." },

Sg: { name: "Seaborgium", atomic: 106, fact: "Named after chemist Glenn Seaborg, this element exists only in laboratories."},

Bh: { name: "Bohrium", atomic: 107, fact: "A short-lived synthetic element with no practical applications outside research." },

Hs: { name: "Hassium", atomic: 108, fact: "Extremely unstable and produced in particle accelerators for study." },

Mt: { name: "Meitnerium", atomic: 109, fact: "Named after physicist Lise Meitner, it is a synthetic and highly unstable element." },

Ds: { name: "Darmstadtium", atomic: 110, fact: "Produced in laboratories and studied for its atomic structure."},

Rg: { name: "Roentgenium", atomic: 111, fact: "A radioactive synthetic element with very limited known properties." },

Cn: { name: "Copernicium", atomic: 112, fact: "A highly unstable element that may behave similarly to noble gases despite being a metal." }
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