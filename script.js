// 알파벳 네비게이션 생성
function generateAlphabetNav() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const navContainer = document.getElementById('letterNav');
    
    navContainer.innerHTML = alphabet.map(letter => {
        const hasTerms = dictionary.some(term => term.term.charAt(0).toUpperCase() === letter);
        const className = hasTerms ? 'letter-btn' : 'letter-btn disabled';
        const onclick = hasTerms ? `onclick="scrollToLetter('${letter}')"` : '';
        
        return `<span class="${className}" data-letter="${letter}" ${onclick}>${letter}</span>`;
    }).join('');
}

// 글자 섹션으로 스크롤
window.scrollToLetter = function(letter) {
    const section = document.getElementById(`letter-${letter}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // 활성 버튼 표시
        document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.letter-btn[data-letter="${letter}"]`).classList.add('active');
    }
}

// 사전 렌더링
function renderDictionary() {
    const container = document.getElementById('dictionaryContent');
    let currentLetter = '';
    let html = '';
    
    // 알파벳 순으로 정렬
    const sorted = [...dictionary].sort((a, b) => a.term.localeCompare(b.term));
    
    sorted.forEach(item => {
        const firstLetter = item.term.charAt(0).toUpperCase();
        
        // 새로운 글자 섹션 생성
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            html += `
                <div id="letter-${currentLetter}" class="letter-section mt-10">
                    <h2 class="text-3xl font-bold mb-4 text-blue-300 glow">${currentLetter}</h2>
                    <div class="h-1 w-20 bg-purple-700 rounded mb-6"></div>
                </div>
            `;
        }
        
        // 용어 카드 생성
        html += `
            <div class="term-card mb-6 p-4 rounded-lg shadow-lg">
                <div class="term-title pb-2 mb-3">
                    <div class="flex justify-between items-start">
                        <h3 class="text-xl font-bold">${item.term}</h3>
                        <span class="text-sm text-blue-400">${item.koreanTerm}</span>
                    </div>
                </div>
                <p class="text-gray-300 mb-3">${item.explanation}</p>
                <p class="text-sm text-blue-300 italic">${item.koreanExplanation}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 검색 기능
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const termCards = document.querySelectorAll('.term-card');
        const letterSections = document.querySelectorAll('.letter-section');
        
        if (!searchTerm) {
            // 검색어가 없으면 모든 것 표시
            letterSections.forEach(section => section.style.display = 'block');
            termCards.forEach(card => card.style.display = 'block');
            return;
        }
        
        // 모든 섹션 숨기기
        letterSections.forEach(section => section.style.display = 'none');
        
        // 검색어와 일치하는 카드만 표시
        termCards.forEach(card => {
            const term = card.querySelector('h3').textContent.toLowerCase();
            const koreanTerm = card.querySelector('span').textContent.toLowerCase();
            const explanation = card.querySelector('p').textContent.toLowerCase();
            const koreanExplanation = card.querySelector('p.italic').textContent.toLowerCase();
            
            if (term.includes(searchTerm) || koreanTerm.includes(searchTerm) || 
                explanation.includes(searchTerm) || koreanExplanation.includes(searchTerm)) {
                card.style.display = 'block';
                
                // 해당 섹션도 표시
                const firstLetter = card.querySelector('h3').textContent.charAt(0).toUpperCase();
                const section = document.getElementById(`letter-${firstLetter}`);
                if (section) section.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    renderDictionary();
    generateAlphabetNav();
    setupSearch();
});
