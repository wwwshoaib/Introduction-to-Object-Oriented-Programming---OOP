

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
}
//ekhane class instantiate kore instance create kora hoilo ei instance ekti object
const rafi = new Student('Rafi', 'rafi@gmail.com', 14);
console.log(rafi); 



