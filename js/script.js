import { bookList } from "./data/books.js";

const container = document.querySelector("ul");


let books = bookList;

function createBooks() {
books.forEach (function (book) {
   container.innerHTML +=   `<div class="book">
                             <li>
                             <h4>${book.isbn}</h4> 
                            <p>${book.title}</p>
                             <button data-book="${book.title}">Remove</button>
                            </li>
                            </div>`;
});

const button = document.querySelectorAll("li button");

button.forEach(function(can) {
    can.addEventListener("click", removeBooks);
});


function removeBooks(event) {
    console.log(event);

const removeBook = event.target.dataset.book;
if (removeBook !== "${book") {
    return true;
}
    }
}
createBooks();
