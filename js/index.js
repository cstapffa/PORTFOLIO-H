import { hide, show } from "./helpers.js";

// === HOME + SECTIONS ===
let currentSection = "#home"; // pa saber cual se va

function showSection(sectionId) {
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

  /* console.log("fromEl:", fromEl, "adding", exitSection);
  console.log("toEl:", toEl, "adding", enterSection); */
}

function getTransitionAnimation(from, to) {
  const key = `${from}->${to}`;
  return (
    transitionMap[key] || { exit: "exitLeftSection", enter: "enterLeftSection" }
  );
}

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
