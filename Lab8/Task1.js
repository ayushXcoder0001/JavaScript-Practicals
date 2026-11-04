// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 8
// Task No.: 1

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi, I am ${this.name}`;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

const teacher = new Teacher("Anita", "Maths");
console.log(teacher.greet());
