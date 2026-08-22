
//Polymorphism

class Animal {
    name: string
    
    constructor(givenName: string) {
        this.name = givenName
    }

    makeSound(): void {
        console.log('Animal can make sound')
    }
}


class Dog extends Animal {
    constructor(givenName: string) {
         super(givenName)
    }

    makeSound(): void {
        console.log('Dog barks')
    }
    
}

const dog1 = new Dog('Billu')

dog1.makeSound()