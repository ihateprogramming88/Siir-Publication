(function() {
  var Darkmode = function() {
    this.createElements();
    this.addStyle();
    this.setInitialState();
  };

  Darkmode.prototype.createElements = function() {
    this.button = document.createElement('button');
    this.button.innerHTML = '🌓';
    this.button.classList.add('darkmode-toggle');
    document.body.insertBefore(this.button, document.body.firstChild);
  };

  Darkmode.prototype.addStyle = function() {
    var css = `
      .darkmode-layer {
        position: fixed;
        pointer-events: none;
        background: #fff;
        transition: all 0.3s ease;
        mix-blend-mode: difference;
      }
      .darkmode-layer--button {
        width: 2.9rem;
        height: 2.9rem;
        border-radius: 50%;
        right: 32px;
        bottom: 32px;
        left: unset;
      }
      .darkmode-toggle {
        background: #100f2c;
        width: 3rem;
        height: 3rem;
        position: fixed;
        border-radius: 50%;
        border: none;
        right: 32px;
        bottom: 32px;
        left: unset;
        cursor: pointer;
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  };

  Darkmode.prototype.setInitialState = function() {
    var isDarkMode = localStorage.getItem('darkmode') === 'true';
    if (isDarkMode) {
      document.body.classList.add('darkmode--activated');
    }
  };

  Darkmode.prototype.toggle = function() {
    document.body.classList.toggle('darkmode--activated');
    localStorage.setItem('darkmode', document.body.classList.contains('darkmode--activated'));
  };

  window.Darkmode = Darkmode;
})();
