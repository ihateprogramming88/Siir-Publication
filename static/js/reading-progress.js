function progressBar() {
  var bar = document.getElementById("progressBar");

  document.addEventListener('scroll', () => {
    var scrollPercent = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    if (scrollPercent >= 99) { scrollPercent = 0 };
    bar.style.setProperty("--scrollAmount", scrollPercent + '%');
  })
}

if (document.getElementById("progressBar")) progressBar();
