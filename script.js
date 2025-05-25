// Function to generate alphabet navigation
const generateAlphabetNav = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const navContainer = document.getElementById('letterNav');
    if (!navContainer) return;
    let navHTML = '';
    alphabet.forEach(letter => {
        const termsWithLetter = dictionary.filter(item => item.term.charAt(0).toUpperCase() === letter.toUpperCase());
        if (termsWithLetter.length > 0) {
             navHTML += `<span class="letter-btn" data-letter="${letter}"
                          tabindex="0" role="button" aria-label="${letter}로 시작하는 용어 보기"
                          onclick="scrollToLetter('${letter}')" onkeydown="handleLetterNavKeydown(event, '${letter}')">${letter}</span>`;
        } else {
             navHTML += `<span class="letter-btn opacity-30 cursor-not-allowed" data-letter="${letter}"
                          aria-disabled="true" aria-label="${letter}로 시작하는 용어 없음">${letter}</span>`;
        }
    });
    navContainer.innerHTML = navHTML;
};

// Function to scroll to letter section (수정된 부분)
const scrollToLetter = (letter) => {
    const section = document.getElementById(`letter-${letter}`);
    if (!section) return;

    // 이제 고정된 헤더가 없으므로, 페이지 상단에서 섹션까지의 거리에 약간의 여유만 줍니다.
    // 또는, 특정 요소(예: 알파벳 내비게이션 바 바로 아래)로 스크롤되도록 조정할 수도 있습니다.
    // 여기서는 간단하게 섹션의 상단에서 약간의 패딩만큼 위로 스크롤합니다.
    const offset = 20; // 약간의 상단 여유 공간

    window.scrollTo({
        top: section.offsetTop - offset, // 섹션의 실제 위치에서 약간 위
        behavior: 'smooth'
    });

    document.querySelectorAll('.letter-btn').forEach(btn =>
        btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.letter-btn[data-letter="${letter}"]`);
    if (activeBtn) activeBtn.classList.add('active');
};

// Handle keyboard navigation for alphabet buttons
const handleLetterNavKeydown = (event, letter) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        scrollToLetter(letter);
    }
};

// Function to render dictionary by letter
const renderDictionary = (filteredDictionary = dictionary) => {
    const container = document.getElementById('dictionaryContent');
    if (!container) return;
    let currentLetter = '';
    let html = '';
    const sortedDictionary = [...filteredDictionary].sort((a, b) => a.term.localeCompare(b.term));

    if (sortedDictionary.length === 0) {
        html = `<p id="no-match-message" class="text-center text-gray-400 py-10 text-lg">검색 결과가 없습니다. 다른 용어로 검색해보세요.</p>`;
        container.innerHTML = html;
        return;
    }

    sortedDictionary.forEach((item) => {
        const firstLetter = item.term.charAt(0).toUpperCase();
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            html += `<div id="letter-${currentLetter}" class="letter-section pt-4">
                        <h2 class="text-3xl font-bold mb-4 text-purple-400 glow">${currentLetter}</h2>
                        <div class="h-1 w-20 bg-purple-700 rounded mb-6"></div>
                     </div>`;
        }
        html += `<article class="term-card mb-6 p-4 rounded-lg shadow-lg bg-gray-800 bg-opacity-60 border border-gray-700" aria-labelledby="${item.term.toLowerCase().replace(/\s/g, '-')}-heading">
                    <header class="term-title pb-2 mb-3">
                        <div class="flex justify-between items-start">
                            <h3 id="${item.term.toLowerCase().replace(/\s/g, '-')}-heading" class="text-xl font-bold text-purple-400">${item.term}</h3>
                            <span class="text-sm text-purple-300" aria-label="한국어 번역 ${item.koreanTerm}">${item.koreanTerm}</span>
                        </div>
                    </header>
                    <p class="text-gray-200 mb-3 text-sm md:text-base leading-relaxed">${item.explanation}</p>
                    <p class="text-sm text-blue-300 italic" lang="ko">${item.koreanExplanation}</p>
                </article>`;
    });
    container.innerHTML = html;
};

// Search functionality
const handleSearch = () => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm === '') {
        renderDictionary(dictionary);
        return;
    }
    const filteredTerms = dictionary.filter(item => {
        const termMatch = item.term.toLowerCase().includes(searchTerm);
        const koreanTermMatch = item.koreanTerm.toLowerCase().includes(searchTerm);
        const explanationMatch = item.explanation.toLowerCase().includes(searchTerm);
        const koreanExplanationMatch = item.koreanExplanation.toLowerCase().includes(searchTerm);
        return termMatch || koreanTermMatch || explanationMatch || koreanExplanationMatch;
    });
    renderDictionary(filteredTerms);
};

const setupSearch = () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSearch();
            }
        });
    }
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
        searchButton.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleSearch();
            }
        });
    }
};

// Scroll to Top Button functionality
const setupScrollTopButton = () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (!scrollTopBtn) return;
    const handleScrollVisibility = () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    };
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('scroll', handleScrollVisibility);
    scrollTopBtn.addEventListener('click', handleScrollToTop);
    scrollTopBtn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleScrollToTop();
        }
    });
    handleScrollVisibility();
};

// Initialize all functionalities on page load
document.addEventListener('DOMContentLoaded', () => {
    renderDictionary();
    generateAlphabetNav();
    setupSearch();
    setupScrollTopButton();
});
