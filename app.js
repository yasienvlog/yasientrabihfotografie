const searchInput = document.querySelector('#site-search');
const photoCards = Array.from(document.querySelectorAll('.photo-card'));
const searchStatus = document.querySelector('#search-status');
const photoCount = document.querySelector('#photo-count');
const noResults = document.querySelector('#no-results');

function filterPhotos() {
  const query = searchInput.value.trim().toLocaleLowerCase('nl');
  let matches = 0;

  photoCards.forEach(card => {
    const searchableText = `${card.textContent} ${card.dataset.searchable}`.toLocaleLowerCase('nl');
    const isMatch = !query || searchableText.includes(query);
    card.hidden = !isMatch;
    if (isMatch) matches += 1;
  });

  noResults.hidden = matches > 0;
  photoCount.textContent = `${String(matches).padStart(2, '0')} ${matches === 1 ? 'BEELD' : 'BEELDEN'}`;
  searchStatus.textContent = query
    ? `${matches} ${matches === 1 ? 'foto gevonden' : 'foto’s gevonden'}`
    : 'Een selectie van mijn foto’s';
}

searchInput.addEventListener('input', filterPhotos);

document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});
