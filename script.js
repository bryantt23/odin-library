let myLibrary = [
  { title: 'Jane Eyre', author: 'Charlotte Bronte', pages: 300 },
  { title: 'Jurassic Park', author: 'Michael Crichton', pages: 200 }
];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = false;
}

// Book.prototype.toggle = status => {
//   hasBeenRead = status;
// };

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const books = document.querySelector('.books');
const theForm = document.querySelector('.the-form');

function displayBooks() {
  books.innerHTML = '';
  for (const [index, book] of myLibrary.entries()) {
    const li = document.createElement('li');
    li.textContent = `Title: ${book.title} by ${book.author}`;
    // li.setAttribute('index', index);
    books.appendChild(li);
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.addEventListener('click', () => removeBook(index));
    li.appendChild(button);
  }
}

function removeBook(index) {
  myLibrary = myLibrary.filter((book, i) => i != index);

  displayBooks();
}

displayBooks();

theForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const pages = document.querySelector('.pages');
  addBookToLibrary(new Book(title.value, author.value, pages.value));

  displayBooks();
});
