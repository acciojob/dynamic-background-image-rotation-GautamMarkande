 function updateOrientation() {
    const orientation = window.orientation;

    if (orientation === 0 || orientation === 180) {
      document.body.style.backgroundImage  = `url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')`;
    } else {
      document.body.style.backgroundImage  = `url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')`;
    }
  }

  // Initial check and update
  updateOrientation();

  // Add a listener for changes in orientation
  window.addEventListener('orientationchange', updateOrientation)