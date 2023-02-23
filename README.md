# FoundationMIlestone_BookshelfApp
Getting Started
Make sure you still have access to your Bookshelf App repository.
Read through the specs carefully so you know what to build.
Success Metrics (Rubric)
You are free to write the code how you would like, as long as your final product meets the following requirements:

General Code
Design choices are explained and documented in comments.
DOM elements are styled via CSS.

Add Books
Users can enter book title, author, subjects, language and add new Books.
The Bookshelf instance is updated accordingly.
The Bookshelf instance renders Books accurately.

Navigation
A Navigation Bar is included in the web app with links to other parts of the site e.g. "About", "Contact". 
No real information is required. Dummy data or lorum ipsum is fine!

Comments 
Users can leave comments no longer than 280 characters on any Book they want. 
Users can press a "Comment" button which reveals a `text` input element.
Users can then type their comment and click "send" to add it to the Book.
Comments should be represented by HTML elements on the page.
The Book and Bookshelf instances are updated accordingly.
The comments persist even if a search or sort rerenders the Books.
Data can be stored locally or in state memory. A database is not required. 

****Dev Notes

-I was able to get the core functions in and used a few different types of popups to achieve the results I was looking for. 
-I did not want a big block of text field sitting on the page for making a new book so I found a way to build a hidden pop up form combining html and css
    that pops the form, and entry can be done to build a book and gets added to the bookshelf
-I set the list to be alphabetized as thats just how I see any library doing it, then when I added the lil robot story element, even more so
-kept in search functions to comply with the original rubric criteria and I wanted to see if I could make the comments stay after a search. 
    I acctually messed this up initially and had to adjust the code to make the comment more connected to the book not just appear below it
-I used my info button I had from the original assignment as I prefer that to having all the book info constantly on the page
-Added the comment popup
-borrowed navigation elements from my first project and a fun throwback on the connect page.