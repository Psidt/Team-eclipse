// AGI 백과사전 기능 스크립트 - 2025 버전

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 별 효과 생성
    createStars();
    
    // 사전 초기화
    renderDictionary();
    generateAlphabetNav();
    setupSearch();
});

// 별 반짝임 효과 생성
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.body.appendChild(starsContainer);
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        star.style.setProperty('--delay', `${Math.random() * 5}s`);
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        starsContainer.appendChild(star);
    }
}

// 알파벳 내비게이션 생성
function generateAlphabetNav() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const navContainer = document.getElementById('letterNav');
    let navHTML = '';

    alphabet.forEach(letter => {
        // 해당 문자로 시작하는 용어가 있는지 확인
        const termsWithLetter = dictionary.filter(item => 
            item.term.charAt(0).toUpperCase() === letter.toUpperCase());
        
        if (termsWithLetter.length > 0) {
             navHTML += `<span class="letter-btn" data-letter="${letter}" onclick="scrollToLetter('${letter}')">${letter}</span>`;
        } else {
             // 해당 문자로 시작하는 용어가 없으면 비활성화
             navHTML += `<span class="letter-btn opacity-30 cursor-not-allowed" data-letter="${letter}">${letter}</span>`;
        }
    });

    navContainer.innerHTML = navHTML;
}

// 특정 문자 섹션으로 스크롤
window.scrollToLetter = function(letter) {
    const section = document.getElementById(`letter-${letter}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // 활성 문자 하이라이트
        document.querySelectorAll('.letter-btn').forEach(btn =>
            btn.classList.remove('active'));
        document.querySelector(`.letter-btn[data-letter="${letter}"]`).classList.add('active');
    }
}

// 사전 컨텐츠 렌더링
function renderDictionary() {
    const container = document.getElementById('dictionaryContent');
    let currentLetter = '';
    let html = '';

    // 알파벳순 정렬
    const sortedDictionary = [...dictionary].sort((a, b) => 
        a.term.localeCompare(b.term));

    sortedDictionary.forEach((item, index) => {
        const firstLetter = item.term.charAt(0).toUpperCase();

        // 새 문자 섹션 생성
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            if (sortedDictionary.some(term => term.term.charAt(0).toUpperCase() === currentLetter)) {
                 html += `<div id="letter-${currentLetter}" class="letter-section mt-10">
                        <h2 class="text-3xl font-bold mb-4 text-blue-300 glow">${currentLetter}</h2>
                        <div class="h-1 w-20 bg-purple-700 rounded mb-6"></div>
                     </div>`;
            }
        }

        // 각 용어 카드 생성 (2025년형 디자인)
        html += `<div class="term-card mb-6 p-4 rounded-lg shadow-lg" 
                      style="animation-delay: ${index * 0.05}s">
                    <div class="term-title pb-2 mb-3">
                        <div class="flex justify-between items-start">
                            <h3 class="text-xl font-bold">${item.term}</h3>
                            <span class="text-sm text-blue-400 ml-2">${item.koreanTerm}</span>
                        </div>
                    </div>
                    <div class="term-content">
                        <div class="mb-3">
                            <p class="text-gray-300">${item.explanation}</p>
                        </div>
                        <div class="term-korean mt-3 pt-2 border-t border-gray-700">
                            <p class="text-sm text-blue-300">${item.koreanExplanation}</p>
                        </div>
                    </div>
                </div>`;
    });

    container.innerHTML = html;
    
    // 스크롤 애니메이션 초기화
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
}

// 검색 기능 설정
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const termCards = document.querySelectorAll('#dictionaryContent .term-card');
        const letterSections = document.querySelectorAll('#dictionaryContent .letter-section');
        let matchFound = false;

        // 검색어가 비어있으면 모두 표시
        if (searchTerm === '') {
            letterSections.forEach(section => {
                section.style.display = 'block';
            });
            termCards.forEach(card => {
                card.style.display = 'block';
            });
            
            // "일치하는 용어 없음" 메시지 제거
            const noMatchMsg = document.getElementById('no-match-message');
            if (noMatchMsg) noMatchMsg.remove();
            return;
        }

        // 모든 문자 섹션 숨기기
        letterSections.forEach(section => {
            section.style.display = 'none';
        });

        // 일치하는 용어만 표시
        termCards.forEach(card => {
            const englishText = card.querySelector('h3').textContent.toLowerCase();
            const koreanTitle = card.querySelector('span.text-blue-400').textContent.toLowerCase();
            const englishExplanation = card.querySelector('.term-content p:first-child').textContent.toLowerCase();
            const koreanExplanation = card.querySelector('.term-korean p').textContent.toLowerCase();
            
            // 영문 용어, 한글 용어, 설명에서 검색
            if (englishText.includes(searchTerm) || 
                koreanTitle.includes(searchTerm) || 
                englishExplanation.includes(searchTerm) || 
                koreanExplanation.includes(searchTerm)) {
                card.style.display = 'block';
                
                // 해당 문자 섹션 표시
                const firstLetter = card.querySelector('h3').textContent.charAt(0).toUpperCase();
                const letterSection = document.getElementById(`letter-${firstLetter}`);
                if (letterSection) letterSection.style.display = 'block';
                matchFound = true;
            } else {
                card.style.display = 'none';
            }
        });

        // 일치하는 용어가 없을 때 메시지 표시
        const existingNoMatchMsg = document.getElementById('no-match-message');
        if (!matchFound) {
            if (!existingNoMatchMsg) {
                document.getElementById('dictionaryContent').innerHTML += 
                    '<p id="no-match-message" class="text-center text-gray-400 py-10">일치하는 용어가 없습니다.</p>';
            }
        } else {
            if (existingNoMatchMsg) existingNoMatchMsg.remove();
        }
    });
}

// 스크롤 시 요소 가시성 체크 (애니메이션 효과용)
function checkVisibility() {
    const cards = document.querySelectorAll('.term-card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 50) {
            card.style.opacity = '1';
        }
    });
}

// 용어 검색 직접 실행 함수
window.searchTerm = function(term) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = term;
    searchInput.dispatchEvent(new Event('input'));
    
    // 검색창으로 스크롤
    searchInput.scrollIntoView({ behavior: 'smooth' });
    searchInput.focus();
}
