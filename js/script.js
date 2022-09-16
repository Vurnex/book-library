let myLibrary = [];

let cardContainer = document.getElementById("container-main");

document.getElementById('submit-btn').addEventListener("click", function() {

    const newTitle = document.getElementById('bookTitle').value;
    const newAuthor = document.getElementById('bookAuthor').value;
    const newBkDesc = document.getElementById('bookDesc').value;
    const newPageNum = document.getElementById('pageNum').value;
    const newReadStatus = document.getElementById('flexSwitchCheckDefault').checked;

    //console.log(newTitle + "\n" + newAuthor + "\n" + newPageNum + "\n" + newReadStatus)

    const nextBook = new Book(newTitle, newAuthor, newBkDesc, newPageNum, newReadStatus);

    //console.log(nextBook);

    addBooksToLibrary(nextBook);

});

document.addEventListener('click', function(e) {

    if(e.target && e.target.id== 'readButton') {
          alert("Test");
          e.target.classList.toggle("crossmark");
          e.target.classList.toggle("checkmark");
     }
 });

 document.addEventListener('click', function(e) {

    if(e.target && e.target.id== 'removeButton') {
          alert("Test Rem");
     }
 });

function Book(title, author, description, pages, read) {

    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.read = read;

}

function addBooksToLibrary(nextBook) {

    myLibrary.push(nextBook);

    const updateDisplay = document.getElementById('container-main');
    const selectCards = document.querySelectorAll('.card');
    selectCards.forEach(book => updateDisplay.removeChild(book));

    for (let i=0; i<myLibrary.length; i++){
        addCards(myLibrary[i]);
    }

}

function addCards(newBook) {

    let firstElement = document.createElement('div');
    let secondElement = document.createElement('div');

    let header = document.createElement('h5');
    let firstPara = document.createElement('p');
    let secondPara = document.createElement('p');
    let thirdPara = document.createElement('p');

    let buttonContainer = document.createElement('div');

    let firstButton = document.createElement('a');
    let secondButton = document.createElement('a');

    const getReadStatus = document.getElementById('flexSwitchCheckDefault').checked;

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

    firstPara.classList.add("card-text");

    secondPara.classList.add("card-text");

    buttonContainer.classList.add("btn-container");

    firstButton.classList.add("btn", "btn-primary", "cross-mark");
    firstButton.setAttribute("href", "#");
    firstButton.setAttribute("id", "readButton");
    firstButton.textContent = "Read";

    secondButton.classList.add("btn", "btn-primary");
    secondButton.setAttribute("href", "#");
    secondButton.setAttribute("id", "removeButton");
    secondButton.textContent = "Remove";

    header.textContent = newBook.title;
    firstPara.textContent = newBook.author;
    secondPara.textContent = newBook.description;
    thirdPara.textContent = newBook.pages;

    if (getReadStatus == true) {

        firstButton.textContent = "Read (Y)";
    }

}