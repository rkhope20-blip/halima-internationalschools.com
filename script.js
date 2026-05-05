// Toggle Hamburger Menu
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('show');
    
    
}

// Simple form alert
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Message sent successfully! We will get back to you soon.');
            this.reset();
        });
    }
});
