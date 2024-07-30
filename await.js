async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "raja", age: 30 };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();