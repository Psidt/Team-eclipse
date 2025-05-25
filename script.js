// 초기화 함수
function initApp() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    renderResults(window.termsData);
}

// 검색 핸들러 (Early Return 패턴 적용)
function handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();
    if (!query) return renderResults(window.termsData);
    
    const filtered = window.termsData.filter(term => 
        term.name.toLowerCase().includes(query) || 
        term.description.toLowerCase().includes(query)
    );
    renderResults(filtered);
}

// 결과 렌더링 (DRY 원칙 준수)
function renderResults(items) {
    const container = document.getElementById('results');
    container.innerHTML = items.map(term => `
        <div class="fade-in bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">${term.name}</h3>
            <p class="text-gray-600 leading-relaxed">${term.description}</p>
            <div class="mt-4 flex gap-2">
                ${term.tags.map(tag => `
                    <span class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">#${tag}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// DOM 로드 후 실행
document.addEventListener('DOMContentLoaded', initApp);
