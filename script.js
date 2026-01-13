const translations = {
    en: {
        companyName: "Sama Al Majd",
        navHome: "Home",
        navAbout: "About Us",
        navProducts: "Products",
        navContact: "Contact",
        heroTitle: "Excellence in Textiles & Clothing",
        heroSubtitle: "Importing quality fashion and fabrics to you.",
        ctaButton: "Contact Us",
        aboutTitle: "About Sama Al Majd",
        aboutText: "Sama Al Majd is a premier company based in Tripoli, specializing in the importation of high-quality clothes and textiles. We are dedicated to providing the market with the finest fabrics and latest fashion trends, ensuring excellence in every thread.",
        featureQuality: "Premium Quality",
        featureTrust: "Trusted Importer",
        featureFashion: "Latest Fashion",
        productsTitle: "Our Collection",
        fabricTitle: "Textiles & Fabrics",
        fabricDesc: "A wide range of premium textiles suitable for all manufacturing needs.",
        clothesTitle: "Ready-to-wear",
        clothesDesc: "Imported fashion clothing for men, women, and children.",
        importTitle: "Global Import",
        importDesc: "Sourcing the best materials from international markets.",
        contactTitle: "Get In Touch",
        locationLabel: "Location",
        phoneLabel: "Phone",
        emailLabel: "Email",
        contactTagline: "Let's Do Business",
        contactSubtext: "Contact us today for the best textile deals in Libya.",
        footerDesc: "Your trusted partner in textile imports."
    },
    ar: {
        companyName: "سما المجد",
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navProducts: "منتجاتنا",
        navContact: "تواصل معنا",
        heroTitle: "التميز في المنسوجات والملابس",
        heroSubtitle: "نستورد لكم أجود الأزياء والأقمشة العالمية.",
        ctaButton: "اتصل بنا",
        aboutTitle: "عن شركة سما المجد",
        aboutText: "سما المجد هي شركة رائدة مقرها طرابلس، متخصصة في استيراد الملابس والمنسوجات عالية الجودة. نحن في شركة سما المجد لستيراد الملابس والمنسوجات، نكرس جهودنا لتزويد السوق بأرقى الأقمشة وأحدث صيحات الموضة، مع ضمان التميز في كل التفاصيل.",
        featureQuality: "جودة عالية",
        featureTrust: "مستورد موثوق",
        featureFashion: "أحدث الموديلات",
        productsTitle: "مجموعتنا",
        fabricTitle: "المنسوجات والأقمشة",
        fabricDesc: "تشكيلة واسعة من المنسوجات الفاخرة المناسبة لجميع احتياجات التصنيع.",
        clothesTitle: "الملابس الجاهزة",
        clothesDesc: "أزياء مستوردة للرجال والنساء والأطفال.",
        importTitle: "استيراد عالمي",
        importDesc: "نبحث عن أفضل المواد الخام من الأسواق العالمية.",
        contactTitle: "تواصل معنا",
        locationLabel: "العنوان",
        phoneLabel: "الهاتف",
        emailLabel: "البريد الإلكتروني",
        contactTagline: "لنبدأ العمل معاً",
        contactSubtext: "تواصل معنا اليوم للحصول على أفضل عروض المنسوجات في ليبيا.",
        footerDesc: "شريككم الموثوق في استيراد المنسوجات."
    }
};

const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Language Toggle Logic
let currentLang = 'en';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
});

function updateLanguage() {
    // Update Body Class
    if (currentLang === 'ar') {
        body.classList.remove('english-mode');
        body.classList.add('arabic-mode');
        langText.textContent = 'English';
    } else {
        body.classList.remove('arabic-mode');
        body.classList.add('english-mode');
        langText.textContent = 'العربية';
    }

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Close mobile menu if open
    navLinks.classList.remove('active');
}

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));
