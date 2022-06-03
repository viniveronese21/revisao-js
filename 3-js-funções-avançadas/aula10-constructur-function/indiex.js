// Função construtora -> objetos
// Função fabica -> objetos
// Construtora -> Pessoa (new)
// palavra NEW cria um novo objeto vazio faz o this apontar para o aobjeto vazaio e retorna o objero para a variavel 
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {};
    
    //Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo= () => {
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');

p1.metodo();