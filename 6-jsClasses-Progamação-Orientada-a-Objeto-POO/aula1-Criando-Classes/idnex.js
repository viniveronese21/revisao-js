class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome;
    }
     
    falar(){
        console.log(`${this.nome} está falando`);
    }
}

function Pessa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const p1 = new Pessoa('Luiz','Miranda');
const p2 = new Pessa2('Maria', 'A.')
