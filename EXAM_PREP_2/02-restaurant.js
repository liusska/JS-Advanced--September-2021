class Restaurant{
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products){
        for(let product of products){
            let [name, quantity, price] = product.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            if (price <= this.budgetMoney){
                if (!this.stockProducts[name]){
                    this.stockProducts[name] = {
                        quantity: 0,
                        price
                    };
                }
                this.stockProducts[name].quantity += quantity;
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            }else{
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        }
        return this.history.join('\n');
    }

    addToMenu(meal, NeededProducts, price){
        if (!this.menu[meal]){
            this.menu[meal] = {
                products: [],
                price: Number(price),
            }
            for (let product of NeededProducts){
                this.menu[meal].products.push(product);
            }
        }else{
            return `"The ${meal} is already in the our menu, try something different."`
        }

        if (Object.keys(this.menu).length === 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }else{
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }
    }

    showTheMenu(){
        if (Object.entries(this.menu).length === 0){
            return `Our menu is not ready yet, please come later...`
        }
        let result = [];
        for (const [meal, info] of Object.entries(this.menu)){
            result.push(`${meal} - $ ${info.price}`);
        }
        return result.join('\n');
    }

    makeTheOrder(meal){
        if (!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        for (let productNeeded of this.menu[meal].products){
            let [product, quantity] = productNeeded.split(' ');
            quantity = Number(quantity);
            if (!this.stockProducts[product] || this.stockProducts[product].quantity < quantity){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        for (let productNeeded of this.menu[meal].products) {
            let [product, quantity] = productNeeded.split(' ');
            quantity = Number(quantity);
            this.stockProducts[product].quantity -= quantity;
        }
        this.budgetMoney += Number(this.menu[meal].price);
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

    }
}
//
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
