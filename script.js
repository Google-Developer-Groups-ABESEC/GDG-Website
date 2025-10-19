// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial animation for the gradient overlay
    gsap.from('.gradient-overlay', {
        opacity: 15,
        duration: 2,
        ease: 'power2.out'
    });

    // Navbar animations
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.logo-container', {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    let isHidden = false;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Only trigger after a bit of scroll (prevents flicker at top)
        if (Math.abs(currentScroll - lastScrollTop) < 10) return;

        if (currentScroll > lastScrollTop && currentScroll > 100) {
            // Scrolling down → hide navbar (only if not already hidden)
            if (!isHidden) {
                gsap.to(navbar, {
                    y: -120,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
                isHidden = true;
            }
        } else {
            // Scrolling up → show navbar (only if currently hidden)
            if (isHidden) {
                gsap.to(navbar, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
                isHidden = false;
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });



    // Modified hamburger menu animation
    gsap.from('.hamburger-menu', {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        onComplete: () => {
            // Ensure hamburger menu is visible after animation
            gsap.set('.hamburger-menu', {
                opacity: 1,
                visibility: 'visible'
            });
        }
    });

    // Club Story Section Animations
    const storyTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.club-story',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    storyTimeline
        .from('.section-title', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.story-description', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navOverlay.classList.toggle('active');
        body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navOverlay.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    navOverlay.addEventListener('click', (e) => {
        if (e.target === navOverlay) {
            hamburger.classList.remove('active');
            navOverlay.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Text cycling animation with typing effect
    const texts = [
        "Hello Innovators",
        "Empower Yourself",
        "Innovate Your Future"
    ];

    const cyclingText = document.querySelector('.cycling-text');
    let currentIndex = 0;
    let currentText = '';
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Speed for typing
    let deletingSpeed = 50; // Speed for deleting
    let pauseTime = 2000; // Time to pause at complete text

    function typeText() {
        const fullText = texts[currentIndex];
        
        if (isDeleting) {
            // Deleting text
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = deletingSpeed;
        } else {
            // Typing text
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        cyclingText.textContent = currentText;

        if (!isDeleting && charIndex === fullText.length) {
            // Pause at complete text
            typingSpeed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before starting next text
        }

        setTimeout(typeText, typingSpeed);
    }

    // Start the typing animation
    typeText();

    // Remove the previous interval and transition styles
    cyclingText.style.transition = 'none';

    // Stat Box Counting Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Function to animate counting
    function animateValue(element, start, end, duration, addPlus = false) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else if (addPlus) {
                // Add the plus symbol after counting completes
                element.textContent = currentValue + '+';
            }
        };
        window.requestAnimationFrame(step);
    }

    // Create an Intersection Observer for the stats section
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate each stat number
                statNumbers.forEach((stat, index) => {
                    const endValue = parseInt(stat.textContent);
                    const startValue = 0;
                    // Add plus symbol only for 2nd and 3rd stat boxes (index 1 and 2)
                    const addPlus = index === 1 || index === 2;
                    animateValue(stat, startValue, endValue, 2000, addPlus); // 2 seconds duration
                });
                // Unobserve after animation starts
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Observe the stats container
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }

    // Join Community Section Animations
    const communityTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.join-community',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    }
});

communityTimeline
    .from('.community-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.community-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.pillar', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all' 
    }, '-=0.5')
    .from('.community-cta', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.3');
        // .from('.team-card', {
        //     y: 50,
        //     opacity: 0,
        //     duration: 0.8,
        //     stagger: 0.2,
        //     ease: 'power3.out'
        // }, '-=0.3');

    // Add hover animation for team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.05,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

    // Back to Top functionality is now handled in lenis-config.js

    // Show/hide back to top button based on scroll position
    let lastScrollY = window.scrollY;
    let ticking = false;
    function handleScroll() {
        if (window.scrollY > 500) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
}); 