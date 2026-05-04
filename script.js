// Toggle Hamburger Menu
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburger');
     menu.classList.toggle('show');
    hamburger.classList.toggle('active');
    
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
