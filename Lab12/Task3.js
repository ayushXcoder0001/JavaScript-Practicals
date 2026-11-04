// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 12
// Task No.: 3

function repeatAction(times, action) {
    for (let round = 1; round <= times; round++) {
        action(round);
    }
}

repeatAction(3, round => console.log(`Round ${round}`));
