function salam(name, callback) {
    console.log("Hello" + name);
    
    callback();
}

function salamPisah() {
    console.log("Bye");
}

salam("Budi", salamPisah);