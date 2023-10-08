describe("LIBRARY", function () {
    it ("addBook", function () {
        assert.deepEqual(addBook('Java', 'Someone', 999), 
            { title: "Java", author: "Someone", libraryID: 999 }
        );
    });
    
    it ("getTitles", function () { 
        assert.deepEqual(getTitles(), 
            [ 
                "Java",
                "Mockingjay: The Final Book of The Hunger Games", 
                "The Road Ahead", 
                "The Road Ahead", 
                "Walter Isaacson"
            ]
        );
    });

    it ("findBooks", function () {
        assert.deepEqual(findBooks('The'), 
            [
                { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
                { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
                { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
            ]
        );
    });
})

