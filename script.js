// Function to generate alphabet navigation
const generateAlphabetNav = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const navContainer = document.getElementById('letterNav');
    if (!navContainer) return; // Early return if element not found
    let navHTML = '';

    alphabet.forEach(letter => {
        // Check if any term starts with the letter (case-insensitive)
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

// Function to scroll to letter section
const scrollToLetter = (letter) => {
    const section = document.getElementById(`letter-${letter}`);
    if (!section) return; // Early return if section not found

    // Calculate offset to account for the now-sticky header
    const stickyHeader = document.querySelector('.header-links');
    const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 0;

    const offset = headerHeight + 20; // Add some extra padding for visual comfort

    window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
    });
    // Highlight active letter - remove active from all first
    document.querySelectorAll('.letter-btn').forEach(btn =>
        btn.classList.remove('active'));
    // Add active to the clicked button
    const activeBtn = document.querySelector(`.letter-btn[data-letter="${letter}"]`);
    if (activeBtn) activeBtn.classList.add('active');
};

// Handle keyboard navigation for alphabet buttons
const handleLetterNavKeydown = (event, letter) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevent default scroll behavior
        scrollToLetter(letter);
    }
};

// Function to render dictionary by letter
const renderDictionary = (filteredDictionary = dictionary) => {
    const container = document.getElementById('dictionaryContent');
    if (!container) return; // Early return if element not found
    let currentLetter = '';
    let html = '';

    // Sort terms alphabetically
    const sortedDictionary = [...filteredDictionary].sort((a, b) => a.term.localeCompare(b.term));

    if (sortedDictionary.length === 0) {
        html = `
            <p id="no-match-message" class="text-center text-gray-400 py-10 text-lg">
                검색 결과가 없습니다. 다른 용어로 검색해보세요.
            </p>
        `;
        container.innerHTML = html;
        return; // Early return if no terms to render
    }

    sortedDictionary.forEach((item) => {
        const firstLetter = item.term.charAt(0).toUpperCase();

        // If we encounter a new letter, create a new section
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            // Only create a section if there are terms for this letter
            // This check is now redundant because filteredDictionary already only contains items
            // But we keep the structure of adding a letter section div.
            html += `<div id="letter-${currentLetter}" class="letter-section mt-10">
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

// Search functionality (수정된 부분)
const handleSearch = () => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return; // Early return if element not found

    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        renderDictionary(dictionary); // 검색어가 없으면 전체 용어 표시
        return; // Early return if search term is empty
    }

    // 검색어에 따라 용어 필터링
    const filteredTerms = dictionary.filter(item => {
        const termMatch = item.term.toLowerCase().includes(searchTerm);
        const koreanTermMatch = item.koreanTerm.toLowerCase().includes(searchTerm);
        const explanationMatch = item.explanation.toLowerCase().includes(searchTerm);
        const koreanExplanationMatch = item.koreanExplanation.toLowerCase().includes(searchTerm);
        return termMatch || koreanTermMatch || explanationMatch || koreanExplanationMatch;
    });

    renderDictionary(filteredTerms); // 필터링된 용어 표시
};

// Setup search event listeners
const setupSearch = () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton'); // 검색 버튼 요소 가져오기

    if (searchInput) {
        // 입력 필드에 글자가 입력될 때마다 검색 실행
        searchInput.addEventListener('input', handleSearch);
        // 입력 필드에서 Enter 키를 눌렀을 때 검색 실행
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // 기본 폼 제출 방지 (만약 input이 form 안에 있다면)
                handleSearch();
            }
        });
    }

    if (searchButton) {
        // 검색 버튼 클릭 시 검색 실행
        searchButton.addEventListener('click', handleSearch);
        // 검색 버튼에서 Enter 또는 Space 키를 눌렀을 때 검색 실행 (접근성)
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
    if (!scrollTopBtn) return; // Early return if button not found

    const handleScrollVisibility = () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤 효과
        });
    };

    window.addEventListener('scroll', handleScrollVisibility);
    scrollTopBtn.addEventListener('click', handleScrollToTop);
    scrollTopBtn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent default scroll behavior
            handleScrollToTop();
        }
    });

    handleScrollVisibility(); // Initial check in case page loads already scrolled
};

// Initialize all functionalities on page load
document.addEventListener('DOMContentLoaded', () => {
    renderDictionary(); // 페이지 로드 시 모든 용어 표시
    generateAlphabetNav(); // 알파벳 내비게이션 생성
    setupSearch(); // 검색 기능 이벤트 리스너 설정
    setupScrollTopButton(); // 맨 위로 스크롤 버튼 설정
});
