const library = require('../03/library');
const assert = require('chai').assert;


describe("Tests library functionality", function() {
    describe("test calcPriceOfBook (nameOfBook, year) ", function() {
        it("test different cases of input", function() {
            assert.equal(library.calcPriceOfBook('book', 2021), `Price of book is 20.00`);
            assert.equal(library.calcPriceOfBook('book', 1800), `Price of book is 10.00`);
            assert.equal(library.calcPriceOfBook('book', 1980), `Price of book is 10.00`);
            assert.throw(() => library.calcPriceOfBook(2, 2021), 'Invalid input');
            assert.throw(() => library.calcPriceOfBook('book', 12.5), 'Invalid input');
            assert.throw(() => library.calcPriceOfBook('book', '2021'), 'Invalid input');
            assert.throw(() => library.calcPriceOfBook({}, '2021'), 'Invalid input');
        });
    });

    describe("test findBook (booksArr, desiredBook) ", function() {
        it("test different cases of input", function() {
           assert.throw(() => library.findBook([], 'book'), "No books currently available");
           assert.equal(library.findBook(['book1', 'book2', 'book3'], 'book3'), "We found the book you want.");
           assert.equal(library.findBook(['book1', 'book2'], 'noBook'), "The book you are looking for is not here!");

        });
    });

    describe("test arrangeTheBooks(countBooks) ", function() {
        it("test different cases of input", function() {
            assert.throw(() => library.arrangeTheBooks(-1), "Invalid input");
            assert.throw(() => library.arrangeTheBooks('a'), "Invalid input");
            assert.equal(library.arrangeTheBooks(10), "Great job, the books are arranged.")
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.")
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.")

        });
    });

});
