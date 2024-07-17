document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateToggleIcon(theme);
    }
    
    function updateToggleIcon(theme) {
      const toggleIcon = themeToggle.querySelector('.toggle-icon');
      toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
    setTheme(theme);
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
    
    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    });
  });