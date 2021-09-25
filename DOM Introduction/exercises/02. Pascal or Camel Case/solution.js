function solve() {
    const text = (document.getElementById('text').value).split(' ');
    const convertTo = document.getElementById('naming-convention').value;

    let result = ''

    if (convertTo === 'Camel Case'){
        result += text[0].toLowerCase();
        let rest = text.slice(1, text.length);
        for (let word of rest){
            result += word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
        }

    }else if (convertTo === 'Pascal Case'){
        for (let word of text){
            result += word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
        }

    }else{
        result = 'Error!'
    }

    document.getElementById('result').innerHTML = result;
}