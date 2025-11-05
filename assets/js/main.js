function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
    // Automatically close the menu when a link is clicked
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#navLinks a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
      });
    });
});

function reopenConsentBanner() {
    const banner = document.getElementById('consent-banner-manual');
    
    // 1. 배너를 찾아서 'show' 클래스를 강제로 추가 (페이드인 효과)
    if (banner) {
        banner.classList.add('show');
    }
    
    // 2. <a> 태그의 기본 동작(맨 위로 스크롤)을 막습니다.
    return false;
}
    
function updateGAConsent(status) {
        const consentState = status === 'granted' ? 'granted' : 'denied';

        // 1. Update Google Analytics allow status (Submit a flag to GA once the user allow/deny)
        gtag('consent', 'update', {
            'ad_storage': consentState,
            'analytics_storage': consentState,
            'ad_personalization': consentState,
            'ad_user_data': consentState,
            'functionality_storage': consentState,
            'personalization_storage': consentState,
        });

        // 2. Save the allow/deny record on the browser (hide banner when revisit the site)
        localStorage.setItem('cookie_consent', consentState);
        
        // 3. Hide banner
        const banner = document.getElementById('consent-banner-manual');
        if (banner) {
            banner.classList.remove('show');
        }
        
        // 4. Delete the past Google Analytics cookies once the user deny
        if (status === 'denied') {
            document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        }
}

    // When the page loaded, check the past allow/deny status and show the banner
window.addEventListener('load', () => {
        const savedConsent = localStorage.getItem('cookie_consent');
        const banner = document.getElementById('consent-banner-manual');

        if (savedConsent) {
            // If the past record exists, update the status to GA
            updateGAConsent(savedConsent);
        } else {
            // If the past record does not exist, show the banner
            if (banner) {
                banner.classList.add('show'); 
            }
        }
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en', 
            includedLanguages: 'ko,zh-CN,zh-TW,ja,hi,es,ar,fr,ru,pt-PT,id', 
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE 
        }, 
        'google_translate_element' 
    );

    // 💡 초기화 직후, 번역 바 로딩을 확인하는 인터벌 시작
    observeTranslateBar();
}

function observeTranslateBar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // 처음엔 무조건 top=0으로 고정
    navbar.style.setProperty('top', '0px', 'important');

    const observer = new MutationObserver(() => {
        adjustLayoutForTranslateBar();
    });

    // <body> 스타일 변화를 감시 (Google Translate이 html/body에 top을 추가함)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
}

// isObserverCall: 옵저버에 의해 호출되었는지 확인하는 플래그 (기본값: false)
function adjustLayoutForTranslateBar() {
    const html = document.documentElement;
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // html에 top 스타일이 설정됐는지 확인
    const topStyle = html.style.top;
    let barHeight = 0;

    if (topStyle && topStyle.endsWith('px')) {
        barHeight = parseInt(topStyle, 10);
    }

    // 현재 값과 다를 때만 업데이트
    const targetTop = barHeight + 'px';
    if (navbar.style.top !== targetTop) {
        navbar.style.setProperty('top', targetTop, 'important');
    }
}