document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Product Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Countdown Timer
    const countdownDate = new Date('2025-12-31T23:59:59').getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '<p>Promo telah berakhir!</p>';
        }
    };
    
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Testimonial Slider
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-card');
    const totalSlides = slides.length;
    
    const updateSlider = () => {
        testimonialsContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    };
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
    
    // Auto-slide every 5 seconds
    let autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
    
    // Pause auto-slide on hover
    testimonialsContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    testimonialsContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };
        
        // Simulate form submission (no backend)
        console.log('Form submitted:', data);
        formMessage.style.display = 'block';
        formMessage.className = 'success';
        formMessage.textContent = 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.';
        
        contactForm.reset();
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 3000);
    });

    // Product Modal
    window.showProductDetail = (productName) => {
        const modal = document.getElementById('productModal');
        const modalContent = document.getElementById('modalContent');
        const product = Array.from(productCards).find(card => 
            card.querySelector('.product-name').textContent === productName
        );
        
        if (product) {
            const name = product.querySelector('.product-name').textContent;
            const price = product.querySelector('.product-price').textContent;
            const description = product.querySelector('.product-description').textContent;
            const priceValue = parseInt(price.replace(/[^0-9]/g, ''));
            
            modalContent.innerHTML = `
                <h3>${name}</h3>
                <p class="product-price">${price}</p>
                <p>${description}</p>
                <button class="btn btn-primary" onclick="orderWhatsApp('${name}', ${priceValue})">
                    <i class="fas fa-shopping-cart"></i> Pesan Sekarang
                </button>
            `;
            modal.classList.add('active');
        }
    };
    
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('productModal').classList.remove('active');
    });

    // WhatsApp Order
    window.orderWhatsApp = (productName, price) => {
        const message = `Halo, saya ingin memesan ${productName} seharga Rp ${price}.`;
        const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Scroll Indicator
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.querySelector('.scroll-indicator').style.width = `${scrollPercent}%`;
    });

    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Back to Top
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});