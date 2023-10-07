"use strict";

let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

const addBook = (title, author, libraryID) => {
    let book = {
        title,
        author,
        libraryID
    };
    libraryBooks.push(book);
    return book;
}

const getTitles = () => 
    libraryBooks.map(book => book.title);

const findBooks = keyword => libraryBooks
        .filter(book => book.title.includes(keyword))
        .sort(book1 =>  book1.author);




