export default function () {
  const pages = document.getElementById('firstPage').addEventListener('click', () => {
    console.log('siemaa');
  });
  const main = document.querySelectorAll('main');
  const currentSectionIndex = 1;
  let lastScrollTop = 50;
  const isThrotled = false;
  document.addEventListener('scroll', () => {
    const st = document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      main[1].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // upscroll code
      main[0].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
  // main[currentSectionIndex].scrollIntoView({
  //   behavior: 'smooth',
  //   block: 'start',
  // });

  // const direction = onwheel(undefined).deltaY < 0 ? -1 : 1;
  //
  // // console.log(event.deltaY);
  // if (direction === 1) {
  //   const isLastSection = currentSectionIndex === main.length - 1;
  //   if (isLastSection) return;
  // } else if (direction === -1) {
  //   const firstSection = currentSectionIndex === 0;
  //   if (firstSection) return;
  // }
  // currentSectionIndex += direction;

  // console.log(currentSectionIndex);

  // main[currentSectionIndex].scrollIntoView({
  //   behavior: 'smooth',
  //   block: 'start',
  //   });
  // });
}
