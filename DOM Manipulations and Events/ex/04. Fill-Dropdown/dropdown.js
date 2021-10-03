function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let selectMenu = document.getElementById('menu');

    let optionTag = document.createElement('option');
    optionTag["value"] = newItemValue.value;
    optionTag.textContent = newItemText.value;

    selectMenu.appendChild(optionTag);

    newItemText.value = '';
    newItemValue.value = '';
}

