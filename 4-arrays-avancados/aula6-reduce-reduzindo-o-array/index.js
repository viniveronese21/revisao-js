//  Some Todos os Números
// Retorne um array com os numeros pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22 ,27];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador
}, 0);
// console.log(total);

const pares = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
// console.log(pares);

const impares = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 !== 0) acumulador.push(valor);
    return acumulador;
}, []);
// console.log(impares);

const dobro = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2)
    return acumulador;
}, []);
// console.log(dobro);

const somaPares = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0);
// console.log(somaPares);

const somaImpares = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 !== 0) acumulador += valor;
    return acumulador;
});
// console.log(somaImpares);

// retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const old = pessoas.reduce(function (acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;   
});

console.log(old);