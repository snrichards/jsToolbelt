export const closest = (el, selector) => {
  let formattedSelector = [selector];
  if (Array.isArray(selector) || selector instanceof NodeList || selector instanceof HTMLCollection) {
    formattedSelector = selector;
  } else if (typeof selector === 'string') {
    formattedSelector = document.querySelectorAll(selector);
  }
  const targets = new Set(formattedSelector);
  let currentEl = el;

  while (currentEl) {
    if (targets.has(currentEl)) {
      return currentEl;
    }

    currentEl = currentEl.parentElement;
  }

  return null;
};
