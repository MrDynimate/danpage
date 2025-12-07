function scrollToAbout() {
            const aboutSection = document.getElementById('about');
            aboutSection.style.display = 'block'; // Make the section visible
            // Adding a tiny offset so the button is clearly visible
            setTimeout(() => {
                aboutSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 100); // Small delay to allow display:block to take effect
        }

function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }