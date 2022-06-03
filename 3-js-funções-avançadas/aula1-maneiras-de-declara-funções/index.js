// declaração de função (Function hoisting)
function falaOi (){
    console.log('Oie');
}
falaOi();

// First-class  objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () { 
    console.log('Sou um Dado');
};
souUmDado();

// Arrow Function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto 
const obj = {
    falar(){
        console.log('estou falando');
    }
};
obj.falar();
