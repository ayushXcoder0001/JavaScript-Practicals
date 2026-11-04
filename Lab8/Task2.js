// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 8
// Task No.: 2

class Locker {
    constructor(pin) {
        this.pin = pin;
    }

    checkPin(number) {
        return number === this.pin;
    }
}

const locker = new Locker(1234);
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
