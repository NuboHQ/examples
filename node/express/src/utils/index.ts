//t = current time
//b = start value
//c = change in value
//d = duration
const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

export enum ScrollDirection {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export const scroll = (
  element: any,
  to: number,
  direction?: ScrollDirection,
  duration = 500,
) => {
  return new Promise<void>((resolve, reject) => {
    const scrollDirection =
      direction === ScrollDirection.HORIZONTAL ? 'scrollLeft' : 'scrollTop';
    const start = element[scrollDirection];
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      element[scrollDirection] = easeInOutQuad(
        currentTime,
        start,
        change,
        duration,
      );

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        resolve();
      }
    };

    animateScroll();
  });
};
