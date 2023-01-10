class Books {
  constructor(books) {
    this._books = books;
  }

  get getBooks() {
    return this._books;
  }

  setBooks(books) {
    return this._books = books;
  }

  remove(index) {
    this._books.splice(index, 1);
  }

  add(book) {
    this._books.push(book);
  }
};

const booksEle = document.querySelector('.books');

const renderBook = (book) => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book');
  const { id, title, author } = book;
  if (id % 2 !== 0) {
    bookItem.classList.add('gray');
  }
  const html = `
    <div class="book-info">
      <p class="title">"${title}" </p>
      <p class="author">by ${author}</p>
    </div>
    <button class="remove" id=${id}>Remove</button>
  `;
  bookItem.innerHTML = html;
  booksEle.appendChild(bookItem);
};

let booksData = JSON.parse(localStorage.getItem('books'));

const booksBox1 = new Books(booksData);

if (booksData !== null) {
  booksBox1.getBooks.forEach((book) => renderBook(book));
} else {
  booksBox1.setBooks([]); 
}

const remove = document.querySelectorAll('.remove');
remove.forEach((item, index) => {
  item.addEventListener('click', () => {
    booksBox1.remove(index);
    localStorage.setItem('books', JSON.stringify(booksBox1.getBooks));
    window.location.reload();
  });
});

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');
const add = document.getElementById('add-book');

add.addEventListener('click', () => {
  const book = {
    id: 0,
    title: '',
    author: '',
  };
  book.id = booksBox1.getBooks.length + 1;
  book.title = inputTitle.value;
  book.author = inputAuthor.value;
  booksBox1.add(book);
  localStorage.setItem('books', JSON.stringify(booksBox1.getBooks));
});
