

class Student {
    name: string
    email: string
    age: number

    //constructor: constructor is a special type of method
    constructor(name: string, email: string, age: number) {
        this.name = name,
        this.email = email,
        this.age = age
    }

    //method
    getInfo(): string {
        const info = `Name: ${this.name}\nEmail: ${this.email}`;
        return info;
    }
}
//ekhane class instantiate kore instance create kora hoilo ei instance ekti object
const rafi = new Student('Rafi', 'rafi@gmail.com', 14);
const alia = new Student('alia', 'alia@gmail.com', 24);
console.log(rafi.getInfo()); 
console.log(alia.getInfo()); 

//another example of method with class and instructor

class ChaShop {
    shopName: string
    soldItem: any = []

    //constructor
    constructor(shop: string) {
        this.shopName = shop;
    }

    buy(itemName: string, price: number) {
        this.soldItem.push({itemName, price})
    }
    totalSold() {
        const total = this.soldItem.reduce((acc: any, item: any) => acc + item.price, 0);
        return total;
    }
}

const shop1 = new ChaShop('Saliar Mamar Char Dokan');
shop1.buy('Tea', 10);
shop1.buy('Cake', 15);
console.log(shop1);
console.log('Total Price',shop1.totalSold());