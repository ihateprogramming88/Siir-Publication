document.addEventListener('DOMContentLoaded', function() {
  var progressBar = document.getElementById('reading-progress-bar');
  var body = document.body;
  var html = document.documentElement;

  function updateProgressBar() {
    var scrollTop = body.scrollTop || html.scrollTop;
    var height = html.scrollHeight - html.clientHeight;
    var progress = (scrollTop / height) * 100;
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', progress);
  }

  window.addEventListener('scroll', updateProgressBar);
  updateProgressBar();
});

