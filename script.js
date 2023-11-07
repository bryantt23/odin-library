class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggle = function () {
    this.read = !this.read;
  };
}

class Library {
  constructor() {
    this.myLibrary = [
      new Book('Jane Eyre', 'Charlotte Bronte', 300, true),
      new Book('Jurassic Park', 'Michael Crichton', 200)
    ];
    this.displayBooks();
  }
  addBookToLibrary(book) {
    this.myLibrary.push(book);
    this.displayBooks();
  }
  removeBook(index) {
    this.myLibrary = this.myLibrary.filter((_, i) => i != index);
    this.displayBooks();
  }
  displayBooks() {
    books.innerHTML = '';
    for (const [index, book] of this.myLibrary.entries()) {
      const li = document.createElement('li');
      li.textContent = `Title: ${book.title} by ${book.author}`;
      books.appendChild(li);
      const button = document.createElement('button');
      button.innerText = 'Remove';
      button.addEventListener('click', () => this.removeBook(index));
      li.appendChild(button);
      const readButton = document.createElement('button');
      readButton.innerText = book.read ? 'Have read' : 'Have not read';
      readButton.addEventListener('click', () => {
        book.toggle();
        this.displayBooks();
      });
      li.appendChild(readButton);
    }
  }
}

const books = document.querySelector('.books');
const theForm = document.querySelector('.the-form');
const theLibrary = new Library();

theForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const pages = document.querySelector('.pages');
  theLibrary.addBookToLibrary(new Book(title.value, author.value, pages.value));
});
