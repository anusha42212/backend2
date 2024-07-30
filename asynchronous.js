// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "sahasra", age: 12 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Received:", data);
});
