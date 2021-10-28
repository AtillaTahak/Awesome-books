const contactSection = document.getElementById('contactSection');
const addBooksSection = document.getElementById('addBooks');
const bookListSection = document.getElementById('bookLists');

const listNavbar = document.getElementById('listNav');
const bookaddNavbar = document.getElementById('addNav');
const contactNavbar = document.getElementById('contactNav');

listNavbar.addEventListener('click', () => {
  contactSection.style.display = 'none';
  addBooksSection.style.display = 'none';
  bookListSection.style.display = 'block';
});

bookaddNavbar.addEventListener('click', () => {
  contactSection.style.display = 'none';
  addBooksSection.style.display = 'block';
  bookListSection.style.display = 'none';
});

contactNavbar.addEventListener('click', () => {
  contactSection.style.display = 'flex';
  addBooksSection.style.display = 'none';
  bookListSection.style.display = 'none';
});