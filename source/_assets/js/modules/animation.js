import webdoor from './modules/webdoor';

const animations = {
  webdoor,
}

const baseOptions = {
  threshold: 0.5,
}

function Animation({ opt, selector }) {
  const options = Object.assign(baseOptions, opt);
  const sections = Array.from(document.querySelectorAll(selector));
  let modules;
  let observer;

  function animate(target) {
    const sct = modules.find(item => item.section === target);
    if (sct.module) sct.module.play();
  }

  function onIntersection(entries) {
    entries.forEach(({ target, intersectionRatio }) => {
      if (intersectionRatio > 0) {
        animate(target);
        observer.unobserve(target);
      }
    })
  }

  function createStructure() {
    modules = sections.map(section => {
      const name = section.dataset.section;
      const anime = animations[name];

      return {
        section,
        module: anime ? anime(section) : '',
      }
    })

    return modules
  }

  function setupObserver() {
    observer = new IntersectionObserver(onIntersection, options);
    sections.forEach(section => observer.observe(section));
  }

  function init() {
    createStructure();
    setupObserver();
  }

  init();
}

export default {
  init: Animation,
};
