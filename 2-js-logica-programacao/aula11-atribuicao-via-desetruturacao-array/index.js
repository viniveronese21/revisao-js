//... rest, ... spread 
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numero = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = numero
console.log(lista3[2]);





//               0  1  2  3  4  5  6  7  8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete, ...resto] = numeros;
// console.log(um, tres, cinco);

// let a = 'A'; //b
// let b = 'B'; //c
// let c = 'C'; //a

// const letras = [b, c, a];
// [a, b ,c] = letras;

// console.log(a, b, c);