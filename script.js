const myLibrary = [
  { title: 'Jane Eyre', author: 'Charlotte Bronte', pages: 300 },
  { title: 'Jurassic Park', author: 'Michael Crichton', pages: 200 }
];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const books = document.querySelector('.books');
const theForm = document.querySelector('.the-form');

function displayBooks() {
  books.innerHTML = '';
  for (const book of myLibrary) {
    const li = document.createElement('li');
    li.textContent = `Title: ${book.title} by ${book.author}`;
    books.appendChild(li);
  }
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
