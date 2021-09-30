function addItem() {
    let itemsList = document.getElementById('items');
    let newItemElement = document.createElement('li')
    let newInput = document.getElementById('newItemText');
    newItemElement.textContent = newInput.value;
    itemsList.appendChild(newItemElement);

    newInput.value = "";
}