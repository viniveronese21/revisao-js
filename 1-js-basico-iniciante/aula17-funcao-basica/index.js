function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

const resultado = soma (4, 2);
console.log(resultado);

//------------------------------------------

function saudacao (nome){
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Liuiz');
console.log(variavel);

//-------------------------------------------

const raiz = n =>  n ** 0.5; // arrow function
    

console.log(raiz(9));
