// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 12
// Task No.: 1

function applyTwice(callback, value) {
    return callback(callback(value));
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));
