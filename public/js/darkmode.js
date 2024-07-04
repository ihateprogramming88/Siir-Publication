// On page load, check for dark mode preference 
checkDarkMode();

function checkDarkMode() {
  const darkMode = localStorage.getItem('darkMode');
  
  if (darkMode === "true") {
    document.body.classList.add('dark-mode');
    document.querySelector("#dark-theme").disabled = false;
    document.querySelector("#dark-toggle i").className = "fas fa-sun";
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  let darkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', darkMode);
  
  document.querySelector("#dark-theme").disabled = !darkMode;
  
  if (darkMode) {
    document.querySelector("#dark-toggle i").className = "fas fa-sun";
  } else {
    document.querySelector("#dark-toggle i").className = "fas fa-moon";
  }
}
