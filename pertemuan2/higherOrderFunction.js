const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// filter(), map(), reduce()

// mencari angka > 3

// const filterNubmber = numbers.filter((number) => {
//     return number > 3;
// });

// console.log(filterNubmber);

// menghasilkan angka * 2
// const mapNumber = numbers.map((number) => {
//     return number * 2;
// });

// console.log(mapNumber);

// accumulator = nilai hasil penjumlahan
// currentvalue = nilai saat ini
const sum = numbers.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
});
/* 
    0 + 3 = 3
    3 + (-5) = -2
    -2 + 8 = 6
    6 + 1 = 7
    7 + 2 = 9
    9 + 9 = 18
    18 + 7 = 25
    25 + (-1) = 24
    24 + 6 = 30
*/
console.log(sum);