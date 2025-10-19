//Try creating a json object variable for a book. The book should have a title, description, author and number of pages//

let book = {
  title: "India Positive",
  description:
    "Bestselling author and columnist brings together essays that work as a manifesto for change.",
  author: "Chetan Bhagat",
  numberOfPages: "216",
};

//Try printing these object property values in your console individually and via the whole book object//

console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.numberOfPages);

console.log(book);

//Update the description of the book//

book.description = "This book is a collection of essays about bringing change.";

//Extension: Create an array of 5 book objects//

let bookArray = [
  {
    title: "11 Rules for Life",
    description: "If one book can change your life, this is it.",
    author: "Chetan Bhagat",
    numberOfPages: "256",
  },
  {
    title: "400 Days",
    description: "A mystery and romance story like none other.",
    author: "Chetan Bhagat",
    numberOfPages: "356",
  },
  {
    title: "One Arranged Murder",
    description:
      "an unputdownable thriller from India’s highest-selling author.",
    author: "Chetan Bhagat",
    numberOfPages: "356",
  },
  {
    title: "One Indian Girl",
    description:
      "A story about love, dreams, career and feminism in modern India.",
    author: "Chetan Bhagat",
    numberOfPages: "250",
  },
  {
    title: "What Young India Wants",
    description:
      "A compilation of Selected Essays and Columns written by Chetan Bhagat.",
    author: "Chetan Bhagat",
    numberOfPages: "181",
  },
];
