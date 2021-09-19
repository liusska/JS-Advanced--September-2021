function evenPosition(strings) {
    const elements = [];

    for (let i = 0; i < strings.length; i += 2) {
        elements.push(strings[i]);
    }
    console.log(elements.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);