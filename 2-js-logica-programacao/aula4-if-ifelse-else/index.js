/*
entre 0 - 11 - Bom dia
entre 12 - 17 - Bom dia
entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo ELSE preciso de un IF antes
// Eu posso ter varios ELSE IF na checagem
// Só posso ter um ELSE na checagem
// podemos usar condições sem ELSE IF, utilizando apens IF e ELSE

// const hora = 53;

// if(hora >= 0 && hora <=11 ){
//     console.log('Bom Dia!');
// } else if (hora >= 12 && hora <= 17 ) {
//     console.log('Boa Tarde!');
// } else if (hora >= 18 && hora <= 23) {
//     console.log('Boa Noite!');
// } else {
//     console.log('Verifique a hora');
// }

// const tenhoGrana = false;

// if(tenhoGrana){
//     console.log('vou sair de casa');
// } else {
//     console.log('Não vou sair de casa');
// }




/******************************* Parte 2 ************************************/

const numero = 10 ;

// se isso  (numero >= 0 && numero <= 5)ocorrer, faça isso console.log('O Numero está entre 0 e 5');
// se isso não  ocorrer faça isso console.log('O numeor NÃO está entre 0 e 5');

if (numero <= 10) {
    console.log('Numero menor ou igual a 10')
}

if (numero >= 0 && numero <= 5) {
    console.log('O Numero está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero está entre 6 e 8');
} else if (numero >= 9 && numero <= 11) { // verdadeira 
    console.log ('O numero está entre 9 e 11')
} else {
    console.log('O numero não está entre 0 e 11');
}

console.log('... AQUI VEM O RESTO DO CODIGO');
