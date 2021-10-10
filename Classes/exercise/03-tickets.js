function getTickets(dataTrips, criteria){
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const trips = [];

    for (const ticket of dataTrips){
        [destination, price, status] = ticket.split("|");
        const trip = new Ticket(destination, Number(price), status);
        trips.push(trip);
    }
    switch (criteria){
        case 'destination':
            return trips.sort((a, b) => a.destination.localeCompare(b.destination));
        case 'price':
            return trips.sort((a, b) => a.price - b.price);
        case 'status':
            return trips.sort((a, b) => a.status.localeCompare(b.status));
    }

}

console.log(getTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
))