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
        document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.letter-btn[data-letter="${letter}"]`).classList.add('active');
    }
}

// 사전 렌더링
function renderDictionary() {
    const container = document.getElementById('dictionaryContent');
    let currentLetter = '';
    let html = '';
    const sorted = [...dictionary].sort((a, b) => a.term.localeCompare(b.term));
    sorted.forEach(item => {
        const firstLetter = item.term.charAt(0).toUpperCase();
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            html += `
                <div id="letter-${currentLetter}" class="letter-section mt-10">
                    <h2 class="text-3xl font-bold mb-4 text-blue-300 glow">${currentLetter}</h2>
                    <div class="h-1 w-20 bg-purple-700 rounded mb-6"></div>
                </div>
            `;
        }
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
            letterSections.forEach(section => section.style.display = 'block');
            termCards.forEach(card => card.style.display = 'block');
            return;
        }
        letterSections.forEach(section => section.style.display = 'none');
        termCards.forEach(card => {
            const term = card.querySelector('h3').textContent.toLowerCase();
            const koreanTerm = card.querySelector('span').textContent.toLowerCase();
            const explanation = card.querySelector('p').textContent.toLowerCase();
            const koreanExplanation = card.querySelector('p.italic').textContent.toLowerCase();
            if (term.includes(searchTerm) || koreanTerm.includes(searchTerm) ||
                explanation.includes(searchTerm) || koreanExplanation.includes(searchTerm)) {
                card.style.display = 'block';
                const firstLetter = card.querySelector('h3').textContent.charAt(0).toUpperCase();
                const section = document.getElementById(`letter-${firstLetter}`);
                if (section) section.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// 스크롤 이벤트: 검색바 고정 & 알파벳 네비 숨김
document.addEventListener('DOMContentLoaded', function() {
    renderDictionary();
    generateAlphabetNav();
    setupSearch();

    const searchBar = document.getElementById('searchBarWrapper');
    const letterNav = document.getElementById('letterNav');
    const triggerPoint = searchBar.offsetTop + 60; // 헤더 높이에 따라 조정

    window.addEventListener('scroll', function() {
        if (window.scrollY > triggerPoint) {
            searchBar.classList.add('fixed-search');
            letterNav.classList.add('hide-on-scroll');
        } else {
            searchBar.classList.remove('fixed-search');
            letterNav.classList.remove('hide-on-scroll');
        }
    });
});
