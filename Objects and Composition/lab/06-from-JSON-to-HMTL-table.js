function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    function makeKeyRow(arr) {
        let result = '<tr>'
        for (let ar of arr){
            for (let a in ar){
                result += `<th>${a}</th>`;
            }
            break;
        }
        result += '</tr>'
        return result
    }
    function makeValueRow(obj) {
        let result = '<tr>'
        for (let data in obj){

            result += `<td>${obj[data]}</td>`
        }
        result += '</tr>';
        return result
    }
    function escapeHtml(value) {
        return value;
    }
    console.log(outputArr.join('\n'));
}

JsonToHtmlTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
)

console.log('-----------------')

JsonToHtmlTable(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
)