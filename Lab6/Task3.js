// Name: Ayush Patel
// Roll No.: 2510303157
// Assignment No.: 6
// Task No.: 3

const invalidJson = "{name: Rohan}";

try {
    JSON.parse(invalidJson);
} catch (error) {
    console.log("Invalid JSON");
}
