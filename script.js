// alert("works!");
// $(document).ready(function () {
//   $(".dropdown-toggle").dropdown();
// });

// Vanilla JavaScript equivalent for Bootstrap 5
document.addEventListener("DOMContentLoaded", function () {
  // 1. Select all elements that have the 'dropdown-toggle' class
  var dropdownToggleList = document.querySelectorAll(".dropdown-toggle");

  // 2. Loop through the list and manually initialize each one
  dropdownToggleList.forEach(function (dropdownToggleEl) {
    // Uses the global 'bootstrap' object provided by the Bootstrap 5 JS bundle
    new bootstrap.Dropdown(dropdownToggleEl);
  });
});

// IMPORTANT NOTE: This manual initialization is generally NOT required
// in Bootstrap 5 if you are correctly using the 'data-bs-toggle="dropdown"'
// attribute in your HTML. Bootstrap 5 auto-initializes components based on those attributes.

// FOOTER
// Get the current year
const currentYear = new Date().getFullYear();

// Find the element with the ID "copyright-year" and set its content
document.getElementById(
  "copyright-year"
).textContent = ` © Shim Shams ${currentYear}`;

// modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const imageCaption = document.getElementById("imageCaption");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = document.querySelectorAll(".gallery-image");
  let currentIndex = 0;

  // Helper function to update the modal content
  const updateModal = (index) => {
    const image = images[index];
    modalImage.src = image.src;
    imageCaption.textContent = image.alt;
    currentIndex = index;
  };

  // 1. Handle image click to open modal
  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      updateModal(index);
    });
  });

  // 2. Handle 'Next' button click
  nextBtn.addEventListener("click", function () {
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0; // Loop to the first image
    }
    updateModal(newIndex);
  });

  // 3. Handle 'Previous' button click
  prevBtn.addEventListener("click", function () {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1; // Loop to the last image
    }
    updateModal(newIndex);
  });
});

// CLOSE DROPDOWN AFTER SCROLL
document.addEventListener("DOMContentLoaded", function () {
  // Select all links within the dropdown that should trigger the close action
  //   document.querySelectorAll(".close-on-click").forEach((anchor) => {
  //     anchor.addEventListener("click", function (e) {
  //       // Find the closest parent element with the Bootstrap 'dropdown' class
  //       const dropdown = this.closest(".dropdown");

  //       if (dropdown) {
  //         // Get the Bootstrap Dropdown instance
  //         // This targets the element with data-bs-toggle="dropdown" (the button/link that opened it)
  //         const bsDropdown = bootstrap.Dropdown.getInstance(
  //           dropdown.querySelector('[data-bs-toggle="dropdown"]')
  //         );

  //         if (bsDropdown) {
  //           // Manually hide the dropdown menu
  //           bsDropdown.hide();
  //         }
  //       }

  //       // IMPORTANT: We DO NOT use e.preventDefault() here.
  //       // This allows the link's default action (jumping/scrolling to the #target)
  //       // to execute immediately after the dropdown starts closing.
  //     });
  //   });

  var navbarCollapse = document.getElementById("navbarNavDropdown");

  // Select both nav-link and dropdown-item elements that are inside the collapse
  var navLinks = navbarCollapse.querySelectorAll(".nav-link, .dropdown-item");

  // Initialize the Bootstrap Collapse object
  // This allows us to manually call the 'hide' method
  var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Check if the link is an internal anchor and if the menu is currently open
      // We exclude links that have data-bs-toggle (like the dropdown toggle and modal links)
      if (
        this.hash &&
        this.hash !== "#" &&
        !this.getAttribute("data-bs-toggle")
      ) {
        // If the menu is currently open (has 'show' class), hide it
        if (navbarCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }

        // Note: Smooth scrolling is handled by the CSS property: scroll-behavior: smooth;
      }
    });
  });
});

// GSAP ANIMATION
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((element) => {
    // Use gsap.from() to define the starting state of the element
    gsap.from(element, {
      // Starting state:
      opacity: 0, // Start completely transparent
      y: 50, // Start 50 pixels below its final position (for a subtle slide-up effect)
      duration: 1, // Animation takes 0.8 seconds
      ease: "power2.out", // Smooth easing function

      // Link the animation to ScrollTrigger
      scrollTrigger: {
        trigger: element,
        // Defines when the animation starts:
        // "top" of the element hits "80%" down the viewport
        start: "top 67%",
        // Optional: Use markers for debugging where the trigger starts/ends
        // markers: true,

        // Optional: Toggle classes for advanced styling (e.g., adding a shadow class)
        // toggleActions: "play none none none",
      },
    });
  });

  gsap.from(".logo", {
    duration: 2, // Animation duration in seconds
    opacity: 0, // Start with opacity 0 (fully transparent)
    //   y: 40, // Optionally start slightly lower for a subtle "slide up" effect
    ease: "power2.out", // Easing for a smoother look
    visibility: "visible", // Ensure visibility is set to visible at the start of the tween
  });

  gsap.from("#intro", {
    duration: 1.5, // Animation duration in seconds
    opacity: 0, // Start with opacity 0 (fully transparent)
    y: 40, // Optionally start slightly lower for a subtle "slide up" effect
    ease: "power2.out", // Easing for a smoother look
    visibility: "visible", // Ensure visibility is set to visible at the start of the tween
  });

  //   gsap.from("#about", {
  //     duration: 1.5, // Animation duration in seconds
  //     opacity: 0, // Start with opacity 0 (fully transparent)
  //     x: 40, // Optionally start slightly lower for a subtle "slide up" effect
  //     ease: "power2.out", // Easing for a smoother look
  //     visibility: "visible", // Ensure visibility is set to visible at the start of the tween
  //   });
});
