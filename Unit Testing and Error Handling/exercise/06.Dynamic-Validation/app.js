function validate() {
    const inputField = document.getElementById("email");
    const emailRegexPattern = /(^[a-z]+@[a-z]+\.[a-z]+$)/;
    inputField.addEventListener("change", () => {
        if (!emailRegexPattern.test(inputField.value)){
            inputField.classList.add("error");
        }else {
            inputField.classList.remove("error");
        }
    });
}