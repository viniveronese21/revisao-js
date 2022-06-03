/*
Primitivos (imutaveis)- string, number, boolean, undefined, null( bigint, symbol) valores copiados

Referencia (Mutavel) - array, object, function, valores passados por referencia 
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
};
const b = {...a};

a.nome = 'João';
console.log(a ,b);