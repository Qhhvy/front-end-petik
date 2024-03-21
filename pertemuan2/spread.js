// spread syntax digunakan untuk memisahkan array atau objek menjadi 1 item (single value)
// notasinya adalah ... (titik tiga)

const fruits = ["apel", "anggur"];

const newFruits = [...fruits, "mangga", "lemon"];

// console.log(...newFruits);

const user = {
    nama : "Budi Sentosa",
    major : "Informatics",
};

const newUser = {
    ...user,
    age : 29,
};

console.log(newUser);