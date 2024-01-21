     var body = document.body;
        var landscapeImageURL = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';
        var portraitImageURL = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';

        // Check if the screen is in landscape or portrait mode
        if (window.innerWidth > window.innerHeight) {
            // Landscape mode
            body.style.backgroundImage = 'url("' + landscapeImageURL + '")';
        } else {
            // Portrait mode
            body.style.backgroundImage = 'url("' + portraitImageURL + '")';
        }
    }

    // Set the background image on page load and when the window is resized
    window.addEventListener('load', setBackgroundImage);
    window.addEventListener('resize', setBackgroundImage);