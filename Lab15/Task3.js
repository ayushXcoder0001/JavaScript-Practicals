// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 15
// Task No.: 3

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

async function run() {
    try {
        console.log(await checkMarks(65));
        await checkMarks(-5);
    } catch (error) {
        console.log("Caught:", error.message);
    }
}

run();
