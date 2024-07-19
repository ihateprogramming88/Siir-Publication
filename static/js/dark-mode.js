const darkIconSrc = "/img/4.svg";
const lightIconSrc = "/img/3.svg";
var darkCSS = document.getElementById("dark-theme");
var darkToggleImg = document.getElementById("theme-toggle-icon");

function setThemeMode(mode) {
  if (mode === "dark") {
    darkCSS.disabled = false;
    darkToggleImg.src = lightIconSrc;
  } else if (mode === "light") {
    darkCSS.disabled = true;
    darkToggleImg.src = darkIconSrc;
  }
  localStorage.setItem("dark-mode-theme", mode);
}

document.getElementById("dark-toggle").addEventListener("click", function () {
  if (darkToggleImg.src.includes(darkIconSrc)) {
    setThemeMode("dark");
  } else if (darkToggleImg.src.includes(lightIconSrc)) {
    setThemeMode("light");
  }
});

// On page load, set the theme based on user's previous preferencea
setThemeMode(localStorage.getItem("dark-mode-theme") || "light");