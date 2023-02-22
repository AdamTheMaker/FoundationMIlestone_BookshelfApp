// this will house the books and bookshelf functionality

//book class
class Book {
    constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.allComments = [] //added from previous versions to facilitate comments remaining past re-render(see below on the commentButton.addEventListener)
    }

    render() {
        const listing = document.createElement('li');

        const binding = document.createElement('div');
        binding.classList.add('book');
        
        const infoButton = document.createElement('button')
        infoButton.textContent = 'Info';
        infoButton.classList.add('moreInfo')
        infoButton.addEventListener('click', function() {
            window.alert(`Title: ${this.title}\nAuthor: ${this.author}\nLanguage: ${this.language}\nSubject: ${this.subject}`);
        }.bind(this)); 

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = this.title;

        const bookAuthor = document.createElement('h4');
        bookAuthor.textContent = ` b. ${this.author}`;
        
        //comments - going to try and do a button that triggers a popup where you can input the comment and then it adds below the visualized book on the page
        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        
        const commentList = document.createElement('ul');
        commentList.classList.add('comments');
        
        //this is the 2nd form of my comments add event listener. Originally generating comments and posting just below the visualized book as intended and as it still looks
        //but when I added in my sort and search ability, the comments did not persist upon re-render. so adding a key to the class that housed the comments in an array
        //and then could be rendered with the book after a search or sort
        commentButton.addEventListener('click', function(){
            let comments = prompt(`leave a comment about ${this.title} (only 280 characters will be kept):`, '');
            if (comments == null || comments =="") {
                window.alert('you have left no comment')
            } else {
                comments = comments.substring(0, 280); //using this type of popup this was the best method I found to cut the comment to 280
                this.allComments.push(comments);
                commentList.innerHTML = '';
                this.allComments.forEach((comment) => {
                    const commentPost = document.createElement('li');
                    commentPost.textContent = comment;
                    commentList.append(commentPost)
                })
            }
        }.bind(this))
        
        //if statement to render any comments that have been added to the book once a sort/search has been performed

        if(this.allComments.length > 0) {
            this.allComments.forEach((comment) => {
                const commentPost = document.createElement('li');
                commentPost.textContent = comment;
                commentList.append(commentPost)
            })
        }

        binding.append(bookTitle);
        binding.append(bookAuthor);
        binding.append(infoButton)
        binding.append(commentButton);
        listing.append(binding);
        listing.append(commentList)

        return listing;

    }
}


class Bookshelf {
    constructor() {
        this.shelf = [];
    }
    
    addBook(book) {
        this.shelf.push(book);
    }

    addStack(newStack) {
        newStack.map(nextBook => {
            let builtBook = new Book(nextBook.author, nextBook.language, nextBook.subject, nextBook.title);
            this.shelf.push(builtBook)
        })
    }
    
    shelfStocker() {
        this.shelf.map((element) => document.querySelector('.books').append(element.render()))
    }
    
    // These features are not needed for the final but may impliment anyway if I decide to
    
    sortAtoZ() {
            this.shelf.sort((a, b) => a.title.localeCompare(b.title));
        }
        
    search(query) {
        const matchingBooks = this.shelf.filter((book) => {
            let matchTitle = book.title.toLowerCase().includes(query.toLowerCase());//using includes and lowercase everything to ensure no issues with capitalization impacting searches
            let authorString = book.author.join(' ');//used join to combine strings so could use previous methods to search without having to move through each index in the array
            let matchAuthor = authorString.toLowerCase().includes(query.toLowerCase());
            let subjectString = book.subject.join(" ");
            let matchSubject = subjectString.toLowerCase().includes(query.toLowerCase());
            return matchTitle || matchAuthor || matchSubject;
        });
        const bookList = document.querySelector('.books');
        bookList.innerHTML = "";
        matchingBooks.forEach((book) =>{
            const bookElement = book.render();
        bookList.appendChild(bookElement);
    })
    }
    
}

//code used to test and console out functions to ensure code was working
const testBook = new Book(["Bojoh, Adam"], 'en', ['Fantasy', 'Fiction'], 'A Amazing Storys of my Youth')
console.log(testBook)