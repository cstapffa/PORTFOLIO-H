import { setupNavigation, showInitialSections } from "./router.js";
import { setupSideMenus } from "./menus.js";
import { startGIF, setupTextarea } from "./visuals.js";
import { show } from "./helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  showInitialSections();
  setupNavigation();
  setupSideMenus();
  setupTextarea();
  startGIF();

  /* Responsive */
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const sections = ["#home", "#about", "#projects", "#skills", "#contact"];

    sections.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.display = "block";
        show(selector);
      }
    });
  }
});

const projectCards = document.querySelectorAll(".card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    if (id) {
      window.location.href = `project.html?id=${id}`;
    }
  });
});
