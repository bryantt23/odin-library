let myLibrary = [
  new Book('Jane Eyre', 'Charlotte Bronte', 300, true),
  new Book('Jurassic Park', 'Michael Crichton', 200)
];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggle = function () {
  this.read = !this.read;
};

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
    books.appendChild(li);
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.addEventListener('click', () => removeBook(index));
    li.appendChild(button);
    const readButton = document.createElement('button');
    readButton.innerText = book.read ? 'Have read' : 'Have not read';
    readButton.addEventListener('click', () => {
      book.toggle();
      displayBooks();
    });
    li.appendChild(readButton);
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
