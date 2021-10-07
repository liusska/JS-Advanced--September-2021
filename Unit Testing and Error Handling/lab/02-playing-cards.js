function cards(card, suit){
    const cardsList = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }


    if(cardsList.includes(card) && Object.keys(suits).includes(suit)) {
        return `${card}${suits[suit]}`;
    }else {
        throw new Error('Error');
    }
}

console.log(cards('A', 'S').toString());
console.log(cards('10', 'H'));
console.log(cards('1', 'C'));