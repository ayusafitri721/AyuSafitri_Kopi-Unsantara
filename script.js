document.addEventListener('DOMContentLoaded', () => {
    // Language Translations
    const translations = {
        id: {
            title: "Kopi Unsantara - Rasa Asli Nusantara di Setiap Seduhan",
            logo: "Kopi Unsantara",
            "nav-about": "Tentang",
            "nav-products": "Produk",
            "nav-promo": "Promo",
            "nav-testimonials": "Testimoni",
            "nav-contact": "Kontak",
            "hero-title": "Kopi Unsantara",
            "hero-subtitle": "Rasa Asli Nusantara di Setiap Seduhan",
            "hero-cta-products": "Lihat Produk",
            "hero-cta-order": "Pesan Sekarang",
            "about-title": "Tentang Kami",
            "about-subtitle": "Warisan Cita Rasa Nusantara",
            "about-text-1": "Kopi Unsantara lahir dari kecintaan mendalam terhadap kopi asli Indonesia. Kami menghadirkan biji kopi pilihan terbaik dari berbagai daerah di Nusantara, mulai dari Arabika premium hingga Robusta yang kuat karakternya.",
            "about-text-2": "Setiap biji kopi yang kami sajikan telah melalui proses seleksi ketat dan pengolahan yang mempertahankan cita rasa autentik. Kami berkomitmen mendukung petani kopi lokal dan menghadirkan pengalaman ngopi yang tak terlupakan.",
            "feature-1": "100% Kopi Asli Indonesia",
            "feature-2": "Mendukung Petani Lokal",
            "feature-3": "Kualitas Premium",
            "about-illustration-title": "Sejak 2020",
            "about-illustration-text": "Melayani pecinta kopi Indonesia",
            "products-title": "Katalog Produk",
            "filter-all": "Semua",
            "filter-arabika": "Arabika",
            "filter-robusta": "Robusta",
            "filter-specialty": "Specialty",
            "product-arabika-gayo-title": "Arabika Gayo",
            "product-arabika-gayo-desc": "Kopi arabika premium dari dataran tinggi Gayo, Aceh. Memiliki aroma floral dengan rasa fruity yang khas.",
            "product-robusta-lampung-title": "Robusta Lampung",
            "product-robusta-lampung-desc": "Robusta berkualitas tinggi dari Lampung dengan karakter kuat dan body yang tebal. Cocok untuk espresso.",
            "product-arabika-toraja-title": "Arabika Toraja",
            "product-arabika-toraja-desc": "Kopi legendary dari Sulawesi Selatan dengan kompleksitas rasa yang unik dan aftertaste yang panjang.",
            "product-kopi-luwak-title": "Kopi Luwak",
            "product-kopi-luwak-desc": "Specialty coffee termahal di dunia dengan proses fermentasi alami yang menghasilkan cita rasa istimewa.",
            "product-arabika-kintamani-title": "Arabika Kintamani",
            "product-arabika-kintamani-desc": "Kopi arabika dari Bali dengan karakteristik citrus dan keasaman yang seimbang. Cocok untuk manual brewing.",
            "product-java-preanger-title": "Java Preanger",
            "product-java-preanger-desc": "Specialty grade dari Jawa Barat dengan processing honey yang menghasilkan sweetness natural yang istimewa.",
            "product-detail": "Detail",
            "product-order": "Pesan",
            "promo-title": "🎉 Promo Special!",
            "promo-subtitle": "Diskon 25% untuk pembelian min. 2kg",
            "countdown-days": "Hari",
            "countdown-hours": "Jam",
            "countdown-minutes": "Menit",
            "countdown-seconds": "Detik",
            "promo-cta": "Ambil Promo Sekarang!",
            "testimonials-title": "Testimoni Pelanggan",
            "testimonial-1-text": "\"Kopi Gayo dari Unsantara benar-benar premium! Aromanya wangi dan rasanya smooth banget. Jadi langganan nih!\"",
            "testimonial-1-author": "Andi Wijaya",
            "testimonial-1-role": "Owner Kedai Kopi Jakarta",
            "testimonial-2-text": "\"Pelayanan cepat, kopi fresh, harga bersahabat. Robusta Lampungnya cocok banget buat campuran kopi susu!\"",
            "testimonial-2-author": "Sari Indah",
            "testimonial-2-role": "Barista Cafe Bandung",
            "testimonial-3-text": "\"Kopi Torajanya juara! Kompleks rasanya tapi balance. Packaging juga rapi, cocok buat oleh-oleh.\"",
            "testimonial-3-author": "Budi Santoso",
            "testimonial-3-role": "Coffee Enthusiast",
            "contact-title": "Hubungi Kami",
            "contact-whatsapp-title": "WhatsApp",
            "contact-whatsapp-desc": "Respon cepat 24/7",
            "contact-instagram-title": "Instagram",
            "contact-instagram-desc": "Follow untuk update promo",
            "contact-address-title": "Alamat",
            "contact-address-text": "Jl. Kopi Nusantara No. 123",
            "contact-address-desc": "Jakarta Selatan, Indonesia",
            "contact-hours-title": "Jam Operasional",
            "contact-hours-text": "Senin - Sabtu: 08:00 - 17:00",
            "contact-hours-desc": "Minggu: 09:00 - 15:00",
            "contact-form-title": "Kirim Pesan",
            "contact-form-name": "Nama Lengkap",
            "contact-form-email": "Email",
            "contact-form-phone": "No. WhatsApp",
            "contact-form-message": "Pesan",
            "contact-form-submit": "Kirim Pesan",
            "contact-form-success": "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.",
            "footer-copyright": "© 2025 Kopi Unsantara. Rasa Asli Nusantara di Setiap Seduhan.",
            "footer-made": "Dibuat dengan <i class=\"fas fa-heart\" style=\"color: #ff6b6b;\"></i> untuk Pecinta Kopi Indonesia"

       
        },
        en: {
            title: "Kopi Unsantara - Authentic Nusantara Flavor in Every Sip",
            logo: "Kopi Unsantara",
            "nav-about": "About",
            "nav-products": "Products",
            "nav-promo": "Promo",
            "nav-testimonials": "Testimonials",
            "nav-contact": "Contact",
            "hero-title": "Kopi Unsantara",
            "hero-subtitle": "Authentic Nusantara Flavor in Every Sip",
            "hero-cta-products": "View Products",
            "hero-cta-order": "Order Now",
            "about-title": "About Us",
            "about-subtitle": "Heritage of Nusantara Flavors",
            "about-text-1": "Kopi Unsantara was born from a deep love for authentic Indonesian coffee. We bring you the finest coffee beans from various regions of the archipelago, from premium Arabica to bold Robusta.",
            "about-text-2": "Every coffee bean we offer undergoes a rigorous selection and processing to preserve its authentic flavor. We are committed to supporting local coffee farmers and delivering an unforgettable coffee experience.",
            "feature-1": "100% Authentic Indonesian Coffee",
            "feature-2": "Supporting Local Farmers",
            "feature-3": "Premium Quality",
            "about-illustration-title": "Since 2020",
            "about-illustration-text": "Serving Indonesian coffee lovers",
            "products-title": "Product Catalog",
            "filter-all": "All",
            "filter-arabika": "Arabica",
            "filter-robusta": "Robusta",
            "filter-specialty": "Specialty",
            "product-arabika-gayo-title": "Arabica Gayo",
            "product-arabika-gayo-desc": "Premium Arabica coffee from the Gayo highlands, Aceh. Features a floral aroma with a distinctive fruity taste.",
            "product-robusta-lampung-title": "Robusta Lampung",
            "product-robusta-lampung-desc": "High-quality Robusta from Lampung with a strong character and full body. Perfect for espresso.",
            "product-arabika-toraja-title": "Arabica Toraja",
            "product-arabika-toraja-desc": "Legendary coffee from South Sulawesi with unique flavor complexity and a long aftertaste.",
            "product-kopi-luwak-title": "Kopi Luwak",
            "product-kopi-luwak-desc": "The world’s most expensive specialty coffee with a natural fermentation process that yields an exceptional taste.",
            "product-arabika-kintamani-title": "Arabica Kintamani",
            "product-arabika-kintamani-desc": "Arabica coffee from Bali with citrus characteristics and balanced acidity. Ideal for manual brewing.",
            "product-java-preanger-title": "Java Preanger",
            "product-java-preanger-desc": "Specialty grade from West Java with honey processing that produces a unique natural sweetness.",
            "product-detail": "Detail",
            "product-order": "Order",
            "promo-title": "🎉 Special Promo!",
            "promo-subtitle": "25% Discount for purchases of min. 2kg",
            "countdown-days": "Days",
            "countdown-hours": "Hours",
            "countdown-minutes": "Minutes",
            "countdown-seconds": "Seconds",
            "promo-cta": "Grab the Promo Now!",
            "testimonials-title": "Customer Testimonials",
            "testimonial-1-text": "\"The Gayo coffee from Unsantara is truly premium! The aroma is fragrant, and the taste is incredibly smooth. I’m a regular now!\"",
            "testimonial-1-author": "Andi Wijaya",
            "testimonial-1-role": "Jakarta Coffee Shop Owner",
            "testimonial-2-text": "\"Fast service, fresh coffee, and affordable prices. The Lampung Robusta is perfect for milk coffee blends!\"",
            "testimonial-2-author": "Sari Indah",
            "testimonial-2-role": "Bandung Cafe Barista",
            "testimonial-3-text": "\"The Toraja coffee is outstanding! Complex yet balanced flavors, and the packaging is neat, perfect for souvenirs.\"",
            "testimonial-3-author": "Budi Santoso",
            "testimonial-3-role": "Coffee Enthusiast",
            "contact-title": "Contact Us",
            "contact-whatsapp-title": "WhatsApp",
            "contact-whatsapp-desc": "Fast response 24/7",
            "contact-instagram-title": "Instagram",
            "contact-instagram-desc": "Follow for promo updates",
            "contact-address-title": "Address",
            "contact-address-text": "Jl. Kopi Nusantara No. 123",
            "contact-address-desc": "South Jakarta, Indonesia",
            "contact-hours-title": "Operating Hours",
            "contact-hours-text": "Monday - Saturday: 08:00 - 17:00",
            "contact-hours-desc": "Sunday: 09:00 - 15:00",
            "contact-form-title": "Send a Message",
            "contact-form-name": "Full Name",
            "contact-form-email": "Email",
            "contact-form-phone": "WhatsApp Number",
            "contact-form-message": "Message",
            "contact-form-submit": "Send Message",
            "contact-form-success": "Message sent successfully! We will contact you soon.",
            "footer-copyright": "© 2025 Kopi Unsantara. Authentic Nusantara Flavor in Every Sip.",
            "footer-made": "Made with <i class=\"fas fa-heart\" style=\"color: #ff6b6b;\"></i> for Indonesian Coffee Lovers"
        }
    };

    // Language Toggle
    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = localStorage.getItem('language') || 'id';
    document.documentElement.lang = currentLanguage;

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.title = translations[lang].title;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
    };

    languageToggle.value = currentLanguage;
    updateLanguage(currentLanguage);

    languageToggle.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage(currentLanguage);
    });

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
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
                card.classList.remove('visible');
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.add('visible');
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
            document.getElementById('countdown').innerHTML = `<p>${translations[currentLanguage]['promo-ended'] || 'Promo telah berakhir!'}</p>`;
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
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const whatsappMessage = `Halo, saya ${name} (email: ${email}, WA: ${phone}). Pesan: ${message}`;
    const whatsappUrl = `https://wa.me/62895328651916?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    contactForm.reset();
    formMessage.style.display = 'block';
    formMessage.className = 'success';
    formMessage.textContent = 'Pesan telah dikirim via WhatsApp!';
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 3000);
});

    // Product Modal
    window.showProductDetail = (productName) => {
        const modal = document.getElementById('productModal');
        const modalContent = document.getElementById('modalContent');
        const product = Array.from(productCards).find(card => 
            card.querySelector('.product-name').textContent === translations[currentLanguage][`product-${productName.toLowerCase().replace(/\s+/g, '-')}-title`]
        );
        
        if (product) {
            const nameKey = product.querySelector('.product-name').getAttribute('data-lang');
            const name = translations[currentLanguage][nameKey];
            const price = product.querySelector('.product-price').textContent;
            const descKey = product.querySelector('.product-description').getAttribute('data-lang');
            const description = translations[currentLanguage][descKey];
            const imageSrc = product.querySelector('.product-img').src;
            const priceValue = parseInt(price.replace(/[^0-9]/g, ''));
            
            modalContent.innerHTML = `
                <img src="${imageSrc}" alt="${name}">
                <h3>${name}</h3>
                <p class="product-price">${price}</p>
                <p>${description}</p>
                <button class="btn btn-primary" onclick="orderWhatsApp('${name}', ${priceValue})">
                    <i class="fas fa-shopping-cart"></i> ${translations[currentLanguage]['product-order']}
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
        const message = translations[currentLanguage]['whatsapp-order']?.replace('{productName}', productName).replace('{price}', price) ||
                        `Halo, saya ingin memesan ${productName} seharga Rp ${price}.`;
        const whatsappUrl = `https://wa.me/62895328651916?text=${encodeURIComponent(message)}`;
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

    // Initialize all products as visible on load
    productCards.forEach(card => card.classList.add('visible'));
});