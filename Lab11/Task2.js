// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 11
// Task No.: 2

function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
