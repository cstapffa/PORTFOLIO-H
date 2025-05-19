/* GIF, textarea */
const milaImg = document.getElementById("eyes-gif");

const originalSrc =
  "https://res.cloudinary.com/dpushmfs0/image/upload/v1747252111/perfil_oa0tj2.png";
const alternateSrc =
  "https://res.cloudinary.com/dpushmfs0/image/upload/v1747348199/perfil-ceja_hiqny3.png";

function toggleMilaImage() {
  milaImg.src = alternateSrc;
  setTimeout(() => {
    milaImg.src = originalSrc;
  }, 2000);
}

export function startGIF() {
  setInterval(toggleMilaImage, 4000);
}

const hoverImages = [
  {
    id: "about-btn",
    defaultSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747667523/about-grey_tt2vju.svg",
    hoverSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747666841/about-color_h2zdxy.svg",
  },
  {
    id: "projects-btn",
    defaultSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747667523/projects-grey_fpq6g3.svg",
    hoverSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747666839/projects-color_pxvdem.svg",
  },
  {
    id: "skills-btn",
    defaultSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747667523/skills-grey_skyvi3.svg",
    hoverSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747666839/skills-color_scfe6i.svg",
  },
  {
    id: "contact-btn",
    defaultSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747667692/contact-grey_cxysou.svg",
    hoverSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747667693/contact-color_vv5ti0.svg",
  },
];

hoverImages.forEach(({ id, defaultSrc, hoverSrc }) => {
  const button = document.getElementById(id);
  const img = button.querySelector("img");

  button.addEventListener("mouseenter", () => {
    img.src = hoverSrc;
  });

  button.addEventListener("mouseleave", () => {
    img.src = defaultSrc;
  });
});

export function setupTextarea() {
  const textarea = document.querySelector("textarea");
  if (!textarea) return;

  const checkContent = () => {
    textarea.classList.toggle("has-content", textarea.value.trim() !== "");
  };

  textarea.addEventListener("input", checkContent);
  textarea.addEventListener("blur", checkContent);
}
