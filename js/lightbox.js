// Lightbox.js

// Function to open the lightbox
function openLightbox(src, index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Set the image source and display the lightbox
    lightboxImage.src = src;
    lightbox.style.display = "flex"; // Changed to flex for centering

    // Create navigation buttons
    const nextButton = document.createElement("button");
    const prevButton = document.createElement("button");
    nextButton.innerHTML = "&#10095;"; // Right arrow
    prevButton.innerHTML = "&#10094;"; // Left arrow

    // Style navigation buttons
    styleNavButton(nextButton, 'next');
    styleNavButton(prevButton, 'prev');

    // Append buttons to the lightbox
    lightbox.appendChild(nextButton);
    lightbox.appendChild(prevButton);

    // Event listeners for navigation
    nextButton.onclick = () => navigateLightbox(1, galleryItems, index);
    prevButton.onclick = () => navigateLightbox(-1, galleryItems, index);
}

// Function to style navigation buttons
function styleNavButton(button, direction) {
    button.className = `nav-button ${direction}`;
    button.style.position = 'absolute';
    button.style.top = '50%';
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    button.style.border = 'none';
    button.style.fontSize = '30px';
    button.style.cursor = 'pointer';
    button.style.padding = '10px';
    button.style.zIndex = '100';

    if (direction === 'next') {
        button.style.right = '10px';
    } else {
        button.style.left = '10px';
    }
}

// Function to navigate through images
function navigateLightbox(direction, galleryItems, currentIndex) {
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) {
        newIndex = galleryItems.length - 1; // Loop to last image
    } else if (newIndex >= galleryItems.length) {
        newIndex = 0; // Loop to first image
    }
    
    const newImageSrc = galleryItems[newIndex].src; // Get new image source
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = newImageSrc; // Update lightbox image
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";

    // Remove navigation buttons
    const nextButton = document.querySelector('.nav-button.next');
    const prevButton = document.querySelector('.nav-button.prev');
    if (nextButton) nextButton.remove();
    if (prevButton) prevButton.remove();
}

// Add event listener for closing the lightbox
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

// Add styles for the lightbox itself
const styleLightbox = () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'none'; // Initially hidden
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '1000'; // Make sure it appears on top

    document.body.appendChild(lightbox);
};

styleLightbox(); // Call the function to style and append the lightbox
