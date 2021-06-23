function strLen(str1, str2, str3){
    let avgLength;
    let sumLength;

    let firstLength = str1.length
    let secondLength = str2.length
    let thirdLength = str3.length

    sumLength = firstLength + secondLength + thirdLength
    avgLength = Math.floor(sumLength / 3)

    console.log(sumLength)
    console.log(avgLength)
}

strLen('chocolate', 'ice cream', 'cake')
strLen('pasta', '5', '22.3')