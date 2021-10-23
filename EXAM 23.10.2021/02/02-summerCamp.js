class SummerCamp{
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }
    registerParticipant (name, condition, money){
        money = Number(money);
        if(!(this.priceForTheCamp.hasOwnProperty(condition))){
            throw new Error("Unsuccessful registration at the camp.")
        }
        const existParticipant = this.listOfParticipants.find(n => n.name === name);
        if(existParticipant){
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`;
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        const existParticipant = this.listOfParticipants.find(n => n.name === name);
        // try{
        //     this.listOfParticipants = this.listOfParticipants.filter(n => n.name !== name);
        //     return `The ${name} removed successfully.`
        // } catch (error){
        //     error.message(`The ${name} is not registered in the camp.`);
        // }
        if(!existParticipant){
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants = this.listOfParticipants.filter(n => n.name !== name);
        return `The ${name} removed successfully.`
    }


    timeToPlay (typeOfGame, participant1, participant2){
        let first_participant;
        let second_participant;

        if (typeOfGame === 'WaterBalloonFights'){
            first_participant = this.listOfParticipants.find(n => n.name === participant1);
            second_participant = this.listOfParticipants.find(n => n.name === participant2);
            if (!first_participant || !second_participant){
                throw new Error(`Invalid entered name/s.`)
            }
            if(first_participant.condition !== second_participant.condition){
                throw new Error(`Choose players with equal condition.`);
            }
            if(first_participant.power > second_participant.power){
                first_participant.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            }else if (second_participant.power > first_participant.power){
                second_participant.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }else {
                return `There is no winner.`
            }

        }else if(typeOfGame === 'Battleship'){
            first_participant = this.listOfParticipants.find(n => n.name === participant1);
            if (!first_participant){
                throw new Error(`Invalid entered name/s.`)
            }
            first_participant.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString(){
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants
            .sort((p1, p2) => p2.wins - p1.wins)
            .forEach(p => {
                result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
            });
        return result.join('\n');
    }

}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
//
// console.log(summerCamp.toString());
