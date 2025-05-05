export const hide = (elementSelector) => {
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
};
