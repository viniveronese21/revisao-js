// For in -> le os indices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30
}

for (let chave in pessoa) {
 console.log(chave, pessoa[chave]);
}

// for (let i in frutas) {
//     console.log(frutas[i]);
// }


// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }