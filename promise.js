function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "hareesh", age: 28 };
            resolve(data);
        }, 2000);
    });
}

// Consuming a Promise
fetchData()
    .then((data) => {
        console.log("Received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
