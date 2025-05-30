
// Global variables
let currentSlide = 0;
let flipWordIndex = 0;
let isScrolling = false;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initFlipWords();
    initParallaxScroll();
    initMobileCarousel();
    initScrollAnimations();
    initContactForm();
    initSmoothScrolling();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-btn');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Flip Words Animation
function initFlipWords() {
    const words = ['Excelência', 'Inovação', 'Performance', 'Resultados'];
    const flipWordsElement = document.getElementById('flipWords');
    
    if (flipWordsElement) {
        setInterval(() => {
            flipWordIndex = (flipWordIndex + 1) % words.length;
            flipWordsElement.style.opacity = '0';
            flipWordsElement.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                flipWordsElement.textContent = words[flipWordIndex];
                flipWordsElement.style.opacity = '1';
                flipWordsElement.style.transform = 'translateY(0)';
            }, 300);
        }, 3000);
    }
}

// Parallax Scroll Effect
function initParallaxScroll() {
    const parallaxContainer = document.getElementById('parallaxContainer');
    const heroParallax = document.getElementById('heroParallax');
    
    if (!parallaxContainer || !heroParallax) return;

    window.addEventListener('scroll', function() {
        if (isScrolling) return;
        
        requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const parallaxRect = heroParallax.getBoundingClientRect();
            const parallaxTop = parallaxRect.top + scrolled;
            const parallaxHeight = parallaxRect.height;
            
            // Only apply parallax when the section is in view
            if (scrolled >= parallaxTop - window.innerHeight && scrolled <= parallaxTop + parallaxHeight) {
                const progress = (scrolled - parallaxTop) / (parallaxHeight - window.innerHeight);
                const clampedProgress = Math.max(0, Math.min(1, progress));
                
                // Apply transformations
                const translateY = -200 + (300 * clampedProgress);
                const rotateX = 8 * (1 - clampedProgress);
                const rotateZ = 10 * (1 - clampedProgress);
                const opacity = 0.2 + (0.8 * clampedProgress);
                
                parallaxContainer.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateZ(${rotateZ}deg) 
                    translateY(${translateY}px)
                `;
                parallaxContainer.style.opacity = opacity;
                
                // Apply different translations to rows
                const row1 = document.getElementById('parallaxRow1');
                const row2 = document.getElementById('parallaxRow2');
                const row3 = document.getElementById('parallaxRow3');
                
                if (row1) {
                    const translateX1 = 200 * clampedProgress;
                    row1.style.transform = `translateX(${translateX1}px)`;
                }
                
                if (row2) {
                    const translateX2 = -200 * clampedProgress;
                    row2.style.transform = `translateX(${translateX2}px)`;
                }
                
                if (row3) {
                    const translateX3 = 200 * clampedProgress;
                    row3.style.transform = `translateX(${translateX3}px)`;
                }
            }
            
            isScrolling = false;
        });
    });
}

// Mobile Carousel
function initMobileCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!carouselTrack) return;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Event listeners
    if (carouselNext) {
        carouselNext.addEventListener('click', nextSlide);
    }
    
    if (carouselPrev) {
        carouselPrev.addEventListener('click', prevSlide);
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    // Auto-play carousel
    setInterval(nextSlide, 4000);
    
    // Touch/swipe support
    let startX = 0;
    let endX = 0;
    
    carouselTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carouselTrack.addEventListener('touchmove', (e) => {
        e.preventDefault();
        endX = e.touches[0].clientX;
    });
    
    carouselTrack.addEventListener('touchend', () => {
        const diffX = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email) {
                alert('Por favor, preencha pelo menos o nome e email.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations can be added here
}, 16)); // ~60fps

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add loading class to body for initial animation
document.body.classList.add('loading');

// Remove loading class after page load
window.addEventListener('load', function() {
    document.body.classList.remove('loading');
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', throttle(function() {
    // Reset carousel on resize
    if (window.innerWidth > 768) {
        currentSlide = 0;
        const carouselTrack = document.getElementById('carouselTrack');
        if (carouselTrack) {
            carouselTrack.style.transform = 'translateX(0)';
        }
    }
}, 250));

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    }
    
    // Arrow keys for carousel navigation
    if (window.innerWidth <= 768) {
        if (e.key === 'ArrowLeft') {
            const carouselPrev = document.getElementById('carouselPrev');
            if (carouselPrev) carouselPrev.click();
        } else if (e.key === 'ArrowRight') {
            const carouselNext = document.getElementById('carouselNext');
            if (carouselNext) carouselNext.click();
        }
    }
});

// Console log for debugging
console.log('Weethub Static Site Loaded Successfully! 🚀');
