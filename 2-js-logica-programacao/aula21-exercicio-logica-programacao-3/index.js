// Escreva uma função que recebe um numero e
// retone o seguinte:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero NÂO é divisivel por 3 e 5 = retorna o proprio numero
// Checar se o numero é realmente um numero = retorna o propio numero 
// Use a fuinção com numeros de 0 a 100

function FizzBuzz (numero) { 
    if (typeof numero !== 'number' ) return numero
    if (numero % 3 === 0 && numero % 5 === 0 ) return 'FizzBuzz'
    if (numero % 3 === 0 ) return 'Fizz';
    if (numero % 5 === 0 ) return 'Buzz';
    return numero
}

console.log('a', FizzBuzz('a'));
for ( let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}