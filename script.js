document.addEventListener('DOMContentLoaded', function() {
    // 알파벳 내비게이션 생성
    generateAlphabetNav();
    
    // 용어 사전 렌더링
    renderDictionary();
    
    // 검색 기능 설정
    setupSearch();
});

// 알파벳 내비게이션 생성
function generateAlphabetNav() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const navContainer = document.getElementById('letterNav');
    let navHTML = '';
    
    alphabet.forEach(letter => {
        const hasTerms = dictionary.some(term => term.term.charAt(0).toUpperCase() === letter);
        if (hasTerms) {
            navHTML += `<div class="letter-btn" onclick="scrollToLetter('${letter}')">${letter}</div>`;
        } else {
            navHTML += `<div class="letter-btn" style="opacity:0.3">${letter}</div>`;
        }
    });
    
    navContainer.innerHTML = navHTML;
}

// 특정 문자 섹션으로 스크롤
function scrollToLetter(letter) {
    const section = document.getElementById(`letter-${letter}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 사전 렌더링
function renderDictionary() {
    const container = document.getElementById('dictionaryContent');
    let currentLetter = '';
    let html = '';

    // 알파벳순 정렬
    const sortedDictionary = [...dictionary].sort((a, b) => 
        a.term.localeCompare(b.term));

    sortedDictionary.forEach(item => {
        const firstLetter = item.term.charAt(0).toUpperCase();

        // 새 문자 섹션 생성
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            html += `<div id="letter-${currentLetter}" class="letter-section">
                     <h2>${currentLetter}</h2>
                   </div>`;
        }

        // 용어 카드 생성
        html += `<div class="term-card">
                   <div class="term-title">
                     <h3>${item.term}</h3>
                     <span>${item.koreanTerm}</span>
                   </div>
                   <p>${item.explanation}</p>
                   <p>${item.koreanExplanation}</p>
                 </div>`;
    });

    container.innerHTML = html;
}

// 검색 기능
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const termCards = document.getElementsByClassName('term-card');
        const letterSections = document.getElementsByClassName('letter-section');
        
        // 검색어가 비어있으면 모두 표시
        if (searchTerm === '') {
            for (let section of letterSections) {
                section.style.display = 'block';
            }
            for (let card of termCards) {
                card.style.display = 'block';
            }
            return;
        }
        
        // 모든 문자 섹션 숨기기
        for (let section of letterSections) {
            section.style.display = 'none';
        }
        
        // 일치하는 용어만 표시
        for (let card of termCards) {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
                
                // 해당 문자 섹션 표시
                const term = card.querySelector('h3').textContent;
                const firstLetter = term.charAt(0).toUpperCase();
                const section = document.getElementById(`letter-${firstLetter}`);
                if (section) section.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
