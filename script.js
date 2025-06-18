const navbar = document.getElementById('main-navbar');
const scrollThreshold = 50; // Adjust this value to determine when the navbar becomes opaque

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');

    if (navbar.classList.contains('navbar-scrolled') && window.scrollY < scrollThreshold) {
        navbar.classList.remove('navbar-scrolled');
    } else {
        navbar.classList.add('navbar-scrolled');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });


});



document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper-container', {
        slidesPerView: 1.5,
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1.5,
                spaceBetween: 40
            }
        },
        
        autoplay: {
            delay: 5000,
        },
    });
});

// // Add this to your existing JavaScript file or create a new one
// function fadeInEvents() {
//     const events = document.querySelectorAll('.evento-card');
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.3 });

//     events.forEach(event => {
//         observer.observe(event);
//     });
// }

// // Call the function when the page loads
// document.addEventListener('DOMContentLoaded', fadeInEvents);



window.addEventListener('scroll', function() {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


