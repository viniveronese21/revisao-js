// Dobre os numeros
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22 ,27];
const dobro = numeros.map(valor => valor * 2);
// console.log(dobro);

// Para cada elemento:
// Retorne apenas uma sring com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione a chave id em cada objeto 
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoa = pessoas.map( obj => obj.nome);
// console.log(pessoa);

const removeNome = pessoas.map(obj => ({idade: obj. idade}));
// console.log(removeNome);

const id = pessoas.map(function (obj, indice) {
    const newObj = {...obj}
    newObj.id = indice;
    return newObj;
});

console.log(pessoas);
console.log(id);