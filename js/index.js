import { setupNavigation, showInitialSections } from "./router.js";
import { setupSideMenus } from "./menus.js";
import { startGIF, setupTextarea } from "./visuals.js";

document.addEventListener("DOMContentLoaded", () => {
  showInitialSections();
  setupNavigation();
  setupSideMenus();
  setupTextarea();
  startGIF();

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    show("#home");
    show("#about");
    show("#projects");
    show("#skills");
    show("#contact");
  }
});
