
class User {
    private _name: string
    private _age: number

    constructor(givenName: string, givenAge: number ) {
        this._name = givenName
        this._age = givenAge
    }

    //getter don't need argument. It is used to get value.
    get age() {
        return this._age;
    }

    set age(givenAge: number) {
        if(givenAge < 0 || givenAge > 120) {
            throw new Error('Age is not valid !')
        }

        this._age = givenAge;
    }

}

const user1 = new User('Kalia', 12);
//setter: for small validation . Method is not needed for small action. One argument can be given in setter. setter don't return anything

user1.age = 40;
console.log(user1.age);