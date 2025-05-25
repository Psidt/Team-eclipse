// data.js에 dictionary 데이터가 있다고 가정합니다.

// Function to generate alphabet navigation
const generateAlphabetNav = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const navContainer = document.getElementById('letterNav');
    if (!navContainer) return; // 요소가 없으면 함수 종료

    let navHTML = '';
    alphabet.forEach(letter => {
        // data.js의 dictionary 변수를 사용한다고 가정합니다.
        const termsWithLetter = typeof dictionary !== 'undefined' ?
                                dictionary.filter(item => item.term.charAt(0).toUpperCase() === letter.toUpperCase()) : [];
        const isDisabled = termsWithLetter.length === 0;

        navHTML += `<button class="letter-btn" data-letter="${letter}"
                         tabindex="0" role="button" aria-label="${letter}로 시작하는 용어 보기"
                         ${isDisabled ? 'disabled aria-disabled="true"' : ''}
                         onclick="scrollToLetter('${letter}')"
                         onkeydown="handleLetterNavKeydown(event, '${letter}')">
                         ${letter}
                    </button>`;
    });
    navContainer.innerHTML = navHTML;
};

// Function to scroll to letter section (수정됨)
const scrollToLetter = (letter) => {
    // 각 알파벳 섹션의 ID는 "letter-A", "letter-B" 등으로 설정되어 있어야 합니다.
    const section = document.getElementById(`letter-${letter}`);
    if (!section) {
        console.warn(`scrollToLetter: Section for letter "${letter}" not found.`);
        return;
    }

    const stickyNav = document.getElementById('sticky-search-nav'); // 고정될 검색/알파벳 바
    let stickyNavHeight = 0;

    if (stickyNav && getComputedStyle(stickyNav).position === 'sticky') {
        stickyNavHeight = stickyNav.offsetHeight;
    }

    // 목표 위치는 섹션의 상단에서 고정된 헤더의 높이만큼 빼고, 추가적인 여유 공간(20px)을 줍니다.
    const targetPosition = section.offsetTop - stickyNavHeight - 20;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    // 활성 버튼 스타일 업데이트
    document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
    const activeButton = document.querySelector(`.letter-btn[data-letter="${letter}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
};

// Handle keyboard navigation for alphabet buttons
const handleLetterNavKeydown = (event, letter) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        scrollToLetter(letter);
    }
};

// Function to render dictionary content (수정됨: 알파벳 섹션 내에 카드 포함)
const renderDictionary = (filteredData = dictionary) => {
    const container = document.getElementById('dictionaryContent');
    if (!container) return; // 요소가 없으면 함수 종료

    // data.js의 dictionary 변수를 사용한다고 가정합니다.
    if (typeof dictionary === 'undefined' || !Array.isArray(dictionary)) {
        container.innerHTML = '<p id="no-results-message">용어 데이터를 불러올 수 없습니다.</p>';
        return;
    }

    // 제공된 filteredData 또는 전체 dictionary를 사용합니다.
    const dataToRender = (filteredData && filteredData.length > 0) ? filteredData : dictionary;

    // 데이터를 알파벳 순서로 정렬 (원본 dictionary는 변경하지 않음)
    const sortedData = [...dataToRender].sort((a, b) => a.term.localeCompare(b.term));

    if (sortedData.length === 0 && document.getElementById('searchInput')?.value.trim() !== '') {
        container.innerHTML = '<p id="no-results-message">검색 결과가 없습니다.</p>';
        return;
    }
    if (sortedData.length === 0) { // 검색어가 없을 때도 데이터가 없으면
        container.innerHTML = '<p id="no-results-message">표시할 용어가 없습니다.</p>';
        return;
    }


    let html = '';
    let currentLetter = '';

    sortedData.forEach((item, index) => {
        const firstLetter = item.term.charAt(0).toUpperCase();

        if (firstLetter !== currentLetter) {
            // 이전 알파벳 섹션이 열려 있었다면 닫아줍니다. (첫 번째 알파벳이 아닐 경우)
            if (currentLetter !== '') {
                html += `</div>`; // 이전 letter-X wrapper 닫기
            }
            currentLetter = firstLetter;
            // 각 알파벳 섹션의 ID를 letter-A, letter-B 등으로 설정
            // 이 div가 scrollToLetter의 타겟이 됩니다.
            html += `<div id="letter-${currentLetter}" class="term-card-wrapper">
                        <h2 class="letter-heading">${currentLetter}</h2>`;
        }

        // 용어 카드 HTML 생성
        html += `
            <article class="term-card" aria-labelledby="${item.term.toLowerCase().replace(/\s+/g, '-')}-heading">
                <header class="term-card-header">
                    <h3 id="${item.term.toLowerCase().replace(/\s+/g, '-')}-heading">${item.term}</h3>
                    <span class="term-card-korean-term">${item.koreanTerm}</span>
                </header>
                <p class="term-card-explanation">${item.explanation}</p>
                <p class="term-card-korean-explanation">${item.koreanExplanation}</p>
            </article>
        `;

        // 마지막 아이템이면 현재 알파벳 섹션 div를 닫음
        if (index === sortedData.length - 1) {
            html += `</div>`; // 마지막 letter-X wrapper 닫기
        }
    });

    container.innerHTML = html;
};


// Search functionality
const handleSearch = () => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    const searchTerm = searchInput.value.toLowerCase().trim();

    // data.js의 dictionary 변수를 사용한다고 가정합니다.
    if (typeof dictionary === 'undefined') {
        renderDictionary([]); // 데이터가 없으면 빈 배열로 처리
        return;
    }

    if (!searchTerm) {
        renderDictionary(dictionary); // 검색어가 없으면 전체 목록 표시
        return;
    }

    const filtered = dictionary.filter(item =>
        item.term.toLowerCase().includes(searchTerm) ||
        item.koreanTerm.toLowerCase().includes(searchTerm) ||
        item.explanation.toLowerCase().includes(searchTerm) ||
        item.koreanExplanation.toLowerCase().includes(searchTerm)
    );
    renderDictionary(filtered);
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
        // 키보드 접근성을 위해 searchButton에도 keydown 이벤트 추가 가능
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
    handleScrollVisibility(); // 초기 로드 시 버튼 상태 체크
};


// Initialize all functionalities on page load
document.addEventListener('DOMContentLoaded', () => {
    // data.js에서 dictionary 변수가 로드되었는지 확인
    if (typeof dictionary !== 'undefined' && Array.isArray(dictionary) && dictionary.length > 0) {
        renderDictionary(); // 초기 용어 목록 렌더링
        generateAlphabetNav(); // 알파벳 네비게이션 생성
    } else {
        // data.js가 로드되지 않았거나 dictionary가 비어있는 경우 사용자에게 알림
        const contentEl = document.getElementById('dictionaryContent');
        if (contentEl) contentEl.innerHTML = "<p id='no-results-message'>용어 데이터를 불러오거나, 데이터가 비어있습니다. data.js 파일을 확인해주세요.</p>";
        const letterNavEl = document.getElementById('letterNav');
        if (letterNavEl) letterNavEl.innerHTML = ""; // 알파벳 바 비우기
        console.error("Dictionary data is not loaded or is empty. Check data.js.");
    }
    setupSearch(); // 검색 기능 설정
    setupScrollTopButton(); // 맨 위로 가기 버튼 설정

    // Alpine.js, GSAP, Three.js 관련 초기화는 HTML의 x-init에서 처리됩니다.
});
