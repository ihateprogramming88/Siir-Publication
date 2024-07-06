document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.getElementById('reading-progress-bar');
  if (!progressBar) {
    console.error('Reading progress bar element not found');
    return;
  }

  const content = document.body;
  let windowHeight = window.innerHeight;
  let documentHeight = Math.max(
    content.scrollHeight,
    content.offsetHeight,
    content.clientHeight
  );
  let readableLength = documentHeight - windowHeight;

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function updateProgressBar(scrollPos) {
    const progressPercentage = (scrollPos / readableLength) * 100;
    progressBar.style.transform = `translateX(${progressPercentage - 100}%)`;
  }

  function handleScroll() {
    lastKnownScrollPosition = window.pageYOffset;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateProgressBar(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  function handleResize() {
    windowHeight = window.innerHeight;
    documentHeight = Math.max(
      content.scrollHeight,
      content.offsetHeight,
      content.clientHeight
    );
    readableLength = documentHeight - windowHeight;
    updateProgressBar(window.pageYOffset);
  }

  window.addEventListener('resize', handleResize);

  updateProgressBar(window.pageYOffset);
});
