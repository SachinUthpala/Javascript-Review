const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//calling get book function
let books = getBooks();
console.log(books);

/*
(5) [{…}, {…}, {…}, {…}, {…}]
*/

//calling get boook by Id
let book = getBook(2);
console.log(book.title);
//The Cyberiad


const {title , genres} = book;
console.log(genres);

/*

(5) ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy']
0
: 
"science fiction"
1
: 
"humor"
2
: 
"speculative fiction"
3
: 
"short stories"
4
: 
"fantasy"
length
: 
5
[[Prototype]]
: 
Array(0)


*/
const book2 = getBook(3);
const [primaryGerner , secondaryGerner] = book2.genres;
console.log(primaryGerner , secondaryGerner);

//spred operator
const newGernerous = ["New One" , ...book2.genres];
console.log(newGernerous);

//update books
const updateBook = {
  ...book2,
  publicationDate: "1967-01-01",
  title : "nothing"
}

console.log(updateBook);


const book3 = getBook(2);
console.log(book3.pages);
const Boo3Pages = book3.pages;


//This is known as ternary operator
Boo3Pages > 1000 ? console.log("More Than 1000 Pages") :console.log( "Lesst than 1000 pages");

//logical operators
console.log(true && "Hello This is true");

//or operator
console.log(book2.translations.spanish);

console.log(book2.translations.spanish || "DONT HAVE TRANSLATION");

const translations = book2.translations.bengali || "DNOT HAVE TRANSLATION";
translations 

//optinal chaing
function getReview(book){
  const goodReview = book.reviews.goodreads?.reviewsCount;
  const libryAnything = book.reviews.librarything?.reviewsCount  ??  0;
  return goodReview + libryAnything ;
}

console.log(getReview(book2));