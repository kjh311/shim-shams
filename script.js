// alert("works!");
$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});
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
