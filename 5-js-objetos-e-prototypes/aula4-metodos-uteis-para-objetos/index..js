/*
Object.values
Object.entries
Object.assing(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Object.keys (Retorna as chaves)
Object.freeze (Congela o Objeto)
Object.defineProperties (Define várias propeiedades)
Object.defineProperty (Define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'};

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}