

// WhatsApp Booking Redirect Logic
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const phoneNumber = "919890597871"; 
        const packageName = this.getAttribute('data-package');
        const textMessage = `Hello Vighnahartta Photography! I would like to book the *${packageName}* seen on your portfolio website. Please let me know the availability and next steps. Thank you!`;
        const encryptedMessage = encodeURIComponent(textMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encryptedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
});

// Full-Screen Image Lightbox Click Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

// Open Lightbox when any portfolio photo container is clicked
document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src; 
    });
});

// Close Lightbox clicking on the "X" symbol
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close Lightbox automatically if user clicks anywhere outside the photo frame
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && e.target !== lightboxClose) {
        lightbox.style.display = 'none';
    }
});

// Mobile Responsive Navigation Menu Logic
const hamburgerMenu = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});



