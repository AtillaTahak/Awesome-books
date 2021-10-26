const addBooks = document.querySelector('#add');
const bookName = document.getElementById('title');
const authorName = document.getElementById('author');

let bookList = JSON.parse(localStorage.getItem('books'));
if (bookList == null) {
  bookList = [];
}

function createBook(bookElement) {
  document.querySelector('#book-list').innerHTML = '';
  bookElement.forEach((e) => {
    const element = document.createElement('li');

    element.innerHTML += `
          <p>${e.bookNames}</p>
          <p>${e.authorNames}</p>
          <input type="button" value="remove" onclick="removeBook(this.id)" id="${bookElement.length}">
          <hr>`;
    document.querySelector('#book-list').appendChild(element);
  });
  localStorage.clear();
  localStorage.setItem('books', JSON.stringify(bookElement));
}

window.addEventListener('load', () => {
  createBook(bookList);
});

function removeBook(remBookName) {
  const filterbookList = bookList.filter((e) => e.id !== remBookName - 1);
  bookList = filterbookList;
  createBook(bookList);
}

addBooks.addEventListener('click', () => {
  let bookListlet = {};

  if (bookList.length > 0) {
    bookListlet = { id: bookList.length, bookNames: bookName.value, authorNames: authorName.value };
  } else if (bookList.length < 0) {
    removeBook(bookList);
  } else {
    bookListlet = { id: 0, bookNames: bookName.value, authorNames: authorName.value };
  }
  bookList.push(bookListlet);
  createBook(bookList);
});
