export default function () {
  const pages = document.getElementById('firstPage').addEventListener('click', () => {
    console.log('siemaa');
  });
  const main = document.querySelectorAll('main');
  let currentSectionIndex = 0;
  document.addEventListener('wheel', (element) => {
    const direction = element.deltaY < 0 ? -1 : 1;
    if (direction === 1) {
      const isLastSection = currentSectionIndex === main.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = currentSectionIndex === 0;
      if (firstSection) return;
    }
    currentSectionIndex += direction;
    console.log(direction);
    main[currentSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
