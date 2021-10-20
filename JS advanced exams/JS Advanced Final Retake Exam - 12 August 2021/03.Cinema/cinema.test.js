const cinema = require('../03.Cinema/cinema');
const assert = require("chai").assert;

describe("Tests …", function() {
    describe("showMovies", function() {
        it("test showMovies functionality", function() {
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']),'King Kong, The Tomorrow War, Joker');
            assert.equal(cinema.showMovies(['1', '2', '3']),'1, 2, 3');
            assert.equal(cinema.showMovies([{}, {}, '3']),'[object Object], [object Object], 3');
            assert.equal(cinema.showMovies([1, 2, 3, 4, 5]),'1, 2, 3, 4, 5');
            assert.equal(cinema.showMovies([]), "There are currently no movies to show.");
            assert.equal(cinema.showMovies([20]), "20");
            assert.equal(cinema.showMovies([""]), "");
        });
    });

    describe("ticketPrice", function() {
        it("test ticketPrice functionality", function() {
            assert.equal(cinema.ticketPrice("Premiere"), 12.00);
            assert.equal(cinema.ticketPrice("Normal"), 7.50);
            assert.equal(cinema.ticketPrice("Discount"), 5.50);

            assert.throw(() => cinema.ticketPrice({}));
            assert.throw(() => cinema.ticketPrice(5));
            assert.throw(() => cinema.ticketPrice("noTicketValue"));
            assert.throw(() => cinema.ticketPrice(""));
            assert.throw(() => cinema.ticketPrice());
        });
    });

    describe("swapSeatsInHall", function() {
        it("TODO …", function() {
            assert.equal(cinema.swapSeatsInHall(-5, 5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-5, -8), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(15, -5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(0, 6), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(6, 0), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(15, 25), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(25, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(12, 12), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('a', 18), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('a', []), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall("15", "5"), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('15'), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(25, 25), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(), 'Unsuccessful change of seats in the hall.');


            assert.equal(cinema.swapSeatsInHall(18, 15), 'Successful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, 20), 'Successful change of seats in the hall.');

        });
    });

});
