// definePrperty - defnieProperties

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: false, // Pode alterar
        configurable: true // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor
            writable: true, // Pode alterar
            configurable: true // configuravel
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor
            writable: true, // Pode alterar
            configurable: true // configuravel
        },
    });
}

const p1 = new Produto ('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}