const portfolioData = [
    { id: 1, title: 'Instagram Reels Montage', category: 'short', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
 {
    id: 2,
    title: 'Corporate Brand Promo',
    category: 'long',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    video: 'https://www.youtube.com/embed/dN7ZpFh14vs'
},
    { id: 3, title: 'YouTube Shorts Compilation', category: 'short', thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 4, title: 'Instagram Story Transitions', category: 'short', thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },

    { id: 5, title: 'Documentary Trailer', category: 'long', thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 6, title: 'Full Wedding Cinematic', category: 'long', thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 7, title: 'Travel Vlog Series', category: 'long', thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },

    { id: 8, title: 'Gaming Montage Highlights', category: 'gaming', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 9, title: 'Esports Tournament Edit', category: 'gaming', thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 10, title: 'Gameplay Review', category: 'gaming', thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },

    { id: 11, title: 'Soccer Goals Compilation', category: 'football', thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 12, title: 'Football Season Highlight', category: 'football', thumbnail: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 13, title: 'Cricket Match Edit', category: 'cricket', thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&h=300&fit=crop', video: 'https://www.youtube.com/embed/cXxfvdVFt58' },

    { id: 14, title: 'Product Showcase AD', category: 'ecommerce', thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 15, title: 'Fashion Collection Ad', category: 'ecommerce', thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 16, title: 'Electronics Promo', category: 'ecommerce', thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },

    { id: 17, title: 'Nature Documentary', category: 'documentary', thumbnail: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 18, title: 'Biography Documentary', category: 'documentary', thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },

    { id: 19, title: 'Cinematic Color Grade', category: 'color', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 20, title: 'Vintage Aesthetic Grade', category: 'color', thumbnail: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },

    { id: 21, title: 'Anime Opening Sequence', category: 'anime', thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 22, title: 'AMV Edit', category: 'anime', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },

    { id: 23, title: 'Brand Commercial 30s', category: 'ads', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' },
    { id: 24, title: 'Product Launch Ad', category: 'ads', thumbnail: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&h=300&fit=crop', video: '16079851_3840_2160_30fps.mp4' }
];

const categoryMap = {
    'all': 'All Work',
    'short': 'Short Form',
    'long': 'Long Form',
    'gaming': 'Gaming',
    'football': 'Football',
    'cricket': 'Cricket',
    'ecommerce': 'eCommerce',
    'documentary': 'Documentary',
    'color': 'Color Grading',
    'anime': 'Anime',
    'ads': 'Advertisements'
};

const categories = ['all', 'short', 'long', 'gaming', 'football', 'cricket', 'ecommerce', 'documentary', 'color', 'anime', 'ads'];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.querySelector('.navbar');
const videoModal = document.getElementById('videoModal');
const modalClose = document.getElementById('modalClose');
const videoContainer = document.getElementById('videoContainer');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Render Filter Buttons
function renderFilters() {
    const container = document.getElementById('filterContainer');
    container.innerHTML = categories.map(cat => 
        `<button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">${categoryMap[cat]}</button>`
    ).join('');
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolio(btn.dataset.filter);
        });
    });
}

// Render Portfolio
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    const filtered = filter === 'all' ? portfolioData : portfolioData.filter(i => i.category === filter);
    
    grid.innerHTML = filtered.map(item => `
        <div class="portfolio-card" data-id="${item.id}">
            <img src="${item.thumbnail}" alt="${item.title}" class="portfolio-thumbnail" loading="lazy">
            <div class="portfolio-overlay">
                <i class="fas fa-play-circle"></i>
                <p style="color: white; margin-top: 10px;">Watch Now</p>
            </div>
            <div class="portfolio-info">
                <h3 class="portfolio-title">${item.title}</h3>
                <span class="portfolio-category">${categoryMap[item.category]}</span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const item = portfolioData.find(i => i.id === id);
            if (item) openVideo(item);
        });
    });
}

function openVideo(item) {
    videoContainer.innerHTML = `
        <iframe
            width="800"
            height="450"
            src="${item.video}?autoplay=1&rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    `;

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Video Modal
function closeVideo() {
    videoModal.classList.remove('active');
    videoContainer.innerHTML = '';
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeVideo);
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) closeVideo();
});

// Animate Stats Counter
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 30);
}

// Intersection Observer for Stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(el => animateCounter(el));
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats-grid');
if (statsSection) statsObserver.observe(statsSection);

// Intersection Observer for Cards Animation
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-card, .stat-card, .testimonial-card, .feature').forEach(el => {
    el.style.opacity = '0';
    cardObserver.observe(el);
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    
    setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast('Message sent successfully! We\'ll get back to you soon.');
    }, 1500);
});

// Show Toast Notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Particles Animation for Hero Section
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 8}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add float animation for particles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderPortfolio('all');
    createParticles();
    
    // Update footer year
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', new Date().getFullYear());
    }
});

console.log('Editkaro.in - Portfolio Website Loaded Successfully');