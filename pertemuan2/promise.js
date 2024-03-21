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

function main() {
    // solusi callback hell yaitu menggunakan promise
    download().then((hasil) => {
        console.log(hasil);
        
        verify().then((hasil) => {
            console.log(hasil);
        })
        .catch((error) => {
            console.log(error);
        });
    });

}

main();