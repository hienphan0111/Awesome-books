const books = [
  {
    title : 'book 1',
    author: 'author 1',
  },
  {
    title : 'book 2',
    author: 'author 2',
  },
  {
    title : 'book 3',
    author: 'author 3',
  },
  {
    title : 'book 4',
    author: 'author 4',
  },
];

const booksEle = document.querySelector('.books');
const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');

const renderBook = (book) => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book');
  const html = `
    <p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button class="remove">Remove</button>
    <hr>
  `
  bookItem.innerHTML = html;
  booksEle.appendChild(bookItem);
}