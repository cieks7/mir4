// Dropdown functionality
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

// Close dropdown when a link is clicked
const dropdownLinks = document.querySelectorAll('.dropdown-link');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdown.style.pointerEvents = 'none';
        setTimeout(() => {
            dropdown.style.pointerEvents = 'auto';
        }, 300);
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        // Dropdown already closes via CSS hover state
    }
});