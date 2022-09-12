let myLibrary = [];

document.getElementById('submit-btn').addEventListener("click", function() {

    const newTitle = document.getElementById('bookTitle').value;
    const newAuthor = document.getElementById('bookAuthor').value;
    const newPageNum = document.getElementById('pageNum').value;
    const newReadStatus = document.getElementById('flexSwitchCheckDefault').checked;

    //console.log(newTitle + "\n" + newAuthor + "\n" + newPageNum + "\n" + newReadStatus)

    const nextBook = new Book(newTitle, newAuthor, newPageNum, newReadStatus);

    console.log(nextBook);

    addBooksToLibrary(nextBook);

 });

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBooksToLibrary(nextBook) {

    myLibrary.push(nextBook);

    console.table(myLibrary);
}