import { showSection } from "./router.js";

export function setupSideMenus() {
  const sideMenus = document.querySelectorAll(".side-menu");
  const menuHTML = `
  <img class="side-menu-logo" src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746392843/mila_rz6bn0.png" alt="Mila" title="Mila">
  <div class="d-flex flex-column justify-content-between">
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
      </ul>

      <ul>
      <li class="side-btn side-btn-back">
        <img src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/back_maml1x.png" alt="icon" />
        <span>Back</span>
      </li>
    </ul>
  </div>
  `;

  sideMenus.forEach((menu) => {
    menu.innerHTML = menuHTML;
    menu
      .querySelector(".side-btn-about")
      ?.addEventListener("click", () => showSection("#about"));
    menu
      .querySelector(".side-btn-projects")
      ?.addEventListener("click", () => showSection("#projects"));
    menu
      .querySelector(".side-btn-skills")
      ?.addEventListener("click", () => showSection("#skills"));
    menu
      .querySelector(".side-btn-contact")
      ?.addEventListener("click", () => showSection("#contact"));
    menu
      .querySelector(".side-btn-back")
      ?.addEventListener("click", () => showSection("#home"));
  });
}

export function updateSectionIcon(sectionKey) {
  const normalIcons = {
    about:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/abuout_k6zypz.png",
    projects:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746418058/projects_zluge0.png",
    skills:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746408184/skills_zjy2wq.png",
    contact:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746418058/contact_ilrvxl.png",
    back: "https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/back_maml1x.png",
  };

  const activeIcons = {
    about:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746408185/about-fill-black_cbjefg.png",
    projects:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746418058/projects-fill-black_kr9fi1.png",
    skills:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746408184/skills-fill-black_iltx10.png",
    contact:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746418060/contact-fill-black_cpyqmy.png",
    back: "https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/back_maml1x.png",
  };

  document.querySelectorAll(".side-menu").forEach((menu) => {
    menu.querySelectorAll("li.side-btn").forEach((li) => {
      const classList = Array.from(li.classList);
      const key = classList
        .find((cls) => cls.startsWith("side-btn-"))
        ?.replace("side-btn-", "");
      const img = li.querySelector("img");

      if (img && key && normalIcons[key]) {
        img.src = normalIcons[key];
      }

      if (key === sectionKey && img && activeIcons[key]) {
        img.src = activeIcons[key];
      }
    });
  });
}