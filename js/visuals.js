/* GIF, textarea */
const milaImg = document.getElementById("eyes-gif");

const originalSrc = "https://res.cloudinary.com/dpushmfs0/image/upload/v1747252111/perfil_oa0tj2.png";
const alternateSrc = "https://res.cloudinary.com/dpushmfs0/image/upload/v1747348199/perfil-ceja_hiqny3.png";

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
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746408186/about-fill-grey_vzkt2l.png",
    hoverSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747409303/Vector_orjfxq.png",
  },
  {
    id: "projects-btn",
    defaultSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746411791/projects-fill-grey_e7bqd2.png",
    hoverSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747409538/Frame_47552_h85bgz.png",
  },
  {
    id: "skills-btn",
    defaultSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746408185/skills-fill-grey_nt3o59.png",
    hoverSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747409303/Vector-3_xq8s61.png",
  },
  {
    id: "contact-btn",
    defaultSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1746411790/contact-fill-grey_dl861o.png",
    hoverSrc:
      "https://res.cloudinary.com/dpushmfs0/image/upload/v1747409539/Frame_47553_gwhlad.png",
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

