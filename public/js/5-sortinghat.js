document.addEventListener("DOMContentLoaded", () => {

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

  const sortingForm = document.getElementById("sorting-form");
  const elementInput = document.getElementById("elementInput");
  const resultSection = document.getElementById("sorting-result");

  const resultHouse = document.getElementById("resultHouse");
  const resultReason = document.getElementById("resultReason");
  const visitHouseLink = document.getElementById("visitHouseLink");
  const resetButton = document.getElementById("resetSorting");

  if (!sortingForm || !elementInput || !resultSection) return;

  const houseInfo = {
      gryffindor: {
        name: "Gryffindor",
        link: "1-gryffindor.html",
        reason:
          "Because your valence electrons rest bravely in the s orbital — energetic and reactive like the alkali and alkaline earth metals."
      },
      slytherin: {
        name: "Slytherin",
        link: "2-slytherin.html",
        reason:
          "Because your electrons slither into the p orbitals, showing cunning trends in electronegativity and reactivity."
      },
      hufflepuff: {
        name: "Hufflepuff",
        link: "3-hufflepuff.html",
        reason:
          "Because you work steadily in the d orbitals — loyal, hardworking transition metals."
      },
      ravenclaw: {
        name: "Ravenclaw",
        link: "4-ravenclaw.html",
        reason:
          "Because your electrons study quietly in the f orbitals — complex and intellectual."
      },
      unknown: {
        name: "No House Yet",
        link: "../index.html",
        reason:
          "The Sorting Hat cannot decide yet. Try another element name, symbol, or block."
      }
    };

  const sBlock = new Set([
    "h", "hydrogen", "li", "lithium", "na", "sodium", "k", "potassium", "rb",
    "rubidium", "cs", "cesium", "caesium", "fr", "francium",
    "be", "beryllium", "mg", "magnesium", "ca", "calcium", "sr",
    "strontium", "ba", "barium", "ra", "radium"
  ]);

  const pBlock = new Set([
    "b", "boron", "c", "carbon", "n", "nitrogen", "o", "oxygen", "f", "fluorine",
    "ne", "neon", "al", "aluminum", "aluminium", "si", "silicon", "p",
    "phosphorus", "s", "sulfur", "sulphur", "cl", "chlorine", "ar", "argon"
  ]);

  const dBlock = new Set([
    "sc", "scandium", "ti", "titanium", "v", "vanadium", "cr", "chromium",
    "mn", "manganese", "fe", "iron", "co", "cobalt", "ni", "nickel",
    "cu", "copper", "zn", "zinc"
  ]);

  const fBlock = new Set([
    "la", "lanthanum", "ce", "cerium", "nd", "neodymium",
    "u", "uranium", "pu", "plutonium"
  ]);

  function classifyInput(rawValue) {
    const value = rawValue.trim().toLowerCase();
    if (!value) return houseInfo.unknown;

    if (value.includes("s-block") || value.includes("alkali")) return houseInfo.gryffindor;
    if (value.includes("p-block") || value.includes("halogen") || value.includes("noble gas"))
      return houseInfo.slytherin;
    if (value.includes("d-block") || value.includes("transition"))
      return houseInfo.hufflepuff;
    if (value.includes("f-block") || value.includes("lanthanide") || value.includes("actinide"))
      return houseInfo.ravenclaw;

    if (sBlock.has(value)) return houseInfo.gryffindor;
    if (pBlock.has(value)) return houseInfo.slytherin;
    if (dBlock.has(value)) return houseInfo.hufflepuff;
    if (fBlock.has(value)) return houseInfo.ravenclaw;

    if (value.includes("electronegativity >") || value.includes("very electronegative"))
      return houseInfo.slytherin;

    return houseInfo.unknown;
  }

  sortingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userValue = elementInput.value;
    const result = classifyInput(userValue);

    resultHouse.textContent = `You belong to ${result.name}`;
    resultReason.textContent = result.reason;
    visitHouseLink.href = result.link;

    resultSection.classList.remove("hidden");
    resultSection.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      sortingForm.reset();
      resultSection.classList.add("hidden");
      elementInput.focus();
    });
  }
});
