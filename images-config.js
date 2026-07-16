// =====================================================
// SAHYOM PORTFOLIO - IMAGES CONFIGURATION FILE
// =====================================================
// इस file में सभी photos के URLs हैं
// Photos बदलने के लिए बस URL replace कर दें
// =====================================================

const portfolioImages = {
    // ========== HERO SECTION BACKGROUND ==========
    // Hero section के लिए main background image
    heroBackground: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHx8MTc4NDIyMTM3N3ww&ixlib=rb-4.1.0&q=85",
    
    // Hero section के लिए alternative background (optional)
    heroBackgroundAlt: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8fHx8MTc4NDIyMTM3N3ww&ixlib=rb-4.1.0&q=85",

    // ========== ABOUT SECTION ==========
    // About section में आपकी photo या workspace
    aboutImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
    
    // About section background (optional)
    aboutBackground: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwzfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",

    // ========== SERVICES/FEATURES SECTION ==========
    // हर service/feature के लिए अलग image
    services: {
        service1: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHw0fHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
        service2: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
        service3: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwyfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
    },

    // ========== PORTFOLIO/GALLERY SECTION ==========
    // Portfolio gallery के लिए multiple images
    portfolio: [
        "https://images.pexels.com/photos/22711217/pexels-photo-22711217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwzfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHw0fHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwyfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzg0MjIxMzc3fDA&ixlib=rb-4.1.0&q=85",
    ],

    // ========== CONTACT SECTION BACKGROUND (OPTIONAL) ==========
    contactBackground: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8fHx8MTc4NDIyMTM3N3ww&ixlib=rb-4.1.0&q=85",
};

// =====================================================
// HELPER FUNCTIONS - Photos को automatically apply करने के लिए
// =====================================================

// Hero background set करने के लिए
function setHeroBackground() {
    const heroSection = document.querySelector('.hero, #hero, [class*="hero"]');
    if (heroSection) {
        heroSection.style.backgroundImage = `url('${portfolioImages.heroBackground}')`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
        heroSection.style.backgroundRepeat = 'no-repeat';
    }
}

// About section image set करने के लिए
function setAboutImage() {
    // About section में img tag के लिए
    const aboutImg = document.querySelector('.about img, #about img, [class*="about"] img');
    if (aboutImg) {
        aboutImg.src = portfolioImages.aboutImage;
        aboutImg.alt = 'Sahyom - Professional Portfolio';
    }

    // About section background के लिए
    const aboutSection = document.querySelector('.about, #about, [class*="about"]');
    if (aboutSection && aboutSection !== aboutImg?.parentElement) {
        aboutSection.style.backgroundImage = `url('${portfolioImages.aboutBackground}')`;
        aboutSection.style.backgroundSize = 'cover';
        aboutSection.style.backgroundPosition = 'center';
    }
}

// Services images set करने के लिए
function setServicesImages() {
    const serviceImages = document.querySelectorAll('.service img, [class*="service"] img, .feature img, [class*="feature"] img');
    const servicesArray = Object.values(portfolioImages.services);
    
    serviceImages.forEach((img, index) => {
        if (servicesArray[index]) {
            img.src = servicesArray[index];
            img.alt = `Service ${index + 1}`;
        }
    });
}

// Portfolio gallery images set करने के लिए
function setPortfolioImages() {
    const portfolioImages_elements = document.querySelectorAll('.portfolio img, #portfolio img, .gallery img, #gallery img, [class*="portfolio"] img, [class*="gallery"] img');
    
    portfolioImages_elements.forEach((img, index) => {
        if (portfolioImages.portfolio[index]) {
            img.src = portfolioImages.portfolio[index];
            img.alt = `Portfolio Item ${index + 1}`;
        }
    });
}

// Contact background set करने के लिए
function setContactBackground() {
    const contactSection = document.querySelector('.contact, #contact, [class*="contact"]');
    if (contactSection) {
        contactSection.style.backgroundImage = `url('${portfolioImages.contactBackground}')`;
        contactSection.style.backgroundSize = 'cover';
        contactSection.style.backgroundPosition = 'center';
    }
}

// =====================================================
// PAGE LOAD पर सभी images automatically set करें
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
    setHeroBackground();
    setAboutImage();
    setServicesImages();
    setPortfolioImages();
    setContactBackground();
    
    console.log('✅ All portfolio images loaded successfully!');
});

// =====================================================
// MANUAL CONTROL - अगर manually किसी image को set करना हो
// =====================================================

// किसी भी element को background image देने के लिए
function setBackgroundImage(elementSelector, imageUrl) {
    const element = document.querySelector(elementSelector);
    if (element) {
        element.style.backgroundImage = `url('${imageUrl}')`;
        element.style.backgroundSize = 'cover';
        element.style.backgroundPosition = 'center';
        element.style.backgroundRepeat = 'no-repeat';
    }
}

// किसी भी img tag को image देने के लिए
function setImageSrc(imgSelector, imageUrl) {
    const img = document.querySelector(imgSelector);
    if (img) {
        img.src = imageUrl;
    }
}

// Export करें ताकि दूसरी files में use कर सकें
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        portfolioImages,
        setHeroBackground,
        setAboutImage,
        setServicesImages,
        setPortfolioImages,
        setContactBackground,
        setBackgroundImage,
        setImageSrc
    };
  }
