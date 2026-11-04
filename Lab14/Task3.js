// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 14
// Task No.: 3

let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Tick ${count}`);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);
