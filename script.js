// script.js
document.querySelectorAll('h2').forEach(heading => {
    heading.addEventListener('click', () => {
        const nextSibling = heading.nextElementSibling;
        if (nextSibling) {
            nextSibling.style.display =
                nextSibling.style.display === 'none' ? 'block' : 'none';
        }
    });
});
