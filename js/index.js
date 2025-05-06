import { hide, show } from "./helpers.js";

// === HOME + SECTIONS ===
let currentSection = "#home"; // para saber cuál se va

function showSection(sectionId) {
  transitionSection(currentSection, sectionId);
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

/* function showSection(sectionId) {
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
      updateSectionIcon(sectionKey);
    }
  });
} */

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
      </li><li></li><li></li>
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

function updateSectionIcon(sectionKey) {
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

function transitionSection(fromId, toId) {
  const fromEl = document.querySelector(fromId);
  const toEl = document.querySelector(toId);

  // Mostrar el destino antes de animar
  toEl.style.display = "flex"; // Asegura que es visible
  toEl.classList.remove("hidden");
  toEl.classList.add("slide-in-left");

  fromEl.classList.remove("visible");
  fromEl.classList.add("slide-out-left");

  setTimeout(() => {
    fromEl.classList.remove("slide-out-left");
    fromEl.classList.add("hidden");
    fromEl.style.display = "none"; // Ocultarlo al terminar animación

    toEl.classList.remove("slide-in-left");
    toEl.classList.add("visible");
  }, 600);
}

/* function transitionSection(fromId, toId) {
  const fromEl = document.querySelector(fromId);
  const toEl = document.querySelector(toId);

  // Reset clases previas
  fromEl.classList.remove("visible");
  fromEl.classList.add("slide-out-left");

  toEl.classList.remove("hidden");
  toEl.classList.add("slide-in-left");

  // Mostrar la nueva después de una pausa
  setTimeout(() => {
    fromEl.classList.remove("slide-out-left");
    fromEl.classList.add("hidden");

    toEl.classList.remove("slide-in-left");
    toEl.classList.add("visible");
  }, 600); // coincide con la duración de la animación
} */
