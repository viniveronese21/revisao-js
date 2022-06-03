// defineProperty -> Getter (Obter Valor) e Setter (Definir, Setar o valor)
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('')
            }

            estoquePrivado = valor;
        }
    });
}

function criaProduto() {
    return {
       get nome () {
           return nome;
       },
       set nome (valor){
            valor = valor.replace('coisa', '')
            nome = valor;
       }
    };
}

// const p1 = new Produto('Camiseta', 20, 3);
// // console.log(p1);
// p1.estoque = 500;
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);