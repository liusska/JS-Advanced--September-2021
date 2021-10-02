function deleteByEmail() {
    let emailsList = document.querySelectorAll('td:nth-child(2)');
    let arrEmailList = Array.from(emailsList).map(el => el.innerText);
    let inputElement = document.querySelector('input[name]').value;
    let messageOperation = document.getElementById('result');

    if (arrEmailList.includes(inputElement)){
        let searchedElement = Array.from(emailsList).filter(x=> x.innerText === inputElement)[0];
        searchedElement.parentElement.remove();

        messageOperation.textContent = 'Deleted.'

    }else{
        messageOperation.textContent = 'Not found.'
    }
    inputElement = '';
}