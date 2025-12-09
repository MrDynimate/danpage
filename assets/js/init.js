document.addEventListener("DOMContentLoaded", () => {
    const visual = document.getElementById('about-visual');
    const text = document.getElementById('about-text');
    if(visual) observer.observe(visual);
    if(text) observer.observe(text);
});