import { hide, show } from "./helpers.js";

// === HOME + SECTIONS ===
function showSection(sectionId) {
  hide("#home");
  hide("#about");
  hide("#projects");
  hide("#skills");
  hide("#contact");

  show(sectionId);

  const sectionKey = sectionId.replace("#", "");
  document.querySelectorAll(".side-menu").forEach((menu) => {
    menu.querySelectorAll(".side-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    const activeBtn = menu.querySelector(`.side-btn-${sectionKey}`);
    if (activeBtn) {
      activeBtn.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  show("#home");
  hide("#about");
  hide("#projects");
  hide("#skills");
  hide("#contact");

  // === MAIN NAVIGATION BUTTONS ===
  document.querySelector("#about-btn").addEventListener("click", () => {
    showSection("#about");
  });
  document.querySelector("#projects-btn").addEventListener("click", () => {
    showSection("#projects");
  });
  document.querySelector("#skills-btn").addEventListener("click", () => {
    showSection("#skills");
  });
  document.querySelector("#contact-btn").addEventListener("click", () => {
    showSection("#contact");
  });

  // === DYNAMIC SIDE MENU ===
  const sideMenus = document.querySelectorAll(".side-menu");
  const menuHTML = `
    <ul>
      <li class="side-btn side-btn-about">
        <img src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/abuout_k6zypz.png" alt="icon" />
        <span>About Me</span>
      </li>
      <li class="side-btn side-btn-projects">
        <img src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746418058/projects_zluge0.png" alt="icon" />
        <span>Projects</span>
      </li>
      <li class="side-btn side-btn-skills">
        <img src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746408184/skills_zjy2wq.png" alt="icon" />
        <span>Skills</span>
      </li>
      <li class="side-btn side-btn-contact">
        <img src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746418058/contact_ilrvxl.png" alt="icon" />
        <span>Contact</span>
      </li>
      <li class="side-btn side-btn-back">
        <img src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/back_maml1x.png" alt="icon" />
        <span>Back</span>
      </li>
    </ul>
  `;

  sideMenus.forEach((menu) => {
    menu.innerHTML = menuHTML;
    menu.querySelector(".side-btn-about").addEventListener("click", () => {
      showSection("#about");
    });
    menu.querySelector(".side-btn-projects").addEventListener("click", () => {
      showSection("#projects");
    });
    menu.querySelector(".side-btn-skills").addEventListener("click", () => {
      showSection("#skills");
    });
    menu.querySelector(".side-btn-contact").addEventListener("click", () => {
      showSection("#contact");
    });
    menu.querySelector(".side-btn-back").addEventListener("click", () => {
      showSection("#home");
    });
  });
});
