document.addEventListener('DOMContentLoaded', function() {
    var darkmode = new Darkmode();
    darkmode.button.addEventListener('click', function() {
      darkmode.toggle();
    });
  });
  