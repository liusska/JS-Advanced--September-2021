function subtract() {
    const number1 = document.getElementById("firstNumber").value;
    const number2 = document.getElementById("secondNumber").value;
    let result = document.getElementById("result")
    result.innerHTML  = (Number(number1) - Number(number2)).toString();

}