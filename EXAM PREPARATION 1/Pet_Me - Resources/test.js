//Zero Test - click Conect with owner
document.body.innerHTML = `<h1>Pet Me!</h1>
    <p>Want to adopt a pet or need to rehome a dog or cat?</p>
    <p>Here we can help!</p>
    <form id="add">
        <h2>Add New Pet</h2>
        <div id='container'>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Age" />
            <input type="text" placeholder="Kind" />
            <input type="text" placeholder="Current Owner" />
            <button>Add</button>
        </div>
    </form>
    <section id="adoption">
        <h2>Find a new friend from here:</h2>
        <ul></ul>
    </section>
    <section id="adopted">
        <h2>Buddies with a new home:</h2>
        <ul></ul> 
    </section>
    <script>document.onload = solve();</script>`;


result();

const form = document.getElementById('container');
let [name, age, kind, owner, addBtn] = Array.from(form.children);

name.value = 'Tom';
age.value = '0.3';
kind.value = 'cat';
owner.value = 'Jim King';

addBtn.click();
let newLiItem = Array.from(document.querySelector("#adoption > ul").children)[0];
let [p, span, btn] = Array.from(newLiItem.children); // [p, span, btn]

btn.click();

let [pNew, spanNew, div] = Array.from(Array.from(document.querySelector("#adoption > ul").children)[0].children); // [p, span, x]

let [ newInput, newBtn ] = Array.from(div.children);
expect(div.tagName).to.be.equal("DIV", 'New DIV element shoud appear');
expect(newInput.tagName).to.be.equal("INPUT", 'New DIV element shoud appear');
expect(newBtn.tagName).to.be.equal("BUTTON", 'New DIV element shoud appear');

expect(newInput.placeholder).to.be.equal("Enter your names", 'Check input placeholder - Enter your names');
expect(newBtn.textContent).to.be.equal("Yes! I take it!", 'The new button name is Yes! I take it!');
