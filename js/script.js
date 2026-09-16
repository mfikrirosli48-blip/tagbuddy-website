// ==================== SCROLL SMOOTH ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== NAVBAR ACTIVE STATE ==================== 
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-links a').forEach(link => link.style.opacity = '0.7');
                navLink.style.opacity = '1';
            }
        }
    });
});

// ==================== ANIMASI SAAT SCROLL ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua fitur cards
document.querySelectorAll('.fitur-card, .objektif-item, .impak-card, .testimoni-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==================== COUNTER ANIMATION ==================== 
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== MODAL FUNCTION ==================== 
function showModal(title, content) {
    // Buat modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Styling modal
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: block;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .modal-content {
            background-color: #f8f9fa;
            margin: 10% auto;
            padding: 30px;
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .close:hover {
            color: #667eea;
        }
        
        .modal-content h2 {
            color: #667eea;
            margin-top: 0;
        }
        
        .modal-content p {
            line-height: 1.8;
            color: #333;
        }
    `;
    document.head.appendChild(style);
    
    // Close button
    modal.querySelector('.close').onclick = () => {
        modal.remove();
    };
    
    // Close on outside click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

// ==================== DYNAMICALLY UPDATE YEAR ==================== 
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        const text = footerBottom.querySelector('p:first-child');
        if (text) {
            text.textContent = `© ${year} TAGBUDDY - RBT SMART-TEAM. Semua hak terpelihara.`;
        }
    }
});

// ==================== CONSOLE MESSAGE ==================== 
console.log('%c🏷️ TAGBUDDY - RBT SMART-TEAM', 
    'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c"Kenali Kekuatan Diri, Cari Peranan, Bina Bersama"', 
    'font-size: 14px; color: #764ba2; font-style: italic;');
console.log('%cJangan lupa untuk mengenali kekuatan diri dan sumbang yang terbaik! 💪🌟',
    'font-size: 12px; color: #666; margin-top: 10px;');