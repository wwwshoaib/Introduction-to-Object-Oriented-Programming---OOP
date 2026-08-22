
//Inheritance

//Here, User is super class or parent class
class User { // supper class or parent class
    private _name: string
    private _age: number

    constructor(giveName: string, givenAge: number) {
        this._name = giveName;
        this._age = givenAge;
    }

}

//Here, Student is a child class
class Student extends User {
    private _student_ID: number;

    constructor(giveName: string, givenAge: number, givenStudentID: number) {
        super(giveName, givenAge);
        this._student_ID = givenStudentID
    }
}

const student1 = new Student('Alia', 20, 202601);
console.log(student1);  

