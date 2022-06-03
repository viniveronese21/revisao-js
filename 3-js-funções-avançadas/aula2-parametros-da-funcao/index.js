// argumentos que sustenta todos os argumentos enviados
// arguments sustenta todos os argumentos enviados apenas quando a função é criada com a palavra FUNCTION  
// function funcao (a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b ,c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao (a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3); 

// function funcao({ nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'Luiz', sobrenome: 'Otavio', idade: 20}
// funcao(obj);

// function funcao ([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);
// }

// funcao(['luiz', 'otavio', 20]);

// const conta = function(operador, acumulador, ...numeros) {
//     for (numero of numeros){
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }

//     console.log(acumulador);
// };
// conta('+', 1, 10, 20, 30, 40, 50);


// Arrow Function não tem Arguments
 const conta = (...args) => {
     console.log(args);
 }
conta('+', 1, 20, 30, 40, 50);
