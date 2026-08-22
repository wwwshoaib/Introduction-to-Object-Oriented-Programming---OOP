
//Abstraction

abstract class Animal {
    abstract hasLife(): void;

    canMove() {
        console.log('Can move')
    }
}

class Dog extends Animal {
    hasLife(): void {
        console.log("has life")
    }

    makeSound(): void {
        console.log("barks")
    }
}

const dog = new Dog();
dog.makeSound();