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
    if (section) {
        // Calculate offset to account for sticky search bar
        const searchContainer = document.querySelector('.search-container');
        const searchBarHeight = searchContainer ? searchContainer.offsetHeight : 0;
        const offset = searchBarHeight + 20; // Add some extra padding for visual comfort

        window.scrollTo({
            top: section.offsetTop - offset,
            behavior: 'smooth'
        });
        // Highlight active letter - remove active from all first
        document.querySelectorAll('.letter-btn').forEach(btn =>
            btn.classList.remove('active'));
        // Add active to the clicked button
        document.querySelector(`.letter-btn[data-letter="${letter}"]`).classList.add('active');
    }
};

// Handle keyboard navigation for alphabet buttons
const handleLetterNavKeydown = (event, letter) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevent default scroll behavior
        scrollToLetter(letter);
    }
};

// Function to render dictionary by letter
const renderDictionary = () => {
    const container = document.getElementById('dictionaryContent');
    if (!container) return; // Early return if element not found
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

        html += `<article class="term-card mb-6 p-4 rounded-lg shadow-lg bg-gray-800 bg-opacity-60 border border-gray-700" aria-labelledby="${item.term.toLowerCase().replace(/\s/g, '-')}-heading">
                    <header class="term-title pb-2 mb-3">
                        <div class="flex justify-between items-start">
                            <h3 id="${item.term.toLowerCase().replace(/\s/g, '-')}-heading" class="text-xl font-bold text-purple-400">${item.term}</h3>
                            <span class="text-sm text-purple-300" aria-label="한국어 번역 ${item.koreanTerm}">${item.koreanTerm}</span>
                        </div>
                    </header>
                    <p class="text-gray-200 mb-3 text-sm md:text-base">${item.explanation}</p>
                    <p class="text-sm text-blue-300 italic" lang="ko">${item.koreanExplanation}</p>
                </article>`;
    });

    container.innerHTML = html;
};

// Search functionality
const setupSearch = () => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return; // Early return if element not found
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const termCards = document.querySelectorAll('#dictionaryContent .term-card');
        const letterSections = document.querySelectorAll('#dictionaryContent .letter-section');
        let matchFound = false;

        // If search is empty, show all and reset sections
        if (searchTerm === '') {
            letterSections.forEach(section => {
                section.style.display = 'block';
            });
            termCards.forEach(card => {
                card.style.display = 'block';
            });
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
            // Get text content including English term and explanation
            const englishTextContent = card.querySelector('h3').textContent.toLowerCase() + ' ' +
                                       card.querySelector('p:not(.text-sm)').textContent.toLowerCase(); 
            // Get text content including Korean term and explanation
            const koreanTextContent = card.querySelector('span').textContent.toLowerCase() + ' ' +
                                      card.querySelector('p.text-sm').textContent.toLowerCase(); 

            if (englishTextContent.includes(searchTerm) || koreanTextContent.includes(searchTerm)) {
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

        const existingNoMatchMsg = document.getElementById('no-match-message');
        if (!matchFound) {
            if (!existingNoMatchMsg) {
                 const noMatchParagraph = document.createElement('p');
                 noMatchParagraph.id = 'no-match-message';
                 noMatchParagraph.classList.add('text-center', 'text-gray-400', 'py-10');
                 noMatchParagraph.textContent = 'No matching terms found.';
                 document.getElementById('dictionaryContent').appendChild(noMatchParagraph);
            }
        } else {
             if (existingNoMatchMsg) existingNoMatchMsg.remove();
        }
    });
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
            handleScrollToTop();
        }
    });

    handleScrollVisibility(); // Initial check in case page loads already scrolled
};

// NEW FUNCTION: Manage sticky search bar offset to prevent content overlap
const setupStickySearchBarOffset = () => {
    const searchContainer = document.querySelector('.search-container'); // The section with sticky
    
    if (!searchContainer) return; // Early return if element not found

    // Create a dynamic spacer element that will take up space when the search bar is sticky
    const stickySpacer = document.createElement('div');
    stickySpacer.id = 'stickySearchBarSpacer';
    stickySpacer.classList.add('w-full', 'transition-all', 'duration-300', 'ease-out');
    stickySpacer.style.height = '0px'; // Initially no height

    // Insert the spacer immediately after the sticky search container in the DOM
    searchContainer.parentNode.insertBefore(stickySpacer, searchContainer.nextSibling);

    const adjustSpacer = () => {
        // Get the computed style of the search container to check if it's currently 'stuck'
        const computedStyle = window.getComputedStyle(searchContainer);
        // An element is sticky AND stuck when its position is 'sticky' and its top is at the sticky limit (here, '0px')
        const isStuck = computedStyle.position === 'sticky' && 
                        searchContainer.getBoundingClientRect().top <= 0;

        if (isStuck) {
            // If it's stuck, set the spacer's height to the search bar's current height
            const searchBarHeight = searchContainer.offsetHeight; 
            stickySpacer.style.height = `${searchBarHeight}px`;
        } else {
            // If it's not stuck, collapse the spacer
            stickySpacer.style.height = '0px';
        }
    };

    // Initial adjustment (after all elements and CSS are loaded)
    // Use requestAnimationFrame for smoother initial layout after all rendering
    requestAnimationFrame(adjustSpacer);

    // Add event listeners for scroll and resize to continually adjust the spacer
    window.addEventListener('scroll', adjustSpacer);
    window.addEventListener('resize', adjustSpacer);
};


// Initialize all functionalities on page load
window.onload = () => {
    // These order matter for proper rendering
    renderDictionary(); 
    generateAlphabetNav();
    setupSearch();
    setupScrollTopButton();
    setupStickySearchBarOffset(); // Call the new sticky offset management function
};
