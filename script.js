// Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// Open modal on image click
document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close modal when clicking on "X"
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking anywhere outside the image
modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});
