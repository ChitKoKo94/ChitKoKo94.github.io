"use strict";

let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

const addBook = (title, author, libraryID) => {
    const book = {
        title,
        author,
        libraryID
    };
    libraryBooks.push(book);
    return book;
}

const getTitles = () => {
    return libraryBooks
        .map(book => book.title)
        .sort((title1, title2) => title1.localeCompare(title2));
};

const findBooks = keyword => libraryBooks
        .filter(book => book.title.includes(keyword))
        .sort((book1, book2) =>  book1.author.localeCompare(book2.author));




