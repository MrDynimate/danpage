const starContainer = document.getElementById('star-container');
const starCount = 100;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = Math.random() * 0.5 + 0.3;
    starContainer.appendChild(star);
}
