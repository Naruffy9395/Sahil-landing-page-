// =====================================================
// SAHYOM PORTFOLIO - SMART IMAGE REPLACER
// =====================================================
// यह code automatically सही images लगा देगा
// बिना text या animations को disturb किए
// =====================================================

// High-quality professional images
const portfolioImages = {
    // About section image
    aboutImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
                "https://www.magnific.com/free-psd/build-company-landing-page-template_15184904.htm#fromView=keyword&page=1&position=22&uuid=791563f2-0997-45a9-92d9-97b946ccdbe3&query=Portfolio+landing+page
    // Project images (क्रम में)
    projects: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",  // Telegram Bot
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80",  // Shopify Stores
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80",  // WhatsApp AI
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80"   // Coding eBook
    ]
};

// Page load होने पर images replace करें
window.addEventListener('DOMContentLoaded', function() {
    
    // About section की image change करें
    const aboutImg = document.querySelector('.about-img img');
    if (aboutImg) {
        aboutImg.src = portfolioImages.aboutImage;
        console.log('✅ About image updated');
    }
    
    // सभी project card images change करें
    const projectImages = document.querySelectorAll('.project-img img');
    projectImages.forEach((img, index) => {
        if (portfolioImages.projects[index]) {
            img.src = portfolioImages.projects[index];
            console.log(`✅ Project ${index + 1} image updated`);
        }
    });
    
    console.log('🎉 All images loaded successfully!');
});

// =====================================================
// MANUAL IMAGE CHANGE - अगर कोई image बदलनी हो
// =====================================================

// किसी भी project की image बदलने के लिए:
// portfolioImages.projects[0] = "your-new-image-url.jpg"  // First project
// portfolioImages.projects[1] = "your-new-image-url.jpg"  // Second project
// etc.

// About image बदलने के लिए:
// portfolioImages.aboutImage = "your-new-image-url.jpg"

// फिर page refresh करें (Ctrl+F5)
