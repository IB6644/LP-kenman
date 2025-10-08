// ===================================
// Main JavaScript for OSAKI Meter Reading App LP
// ===================================

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// ===================================
// Navigation Menu
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !navMenu?.contains(e.target)) {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu
            navMenu?.classList.remove('active');
            hamburger?.classList.remove('active');
        }
    });
});

// ===================================
// Active Navigation Link Highlight
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ===================================
// Features Interactive Showcase
// ===================================
const featureItems = document.querySelectorAll('.feature-item');
const featureScreen = document.getElementById('featureScreen');

const featureScreens = {
    'ai-reading': `
        <div style="padding: 20px; text-align: center;">
            <h4 style="margin-bottom: 20px;">AI自動読取画面</h4>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <rect x="20" y="20" width="160" height="160" rx="10" fill="#f0f0f0" stroke="#4285F4" stroke-width="2"/>
                <text x="100" y="60" text-anchor="middle" font-size="24" fill="#333">12345678</text>
                <circle cx="100" cy="120" r="40" fill="none" stroke="#34A853" stroke-width="3" stroke-dasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
                </circle>
                <text x="100" y="180" text-anchor="middle" font-size="14" fill="#34A853">読取成功!</text>
            </svg>
        </div>
    `,
    'cloud-sync': `
        <div style="padding: 20px; text-align: center;">
            <h4 style="margin-bottom: 20px;">クラウド同期中</h4>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <path d="M100 140 L100 60" stroke="#4285F4" stroke-width="4" stroke-linecap="round">
                    <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <path d="M80 75 L100 60 L120 75" stroke="#4285F4" stroke-width="4" stroke-linecap="round" fill="none">
                    <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <path d="M60 40 Q60 20 80 20 L120 20 Q140 20 140 40 L140 50 Q150 50 150 60 Q150 70 140 70 L60 70 Q50 70 50 60 Q50 50 60 50Z" 
                      fill="#4285F4" opacity="0.2"/>
                <rect x="70" y="120" width="60" height="40" rx="5" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
                <text x="100" y="145" text-anchor="middle" font-size="12" fill="#333">データ</text>
            </svg>
        </div>
    `,
    'error-detection': `
        <div style="padding: 20px; text-align: center;">
            <h4 style="margin-bottom: 20px;">異常値検知システム</h4>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <polyline points="20,180 40,160 60,170 80,140 100,150 120,100 140,110 160,90 180,95" 
                         fill="none" stroke="#4285F4" stroke-width="2"/>
                <circle cx="120" cy="100" r="8" fill="#EA4335"/>
                <path d="M120 85 L120 110 M110 90 L130 90" stroke="#EA4335" stroke-width="3" stroke-linecap="round"/>
                <rect x="125" y="80" width="60" height="30" rx="5" fill="#FFF" stroke="#EA4335" stroke-width="2"/>
                <text x="155" y="100" text-anchor="middle" font-size="12" fill="#EA4335">異常検知!</text>
            </svg>
        </div>
    `,
    'meter-management': `
        <div style="padding: 20px; text-align: center;">
            <h4 style="margin-bottom: 20px;">メーター交換管理</h4>
            <svg width="200" height="200" viewBox="0 0 200 200">
                <rect x="40" y="40" width="50" height="50" rx="5" fill="#34A853"/>
                <rect x="110" y="40" width="50" height="50" rx="5" fill="#FBBC04"/>
                <rect x="40" y="110" width="50" height="50" rx="5" fill="#34A853"/>
                <rect x="110" y="110" width="50" height="50" rx="5" fill="#EA4335"/>
                <text x="65" y="70" text-anchor="middle" font-size="12" fill="white">正常</text>
                <text x="135" y="70" text-anchor="middle" font-size="12" fill="white">注意</text>
                <text x="65" y="140" text-anchor="middle" font-size="12" fill="white">正常</text>
                <text x="135" y="140" text-anchor="middle" font-size="12" fill="white">交換</text>
            </svg>
        </div>
    `
};

featureItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        featureItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
        
        // Update screen content
        const feature = item.getAttribute('data-feature');
        if (featureScreen && featureScreens[feature]) {
            featureScreen.innerHTML = featureScreens[feature];
        }
    });
});

// ===================================
// Demo Tabs
// ===================================
const demoTabs = document.querySelectorAll('.demo-tab');
const demoPanels = document.querySelectorAll('.demo-panel');

demoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabType = tab.getAttribute('data-tab');
        
        // Update tabs
        demoTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update panels
        demoPanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === `${tabType}-demo`) {
                panel.classList.add('active');
            }
        });
    });
});

// ===================================
// ROI Calculator
// ===================================
const meterCountInput = document.getElementById('meterCount');
const workerCountInput = document.getElementById('workerCount');
const hourlyWageInput = document.getElementById('hourlyWage');
const savedHoursDisplay = document.getElementById('savedHours');
const savedCostDisplay = document.getElementById('savedCost');
const roiPeriodDisplay = document.getElementById('roiPeriod');

function calculateROI() {
    if (!meterCountInput || !workerCountInput || !hourlyWageInput) return;
    
    const meterCount = parseInt(meterCountInput.value) || 1000;
    const workerCount = parseInt(workerCountInput.value) || 5;
    const hourlyWage = parseInt(hourlyWageInput.value) || 1500;
    
    // Calculations
    const currentHoursPerMonth = meterCount * 0.1; // 0.1 hour per meter (current)
    const newHoursPerMonth = meterCount * 0.04; // 0.04 hour per meter (with app)
    const savedHoursPerMonth = currentHoursPerMonth - newHoursPerMonth;
    const savedHoursPerYear = savedHoursPerMonth * 12;
    
    const savedCostPerYear = (savedHoursPerYear * hourlyWage) / 10000; // in 万円
    
    const appCost = 180; // App cost in 万円
    const roiPeriod = Math.ceil((appCost / savedCostPerYear) * 12); // in months
    
    // Update display
    if (savedHoursDisplay) savedHoursDisplay.textContent = Math.round(savedHoursPerYear).toLocaleString();
    if (savedCostDisplay) savedCostDisplay.textContent = Math.round(savedCostPerYear).toLocaleString();
    if (roiPeriodDisplay) roiPeriodDisplay.textContent = roiPeriod;
}

// Add event listeners for ROI calculator
[meterCountInput, workerCountInput, hourlyWageInput].forEach(input => {
    input?.addEventListener('input', calculateROI);
});

// Initial calculation
calculateROI();

// ===================================
// Contact Modal
// ===================================
const contactModal = document.getElementById('contactModal');
const modalTitle = document.getElementById('modalTitle');
const inquiryType = document.getElementById('inquiryType');
const contactForm = document.getElementById('contactForm');

function openContactModal(type) {
    if (!contactModal) return;
    
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set modal title and inquiry type based on button clicked
    const titles = {
        'demo': 'デモ予約のお申し込み',
        'trial': '無料トライアルのお申し込み',
        'document': '資料請求',
        'other': 'お問い合わせ'
    };
    
    if (modalTitle) modalTitle.textContent = titles[type] || 'お問い合わせ';
    if (inquiryType) inquiryType.value = type;
}

function closeContactModal() {
    if (!contactModal) return;
    
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
contactModal?.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        closeContactModal();
    }
});

// Handle form submission
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('お問い合わせありがとうございます。\n担当者より2営業日以内にご連絡させていただきます。');
    
    // Reset form and close modal
    contactForm.reset();
    closeContactModal();
});

// Make functions global for onclick handlers
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;

// ===================================
// Back to Top Button
// ===================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop?.classList.add('active');
    } else {
        backToTop?.classList.remove('active');
    }
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        navbar?.style.transform = 'translateY(-100%)';
    } else {
        navbar?.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// ===================================
// Number Counter Animation
// ===================================
function animateValue(element, start, end, duration) {
    if (!element) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const observerOptions = {
    threshold: 0.5
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const value = parseInt(stat.textContent);
                animateValue(stat, 0, value, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// Lazy Loading for Iframes
// ===================================
const iframes = document.querySelectorAll('iframe');
const iframeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const iframe = entry.target;
            if (!iframe.src && iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
            }
            iframeObserver.unobserve(iframe);
        }
    });
}, {
    rootMargin: '50px'
});

iframes.forEach(iframe => {
    iframeObserver.observe(iframe);
});

// ===================================
// Preloader (Optional)
// ===================================
window.addEventListener('load', () => {
    // Hide preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
    
    // Trigger animations
    AOS.refresh();
});

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
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

// Apply debounce to scroll handlers
const debouncedHighlight = debounce(highlightActiveSection, 100);
window.removeEventListener('scroll', highlightActiveSection);
window.addEventListener('scroll', debouncedHighlight);

// ===================================
// Service Worker Registration (Optional)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker registration failed'));
    });
}

// ===================================
// Analytics Events (Optional)
// ===================================
function trackEvent(category, action, label) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track CTA clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();
        trackEvent('CTA', 'click', buttonText);
    });
});

console.log('大崎電気工業 検針アプリLP - Ready');