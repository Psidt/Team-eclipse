// data.js에서 dictionary 배열을 불러옵니다.

function handleGenerateAlphabetNav() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const navContainer = document.getElementById('letterNav');
  navContainer.innerHTML = alphabet.map(letter => {
    const hasTerms = window.dictionary.some(term => term.term.charAt(0).toUpperCase() === letter);
    return `<span class="letter-btn${hasTerms ? '' : ' opacity-30 cursor-not-allowed'}" data-letter="${letter}" ${hasTerms ? `tabindex="0" aria-label="${letter}로 이동" onclick="handleScrollToLetter('${letter}')"` : 'tabindex="-1" aria-disabled="true"'}>${letter}</span>`;
  }).join('');
}

window.handleScrollToLetter = function(letter) {
  const section = document.getElementById(`letter-${letter}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector(`.letter-btn[data-letter="${letter}"]`);
    if (btn) btn.classList.add('active');
  }
};

function handleRenderDictionary() {
  const container = document.getElementById('dictionaryContent');
  let currentLetter = '';
  let html = '';
  const sorted = [...window.dictionary].sort((a, b) => a.term.localeCompare(b.term));
  sorted.forEach(item => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      html += `<section id="letter-${currentLetter}" class="letter-section mt-10">
        <h2 class="text-3xl font-bold mb-4 text-blue-300 glow">${currentLetter}</h2>
        <div class="h-1 w-20 bg-purple-700 rounded mb-6"></div>
      </section>`;
    }
    html += `<div class="term-card mb-6 p-4 rounded-lg shadow-lg animate-fadeIn">
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

function handleSetupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const termCards = document.querySelectorAll('#dictionaryContent .term-card');
    const letterSections = document.querySelectorAll('#dictionaryContent .letter-section');
    let matchFound = false;

    if (!searchTerm) {
      letterSections.forEach(section => section.style.display = 'block');
      termCards.forEach(card => card.style.display = 'block');
      const noMsg = document.getElementById('no-match-message');
      if (noMsg) noMsg.remove();
      return;
    }

    letterSections.forEach(section => section.style.display = 'none');
    termCards.forEach(card => {
      const eng = card.querySelector('h3').textContent.toLowerCase() + ' ' + card.querySelector('p:not(.text-sm)').textContent.toLowerCase();
      const kor = card.querySelector('span.text-blue-400').textContent.toLowerCase() + ' ' + card.querySelector('p.text-sm').textContent.toLowerCase();
      if (eng.includes(searchTerm) || kor.includes(searchTerm)) {
        card.style.display = 'block';
        const firstLetter = card.querySelector('h3').textContent.charAt(0).toUpperCase();
        const section = document.getElementById(`letter-${firstLetter}`);
        if (section) section.style.display = 'block';
        matchFound = true;
      } else {
        card.style.display = 'none';
      }
    });

    const existingMsg = document.getElementById('no-match-message');
    if (!matchFound) {
      if (!existingMsg) {
        document.getElementById('dictionaryContent').innerHTML += '<p id="no-match-message" class="text-center text-gray-400 py-10">No matching terms found.</p>';
      }
    } else {
      if (existingMsg) existingMsg.remove();
    }
  });
}

// 초기화
window.addEventListener('DOMContentLoaded', () => {
  handleRenderDictionary();
  handleGenerateAlphabetNav();
  handleSetupSearch();
});
