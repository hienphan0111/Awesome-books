const books = [
  {
    id: 1,
    title: 'book 1',
    author: 'author 1',
  },
  {
    id: 2,
    title: 'book 2',
    author: 'author 2',
  },
  {
    id: 3,
    title: 'book 3',
    author: 'author 3',
  },
  {
    id: 4,
    title: 'book 4',
    author: 'author 4',
  },
];

const booksEle = document.querySelector('.books');

const renderBook = (book) => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book');
  const { id, title, author } = book;
  const html = `
    <p class="title">${title}</p>
    <p class="author">${author}</p>
    <button class="remove" id=${id}>Remove</button>
    <hr>
  `;
  bookItem.innerHTML = html;
  booksEle.appendChild(bookItem);
};

let booksData = JSON.parse(localStorage.getItem('books'));
if (booksData !== null ){
  booksData.forEach((book) => renderBook(book));
} else {
  localStorage.setItem('books', JSON.stringify(books));
  books.forEach((book) => renderBook(book));
}

const remove = document.querySelectorAll('.remove');
remove.forEach((item, index) => {
  item.addEventListener('click', () => {
    booksData = JSON.parse(localStorage.getItem('books'));
    booksData.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksData));
    window.location.reload();
  });
});

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');
const add = document.getElementById('add-book');

add.addEventListener('click', () => {
  booksData = JSON.parse(localStorage.getItem('books'));
  const book = {
    id: 0,
    title: '',
    author: '',
  };
  book.id = booksData.length + 1;
  book.title = inputTitle.value;
  book.author = inputAuthor.value;
  booksData.push(book);
  localStorage.setItem('books', JSON.stringify(booksData));
});
