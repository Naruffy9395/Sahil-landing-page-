// =====================================================
// SAHYOM AI PORTFOLIO - COMPLETE IMAGE & VIDEO CONFIG
// =====================================================
// ✅ Index.html में कोई change नहीं करना
// ✅ बस यह file update करो और सब automatically हो जाएगा
// ✅ Hero में video + सभी sections में photos
// =====================================================

// ========================================
// 🎥 HERO SECTION - VIDEO BACKGROUND
// ========================================
// यह video HERO BANNER के background में लगेगा
const heroVideo = {
    url: "https://cdn.pixabay.com/video/2022/10/27/136878-765749835_large.mp4",
    // Video बदलने के लिए ऊपर URL change करो
};

// ========================================
// 📸 ALL IMAGES CONFIGURATION
// ========================================

const portfolioImages = {
    
    // ========================================
    // 📍 ABOUT SECTION - Developer Workspace Photo
    // ========================================
    // यह photo "About Me" section में दिखेगी
    aboutImage: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1000&q=80",
    
    // ========================================
    // 📍 PROJECT IMAGES - सभी 4 Projects की Photos
    // ========================================
    // Order में हैं - first से fourth तक
    
    projects: {
        // PROJECT 1: TELEGRAM BOT
        // यह photo पहले project card में लगेगी (Telegram Bot)
        project1_TelegramBot: "https://images.unsplash.com/photo-1636743094110-5e153f93ad7e?auto=format&fit=crop&w=900&q=80",
        
        // PROJECT 2: SHOPIFY STORES
        // यह photo दूसरे project card में लगेगी (Shopify E-commerce)
        project2_ShopifyStores: "https://images.unsplash.com/photo-1580440282860-8555b1ae102c?auto=format&fit=crop&w=900&q=80",
        
        // PROJECT 3: WHATSAPP AI
        // यह photo तीसरे project card में लगेगी (WhatsApp AI Assistant)
        project3_WhatsAppAI: "https://images.unsplash.com/photo-1523365237953-9f36b3c8cada?auto=format&fit=crop&w=900&q=80",
        
        // PROJECT 4: CODING EBOOK
        // यह photo चौथे project card में लगेगी (Coding eBook)
        project4_CodingEbook: "https://images.unsplash.com/photo-1598016376552-749d93370198?auto=format&fit=crop&w=900&q=80"
    }
};

// =====================================================
// 🎬 AUTOMATIC SETUP - PAGE LOAD पर सब SET हो जाता है
// =====================================================

window.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sahyom AI Portfolio - Loading images & video...');
    
    // ========================================
    // STEP 1: HERO VIDEO BACKGROUND ADD करो
    // ========================================
    setupHeroVideo();
    
    // ========================================
    // STEP 2: ABOUT SECTION IMAGE SET करो
    // ========================================
    setupAboutImage();
    
    // ========================================
    // STEP 3: PROJECT IMAGES SET करो
    // ========================================
    setupProjectImages();
    
    console.log('✅ All images and video loaded successfully!');
});

// =====================================================
// 🎥 HERO VIDEO SETUP FUNCTION
// =====================================================
function setupHeroVideo() {
    console.log('📹 Setting up hero video background...');
    
    // Hero section ढूंढो
    const heroSection = document.querySelector('.hero, header.hero, #hero');
    
    if (!heroSection) {
        console.log('❌ Hero section not found');
        return;
    }
    
    // Check करो कि video already है या नहीं
    let videoElement = heroSection.querySelector('#hero-video, video');
    
    if (!videoElement) {
        // Video नहीं है तो create करो
        videoElement = document.createElement('video');
        videoElement.id = 'hero-video';
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.playsInline = true;
        
        // Video styling
        videoElement.style.position = 'absolute';
        videoElement.style.top = '50%';
        videoElement.style.left = '50%';
        videoElement.style.minWidth = '100%';
        videoElement.style.minHeight = '100%';
        videoElement.style.width = 'auto';
        videoElement.style.height = 'auto';
        videoElement.style.transform = 'translate(-50%, -50%)';
        videoElement.style.zIndex = '0';
        videoElement.style.opacity = '0.15';
        videoElement.style.filter = 'blur(2px)';
        videoElement.style.objectFit = 'cover';
        
        // Source element create करो
        const sourceElement = document.createElement('source');
        sourceElement.src = heroVideo.url;
        sourceElement.type = 'video/mp4';
        
        videoElement.appendChild(sourceElement);
        
        // Hero section में सबसे पहले video add करो
        heroSection.insertBefore(videoElement, heroSection.firstChild);
        
        console.log('✅ Hero video added successfully!');
    } else {
        // Video already है तो बस source update करो
        const source = videoElement.querySelector('source');
        if (source) {
            source.src = heroVideo.url;
            videoElement.load();
        }
        console.log('✅ Hero video updated!');
    }
    
    // Hero section को relative position दो (agar nahi hai toh)
    const heroPosition = window.getComputedStyle(heroSection).position;
    if (heroPosition === 'static') {
        heroSection.style.position = 'relative';
    }
    
    // Dark overlay add करो agar nahi hai
    let overlay = heroSection.querySelector('.hero-video-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'hero-video-overlay';
        overlay.style.position = 'absolute';
        overlay.style.inset = '0';
        overlay.style.background = 'linear-gradient(180deg, rgba(11,13,18,0.6) 0%, rgba(11,13,18,0.85) 100%)';
        overlay.style.zIndex = '1';
        overlay.style.pointerEvents = 'none';
        
        // Video के बाद overlay add करो
        if (videoElement.nextSibling) {
            heroSection.insertBefore(overlay, videoElement.nextSibling);
        } else {
            heroSection.appendChild(overlay);
        }
    }
    
    // Hero content को z-index दो
    const heroContent = heroSection.querySelector('.hero-content, .wrap');
    if (heroContent) {
        heroContent.style.position = 'relative';
        heroContent.style.zIndex = '2';
    }
}

// =====================================================
// 📸 ABOUT SECTION IMAGE SETUP
// =====================================================
function setupAboutImage() {
    console.log('📸 Setting up About section image...');
    
    // About section का img tag ढूंढो
    const aboutImg = document.querySelector('.about-img img, .about img, #about img');
    
    if (aboutImg) {
        aboutImg.src = portfolioImages.aboutImage;
        aboutImg.alt = 'Sahil - Developer Workspace';
        console.log('✅ About image set: Developer workspace photo');
    } else {
        console.log('⚠️ About section image tag not found');
    }
}

// =====================================================
// 📸 PROJECT IMAGES SETUP
// =====================================================
function setupProjectImages() {
    console.log('📸 Setting up Project images...');
    
    // सभी project cards के images ढूंढो
    const projectImages = document.querySelectorAll('.project-img img, .project-card img');
    
    if (projectImages.length === 0) {
        console.log('⚠️ No project images found');
        return;
    }
    
    // Projects की images array में convert करो
    const projectImagesArray = [
        portfolioImages.projects.project1_TelegramBot,
        portfolioImages.projects.project2_ShopifyStores,
        portfolioImages.projects.project3_WhatsAppAI,
        portfolioImages.projects.project4_CodingEbook
    ];
    
    // हर project image को set करो
    projectImages.forEach((img, index) => {
        if (projectImagesArray[index]) {
            img.src = projectImagesArray[index];
            
            // Alt text set करो
            const altTexts = [
                'Telegram Bot Automation Project',
                'Shopify E-commerce Storefront',
                'WhatsApp AI Assistant',
                'Coding eBook for Beginners'
            ];
            img.alt = altTexts[index] || `Project ${index + 1}`;
            
            console.log(`✅ Project ${index + 1} image set`);
        }
    });
    
    console.log(`✅ Total ${projectImages.length} project images updated`);
}

// =====================================================
// 🔄 MANUAL REFRESH FUNCTION
// =====================================================
// अगर बीच में images change करनी हों और page reload नहीं करना
function refreshAllImages() {
    setupHeroVideo();
    setupAboutImage();
    setupProjectImages();
    console.log('🔄 All images refreshed!');
}

// Console में यह function available रहेगा
window.refreshPortfolioImages = refreshAllImages;

// =====================================================
// 📝 USAGE GUIDE / कैसे USE करें
// =====================================================
/*

✅ HERO VIDEO बदलने के लिए:
   Line 13 पर जाओ और heroVideo.url change करो

✅ ABOUT IMAGE बदलने के लिए:
   Line 26 पर जाओ और aboutImage URL change करो

✅ PROJECT IMAGES बदलने के लिए:
   - Project 1 (Telegram Bot): Line 35
   - Project 2 (Shopify): Line 39
   - Project 3 (WhatsApp): Line 43
   - Project 4 (eBook): Line 47

✅ Changes के बाद:
   - File save करो
   - Commit करो
   - 2-3 minutes wait करो
   - Page refresh करो (Ctrl + F5)

✅ Console में check करने के लिए:
   - F12 दबाओ
   - Console tab खोलो
   - Green ✅ messages देखो

*/

console.log('📦 images-config.js loaded successfully');
console.log('💡 Tip: Press F12 and check console for status messages');
