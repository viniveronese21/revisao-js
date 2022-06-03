// o indice 0 representa o começo 
// console.log(umaString[1]); vai mostrar o elemento correspondete ao indice selecionado
// console.log(umaString.charAt(1)); retorna o valor referenta ao indice escolhido.
// console.log(umaString.concat('um lindo dia')); // concat(``). adiciona mais texto a umaString
// console.log(umaString.indexOf('')) // indexOf('') mostra o indece onde começa a palavra selecionada

// SEMPRE USAR TEMPLATE STRING!!!!!!!!!!!!!!!! KRL

//                01234567
// const umaString = "Um texto";
// console.log(umaString.concat(` em um lindo dia`));
// console.log(umaString + ' em um lindo dia');
// console.log(`${umaString} em um lindo dia`);
//console.log(umaString.indexOf('o', 3)); busca um indice do inicio ao fim
//console.log(umaString.lastIndexOf('texto')); busca um indice do fim ao inicio
//console.log(umaString.match(/[a-z]/g));
//console.lgo(umaString.search(/x/g));
//console.log(umaString.replace(/Um/, 'Outra')); substitui a palavra dentro de // pela definida dentro de ''
//console.log(umaString.length); mostra quantos indeces possui o texto
//console.log(umaString.slice(5)); inicia o texto a partir de um indice selecionado
// console.log(umaString.toUpperCase()); deixa a string toda em maiusculo
// console.log(umaString.toLowerCase()); deixa a string toda em minusculo
//                 01234567
const umaString = 'O rato roeu a roupa do rei de roma.';

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());