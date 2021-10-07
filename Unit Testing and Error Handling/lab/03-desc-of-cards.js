function printDeckOfCards(arr) {

    const cardsList = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    function createCard (){
        const result = [];

        for (let combination of arr) {
            let card;
            let suit;
            let tokens = Array.from(combination);
            if (tokens.length > 2){
                card = `${tokens[0]}${tokens[1]}`;
                suit = tokens[2]
            }else{
                card = tokens[0];
                suit = tokens[1];
            }

            if (cardsList.includes(card) && Object.keys(suits).includes(suit)) {
                let el = `${card}${suits[suit]}`
                result.push(el);
            } else {
                return `Invalid card: ${combination}`
            }
        }

        return result.join(" ");
    }

    console.log(createCard());
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);