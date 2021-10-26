const addBooks = document.querySelector('#add');
const bookName = document.getElementById('title');
const authorName = document.getElementById('author');


let bookList = JSON.parse(localStorage.getItem('books'));
if (bookList == null) {
  bookList = [];
}

window.addEventListener('load', () => {
  const other = new BookClass(bookList);
  other.createBook();
});

function removeBook(remBookName) {
  const other = new BookClass(bookList,remBookName);
  other.removeBookClass();
}

addBooks.addEventListener('click', () => {
  let bookListlet = { id: Math.random().toString(16).slice(2), bookNames: bookName.value, authorNames: authorName.value };
  bookList.push(bookListlet);
  const other = new BookClass(bookList);
  other.createBook();
});
class BookClass {
  constructor(bookList,removeId) {
    this.bookList = bookList;
    this.removeId =removeId;
  }

  createBook() {
    document.querySelector('#book-list').innerHTML = '';
    this.bookList.forEach((e) => {
      const element = document.createElement('li');

      element.innerHTML += `
          <p>${e.bookNames}</p>
          <p>${e.authorNames}</p>
          <input type="button" value="remove" onclick="removeBook(this.id)" id="${e.id}">
          <hr>`;
      document.querySelector('#book-list').appendChild(element);
    });
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify(bookList));
  }
  removeBookClass(){
    const index = this.bookList.findIndex(prop => prop.id === this.removeId)
    bookList.splice(index, 1)
    this.createBook();
  }
}