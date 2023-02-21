// this is where the code that will be ran to activate contents from other js pages

const theShelf = new Bookshelf()
// theShelf.sortAtoZ()

theShelf.addBook(testBook)
theShelf.addStack(bookData)


theShelf.shelfStocker()

const userInput = document.querySelector('.userInput');
const sortButton = document.querySelector('.sorting');

sortButton.addEventListener('click', function() {
    if (userInput.value) {
        theShelf.search(userInput.value);
    } else {
        theShelf.shelfStocker();
    }
})