const addBooks = document.querySelector('#add');
const bookName = document.getElementById('title');
const authorName = document.getElementById('author');
const addedNotice = document.getElementById('addedNotice');
const currentdate = new Date();
const datetime = `Last Sync: ${currentdate.getDate()}/${
  currentdate.getMonth() + 1}/${
  currentdate.getFullYear()} @ ${
  currentdate.getHours()}:${
  currentdate.getMinutes()}:${
  currentdate.getSeconds()}`;

let bookList = JSON.parse(localStorage.getItem('books'));
if (bookList == null) {
  bookList = [];
}

class BookClass {
  constructor(bookList, removeId) {
    this.bookList = bookList;
    this.removeId = removeId;
  }

  createBook() {
    document.querySelector('#book-list').innerHTML = '';
    this.bookList.forEach((e) => {
      const element = document.createElement('li');
      element.className = 'list-group-item list-group-item-action d-flex justify-content-between border-5 border-dark';

      element.innerHTML += `
      
          <p class="bookName">${e.bookNames} By ${e.authorNames}</p>
  
          <input class="removebtn" type="button" value="Remove" onclick="removeBook(this.id)" id="${e.id}">
          `;
      document.querySelector('#book-list').appendChild(element);
    });

    localStorage.setItem('books', JSON.stringify(bookList));
  }

  removeBookClass() {
    const index = this.bookList.findIndex((prop) => prop.id === this.removeId);
    bookList.splice(index, 1);
    this.createBook();
  }
}
function removeBook(remBookName) {
  if (remBookName === '') {
    const valitation = document.getElementById('validation');
    valitation.style.display = 'none';
  } else {
    const other = new BookClass(bookList, remBookName);
    other.removeBookClass();
  }
}

addBooks.addEventListener('click', () => {
  const bookListlet = {
    id: Math.random().toString(16).slice(2),
    bookNames: bookName.value,
    authorNames: authorName.value,
  };
  bookList.push(bookListlet);
  const other = new BookClass(bookList);
  other.createBook();
  addedNotice.innerHTML = `added this book${bookName.value} ${authorName.value}`;
  addedNotice.style.color = 'red';
});

window.addEventListener('load', () => {
  const other = new BookClass(bookList);
  other.createBook();
  removeBook('');
  document.getElementById('datetime').innerHTML = datetime;
});
