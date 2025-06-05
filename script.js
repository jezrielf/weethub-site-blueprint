
// Global variables
let currentSlide = 0;
let flipWordsIndex = 0;
let isScrolling = false;

// Words for flip animation
const flipWords = ['Excelência', 'Inovação', 'Performance', 'Resultados'];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    initializeMobileMenu();
    initializeFlipWords();
    initializeParallaxEffect();
    initializeCarousel();
    initializeScrollAnimations();
    initializeInfiniteScroll();
    initializeContactForm();
    initializeSmoothScrolling();
    
    // Set up scroll listener for parallax
    window.addEventListener('scroll', handleScroll);
    
    // Set up resize listener
    window.addEventListener('resize', handleResize);
    
    console.log('Weethub website initialized successfully!');
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-buttons a');
    
    if (mobileToggle && mobileOverlay) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking on links
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close menu when clicking overlay
        mobileOverlay.addEventListener('click', function(e) {
            if (e.target === mobileOverlay) {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    toggle.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    toggle.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Flip Words Animation
function initializeFlipWords() {
    const flipElement = document.getElementById('flip-words');
    if (!flipElement) return;
    
    setInterval(() => {
        flipWordsIndex = (flipWordsIndex + 1) % flipWords.length;
        
        // Add exit animation
        flipElement.style.animation = 'none';
        flipElement.offsetHeight; // Trigger reflow
        flipElement.style.animation = 'flipIn 0.6s ease-out';
        
        // Change text
        flipElement.textContent = flipWords[flipWordsIndex];
    }, 3000);
}

// Parallax Effect
function initializeParallaxEffect() {
    // This will be handled in the scroll event
}

function handleScroll() {
    if (isScrolling) return;
    
    isScrolling = true;
    requestAnimationFrame(() => {
        updateParallaxEffect();
        updateScrollAnimations();
        isScrolling = false;
    });
}

function updateParallaxEffect() {
    const heroParallax = document.getElementById('hero-parallax');
    if (!heroParallax) return;
    
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Update parallax rows if on desktop
    const parallaxRows = document.querySelectorAll('.parallax-row');
    parallaxRows.forEach((row, index) => {
        const speed = (index % 2 === 0) ? 0.5 : -0.5;
        const yPos = -(scrolled * speed);
        row.style.transform = `translateY(${yPos}px)`;
    });
}

// Carousel for Mobile
function initializeCarousel() {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.getElementById('carousel-indicators');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    const slides = track.children;
    const totalSlides = slides.length;
    
    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));
    
    // Add click events to indicators
    if (indicators) {
        const indicatorElements = indicators.children;
        Array.from(indicatorElements).forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });
    }
    
    function moveSlide(direction) {
        currentSlide += direction;
        
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        if (indicators) {
            const indicatorElements = indicators.children;
            Array.from(indicatorElements).forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }
    }
    
    // Auto-play carousel
    setInterval(() => {
        if (window.innerWidth <= 768) { // Only on mobile
            moveSlide(1);
        }
    }, 5000);
}

// Scroll Animations
function initializeScrollAnimations() {
    const animateElements = document.querySelectorAll('.case-card, .service-card, .result-card, .stat-card, .benefit-item');
    
    animateElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
}

function updateScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('in-view');
        }
    });
}

// Infinite Scroll
function initializeInfiniteScroll() {
    const scrollContainers = document.querySelectorAll('.infinite-scroll');
    
    scrollContainers.forEach(container => {
        const track = container.querySelector('.infinite-track');
        if (!track) return;
        
        // Clone items for seamless loop
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
        
        // Pause on hover
        container.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        
        container.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    });
}

// Contact Form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Add input validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearErrorState);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.form-submit');
    
    // Basic validation
    if (!validateForm(form)) {
        return;
    }
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Success feedback
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Este campo é obrigatório');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
            showFieldError(field, 'Email inválido');
            isValid = false;
        }
    });
    
    return isValid;
}

function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    if (input.hasAttribute('required') && !value) {
        showFieldError(input, 'Este campo é obrigatório');
    } else if (input.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(input, 'Email inválido');
    }
}

function clearErrorState(e) {
    const input = e.target;
    input.style.borderColor = '';
    
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

function showFieldError(field, message) {
    // Clear existing error
    clearErrorState({ target: field });
    
    // Add error state
    field.style.borderColor = '#ef4444';
    
    // Add error message
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ef4444';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Resize Handler
function handleResize() {
    // Reset carousel on resize
    if (window.innerWidth > 768) {
        currentSlide = 0;
        const track = document.getElementById('carousel-track');
        if (track) {
            track.style.transform = 'translateX(0)';
        }
    }
    
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}

// Intersection Observer for better performance
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Lazy Loading Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize advanced features when supported
if (window.IntersectionObserver) {
    document.addEventListener('DOMContentLoaded', () => {
        initializeIntersectionObserver();
        initializeLazyLoading();
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send error to analytics service
});

// Performance monitoring
window.addEventListener('load', function() {
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// Service Worker registration (if needed for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment if you want to add a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
    
    // Enter key on buttons
    if (e.key === 'Enter' && e.target.classList.contains('carousel-btn')) {
        e.target.click();
    }
});

// Focus management for accessibility
function manageFocus() {
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// Initialize focus management
document.addEventListener('DOMContentLoaded', manageFocus);

// Console welcome message
console.log(`
🚀 Weethub - Soluções Digitais Inteligentes
📧 Contato: contato@weethub.com
🌐 Website desenvolvido com HTML5, CSS3 e JavaScript puro
✨ Todos os efeitos e animações implementados nativamente
`);
