
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        let targetElement = document.getElementById(targetId); // Try to find the element by ID
        if (!targetElement) {
            targetElement = document.querySelector(`.${targetId}`); // If not found, try to find by class
        }
        if (targetElement) {
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Fade-in and fade-out animation for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, .gallery-item, footer'); // Select all sections, gallery items, and footer

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add fade-in class when the section is in view
                entry.target.classList.remove('fade-out'); // Remove fade-out class
            } else {
                entry.target.classList.remove('fade-in'); // Remove fade-in class
                entry.target.classList.add('fade-out'); // Add fade-out class when the section is out of view
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});


// Smooth transition when opening the "Contact Us" page
document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.querySelector('.cta-button'); // Select the "Contact Us" button

    if (contactButton) {
        contactButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent immediate navigation
            const targetUrl = contactButton.getAttribute('href'); // Get the target URL

            // Add a fade-out effect to the body
            document.body.style.transition = 'opacity 0.5s ease, background-color 0.5s ease';
            document.body.style.opacity = '0';
            document.body.style.backgroundColor = 'var(--dark-bg)'; // Match your theme's background color

            // Wait for the fade-out effect to complete, then navigate
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Match the duration of the fade-out effect
        });
    }
});


// Add functionality to the "Send" button
document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.querySelector('.btn'); // Select the "Send" button

    if (sendButton) {
        sendButton.addEventListener('click', () => {
            // Display a confirmation message
            alert('Thank you for contacting us! We will get back to you shortly.');
            
            // Optionally, clear the form fields
            document.querySelectorAll('.input, textarea').forEach(field => {
                field.value = '';
            });
        });
    }
});