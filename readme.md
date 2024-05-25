Some Genaral Java Script to Reacct

1. Destructing
2. Spred Perator
======
const newGernerous = ["New One" , ...book2.genres];
console.log(newGernerous);
=======

Functions created by me : - 

//calling get book function
let books = getBooks();
console.log(books);

//calling get boook by Id
let book = getBook(2);
console.log(book.title);

const {title , genres} = book;
console.log(genres);

const book2 = getBook(2);
const [primaryGerner , secondaryGerner] = book2.genres;
console.log(primaryGerner , secondaryGerner);

//spred operator
const newGernerous = ["New One" , ...book2.genres];
console.log(newGernerous);


=========== spred operate use to update =========

const updateBook = {
  ...book2,
  publicationDate: "1967-01-01",
  title : "nothing"
}

console.log(updateBook);

=========== End ====================

======== Ternary Operator =========
Boo3Pages > 1000 ? console.log("More Than 1000 Pages") :console.log( "Lesst than 1000 pages");
========== End ==============



======== optional chaing =======
//optinal chaing
function getReview(book){
  const goodReview = book.reviews.goodreads?.reviewsCount;
  const libryAnything = book.reviews.librarything?.reviewsCount  ??  0;
  return goodReview + libryAnything ;
}

console.log(getReview(book2));
