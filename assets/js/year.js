const startYear = 2025;
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('copyright-year');
    

yearSpan.textContent = currentYear > startYear 
    ? `${startYear} - ${currentYear}` 
    : startYear;