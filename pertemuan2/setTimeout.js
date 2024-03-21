// fact : secara default javascript menjalankan kodenya secara syncronus
function download(callbackVerify) {
    setTimeout(() => {
        console.log("Downloading...");
        callbackVerify();
    }, 3000);
}

function verify(callbackNotify) {
    setTimeout(() => {
        console.log("Verify");
        callbackNotify();
    }, 2000);
}

function notify() {
    console.log("Download Selesai");
}

function main() {
    // solusi agar code dijalankan secara berurutan adalah dengan menggunakan callback
    download (function() {
        verify (function() {
            notify();
        });
    });
}

main();