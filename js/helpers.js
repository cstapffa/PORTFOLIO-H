// utils
export const hide = (selector) => {
  const el = document.querySelector(selector);
  if (el) {
    el.classList.add("hidden");
    el.classList.remove("visible");
  }
};

export const show = (selector) => {
  const el = document.querySelector(selector);
  if (el) {
    el.classList.add("visible");
    el.classList.remove("hidden");
  }
};

/* export const hide = (elementSelector) => {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.style.display = "none";
  } else {
    console.error(`Element with selector "${elementSelector}" not found.`);
  }
};

export const show = (elementSelector) => {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.style.display = "flex";
  } else {
    console.error(`Element with selector "${elementSelector}" not found.`);
  }
}; */
