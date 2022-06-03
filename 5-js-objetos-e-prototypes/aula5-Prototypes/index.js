/*
JavaScript é baseado em prototipos para passar propriedades e métodos de um objeto para outro.

Definição de Prototiop = Prototipo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções

Todos os Objetos tem uma referancia interna para um prototipo (__proto__) que vem da propriedade Prototype
da função constutora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor 
do JS vai tentar encontrar esse membro no proprio objeto e depois a cadeia de prototipos  é usada até o topo (numm)]
até encontar (ou não) tal mebmbro 
*/

// Construtora -> Molde (Classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // metodo
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}       

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = função construtora

console.dir(pessoa1);
console.dir(data);