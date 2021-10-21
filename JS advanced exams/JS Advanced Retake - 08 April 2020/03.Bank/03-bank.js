class Bank{
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }


    newCustomer(customer){
        const existCustomer = this.allCustomers.find(c => c.personalId === customer.personalId);
        if(!existCustomer){
            this.allCustomers.push(customer);
            return customer;
        }
        throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
    }

    depositMoney (personalId, amount){
        const existCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if(!existCustomer){
            throw new Error("We have no customer with this ID!");
        }
        if (!existCustomer.hasOwnProperty('totalMoney')){
            existCustomer.totalMoney = 0;
        }
        if (!existCustomer.hasOwnProperty('transactions')){
            existCustomer.transactions = [];
        }
        existCustomer.totalMoney += Number(amount);
        existCustomer.transactions.push(`${existCustomer.firstName} ${existCustomer.lastName} made deposit of ${amount}$!`)

        return `${existCustomer.totalMoney}$`
    }

    withdrawMoney (personalId, amount){
        const existCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if(!existCustomer){
            throw new Error("We have no customer with this ID!");
        }
        if (!existCustomer.hasOwnProperty('totalMoney')){
            existCustomer.totalMoney = 0;
        }
        if (!existCustomer.hasOwnProperty('transactions')){
            existCustomer.transactions = [];
        }
        if (existCustomer.totalMoney < Number(amount)){
            throw new Error(`${existCustomer.firstName} ${existCustomer.lastName} does not have enough money to withdraw that amount!`)
        }

        existCustomer.totalMoney -= Number(amount);
        existCustomer.transactions.push(`${existCustomer.firstName} ${existCustomer.lastName} withdrew ${amount}$!`)
        return `${existCustomer.totalMoney}$`
    }

    customerInfo (personalId){
        const existCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if(!existCustomer){
            throw new Error("We have no customer with this ID!");
        }
        let result = [];
        let transactionsLength = existCustomer.transactions.length+1;
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${existCustomer.firstName} ${existCustomer.lastName}`);
        result.push(`Customer ID: ${existCustomer.personalId}`);
        result.push(`Total Money: ${existCustomer.totalMoney}$`);
        result.push("Transactions:");
        existCustomer.transactions
            .reverse()
            .forEach(t => {
                result.push(`${transactionsLength -=1}. ${t}`);
            });
        return result.join('\n');
    }

}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);
console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));