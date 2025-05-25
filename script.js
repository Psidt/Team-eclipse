// Function to generate alphabet navigation
function generateAlphabetNav() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const navContainer = document.getElementById('letterNav');
    let navHTML = '';

    alphabet.forEach(letter => {
        const hasTerms = dictionary.some(term => term.term.charAt(0).toUpperCase() === letter);
        const buttonClass = hasTerms ? 'letter-btn' : 'letter-btn opacity-30 cursor-not-allowed';
        // Check if any term starts with the letter (case-insensitive)
        const termsWithLetter = dictionary.filter(item => item.term.charAt(0).toUpperCase() === letter.toUpperCase());
        
        if (termsWithLetter.length > 0) {
             navHTML += `<span class="letter-btn" data-letter="${letter}" onclick="scrollToLetter('${letter}')">${letter}</span>`;
        } else {
             // Optionally gray out or make non-clickable if no terms for the letter
             navHTML += `<span class="letter-btn opacity-30 cursor-not-allowed" data-letter="${letter}">${letter}</span>`;
        }
    });

    navContainer.innerHTML = navHTML;
}

// Function to scroll to letter section
window.scrollToLetter = function(letter) {
    const section = document.getElementById(`letter-${letter}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Highlight active letter - remove active from all first
        document.querySelectorAll('.letter-btn').forEach(btn =>
            btn.classList.remove('active'));
        // Add active to the clicked button
        document.querySelector(`.letter-btn[data-letter="${letter}"]`).classList.add('active');
    }
}

// Function to render dictionary by letter
function renderDictionary() {
    const container = document.getElementById('dictionaryContent');
    let currentLetter = '';
    let html = '';

    // Sort terms alphabetically
    const sortedDictionary = [...dictionary].sort((a, b) => a.term.localeCompare(b.term));

    sortedDictionary.forEach((item) => {
        const firstLetter = item.term.charAt(0).toUpperCase();

        // If we encounter a new letter, create a new section
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
             // Only create a section if there are terms for this letter
            if (sortedDictionary.some(term => term.term.charAt(0).toUpperCase() === currentLetter)) {
                 html += `<div id="letter-${currentLetter}" class="letter-section mt-10">
                        <h2 class="text-3xl font-bold mb-4 text-blue-300 glow">${currentLetter}</h2>
                        <div class="h-1 w-20 bg-purple-700 rounded mb-6"></div>
                     </div>`;
            }
        }

        html += `<div class="term-card mb-6 p-4 rounded-lg shadow-lg">
                    <div class="term-title pb-2 mb-3">
                        <div class="flex justify-between items-start">
                            <h3 class="text-xl font-bold">${item.term}</h3>
                            <span class="text-sm text-blue-400">${item.koreanTerm}</span>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-3">${item.explanation}</p>
                    <p class="text-sm text-blue-300 italic">${item.koreanExplanation}</p>
                </div>`;
    });

    container.innerHTML = html;
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const termCards = document.querySelectorAll('#dictionaryContent .term-card'); // Select within dictionaryContent
        const letterSections = document.querySelectorAll('#dictionaryContent .letter-section'); // Select within dictionaryContent
        let matchFound = false;

        // If search is empty, show all and reset sections
        if (searchTerm === '') {
            letterSections.forEach(section => {
                section.style.display = 'block';
            });
            termCards.forEach(card => {
                card.style.display = 'block';
            });
            // Remove "No matching terms" message if it exists
            const noMatchMsg = document.getElementById('no-match-message');
            if (noMatchMsg) noMatchMsg.remove();
            return;
        }

        // Hide all letter sections initially
        letterSections.forEach(section => {
            section.style.display = 'none';
        });

        // Show only matching terms and their sections
        termCards.forEach(card => {
            // Get text content excluding Korean term span
            const englishText = card.querySelector('h3').textContent.toLowerCase() + ' ' +
                               card.querySelector('p:not(.text-sm)').textContent.toLowerCase(); // Select the explanation paragraph
            const koreanText = card.querySelector('span.text-blue-400').textContent.toLowerCase() + ' ' +
                               card.querySelector('p.text-sm').textContent.toLowerCase(); // Select Korean term and explanation paragraph

            if (englishText.includes(searchTerm) || koreanText.includes(searchTerm)) {
                card.style.display = 'block';
                // Show the letter section this term belongs to
                const firstLetter = card.querySelector('h3').textContent.charAt(0).toUpperCase();
                const letterSection = document.getElementById(`letter-${firstLetter}`);
                if (letterSection) letterSection.style.display = 'block';
                matchFound = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show message if no matches found, add an ID for easy removal
        const existingNoMatchMsg = document.getElementById('no-match-message');
        if (!matchFound) {
            if (!existingNoMatchMsg) {
                 document.getElementById('dictionaryContent').innerHTML += '<p id="no-match-message" class="text-center text-gray-400 py-10">No matching terms found.</p>';
            }
        } else {
             // Remove the message if matches are found after a previous empty search
             if (existingNoMatchMsg) existingNoMatchMsg.remove();
        }
    });
}

// 스크롤 탑 버튼 설정
function setupScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // 스크롤 이벤트에 따라 버튼 표시/숨김
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // 버튼 클릭 시 맨 위로 스크롤
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤 효과
        });
    });
}

// Initialize on page load
window.onload = function() {
    renderDictionary(); // Render first to know which letters exist
    generateAlphabetNav();
    setupSearch();
    setupScrollTopButton(); // 스크롤 탑 버튼 기능 추가
};
