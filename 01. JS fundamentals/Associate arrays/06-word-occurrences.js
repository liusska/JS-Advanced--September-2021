function solve(arr){
    let wordsCount = new Map();

    for (let word of arr){
        if(!wordsCount.has(word)){
            wordsCount.set(word, 0);
        }
        let count = wordsCount.get(word) + 1;
        wordsCount.set(word, count);
    }

    return Array.from(wordsCount)
        .sort((a, b) => b[1] - a[1])
        .forEach(a => console.log(`${a[0]} -> ${a[1]} times`))
}

solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);