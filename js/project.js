import { show } from "./helpers.js";

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

const projects = {
  1: {
    title: "EnKoncreto",
    year: "2024 - 2025",
    tools: "",
    overview:
      "EnKoncreto is a brand that blends design, art, and craftsmanship, dedicated to creating decorative objects, furniture, and experiences with concrete as the central element. My role was to lead the complete redesign of its visual identity, lay the groundwork for its future web presence and develop the same one. I also collaborated in defining the brand’s communication tone.",
    overviewImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747698951/enkoncreto-3_ymsaps.svg",
    context:
      "The project emerged from the need to consolidate a brand that already existed on social media but lacked a clear identity and a coherent visual system. There was an opportunity to highlight its value proposition in a market with growing interest in artisanal, personalized, and sustainable products, where similar brands weren’t strongly communicating their values or aesthetic.",
    contextImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699082/enkoncreto-2_axgdoc.svg",
    design:
      "The process began with an analysis of the brand’s symbolic universe and its distinctive element: the use of concrete as an expressive language. I explored organic forms, materials, and colors that would reflect the manual and experimental nature of the work. A versatile logomark was created, along with a typographic system and adaptable color palette tailored to different channels and types of communication. Initial guidelines were also proposed for the future website, including content architecture, visual references, and UI components.",
    designImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699226/enkoncreto-1_ktqikj.svg",
    outcome:
      "The result is a strong and flexible visual identity that gave enKoncreto a recognizable presence aligned with its concept. The brand can now communicate consistently across social media, products, packaging, and presentations. It also has a solid foundation for its website, designed to scale as the project continues to grow.",
    outcomeImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699228/enkoncreto_dzypiy.svg",
    tag: "EnKoncreto by Mila Stapff",
  },
  2: {
    title: "CulPpadel",
    year: "2024",
    tools: "",
    overview:
      "CulPadel is a high-end padel club based in Montevideo, Uruguay. This project involved the full development of its brand identity, a launch campaign aimed at building visibility and excitement, and the design of a simple yet functional mobile app for managing court bookings. The visual language captures the sport’s energy, the exclusivity of the club, and the contemporary lifestyle of its members.",
    overviewImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699060/culpadel_uaw6lc.svg",
    context:
      "CulPadel emerged in a growing local padel scene, where most existing clubs lacked a strong, coherent brand experience. This was a unique opportunity to create a sports brand from the ground up, one that could stand out with a bold voice and a unified visual system, while connecting emotionally with a younger, design-aware audience. The launch campaign needed to build anticipation and position the club as a fresh, exciting destination for padel lovers.",
    contextImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699063/culpadel-1_fykbn1.svg",
    design:
      "The process began with research into the emotional and visual codes of padel culture. I looked at the geometry of the court and the inner texture of the padel racket to build visual systems that could be extended across posters, social media, and other branded materials. A modern grid based on court lines and racket patterns became the foundation for the design. The brand voice was conceived to feel relaxed, ironic, and slightly provocative. The name “CulPadel” (a Spanish pun on “culpa de él” or “his fault”) became a narrative engine for playful slogans, taglines, and visual storytelling. I drew inspiration from the game’s texture and colors, especially the vibrant yellow of the ball and the dynamic shadows cast on court surfaces. The mobile app was designed with a clean and intuitive interface, ensuring that booking courts was quick and seamless, keeping the experience aligned with the club’s overall identity.",
    designImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699082/culpadel-2_dmcx7j.svg",
    outcome:
      "The result is a bold, cohesive brand that makes an impact from the very first interaction. From launch visuals to app interface, every element reflects the club’s personality and positioning. The visual identity is dynamic, recognizable, and flexible, designed to grow with the brand as it expands. The app offers a user-friendly booking experience, and the campaign effectively built momentum ahead of the club’s opening, creating curiosity and engagement across platforms.",
    outcomeImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699082/culpadel-3_ce9qpf.svg",
    tag: "Culpadel by Mila Stapff",
  },
  3: {
    title: "Imagina",
    year: "2024",
    tools:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747698949/imagina_iewmeb.svg",
    overview:
      "Imagina was an academic project focused on the full development of a visual identity for a fictional personal design studio. The goal was to build a brand from scratch, exploring its conceptual, visual, and sonic universe, and applying it to various institutional pieces. My role was that of a comprehensive designer, from concept to execution. I developed the logo and symbol, color palette, storytelling, brand applications, and a brand animation.",
    overviewImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747698953/imagina-1_vfpcxi.svg",
    context:
      "The challenge was to simulate the creation of a personal design studio, thinking beyond just the logo. I explored how the brand communicates, how it looks, how it sounds, and how it feels. The brief called for an identity that would represent not only the studio’s visual output, but also its philosophy, values, and the way it connects with clients.",
    contextImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747698953/imagina-1_vfpcxi.svg",
    design:
      "The project began with an introspective exploration to define the brand’s core values: creativity, closeness, imagination, fluidity, and inspiration. Through watercolor experiments, I discovered organic shapes that inspired the creation of a stylized cloud—an abstract symbol of creative flow. The name Imagina emerged as a natural call to limitless creativity, paired with the slogan “Everything starts with an idea” to reinforce the brand’s sense of origin and possibility. I developed the visual identity by customizing the Baloo Bhai typeface, enlarging the “i” letters to suggest growth and imagination. The visual system was completed with a versatile color palette and a comprehensive brand manual. Applications included stationery, social media, a poster, and a website landing mockup. To bring the brand to life, I designed a motion and sound logo animation that captures the transition from idea to visual expression.",
    designImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699087/imagina-2_fqy2rr.svg",
    outcome:
      "The result is a sensitive, expansive, and adaptable brand that represents not only a design studio but a way of thinking and creating. Imagina is positioned as a collaborative space where imagination meets professionalism, allowing clients to dream alongside the designer. The complete visual system brings consistency, flexibility, and a strong personality to every brand touchpoint.",
    outcomeImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747700013/imagina_oyjz46.jpg",
    tag: "Imagina by Mila Stapff",
  },
  4: {
    title: "KAOS",
    year: "2025",
    tools: "",
    overview:
      "KAOS is project focused on developing the visual identity for a music collective. The goal is to visually express the essence of a group of eclectic musicians, each with their own personality, while maintaining a cohesive and impactful brand system.",
    overviewImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699058/kaos-3_xlaawf.svg",
    context:
      "The challenge was and still is to create a visual language that captured the energy, diversity, and individuality of the group, while ensuring the collective felt unified. This meant thinking beyond a single logo, and instead designing a system that could adapt to represent each member without losing consistency. The identity needed to feel bold, artistic, and a bit chaotic (true to its name).",
    contextImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747698955/kaos-1_d2cfwh.svg",
    design:
      "The process it´s just beginning, so I started by defining the artistic profiles of each member of the collective. I designed a unique icon for each musician, serving as their personal symbol within the system. These icons reflect their individual style, role, or energy within the group. The logo for KAOS plays with contrast and tension, using bold typography and composition to express the group's raw creative power. A color exploration phase helped build a palette that could shift between shared and individual use: each member is represented by a distinct color, while the collective identity uses a unified scheme that ties it all together.",
    designImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699058/kaos-2_h74yb8.svg",
    outcome:
      "The results at the moment are a flexible and expressive identity system that can adapt to different contexts (like urban street art). From the logo to the icons and color palette, every element contributes to building a bold, recognizable brand. KAOS doesn’t just present a band name; it’s a creative expression of a diverse group of musicians.",
    outcomeImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747700013/kaos_w9mn6w.jpg",
    tag: "",
  },
  5: {
    title: "LampArt",
    year: "2024",
    tools: "",
    overview:
      "LampArt is a high-end e-commerce platform specializing in designer lamps, created for design lovers and interior professionals. The project aimed to deliver an inspiring and efficient shopping experience through a visually appealing desktop website that’s easy to navigate and focused on user needs.",
    overviewImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699089/lampart_irncux.svg",
    context:
      "The challenge was to design a platform that allows users to discover, explore, and purchase unique lighting products, blending functionality with aesthetics. Research revealed the opportunity to create a digital space where content is clearly structured, visuals are prioritized, and the buying process is simple and secure. By analyzing both the market and user expectations, I defined key aspects such as smooth search and filtering, engaging product galleries, detailed product pages, and a clear, accessible checkout flow.",
    contextImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699058/lampart-1_meitjs.svg",
    design:
      "The project was carried out in several phases using a user-centered methodology. I started by identifying potential user profiles and their needs. Techniques like card sorting and tree testing helped structure the site’s content and validate its navigation system. For the visual design, I built a moodboard with references for color, typography, photography, and UI elements to define LampArt’s overall tone and aesthetic. I then created low-fidelity wireframes for both desktop and mobile, covering the five main screens: homepage, product listing, product detail, cart, and checkout. To ensure consistency and scalability, I developed a UI kit containing reusable components, buttons in various states, cards, forms, and a type system. Finally, I designed and prototyped the interface in high fidelity using Figma, simulating the full user journey from initial browsing to final purchase.",
    designImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747698948/image_1_tmpvci.svg",
    outcome:
      "The result is a refined desktop e-commerce site designed to offer an intuitive and sophisticated experience. The interface strikes a balance between usability and visual appeal, highlighting the distinctive value of LampArt’s products. Each screen was crafted to meet specific goals in terms of clarity, aesthetics, and functionality. The final prototype enables users to browse, apply filters, interact with buttons and forms, and complete a purchase within a well-structured and coherent system. This project represents a comprehensive design solution that meets the expectations of its target audience while aligning with current e-commerce and UI/UX best practices.",
    outcomeImg:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747699093/lampart-3_n0g0tq.svg",
    tag: "",
  },
  /* 6: {
    title: "",
    year: "",
    tools: "",
    overview: "",
    overviewImg: "",
    context: "",
    contextImg: "",
    design: "",
    designImg: "",
    outcome: "",
    outcomeImg: "",
    tag: "",
  }, */
};

const project = projects[projectId];
const projectPage = document.getElementById("project-page");

if (project) {
  projectPage.innerHTML = `
    <section id="project-overview">
        <div class="container row content">
          <div class="side-menu d-none d-md-block col-md-3">
            <img
              class="side-menu-logo"
              src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746392843/mila_rz6bn0.png"
              alt="Mila"
              title="Mila"
            />
            <div class="d-flex flex-column justify-content-between">
              <ul>
                <li class="side-btn side-btn-overview active">
                 <span>Overview</span>
                </li>
                <li class="side-btn side-btn-context">
                  <span>Context & Opportunity</span>
                </li>
                <li class="side-btn side-btn-design">
                  <span>Design Process</span>
                </li>
                <li class="side-btn side-btn-outcome">
                  <span>Outcome</span>
                </li>
              </ul>

              <ul>
                <li class="side-btn side-btn-back">
                  <a href="index.html"
                    ><img
                      src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/back_maml1x.png"
                      alt="icon"
                    /><span>Back</span></a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-9 project-content">
            <h1 id="project-title" class="d-none d-md-block">${project.title}</h1>
            <div class="row d-flex justify-content-between">
              <article class="col-md-6">
                <img id="project-overview-img"
                  src="${project.overviewImg}"
                  alt="${project.title}"
                  title="${project.tag}"
                />
              </article>

              <article class="col-md-6">
                <div>
                  <h2>Year</h2>
                  <p id="project-year">${project.year}</p>
                </div>
                


                <div>
                  <h2>Overview</h2>
                  <p id="project-overview-txt">${project.overview}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="project-context">
        <div class="container row content">
          <div class="side-menu d-none d-md-block col-md-3">
            <img
              class="side-menu-logo"
              src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746392843/mila_rz6bn0.png"
              alt="Mila"
              title="Mila"
            />
            <div class="d-flex flex-column justify-content-between">
              <ul>
                <li class="side-btn side-btn-overview">
                  <span>Overview</span>
                </li>
                <li class="side-btn side-btn-context active">
                  <span>Context & Opportunity</span>
                </li>
                <li class="side-btn side-btn-design">
                  <span>Design Process</span>
                </li>
                <li class="side-btn side-btn-outcome">
                  <span>Outcome</span></a>
                </li>
              </ul>

              <ul>
                <li class="side-btn side-btn-back">
  <img
    src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/back_maml1x.png"
    alt="icon"
  />
  <span>Back</span>
</li>
              </ul>
            </div>
          </div>

          <div class="col-md-9 project-content">
            <h2 class="project-title d-none d-md-block">${project.title}</h2>
            <div class="row d-flex justify-content-between">
              <article class="col-md-6">
                <img
                  src="${project.contextImg}"
                  alt="${project.title}"
                  title="${project.tag}"
                />
              </article>

              <article class="col-md-6">
                <h3>Context & Opportunities</h3>
                <p id="project-context-txt">${project.context}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="project-design">
        <div class="container row content">
          <div class="side-menu d-none d-md-block col-md-3">
            <img
              class="side-menu-logo"
              src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746392843/mila_rz6bn0.png"
              alt="Mila"
              title="Mila"
            />
            <div class="d-flex flex-column justify-content-between">
              <ul>
                <li class="side-btn side-btn-overview">
                  <a href="#project-overview"><span>Overview</span></a>
                </li>
                <li class="side-btn side-btn-context active">
                  <span>Context & Opportunity</span>
                </li>
                <li class="side-btn side-btn-design">
                  <span>Design Process</span></li>
                <li class="side-btn side-btn-outcome">
                  <span>Outcome</span>
                </li>
              </ul>

              <ul>
                <li class="side-btn side-btn-back">
                  <a href="index.html"
                    ><img
                      src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/back_maml1x.png"
                      alt="icon"
                    /><span>Back</span></a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-9 project-content">
            <h2 class="d-none d-md-block">${project.title}</h2>
            <div class="row d-flex justify-content-between">
              <article class="col-md-6">
                <img
                  src="${project.designImg}"
                  alt="${project.title}"
                  title="${project.tag}"
                />
              </article>

              <article class="col-md-6">
                <h2>Design Process</h2>
                <p id="project-design-txt">${project.design}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="project-outcome">
        <div class="container row content">
          <div class="side-menu d-none d-md-block col-md-3">
            <img
              class="side-menu-logo"
              src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746392843/mila_rz6bn0.png"
              alt="Mila"
              title="Mila"
            />
            <div class="d-flex flex-column justify-content-between">
              <ul>
                <li class="side-btn side-btn-overview">
                  <span>Overview</span>
                </li>
                <li class="side-btn side-btn-context active">
                  <span>Context & Opportunity</span>
                </li>
                <li class="side-btn side-btn-design">
                  <span>Design Process</span>
                </li>
                <li class="side-btn side-btn-outcome">
                  <span>Outcome</span>
                </li>
              </ul>

              <ul>
                <li class="side-btn side-btn-back">
                  <a href="index.html"
                    ><img
                      src="https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/back_maml1x.png"
                      alt="icon"
                    /><span>Back</span></a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-9 project-content">
            <h2 class="d-none d-md-block">${project.title}</h2>
            <div class="row d-flex justify-content-between">
              <article class="col-md-6">
                <img
                  src="${project.outcomeImg}"
                  alt="${project.title}"
                  title="${project.tag}"
                />
              </article>

              <article class="col-md-6">
                <div>
                  <h2>Outcome</h2>
                  <p>${project.outcome}</p>
                </div>
                                </article>
            </div>
          </div>
        </div>
      </section>
  `;

  showInitialProjectSections();
  setupProjectNavigationDelegation();
} else {
  projectPage.innerHTML = `
    <h1>Project not found</h1>
    <p>The project you're looking for doesn't exist.</p>
  `;
}

document.querySelectorAll(".side-btn-back").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html#projects";
  });
});

let currentProjectSection = "#project-overview";

function showProjectSection(sectionId) {
  const fromEl = document.querySelector(currentProjectSection);
  const toEl = document.querySelector(sectionId);

  if (currentProjectSection === sectionId) return;

  if (!fromEl || fromEl.classList.contains("hidden")) {
    [
      "#project-overview",
      "#project-context",
      "#project-design",
      "#project-outcome",
    ].forEach((id) => {
      const el = document.querySelector(id);
      if (el) {
        el.classList.add("hidden");
        el.classList.remove("visible");
        el.style.display = "none";
      }
    });

    toEl.style.display = "flex";
    toEl.classList.remove("hidden");
    toEl.classList.add("visible");

    currentProjectSection = sectionId;

    updateActiveMenuButton(sectionId);
    return;
  }

  const { exit, enter } = getProjectTransitionAnimation(
    currentProjectSection,
    sectionId
  );
  transitionSection(currentProjectSection, sectionId, exit, enter);
  currentProjectSection = sectionId;

  updateActiveMenuButton(sectionId);
}

function updateActiveMenuButton(sectionId) {
  const sectionKey = sectionId.replace("#project-", "");
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

function getProjectTransitionAnimation(from, to) {
  return {
    exit: "exitUpSection",
    enter: "enterDownSection",
  };
}

function setupProjectNavigationDelegation() {
  document.addEventListener("click", (e) => {
    const sideBtn = e.target.closest(".side-btn");
    if (!sideBtn) return;

    const sideMenu = sideBtn.closest(".side-menu");
    if (!sideMenu) return;

    if (e.target.tagName === "A" || sideBtn.querySelector("a")) {
      e.preventDefault();
    }

    if (sideBtn.classList.contains("side-btn-overview")) {
      showProjectSection("#project-overview");
    } else if (sideBtn.classList.contains("side-btn-context")) {
      showProjectSection("#project-context");
    } else if (sideBtn.classList.contains("side-btn-design")) {
      showProjectSection("#project-design");
    } else if (sideBtn.classList.contains("side-btn-outcome")) {
      showProjectSection("#project-outcome");
    }
  });
}

function showInitialProjectSections() {
  [
    "#project-overview",
    "#project-context",
    "#project-design",
    "#project-outcome",
  ].forEach((id) => {
    const el = document.querySelector(id);
    if (el) {
      el.classList.add("hidden");
      el.classList.remove("visible");
      el.style.display = "none";
    }
  });

  const firstSection = document.querySelector("#project-overview");
  if (firstSection) {
    firstSection.classList.remove("hidden");
    firstSection.classList.add("visible");
    firstSection.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  /* Responsive */
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const sections = [
      "#project-overview",
      "#project-context",
      "#project-design",
      "#project-outcome",
    ];

    sections.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.display = "block";
        show(selector);
      }
    });
  }
});
