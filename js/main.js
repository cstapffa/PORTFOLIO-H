import { setupNavigation, showInitialSections } from "./router.js";
import { setupSideMenus } from "./menus.js";
import { startGIF, setupTextarea } from "./visuals.js";

document.addEventListener("DOMContentLoaded", () => {
  showInitialSections();
  setupNavigation();
  setupSideMenus();
  setupTextarea();
  startGIF();

  /* Responsive */
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    show("#home");
    show("#about");
    show("#projects");
    show("#skills");
    show("#contact");
  }
});

// Get all cards
const projectCards = document.querySelectorAll(".card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    if (id) {
      // Redirect with project ID in query param
      window.location.href = `project.html?id=${id}`;
    }
  });
});
