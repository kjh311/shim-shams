// FOOTER
const currentYear = new Date().getFullYear();

document.getElementById(
  "copyright-year"
).textContent = ` © The Shim Shams ${currentYear}`;

// modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const imageCaption = document.getElementById("imageCaption");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = document.querySelectorAll(".gallery-image");
  let currentIndex = 0;

  const updateModal = (index) => {
    const image = images[index];
    modalImage.src = image.src;
    imageCaption.textContent = image.alt;
    currentIndex = index;
  };

  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      updateModal(index);
    });
  });

  nextBtn.addEventListener("click", function () {
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    updateModal(newIndex);
  });

  prevBtn.addEventListener("click", function () {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    updateModal(newIndex);
  });
});

// CLOSE DROPDOWN AFTER SCROLL
document.addEventListener("DOMContentLoaded", function () {
  var navbarCollapse = document.getElementById("navbarNavDropdown");

  var navLinks = navbarCollapse.querySelectorAll(
    ".nav-link, .dropdown-item, .navbar-brand"
  );

  var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (
        this.hash &&
        this.hash !== "#" &&
        !this.getAttribute("data-bs-toggle")
      ) {
        if (navbarCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }
      }
    });
  });
});

// GSAP ANIMATION
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",

      scrollTrigger: {
        trigger: element,
        start: "top 75%",
      },
    });
  });

  gsap.from(".logo", {
    duration: 2,
    opacity: 0,
    ease: "power2.out",
    visibility: "visible",
  });

  gsap.from("#intro", {
    duration: 1.5,
    opacity: 0,
    y: 40,
    ease: "power2.out",
    visibility: "visible",
  });
});
