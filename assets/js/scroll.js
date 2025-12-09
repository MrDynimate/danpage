function scrollToAbout() {
            const aboutSection = document.getElementById('about');
            aboutSection.style.display = 'block'; // Make the section visible

            const footer = document.getElementById('main-footer');
            footer.style.display = 'block'; // Make footer visible
            
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

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (window.scrollY > 50) {
        nav.classList.add('bg-dark-bg/80', 'backdrop-blur-md', 'shadow-lg');
        backToTopBtn.style.display = 'flex'; // Show back-to-top button
    } else {
        nav.classList.remove('bg-dark-bg/80', 'backdrop-blur-md', 'shadow-lg');
        backToTopBtn.style.display = 'none'; // Hide back-to-top button
    }
});