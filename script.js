// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    });

    // Close menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== 3D TILT EFFECT FOR CARDS =====
function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize tilt effect after DOM loads
document.addEventListener('DOMContentLoaded', initTiltEffect);

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .tech-card, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const heroVideo = document.querySelector('.hero-video');
    
    if (hero && scrolled <= window.innerHeight) {
        const parallaxSpeed = 0.3;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        
        // Parallax for video
        if (heroVideo) {
            heroVideo.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
        }
    }
});

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const suffix = element.dataset.suffix || '';
    const prefix = element.dataset.prefix || '';
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = prefix + target.toLocaleString('pl-PL') + suffix;
            clearInterval(timer);
        } else {
            element.textContent = prefix + Math.floor(start).toLocaleString('pl-PL') + suffix;
        }
    }, 16);
}

// Trigger counter animation when visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const text = entry.target.textContent;
            const match = text.match(/(\d+)/);
            if (match) {
                const target = parseInt(match[0]);
                const suffix = text.includes('k') ? 'k+' : text.includes('+') ? '+' : '';
                entry.target.dataset.suffix = suffix;
                animateCounter(entry.target, target);
                entry.target.dataset.animated = 'true';
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number, .tech-number');
    counters.forEach(counter => counterObserver.observe(counter));
});

// ===== FORM SUBMISSION =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const button = contactForm.querySelector('.btn-primary');
        const originalText = button.innerHTML;
        
        // Loading state
        button.innerHTML = '<span>Wysyłanie...</span>';
        button.style.opacity = '0.7';
        button.style.pointerEvents = 'none';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success state
            button.innerHTML = '<span>✓ Wysłano!</span>';
            button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            // Show success message
            showNotification('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.opacity = '1';
                button.style.pointerEvents = 'auto';
                button.style.background = '';
            }, 3000);
        }, 1500);
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : '#1e293b'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== CURSOR EFFECT FOR BUTTONS =====
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===== ACTIVE NAV ITEM ON SCROLL =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// ===== MOUSE TRAIL EFFECT (OPTIONAL) =====
let mouseTrailEnabled = false; // Set to true to enable

if (mouseTrailEnabled) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    document.addEventListener('mousemove', (e) => {
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
            life: 100
        });
    });

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            
            ctx.fillStyle = `rgba(16, 185, 129, ${p.life / 100})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= 2;
            
            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

// ===== PERFORMANCE: DEBOUNCE SCROLL EVENTS =====
function debounce(func, wait) {
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

// Apply debounce to expensive scroll handlers
const debouncedScroll = debounce(() => {
    // Heavy scroll operations here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== IMAGE CAROUSEL FOR RYŚ AND LIS SECTIONS =====
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.product-section-rys, .product-section-lis');
    
    sections.forEach(section => {
        const mainImage = section.querySelector('.hero-main-image img');
        const collageItems = section.querySelectorAll('.collage-item img');
        
        if (!mainImage) return;
        
        // Collect all images
        let allImages = [mainImage.src];
        
        // On desktop, add collage images
        if (window.innerWidth > 768 && collageItems.length > 0) {
            allImages = allImages.concat(Array.from(collageItems).map(img => img.src));
        } else if (window.innerWidth <= 768) {
            // On mobile, collect all images from collage for carousel
            if (collageItems.length > 0) {
                allImages = allImages.concat(Array.from(collageItems).map(img => img.src));
            }
        }
        
        // Only start carousel if we have multiple images
        if (allImages.length <= 1) return;
        
        let currentIndex = 0;
        
        // Function to change image
        function changeImage() {
            // Fade out
            mainImage.style.opacity = '0';
            
            setTimeout(() => {
                // Change image
                currentIndex = (currentIndex + 1) % allImages.length;
                mainImage.src = allImages[currentIndex];
                
                // Fade in
                mainImage.style.opacity = '1';
            }, 300);
        }
        
        // Start carousel - change every 3 seconds
        setInterval(changeImage, 3000);
    });
});

// ===== ANIMATE COMPACT PRODUCTS ON SCROLL (MOBILE) =====
if (window.innerWidth <= 768) {
    const compactProducts = document.querySelectorAll('.product-card-compact');
    
    if (compactProducts.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        compactProducts.forEach(product => {
            observer.observe(product);
        });
    }
}

// ===== CONSOLE MESSAGE =====
console.log(
    '%c🌱 TEST Krapkowice - Gospodarka Odpadami',
    'color: #10b981; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
);
console.log(
    '%cNowoczesna strona stworzona z najnowszymi technologiami web',
    'color: #94a3b8; font-size: 12px;'
);
