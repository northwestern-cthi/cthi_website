// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link (except dropdown parent links on mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const parent = link.closest('.nav-dropdown');
            
            // On mobile, if it's a dropdown parent, toggle dropdown instead
            if (window.innerWidth <= 768 && parent) {
                e.preventDefault();
                parent.classList.toggle('dropdown-open');
            } else if (!parent) {
                // Only close menu if it's not a dropdown parent
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking dropdown items on mobile
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.classList.remove('dropdown-open');
            });
        });
    });
}



// Active navigation link based on current page
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentLocation) {
        link.style.color = 'var(--primary-color)';
        link.style.fontWeight = '600';
    }
});

// Form submission handler (placeholder)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}





// Language Toggle Functionality
const langEnglish = document.getElementById('langEnglish');
const langChinese = document.getElementById('langChinese');

// Language state management
let currentLang = localStorage.getItem('language') || 'en';

// Language content mapping
const languageContent = {
    en: {
        nav: {
            home: 'Home',
            team: 'Meet the Team',
            healthCards: 'Health Education Cards',
            contact: 'Contact'
        },
        toggle: '中文',
        content: {
            heroTitle: 'CHINATOWN HEALTH INITIATIVE',
            heroSubtitle: 'Northwestern University',
            aboutTitle: 'ABOUT',
            whatWeDoTitle: 'WHAT WE DO',
            resourcesTitle: 'Our Resources',
            contactTitle: 'CONTACT CHINATOWN HEALTH INITIATIVE',
            aboutText: "We're a passionate group of Northwestern students who believe that healthcare should be accessible to everyone in our community. Since 2019, we've been working directly with Chinatown residents to break down language barriers and connect families with the health resources they need most.",
            meetTeamBtn: 'Meet Our Team',
            heroMeetTeamBtn: 'Meet Our Team',
            heroOurResourcesBtn: 'Our Resources',
            volunteerTitle: 'VOLUNTEER',
            volunteerText: "Every month, you'll find us at the Chinatown Community Center helping elderly residents fill out insurance forms, or at health fairs translating between doctors and patients. Last year alone, our volunteers logged over 800 hours helping bridge the gap between healthcare providers and our community.",
            infoDeskTitle: 'HEALTH INFORMATION DESK',
            infoDeskText: "Stop by the Chinatown Public Library any Tuesday or Thursday afternoon, and you'll find our health information desk staffed by bilingual volunteers. We've helped over 200 families navigate everything from Medicare enrollment to finding a Mandarin-speaking dentist in the area.",
            publicEventsTitle: 'PUBLIC EVENTS',
            publicEventsText: 'From hosting "Health & Heritage" panels featuring local community leaders to organizing mental health awareness workshops, we create spaces where Northwestern students can learn about health disparities and cultural competency in healthcare.',
            socialsTitle: 'SOCIALS/FOOD BONDING',
            socialsText: 'Food brings us together! Whether we\'re selling homemade baozi in the Norris Center to fund our programs, or taking our monthly "Chinatown Food Crawl" to discover the best dim sum spots, we believe that sharing meals builds the strongest communities.',
            viewResourcesBtn: 'View Health Education Cards',
            contactText: 'Want to volunteer with us or have a question about health resources in Chinatown? We\'d love to hear from you! Whether you\'re a Northwestern student looking to get involved or a community member who needs help, don\'t hesitate to reach out.',
            followUsText: 'Follow us on Instagram',
            teamTitle: 'Meet the Team',
            teamSubtitle: 'Meet the passionate students making healthcare accessible in our community',
            teamDescription: "We're a diverse group of 25+ Northwestern students from different majors, backgrounds, and career paths, all united by our shared commitment to health equity. From pre-med students to computer science majors, we each bring unique skills to help our community thrive.",
            teamFunFact: '💡 Fun fact: Our team speaks over 8 different languages including Mandarin, Cantonese, Vietnamese, Korean, and Spanish - helping us serve families from diverse backgrounds throughout Chicago!',
            joinTeamTitle: 'Join Our Team',
            joinTeamText: "Think you might want to join us? We're always looking for Northwestern students who care about health equity and want to make a real difference in our community. No prior experience needed - just bring your passion and willingness to learn! We meet every Tuesday at 7 PM in Norris.",
            contactTitle: 'Contact Us',
            contactSubtitle: "We'd love to hear from you!",
            contactDescription: 'Got questions about health resources in Chinatown? Want to volunteer with us? Or maybe you\'re a Northwestern student looking to get involved? We\'re here to help! Drop us a line and we\'ll get back to you within 24 hours.',
            healthCardsTitle: 'All Health Education Cards',
            healthCardsSubtitle: 'Comprehensive health information resources for the community',
            healthCardsDescription: "We've created these health education materials based on the most common questions we hear from families at our health information desk. Each card is written in simple language, translated by native speakers, and reviewed by healthcare professionals to ensure accuracy.",
            healthCardsNote: 'All resources are available in both English and Chinese. Use the language toggle button to switch languages.',
            needHelpTitle: 'Need Help Finding Resources?',
            needHelpText: 'Visit our health information desk at the Chinatown Public Library or contact us for assistance.',
            contactUsBtn: 'Contact Us',
            cancer: 'Cancer Information Cards',
            heart: 'Heart Health Cards',
            preventative: 'Preventative Care Cards',
            respiratory: 'Respiratory Health Cards',
            sexual: 'Sexual Health Cards'
        }
    },
    zh: {
        nav: {
            home: '首頁',
            team: '認識團隊',
            healthCards: '健康教育卡片',
            contact: '聯絡我們'
        },
        toggle: 'English',
        content: {
            heroTitle: '唐人街健康倡議',
            heroSubtitle: '西北大學',
            aboutTitle: '關於我們',
            whatWeDoTitle: '我們的工作',
            resourcesTitle: '我們的資源',
            contactTitle: '聯絡唐人街健康倡議',
            aboutText: '我們是一群充滿熱情的西北大學學生，相信醫療保健應該對我們社區中的每個人都開放。自2019年以來，我們一直與唐人街居民直接合作，打破語言障礙，將家庭與他們最需要的健康資源聯繫起來。',
            meetTeamBtn: '認識我們的團隊',
            heroMeetTeamBtn: '認識我們的團隊',
            heroOurResourcesBtn: '我們的資源',
            volunteerTitle: '志願服務',
            volunteerText: '每個月，您都會在唐人街社區中心看到我們幫助老年居民填寫保險表格，或在健康博覽會上在醫生和患者之間進行翻譯。僅去年一年，我們的志願者就記錄了超過800小時的時間，幫助縮小醫療保健提供者與我們社區之間的差距。',
            infoDeskTitle: '健康資訊台',
            infoDeskText: '每週二或週四下午，您都可以在唐人街公共圖書館找到我們的健康資訊台，由雙語志願者提供服務。我們已經幫助了200多個家庭處理從Medicare註冊到在該地區尋找會說中文的牙醫等各種事務。',
            publicEventsTitle: '公開活動',
            publicEventsText: '從舉辦以當地社區領袖為特色的「健康與傳統」小組討論會，到組織心理健康意識研討會，我們為西北大學學生創造空間，讓他們了解健康差異和醫療保健中的文化能力。',
            socialsTitle: '社交/美食聚會',
            socialsText: '美食把我們聚集在一起！無論我們是在諾里斯中心出售自製包子來為我們的項目籌集資金，還是進行每月一次的「唐人街美食之旅」來發現最好的點心店，我們都相信分享美食能建立最牢固的社區。',
            viewResourcesBtn: '查看健康教育卡片',
            contactText: '想與我們一起做志願者，或對唐人街的健康資源有疑問嗎？我們很想聽到您的消息！無論您是正在尋找參與機會的西北大學學生，還是需要幫助的社區成員，請隨時聯繫我們。',
            followUsText: '在Instagram上關注我們',
            teamTitle: '認識團隊',
            teamSubtitle: '認識讓醫療保健在我們社區中變得可及的熱情學生',
            teamDescription: '我們是一群來自不同專業、背景和職業道路的25多名西北大學學生，都因對健康公平的共同承諾而團結在一起。從預科生到計算機科學專業學生，我們每個人都帶來獨特的技能來幫助我們的社區繁榮發展。',
            teamFunFact: '💡 有趣的事實：我們的團隊會說超過8種不同的語言，包括普通話、粵語、越南語、韓語和西班牙語 - 幫助我們為芝加哥各地不同背景的家庭提供服務！',
            joinTeamTitle: '加入我們的團隊',
            joinTeamText: '想加入我們嗎？我們一直在尋找關心健康公平並想在我們社區中產生真正影響的西北大學學生。不需要經驗 - 只需要您的熱情和學習意願！我們每週二晚上7點在諾里斯見面。',
            contactTitle: '聯繫我們',
            contactSubtitle: '我們很想聽到您的消息！',
            contactDescription: '對唐人街的健康資源有疑問嗎？想與我們一起做志願者嗎？或者您可能是正在尋找參與機會的西北大學學生？我們在這裡提供幫助！給我們留言，我們會在24小時內回覆您。',
            healthCardsTitle: '所有健康教育卡片',
            healthCardsSubtitle: '為社區提供全面的健康信息資源',
            healthCardsDescription: '我們根據在健康資訊台聽到的家庭最常見問題創建了這些健康教育材料。每張卡片都用簡單的語言編寫，由母語人士翻譯，並由醫療保健專業人士審查以確保準確性。',
            healthCardsNote: '所有資源都有英文和中文版本。使用語言切換按鈕來切換語言。',
            needHelpTitle: '需要幫助尋找資源嗎？',
            needHelpText: '請訪問唐人街公共圖書館的健康資訊台或聯繫我們尋求幫助。',
            contactUsBtn: '聯繫我們',
            cancer: '癌症資料卡',
            heart: '心臟健康卡',
            preventative: '預防保健卡',
            respiratory: '呼吸系統健康卡',
            sexual: '性健康卡'
        }
    }
};

// Initialize language on page load
function initializeLanguage() {
    updateLanguageContent(currentLang);
    updateToggleButtons(currentLang);
}

// Update page content based on language
function updateLanguageContent(lang) {
    const content = languageContent[lang];
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '/') {
            link.textContent = content.nav.home;
        } else if (href === '/team') {
            link.textContent = content.nav.team;
        } else if (href === '/health-cards') {
            link.textContent = content.nav.healthCards;
        } else if (href === '/contact') {
            link.textContent = content.nav.contact;
        }
    });
    
    // Update page content based on current page
    updatePageContent(lang);
    
    // Update button states
    updateToggleButtons(lang);
}

// Update page-specific content
function updatePageContent(lang) {
    const currentPage = window.location.pathname;
    
    // Update page titles and content based on current page
    if (currentPage === '/') {
        updateHomePage(lang);
    } else if (currentPage === '/team') {
        updateTeamPage(lang);
    } else if (currentPage.startsWith('/health-cards') || currentPage.startsWith('/resources-zh')) {
        updateHealthCardsPage(lang);
    } else if (currentPage === '/contact') {
        updateContactPage(lang);
    }
}

// Update home page content
function updateHomePage(lang) {
    const content = languageContent[lang].content;
    
    // Update main titles
    const titleElements = {
        '.hero-title': content.heroTitle,
        '.hero-subtitle': content.heroSubtitle,
        '.about-title': content.aboutTitle,
        '.what-we-do-title': content.whatWeDoTitle,
        '.resources-title': content.resourcesTitle,
        '.contact-title': content.contactTitle
    };
    
    Object.entries(titleElements).forEach(([selector, text]) => {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    });
    
    // Update about section
    const aboutText = document.querySelector('.about-intro p');
    if (aboutText) {
        aboutText.textContent = content.aboutText;
    }
    
    // Update buttons
    const meetTeamBtn = document.querySelector('.about-intro .btn');
    if (meetTeamBtn) {
        meetTeamBtn.textContent = content.meetTeamBtn;
    }
    
    const viewResourcesBtn = document.querySelector('.resources-cta .btn');
    if (viewResourcesBtn) {
        viewResourcesBtn.textContent = content.viewResourcesBtn;
    }
    
    // Update hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons.length >= 2) {
        heroButtons[0].textContent = content.heroMeetTeamBtn;
        heroButtons[1].textContent = content.heroOurResourcesBtn;
    }
    
    // Update activity cards
    const activityCards = document.querySelectorAll('.activity-card h3');
    if (activityCards.length >= 4) {
        activityCards[0].textContent = content.volunteerTitle;
        activityCards[1].textContent = content.infoDeskTitle;
        activityCards[2].textContent = content.publicEventsTitle;
        activityCards[3].textContent = content.socialsTitle;
    }
    
    const activityTexts = document.querySelectorAll('.activity-card p');
    if (activityTexts.length >= 4) {
        activityTexts[0].textContent = content.volunteerText;
        activityTexts[1].textContent = content.infoDeskText;
        activityTexts[2].textContent = content.publicEventsText;
        activityTexts[3].textContent = content.socialsText;
    }
    
    // Update contact section
    const contactText = document.querySelector('.cta-content p');
    if (contactText) {
        contactText.textContent = content.contactText;
    }
    
    const followUsText = document.querySelector('.social-link');
    if (followUsText) {
        followUsText.innerHTML = `<span>📷</span> ${content.followUsText}`;
    }
}

// Update team page content
function updateTeamPage(lang) {
    const content = languageContent[lang].content;
    
    // Update page header
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader) {
        pageHeader.textContent = content.teamTitle;
    }
    
    const pageSubtitle = document.querySelector('.page-header p');
    if (pageSubtitle) {
        pageSubtitle.textContent = content.teamSubtitle;
    }
    
    // Update team description
    const teamDesc = document.querySelector('.content-section p');
    if (teamDesc) {
        teamDesc.textContent = content.teamDescription;
    }
    
    // Update team note
    const teamNote = document.querySelector('.team-note p');
    if (teamNote) {
        teamNote.textContent = content.teamFunFact;
    }
    
    // Update join team section
    const joinTeamTitle = document.querySelector('.join-team h2');
    if (joinTeamTitle) {
        joinTeamTitle.textContent = content.joinTeamTitle;
    }
    
    const joinTeamText = document.querySelector('.join-team p');
    if (joinTeamText) {
        joinTeamText.textContent = content.joinTeamText;
    }
}

// Update health cards page content
function updateHealthCardsPage(lang) {
    const content = languageContent[lang].content;
    
    // Update page header
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader) {
        pageHeader.textContent = content.healthCardsTitle;
    }
    
    const pageSubtitle = document.querySelector('.page-header p');
    if (pageSubtitle) {
        pageSubtitle.textContent = content.healthCardsSubtitle;
    }
    
    // Update intro text
    const introText = document.querySelector('.intro-text p');
    if (introText) {
        introText.textContent = content.healthCardsDescription;
    }
    
    const introNote = document.querySelector('.intro-text p:nth-child(2)');
    if (introNote) {
        introNote.textContent = content.healthCardsNote;
    }
    
    // Update CTA section
    const ctaTitle = document.querySelector('.cta-content h2');
    if (ctaTitle) {
        ctaTitle.textContent = content.needHelpTitle;
    }
    
    const ctaText = document.querySelector('.cta-content p');
    if (ctaText) {
        ctaText.textContent = content.needHelpText;
    }
    
    const ctaBtn = document.querySelector('.cta-content .btn');
    if (ctaBtn) {
        ctaBtn.textContent = content.contactUsBtn;
    }
    
    // Update category card titles
    const categoryCards = document.querySelectorAll('.category-card h3');
    categoryCards.forEach((card, index) => {
        const categories = ['cancer', 'heart', 'preventative', 'respiratory', 'sexual'];
        if (categories[index] && content[categories[index]]) {
            card.textContent = content[categories[index]];
        }
    });
}

// Update contact page content
function updateContactPage(lang) {
    const content = languageContent[lang].content;
    
    // Update page header
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader) {
        pageHeader.textContent = content.contactTitle;
    }
    
    const pageSubtitle = document.querySelector('.page-header p');
    if (pageSubtitle) {
        pageSubtitle.textContent = content.contactSubtitle;
    }
    
    // Update contact info section title
    const contactInfoTitle = document.querySelector('.contact-info h2');
    if (contactInfoTitle) {
        contactInfoTitle.textContent = content.contactTitle;
    }
    
    // Update contact description
    const contactDesc = document.querySelector('.contact-info p');
    if (contactDesc) {
        contactDesc.textContent = content.contactDescription;
    }
    
    // Update contact item titles
    const emailTitle = document.querySelector('.contact-item h4');
    if (emailTitle && emailTitle.textContent === 'Email') {
        emailTitle.textContent = lang === 'zh' ? '電子郵件' : 'Email';
    }
    
    const whereTitle = document.querySelector('.contact-item:nth-child(2) h4');
    if (whereTitle) {
        whereTitle.textContent = lang === 'zh' ? '在哪裡找到我們' : 'Where to Find Us';
    }
    
    const socialTitle = document.querySelector('.contact-item:last-child h4');
    if (socialTitle) {
        socialTitle.textContent = lang === 'zh' ? '社交媒體' : 'Social Media';
    }
    
    // Update form title and labels
    const formTitle = document.querySelector('.contact-form h3');
    if (formTitle) {
        formTitle.textContent = lang === 'zh' ? '給我們留言' : 'Drop Us a Line';
    }
    
    const labels = document.querySelectorAll('.contact-form label');
    if (labels.length >= 4) {
        labels[0].textContent = lang === 'zh' ? '姓名' : 'Name';
        labels[1].textContent = lang === 'zh' ? '電子郵件' : 'Email';
        labels[2].textContent = lang === 'zh' ? '主題' : 'Subject';
        labels[3].textContent = lang === 'zh' ? '訊息' : 'Message';
    }
    
    const submitBtn = document.querySelector('.contact-form .btn');
    if (submitBtn) {
        submitBtn.textContent = lang === 'zh' ? '發送訊息' : 'Send Message';
    }
}

// Update toggle button states
function updateToggleButtons(lang) {
    if (langEnglish && langChinese) {
        // Remove active class from both buttons
        langEnglish.classList.remove('active');
        langChinese.classList.remove('active');
        
        // Add active class to the current language button
        if (lang === 'en') {
            langEnglish.classList.add('active');
        } else {
            langChinese.classList.add('active');
        }
    }
}

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', currentLang);
    
    // Update content immediately
    updateLanguageContent(currentLang);
    
    // Set language via Flask route for persistence
    fetch(`/set-language/${currentLang}`)
        .catch(error => {
            console.error('Error setting language:', error);
        });
    
    // Redirect to appropriate language version only for health cards pages
    const currentPath = window.location.pathname;
    if (currentLang === 'zh') {
        // Redirect to Chinese version if it exists
        if (currentPath === '/health-cards') {
            window.location.href = '/resources-zh';
        } else if (currentPath.startsWith('/health-cards/')) {
            const category = currentPath.split('/')[2];
            window.location.href = `/resources-zh/${category}`;
        }
    } else {
        // Redirect to English version
        if (currentPath === '/resources-zh') {
            window.location.href = '/health-cards';
        } else if (currentPath.startsWith('/resources-zh/')) {
            const category = currentPath.split('/')[2];
            window.location.href = `/health-cards/${category}`;
        }
    }
}

// Initialize language toggle buttons
if (langEnglish) {
    langEnglish.addEventListener('click', () => setLanguage('en'));
}

if (langChinese) {
    langChinese.addEventListener('click', () => setLanguage('zh'));
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', initializeLanguage);

