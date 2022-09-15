let myLibrary = [];

let cardContainer = document.getElementById("container-main");

document.getElementById('submit-btn').addEventListener("click", function() {

    const newTitle = document.getElementById('bookTitle').value;
    const newAuthor = document.getElementById('bookAuthor').value;
    const newPageNum = document.getElementById('pageNum').value;
    const newReadStatus = document.getElementById('flexSwitchCheckDefault').checked;

    //console.log(newTitle + "\n" + newAuthor + "\n" + newPageNum + "\n" + newReadStatus)

    const nextBook = new Book(newTitle, newAuthor, newPageNum, newReadStatus);

    //console.log(nextBook);

    addCards();

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

function addCards() {

    let firstElement = document.createElement('div');
    let secondElement = document.createElement('div');

    let header = document.createElement('h5');
    let firstPara = document.createElement('p');
    let secondPara = document.createElement('p');
    let thirdPara = document.createElement('p');

    let buttonContainer = document.createElement('div');

    let firstButton = document.createElement('a');
    let secondButton = document.createElement('a');

    //Add child elements to card

    cardContainer.appendChild(firstElement);

    firstElement.classList.add("card", "text-center", "shadow");
    firstElement.appendChild(secondElement);

    secondElement.classList.add("card-body");
    secondElement.appendChild(header);
    secondElement.appendChild(firstPara);
    secondElement.appendChild(secondPara);
    secondElement.appendChild(thirdPara);

    secondElement.appendChild(buttonContainer);

    buttonContainer.appendChild(firstButton);
    buttonContainer.appendChild(secondButton);

    header.classList.add("card-title");
    header.textContent = "Book Title";

    firstPara.classList.add("card-text");
    firstPara.textContent = "Book Author";

    secondPara.classList.add("card-text");
    secondPara.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

    thirdPara.textContent = "Page Number";

    buttonContainer.classList.add("btn-container");

    firstButton.classList.add("btn", "btn-primary");
    firstButton.setAttribute("href", "#");
    firstButton.textContent = "Read (x)";

    secondButton.classList.add("btn", "btn-primary");
    secondButton.setAttribute("href", "#");
    secondButton.textContent = "Remove";

}