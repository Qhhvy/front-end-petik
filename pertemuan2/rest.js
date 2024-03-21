// rest operator digunakan untuk menggabungkan array
function sum(...numbers)  {
    let hasil = 0;
    for (const number of numbers) {
        hasil += number;
    }
    console.log(hasil);
}

sum(90, 10, 20);