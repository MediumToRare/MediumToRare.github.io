// This script adds a simple loading animation and hover effect

// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // The CSS already handles the main fade-in animation
  // This is just a simple example of what you could do with JavaScript

  const sections = document.querySelectorAll(".section");

  // Add a staggered reveal effect to each section
  sections.forEach((section, index) => {
    // Set a delay based on the section's index
    const delay = (index + 1) * 150;

    // Apply the animation with delay
    setTimeout(() => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";

      // Add transition properties
      section.style.transition = "opacity 0.5s ease, transform 0.5s ease";

      // Trigger the animation
      setTimeout(() => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }, 50);
    }, delay);
  });
});
