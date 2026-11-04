// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 15
// Task No.: 2

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120).catch(error => console.log(error.message));
