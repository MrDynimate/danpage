document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.card;
        alert(`You clicked Card ${id}`);
    });
});