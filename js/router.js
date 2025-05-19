import { hide, show } from "./helpers.js";
import { updateSectionIcon } from "./menus.js";

let currentSection = "#home";

export function showSection(sectionId) {
  const { exit, enter } = getTransitionAnimation(currentSection, sectionId);
  transitionSection(currentSection, sectionId, exit, enter);
  currentSection = sectionId;

  const sectionKey = sectionId.replace("#", "");
  document.querySelectorAll(".side-menu").forEach((menu) => {
    menu.querySelectorAll(".side-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    const activeBtn = menu.querySelector(`.side-btn-${sectionKey}`);
    if (activeBtn) {
      activeBtn.classList.add("active");
      updateSectionIcon(sectionKey);
    }
  });
}

function transitionSection(fromId, toId, exitSection, enterSection) {
  const fromEl = document.querySelector(fromId);
  const toEl = document.querySelector(toId);

  toEl.style.display = "flex";
  toEl.classList.remove("hidden");
  toEl.classList.add(enterSection);

  fromEl.classList.remove("visible");
  fromEl.classList.add(exitSection);

  setTimeout(() => {
    fromEl.classList.remove(exitSection);
    fromEl.classList.add("hidden");
    fromEl.style.display = "none";

    toEl.classList.remove(enterSection);
    toEl.classList.add("visible");
  }, 600);
}

function getTransitionAnimation(from, to) {
  const key = `${from}->${to}`;
  return (
    transitionMap[key] || { exit: "exitLeftSection", enter: "enterLeftSection" }
  );
}

export function setupNavigation() {
  document
    .querySelector("#about-btn")
    .addEventListener("click", () => showSection("#about"));
  document
    .querySelector("#projects-btn")
    .addEventListener("click", () => showSection("#projects"));
  document
    .querySelector("#skills-btn")
    .addEventListener("click", () => showSection("#skills"));
  document
    .querySelector("#contact-btn")
    .addEventListener("click", () => showSection("#contact"));
}

export function showInitialSections() {
  ["#home", "#about", "#projects", "#skills", "#contact"].forEach(show);
}

/* Mapa de transiciones ------------------------------------------------------------------------------------------ */
const transitionMap = {
  "#home->#about": { exit: "exitLeftSection", enter: "enterRightSection" },
  "#home->#projects": { exit: "exitLeftSection", enter: "enterRightSection" },
  "#home->#skills": { exit: "exitLeftSection", enter: "enterRightSection" },
  "#home->#contact": { exit: "exitLeftSection", enter: "enterRightSection" },

  "#about->#projects": { exit: "exitUpSection", enter: "enterDownSection" },
  "#about->#skills": { exit: "exitUpSection", enter: "enterDownSection" },
  "#about->#contact": { exit: "exitUpSection", enter: "enterDownSection" },

  "#projects->#about": { exit: "exitDownSection", enter: "enterUpSection" },
  "#projects->#skills": { exit: "exitUpSection", enter: "enterDownSection" },
  "#projects->#contact": { exit: "exitUpSection", enter: "enterDownSection" },

  "#skills->#about": { exit: "exitDownSection", enter: "enterUpSection" },
  "#skills->#projects": { exit: "exitDownSection", enter: "enterUpSection" },
  "#skills->#contact": { exit: "exitUpSection", enter: "enterDownSection" },

  "#contact->#about": { exit: "exitDownSection", enter: "enterUpSection" },
  "#contact->#projects": { exit: "exitDownSection", enter: "enterUpSection" },
  "#contact->#skills": { exit: "exitDownSection", enter: "enterUpSection" },

  "#about->#home": { exit: "exitRightSection", enter: "enterLeftSection" },
  "#projects->#home": { exit: "exitRightSection", enter: "enterLeftSection" },
  "#skills->#home": { exit: "exitRightSection", enter: "enterLeftSection" },
  "#contact->#home": { exit: "exitRightSection", enter: "enterLeftSection" },
};
