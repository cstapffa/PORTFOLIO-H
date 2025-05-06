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
