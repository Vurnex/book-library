let myLibrary = [];

function getInputs() {

    const newTitle = document.getElementById('#bookTitle').value;
    const newAuthor = document.getElementById('#bookAuthor').value;
    const newPageNum = document.getElementById('#pageNum').value;
    const newReadStatus = document.getElementById('#flexSwitchCheckDefault').checked;
}

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

const nextBook = new Book('New Title', 'New Author', 100, false);


function addBooksToLibrary() {


}