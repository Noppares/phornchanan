// Get the button element by its id
const moveToTopBtn = document.getElementById("moveToTopBtn");

// Function to check if the user has scrolled down 1000px and show the div
function showHiddenDiv() {
  if (window.scrollY >= 500) {
    moveToTopBtn.style.opacity = "1";
  } else {
    moveToTopBtn.style.opacity = "0";
  }
}

// Add a scroll event listener to call the showHiddenDiv function
window.addEventListener("scroll", showHiddenDiv);

// Initial check to see if the div should be shown on page load
showHiddenDiv();
// Add a click event listener to the button
moveToTopBtn.addEventListener("click", function () {
  // Scroll the page to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Function to open the modal and display the clicked image
function openModal(image) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = image.src;
  // Disable scrolling when the modal is open
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};
