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
    setInterval(adjustLayoutForTranslateBar, 500);
}


// isObserverCall: 옵저버에 의해 호출되었는지 확인하는 플래그 (기본값: false)
function adjustLayoutForTranslateBar() {
    const bodyElement = document.body; 
    const navbar = document.querySelector('.navbar');
    let barHeight = 0;
    let googleTopStyle = bodyElement.style.top;
    // 1. Google 위젯이 <html> 태그에 'style.top'을 설정했는지 확인합니다.
    if (googleTopStyle && googleTopStyle.endsWith('px')) {
        // "40px" 같은 문자열에서 숫자 40을 추출합니다.
        barHeight = parseInt(googleTopStyle, 10);
    }
    
    const barHeightPx = barHeight + 'px';
    
    // ⚠️ 참고: 이 코드는 body.style.marginTop을 건드리지 않습니다.
    // Google 위젯이 html.style.top을 설정하여 이미 본문 전체를 밀어내고 있습니다.
    // 우리는 고정된(fixed) 네비게이션 바만 조정하면 됩니다.

    // 2. 상태 적용 (Navbar와 NavToggle의 top 값을 <html>의 top 값과 일치시킴)
    
    // Navbar의 top이 barHeightPx와 다를 때만 업데이트 (성능 최적화)
    if (navbar) {
        navbar.style.setProperty('top', barHeightPx, 'important');
    }
}