// fact : secara default javascript menjalankan kodenya secara syncronus
function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Downloading...");
        }, 3000);
    });
}

function verify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Verify");
        }, 2000);
    });
}

function notify() {
    console.log("Download Selesai");
}

// keyword async memberi tahu bahwa ada operasi menggunakan asynchronous di dalamnya
async function main() {
    // solusi penganti then catch bisa menggunakan async await
    console.log(await download());
    console.log(await verify());
    notify();
}

main();