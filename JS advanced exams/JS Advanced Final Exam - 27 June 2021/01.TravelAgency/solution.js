window.addEventListener('load', solution);

function solution() {
    let fullNameInput = document.getElementById('fname');
    let emailInput = document.getElementById('email');
    let phoneNumberInput = document.getElementById('phone');
    let addressInput = document.getElementById('address');
    let postalCodeInput = document.getElementById('code');

    const submitBTN = document.getElementById('submitBTN');
    submitBTN.addEventListener('click', submitInformation);

    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');
    continueBtn.addEventListener('click', continueInformation);

    const previewSection = document.getElementById('infoPreview');

    function submitInformation(e){
        e.preventDefault();
        let fullName = fullNameInput.value;
        let email = emailInput.value;
        let phoneNumber = phoneNumberInput.value;
        let address = addressInput.value;
        let postalCode = postalCodeInput.value;

        if(fullNameInput.value !== '' && emailInput.value !== ''){
            previewSection.innerHTML = `<li>Full Name: ${fullNameInput.value}</li>
                                        <li>Email: ${emailInput.value}</li>
                                        <li>Phone Number: ${phoneNumberInput.value}</li>
                                        <li>Address: ${addressInput.value}</li>
                                        <li>Postal Code: ${postalCodeInput.value}</li>`


            fullNameInput.value = '';
            emailInput.value = '';
            phoneNumberInput.value = '';
            addressInput.value = '';
            postalCodeInput.value = '';

            submitBTN.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;


            editBtn.addEventListener('click', editInformation);

        }
        function editInformation(){
            previewSection.innerHTML = '';

            fullNameInput.value = fullName;
            emailInput.value = email;
            phoneNumberInput.value = phoneNumber;
            addressInput.value = address;
            postalCodeInput.value = postalCode;

            submitBTN.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;
        }
    }
    function continueInformation(){
        let blockElement = document.getElementById('block');
        blockElement.innerHTML = `<h3>Thank you for your reservation!</h3>`
    }
}