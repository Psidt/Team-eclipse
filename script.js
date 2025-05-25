// data.js 파일에서 'dictionary'라는 이름의 배열을 사용한다고 가정합니다.

const dictionaryContentElement = document.getElementById('dictionaryContent');
const searchInputElement = document.getElementById('searchInput');
const letterNavElement = document.getElementById('letterNav');

// 알파벳 네비게이션 생성 함수 (수정됨)
const generateAlphabetNav = () => {
    if (!letterNavElement || typeof dictionary === 'undefined') return; // dictionary 존재 확인
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let navHTML = '';
    alphabet.forEach(letter => {
        // data.js의 dictionary 변수를 사용하여 해당 알파벳으로 시작하는 용어가 있는지 확인
        const termsWithLetter = dictionary.filter(item => item.term.charAt(0).toUpperCase() === letter);
        const isDisabled = termsWithLetter.length === 0;

        navHTML += `<button class="letter-btn" data-letter="${letter}" 
                         onclick="scrollToLetter('${letter}')" 
                         ${isDisabled ? 'disabled' : ''}>${letter}</button>`;
    });
    letterNavElement.innerHTML = navHTML;
};

// 특정 알파벳 섹션으로 스크롤하는 함수
const scrollToLetter = (letter) => {
    const section = document.getElementById(`letter-section-${letter}`);
    if (section) {
        const stickyHeader = document.querySelector('.sticky-header');
        let headerHeight = 0;
        if (stickyHeader) {
            headerHeight = stickyHeader.offsetHeight;
        }
        const yOffset = -headerHeight - 10;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});

        document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
        const activeButton = letterNavElement.querySelector(`.letter-btn[data-letter="${letter}"]`);
        if (activeButton) activeButton.classList.add('active');
    }
};

// 용어 목록을 화면에 표시하는 함수 (수정됨: dictionary 참조)
const renderTerms = (termsToDisplay) => {
    if (!dictionaryContentElement || typeof dictionary === 'undefined') return;

    // 만약 termsToDisplay가 제공되지 않았다면, 전체 dictionary를 사용
    const dataToRender = termsToDisplay || dictionary;


    if (dataToRender.length === 0 && searchInputElement.value.trim() !== '') {
        dictionaryContentElement.innerHTML = '<p id="no-results">검색 결과가 없습니다.</p>';
        return;
    }
    if (dataToRender.length === 0) { // 검색어가 없을 때도 데이터가 없으면
        dictionaryContentElement.innerHTML = '<p id="no-results">표시할 용어가 없습니다.</p>';
        return;
    }


    let htmlContent = '';
    let currentLetter = '';
    const sortedTerms = [...dataToRender].sort((a, b) => a.term.localeCompare(b.term));

    sortedTerms.forEach(item => {
        const firstLetter = item.term.charAt(0).toUpperCase();
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            htmlContent += `<h2 class="letter-section-heading" id="letter-section-${currentLetter}">${currentLetter}</h2>`;
        }
        htmlContent += `
            <div class="term-card">
                <h3>${item.term}</h3>
                <p class="korean-term">${item.koreanTerm}</p>
                <p>${item.explanation}</p>
                <p class="korean-explanation">${item.koreanExplanation}</p>
            </div>
        `;
    });
    dictionaryContentElement.innerHTML = htmlContent;
};

// 검색 기능을 처리하는 함수 (수정됨: dictionary 참조)
const handleSearch = () => {
    if (!searchInputElement || typeof dictionary === 'undefined') return;
    const searchTerm = searchInputElement.value.toLowerCase().trim();

    if (searchTerm === '') {
        renderTerms(dictionary);
        return;
    }

    const filteredTerms = dictionary.filter(item => {
        return item.term.toLowerCase().includes(searchTerm) ||
               item.koreanTerm.toLowerCase().includes(searchTerm) ||
               item.explanation.toLowerCase().includes(searchTerm) ||
               item.koreanExplanation.toLowerCase().includes(searchTerm);
    });
    renderTerms(filteredTerms);
};

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    // data.js가 로드되고 dictionary 변수가 사용 가능한지 확인
    if (typeof dictionary !== 'undefined' && Array.isArray(dictionary)) {
        renderTerms(dictionary); // 초기 용어 목록 표시
        generateAlphabetNav();   // 알파벳 네비게이션 생성
    } else {
        console.error("Error: 'dictionary' data not found or is not an array. Check data.js.");
        if(dictionaryContentElement) dictionaryContentElement.innerHTML = "<p id='no-results'>용어 데이터를 불러오지 못했습니다. data.js 파일을 확인해주세요.</p>";
    }

    if (searchInputElement) {
        searchInputElement.addEventListener('input', handleSearch);
    }
});
