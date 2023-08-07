const darkModeToggle = document.getElementById('darkModeToggle');
const textContainer = document.getElementById('textContainer');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  textContainer.classList.toggle('dark-mode');
});
