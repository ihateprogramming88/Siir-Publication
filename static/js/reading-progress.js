document.addEventListener('DOMContentLoaded', function() {
  var progressBar = document.getElementById('reading-progress-bar');
  var content = document.body;
  var windowHeight = window.innerHeight;
  var documentHeight = Math.max(
    content.scrollHeight,
    content.offsetHeight,
    content.clientHeight
  );
  var readableLength = documentHeight - windowHeight;

  var lastKnownScrollPosition = 0;
  var ticking = false;

  function updateProgressBar(scrollPos) {
    var progressPercentage = (scrollPos / readableLength) * 100;
    progressBar.style.transform = `translateX(${progressPercentage - 100}%)`;
  }

  window.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateProgressBar(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });

  window.addEventListener('resize', function() {
    windowHeight = window.innerHeight;
    documentHeight = Math.max(
      content.scrollHeight,
      content.offsetHeight,
      content.clientHeight
    );
    readableLength = documentHeight - windowHeight;
  });

  updateProgressBar(window.scrollY);
});
