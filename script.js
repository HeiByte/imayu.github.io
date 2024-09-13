function createAnimationObserve(selector, animationClasses, threshold = 0.3) {
  const targets = document.querySelectorAll(selector);
  const observe = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(...animationClasses);
          observe.unobserve(entry.target);
        }
      });
    },
    {
      threshold: threshold,
    }
  );

  targets.forEach((target) => {
    observe.observe(target);
  });
}

createAnimationObserve(".c-1", ["animate__animated", "animate__rotateInUpLeft"], 0.2);
createAnimationObserve(".c-2", ["animate__animated", "animate__rotateInUpRight"], 0.2);
createAnimationObserve(".an-1", ["animate__animated", "animate__lightSpeedInLeft"], 0.2);
createAnimationObserve(".an-2", ["animate__animated", "animate__lightSpeedInLeft"], 0.2);
createAnimationObserve(".an-3", ["animate__animated", "animate__lightSpeedInLeft"], 0.2);
createAnimationObserve(".an-co-1", ["animate__animated", "animate__bounceInUp"], 0.2);
createAnimationObserve(".an-co-2", ["animate__animated", "animate__bounceInUp"], 0.2);
createAnimationObserve(".an-co-3", ["animate__animated", "animate__bounceInUp"], 0.2);
