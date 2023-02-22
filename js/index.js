// this is where the code that will be ran to activate contents from other js pages

const theShelf = new Bookshelf()
// theShelf.sortAtoZ()

theShelf.addBook(testBook)
theShelf.addStack(bookData)


theShelf.shelfStocker()


//used this to get the search function working
const userInput = document.querySelector('.userInput');
const searchButton = document.querySelector('.search');

searchButton.addEventListener('click', function() {
    if (userInput.value) {
        const bookList = document.querySelector('.books');
        bookList.innerHTML = "";
        theShelf.search(userInput.value);
    } else {
        const bookList = document.querySelector('.books');
        bookList.innerHTML = "";
        theShelf.shelfStocker();
    }
})