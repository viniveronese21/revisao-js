// factory function / constructor function = padrões de projetos 
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
};

const p1 = new Pessoa('Luiz', 'Miranda')
delete p1.nome;
const p2 = new Pessoa('Maria', 'Miranda')

console.log(p1);
console.log(p2);