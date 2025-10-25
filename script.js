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
