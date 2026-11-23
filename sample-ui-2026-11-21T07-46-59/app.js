document.querySelectorAll('[data-tab]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
const toggleBtn = document.getElementById('toggle-hero-src');
const heroImg = document.getElementById('hero-img');
if (toggleBtn && heroImg) {
  let showingVector = true;
  toggleBtn.addEventListener('click', () => {
    showingVector = !showingVector;
    heroImg.src = showingVector ? heroImg.dataset.vector : heroImg.dataset.source;
    toggleBtn.textContent = showingVector ? 'Pokaż obraz źródłowy' : 'Pokaż wygenerowaną grafikę SVG';
  });
}
