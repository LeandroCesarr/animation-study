import anime from 'animejs';

export default (elm) => {
  const tl = anime.timeline({
    easing: 'spring(1, 80, 10, 0)',
    autoplay: false,
    loop: false,
  });

  tl.add({
    targets: elm.querySelector('[data-animate="title"]'),
    translateY: [200, 0],
    duration: 700,
    opacity: [0, 1],
  })

  tl.add({
    targets: elm.querySelector('[data-animate="subtitle"]'),
    translateY: [200, 0],
    duration: 700,
    opacity: [0, 1],
  }, 200)

  return tl;
}