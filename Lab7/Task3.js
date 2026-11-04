// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 7
// Task No.: 3

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function () {
    return this.marks >= 40 ? "Pass" : "Fail";
};

const student = new Student("Asha", 88);
console.log(student.result());
