/**
 * @fileoverview Main JavaScript file for the portfolio website.
 * Handles interactive features like dark mode toggle and mobile navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll) library for smooth scroll animations.
  AOS.init({
    duration: 800, // Duration of the animation in milliseconds
    once: true,    // Whether animation should happen only once - on first load
  });

  // --- Dark Mode Toggle ---
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const root = document.documentElement; // Represents the <html> element

  /**
   * Toggles the 'dark' class on the root element and saves the preference to localStorage.
   */
  const toggleDarkMode = () => {
    root.classList.toggle('dark');
    const isDarkMode = root.classList.contains('dark');
    localStorage.setItem('dark-mode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  };

  /**
   * Applies the saved dark mode preference on page load.
   */
  const applySavedMode = () => {
    const savedDarkMode = localStorage.getItem('dark-mode');
    if (savedDarkMode === 'true') {
      root.classList.add('dark');
      darkModeToggle.textContent = '☀️';
    } else {
      darkModeToggle.textContent = '🌙';
    }
  };

  // Add event listener for the dark mode button.
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
    applySavedMode(); // Apply the saved mode immediately on page load.
  }

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  /**
   * Toggles the 'active' class on the navbar to show/hide the mobile menu.
   */
  const toggleMobileMenu = () => {
    if (navbar) {
      navbar.classList.toggle('active');
    }
  };
  
  // Add event listener for the mobile menu button.
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close the mobile menu when a navigation link is clicked.
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
      if (navbar && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
      }
    });
  });
});