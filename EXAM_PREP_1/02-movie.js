class Movie{
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this._profit = 0;
        this._soldTickets = 0;
    }

    newScreening(date, hall, description){
        for (let screening of this.screenings){
            if(screening[0] === date && screening[1] === hall){
                throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
            }
        }
        this.screenings.push([date, hall, description]);
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets){

        for (let screening of this.screenings){
            if (screening[0] === date && screening[1] === hall){
                const currentProfit = Number(soldTickets) * this.ticketPrice;
                this._soldTickets += Number(soldTickets);
                this._profit += currentProfit;
                this.screenings = this.screenings.filter(el => el !== screening);
                return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit.toFixed(0)}`;
            }
        }
        throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
    }

    toString(){
        let result = `${this.movieName} full information:\nTotal profit: ${this._profit.toFixed(0)}$\nSold Tickets: ${this._soldTickets}`
        if (this.screenings.length > 0){
            result += `\nRemaining film screenings:`
            this.screenings
                .sort((a, b) => a[1].localeCompare(b[1]))
                .forEach((screening) => {
                    result += `\n${screening[1]} - ${screening[0]} - ${screening[2]}`
                });
        }else{
            result += `\nNo more screenings!`
        }
        return result;
    }
}