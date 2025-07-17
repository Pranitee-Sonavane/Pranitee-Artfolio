document.addEventListener('DOMContentLoaded', () => {
  const dividerInnerImage = document.getElementById('divider-image-inner');

  if (!dividerInnerImage) {
    console.error("Divider image element not found for zoom effect.");
    return;
  }

  const zoomThreshold = 100; // Pixels from top to trigger zoom change

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    let scaleValue = 1.05; // Default scale (zoomed in)

    if (scrollY > zoomThreshold) {
      // Scrolled DOWN past threshold: Zoom OUT
      scaleValue = 1;
    }

    // Apply ONLY scale transform via JS, overwriting CSS initial scale
    dividerInnerImage.style.transform = `scale(${scaleValue})`;
  });

  // Initial check in case the page loads scrolled down
  window.dispatchEvent(new Event('scroll'));
});

 const menuButton = document.getElementById('menuButton');
const menuContainer = document.getElementById('menuContainer');

// Toggle visibility
menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  menuContainer.classList.toggle('hidden');
});

// Hide when clicking outside
document.addEventListener('click', (e) => {
  if (!menuContainer.contains(e.target) && !menuButton.contains(e.target)) {
    menuContainer.classList.add('hidden');
  }
});

// Hide when clicking a menu link
menuContainer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuContainer.classList.add('hidden');
  });
});


  


