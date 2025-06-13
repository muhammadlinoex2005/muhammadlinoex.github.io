// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true,     // whether animation should happen only once - while scrolling down
    });

    // More JavaScript will go here later
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Navbar active link switcher
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section'); // Assuming your page sections have <section> tags and IDs

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {} // 100 is an offset
        
        navLinks.forEach((link) => link.classList.remove('active'));
        // Ensure the link exists before trying to add 'active' class
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    // Initial call in case the page is loaded on a section
    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    // Navbar shrink/change background on scroll (optional)
    const navbar = document.querySelector('.navbar');
    if (navbar) { // Check if navbar exists
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adjust 50 to when you want the effect to trigger
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Smooth scroll for all anchor links (alternative to CSS html {scroll-behavior: smooth})
    // This JS version can offer more control if needed, but CSS is simpler.
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if(targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
});

// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // ... (AOS init, Navbar scripts, EmailJS from before) ...

    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Navbar active link switcher
    // ... (your existing navbar script) ...

    // Navbar shrink/change background on scroll (optional)
    // ... (your existing navbar scroll script) ...

    // Set current year in footer
    // ... (your existing footer script) ...


    // Typed.js Configuration for Hero Section
    const typedTextSpan = document.getElementById('typed-text');
    if (typedTextSpan) { // Check if the element exists
        const typed = new Typed('#typed-text', {
            strings: ['M. Ardho Rantisy'], // Add your desired strings
            typeSpeed: 70,    // Speed of typing in milliseconds
            backSpeed: 50,    // Speed of deleting in milliseconds
            backDelay: 1500,  // Pause before deleting
            startDelay: 500,  // Pause before starting to type
            loop: true,       // Loop the animation
            showCursor: true,
            cursorChar: '|',
            contentType: 'html', // 'html' or 'null' for plaintext
        });
    }

    // REMOVE any contact form submission JS if you're not using a form
    // const contactForm = document.getElementById('contact-form');
    // ... (rest of the old contact form JS)
});