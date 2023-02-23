//starting with core from previous bookshelf
const theShelf = new Bookshelf()

// theShelf.addBook(testBook) //remove this test book when done using
theShelf.addStack(bookData)
theShelf.sortAtoZ() //sorting form the front to put the books in alphabetical order
theShelf.shelfStocker()


//used this to get the search function working
const userInput = document.querySelector('.userInput');
const searchButton = document.querySelector('.search');
const bookList = document.querySelector('.books');

searchButton.addEventListener('click', function() {
    if (userInput.value) {
        // const bookList = document.querySelector('.books');
        bookList.innerHTML = "";
        theShelf.search(userInput.value);
    } else {
        // const bookList = document.querySelector('.books');
        bookList.innerHTML = "";
        theShelf.shelfStocker();
    }
})


//building out function to get the add book popup to work

function newBookForm() {
  document.getElementById("addBookPopup").style.display = "block";
}
function closeBookForm() {
  document.getElementById("addBookPopup").style.display = "none";
}

const newBookToShelf = document.querySelector('.completeBook');
const titleInput = document.getElementById('newTitle');
const authorInput = document.getElementById('newAuthor');
const subjetInput = document.getElementById('newSubject');
const languageInput = document.getElementById('newLanguage');

newBookToShelf.addEventListener('click', function() {
    event.preventDefault();
    let authorArray = [authorInput.value];//had to add these 2 lines to adjust the string values into arrays to match way other books are built and to function propertly in my search method
    let subjectArray = [subjetInput.value];
    let bookToAdd = new Book(authorArray, languageInput.value, subjectArray, titleInput.value)
    theShelf.addBook(bookToAdd);
    bookList.innerHTML = "";
    theShelf.sortAtoZ();
    theShelf.shelfStocker();
    document.getElementById("addBookPopup").style.display = "none";
})


