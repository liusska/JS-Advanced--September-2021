function solve2() {
    const [name, age, kind, owner] = Array.from(document.querySelectorAll('#container input'));
    const addBtn = document.querySelector('#container button');
    const adoptionSection = document.querySelector('#adoption ul');
    const adoptedSection = document.querySelector('#adopted ul');
    let petInfo;
    addBtn.addEventListener('click', addPet);

    function addPet(e){
        e.preventDefault();
        if (name.value.trim() === '' || age.value.trim() === '' || isNaN(Number(age.value)) || kind.value.trim() === '' || owner.value.trim() === ''){
            return;
        }
        petInfo = document.createElement('li');
        petInfo.innerHTML =
            `<p><strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong></p>
                <span>Owner: ${owner.value}</span>
                <button>Contact with owner</button>`
        adoptionSection.appendChild(petInfo);
        name.value = '';
        age.value = '';
        kind.value = '';
        owner.value = '';

        const contactOwnerBtn = petInfo.querySelector('li button');
        contactOwnerBtn.addEventListener('click', contactWithOwner);

    }

    function contactWithOwner(e){
        const pet = e.target.parentElement.querySelector('p');
        let petButton = petInfo.querySelector('button:nth-of-type(1)');
        petButton.remove();
        const divInfo = document.createElement('div');
        divInfo.innerHTML =
            `<input placeholder="Enter your names"><button>Yes! I take it!</button>`
        pet.appendChild(divInfo);
        petInfo = pet;

        const takePetBtn = petInfo.querySelector('button');
        takePetBtn.addEventListener('click', takePet);

    }
    function takePet(e){
        const newOwner = petInfo.querySelector('input');
        if (newOwner.value === ''){
            return;
        }
        const adoptedPet = e.target.parentElement.parentElement.parentElement;
        const newOwnerContent = adoptedPet.querySelector('span');
        const inputField = adoptedPet.querySelector('input');
        const buttonValue = adoptedPet.querySelector('button');
        inputField.remove();
        buttonValue.textContent = 'Checked';
        newOwnerContent.textContent = `New Owner: ${newOwner.value}`;
        adoptedSection.appendChild(adoptedPet);
        buttonValue.addEventListener('click', removePet);
    }

    function removePet(e){
        const petToRemove = e.target.parentElement.parentElement.parentElement;
        petToRemove.remove();
    }

}