
// Global variables
let currentSlide = 0;
let flipWordsIndex = 0;
let isScrolling = false;
let isParallaxActive = true;

// Words for flip animation - Exato da versão React
const flipWords = ['Excelência', 'Inovação', 'Performance', 'Resultados'];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando Weethub Website...');
    initializeApp();
});

function initializeApp() {
    // Initialize all components in correct order
    initializeMobileMenu();
    initializeFlipWords();
    initializeParallaxEffect();
    initializeCarousel();
    initializeScrollAnimations();
    initializeInfiniteScroll();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeBackgroundLines();
    
    // Set up event listeners
    window.addEventListener('scroll', throttle(handleScroll, 16));
    window.addEventListener('resize', throttle(handleResize, 100));
    
    // Page loaded indicator
    console.log('✅ Weethub website 100% carregado!');
}

// Throttle function for performance optimization
function throttle(func, wait) {
    let timeout = null;
    return function() {
        if (!timeout) {
            timeout = setTimeout(() => {
                func.call();
                timeout = null;
            }, wait);
        }
    };
}

// Mobile Menu - Implementação correta
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
        
        // Close menu on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
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
    
    // Accessibility
    overlay.setAttribute('aria-expanded', overlay.classList.contains('active'));
}

function closeMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    toggle.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Accessibility
    overlay.setAttribute('aria-expanded', 'false');
}

// Flip Words Animation - Animação exata do React
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

// Background Lines SVG Animation
function initializeBackgroundLines() {
    console.log('🎨 Inicializando animações SVG...');
    
    // SVG paths are already in HTML, this just ensures
    // they are properly initialized for animation
    const svgLines = document.querySelectorAll('.bg-line');
    if (svgLines.length > 0) {
        console.log(`✅ ${svgLines.length} linhas SVG animadas inicializadas`);
    }
}

// Parallax Effect - Implementação exata
function initializeParallaxEffect() {
    // Set up initial parallax state
    updateParallaxEffect();
    console.log('✨ Efeito parallax inicializado');
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
    // Only run if parallax should be active (desktop only)
    if (!isParallaxActive || window.innerWidth <= 768) return;
    
    const scrolled = window.pageYOffset;
    
    // Update parallax rows - Movimento preciso 3 linhas
    const parallaxRows = document.querySelectorAll('.parallax-row');
    parallaxRows.forEach((row, index) => {
        // Different speeds for different rows
        const speeds = [0.15, -0.1, 0.05];
        const speed = speeds[index % speeds.length];
        const yPos = scrolled * speed;
        const xPos = parseFloat(row.dataset.xPos || 0);
        
        // Apply transform considering both scroll position and animation position
        row.style.transform = `translateX(${xPos}px) translateY(${yPos}px)`;
    });
    
    // Spotlight parallax effect
    const spotlight = document.querySelector('.spotlight');
    if (spotlight) {
        const spotlightSpeed = -0.2;
        const spotlightY = scrolled * spotlightSpeed;
        spotlight.style.transform = `translateY(${spotlightY}px)`;
    }
}

// Carousel for Mobile - Mobile Carousel Funcional
function initializeCarousel() {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.getElementById('carousel-indicators');
    
    if (!track || !prevBtn || !nextBtn || !indicators) return;
    
    const slides = track.children;
    const totalSlides = slides.length;
    
    // Ensure indicators match slides
    while (indicators.children.length < totalSlides) {
        const dot = document.createElement('div');
        dot.className = 'indicator';
        if (indicators.children.length === 0) {
            dot.classList.add('active');
        }
        indicators.appendChild(dot);
    }
    
    // Set up event listeners
    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));
    
    // Add click events to indicators
    Array.from(indicators.children).forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    function moveSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentSlide = index;
            updateCarousel();
        }
    }
    
    function updateCarousel() {
        // Smooth animation
        const translateX = -currentSlide * 100;
        track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        Array.from(indicators.children).forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Auto-play on mobile only
    let autoplayInterval = null;
    
    function setupAutoplay() {
        if (window.innerWidth <= 768) {
            if (!autoplayInterval) {
                autoplayInterval = setInterval(() => moveSlide(1), 5000);
            }
        } else if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }
    
    // Initialize autoplay
    setupAutoplay();
    
    // Update autoplay on window resize
    window.addEventListener('resize', setupAutoplay);
    
    // Pause on hover
    track.addEventListener('mouseenter', () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    });
    
    track.addEventListener('mouseleave', () => {
        if (window.innerWidth <= 768) {
            autoplayInterval = setInterval(() => moveSlide(1), 5000);
        }
    });
    
    // Touch support for carousel
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left, go to next slide
            moveSlide(1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right, go to previous slide
            moveSlide(-1);
        }
    }
}

// Scroll Animations - Animações exatas do React
function initializeScrollAnimations() {
    const animateElements = document.querySelectorAll('.case-card, .service-card, .result-card, .stat-card, .benefit-item');
    
    animateElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Initial check for elements in viewport
    updateScrollAnimations();
    
    // Use Intersection Observer if available
    if ('IntersectionObserver' in window) {
        initializeIntersectionObserver();
    }
}

function updateScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = window.innerHeight * 0.15;
        
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
        if (items.length > 0) {
            items.forEach(item => {
                const clone = item.cloneNode(true);
                track.appendChild(clone);
            });
        }
        
        // Pause on hover for better UX
        container.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        
        container.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    });
}

// Contact Form - Validação e feedback
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
    submitBtn.innerHTML = '<svg class="animate-spin" viewBox="0 0 24 24" width="16" height="16"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Success feedback
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
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

// Smooth Scrolling - Navegação suave
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
    // Update parallax state
    isParallaxActive = window.innerWidth > 768;
    
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
        threshold: 0.15,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Unobserve after animation triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Control carousel with keyboard
    if (document.activeElement.classList.contains('carousel-btn') && e.key === 'Enter') {
        e.target.click();
    }
});

// Console welcome message
console.log(`
⚡ Weethub - Soluções Digitais Inteligentes
🌐 Website HTML Estático 100% Exato da versão React
✨ Todos os efeitos e animações implementados fielmente
📱 Responsivo e optimizado para todos os dispositivos
`);
