const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`a minha idade atual é ${this.idade}`);
    },

    incrementaIdade () {
        ++this.idade;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();




// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa ('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa ('João', 'Lara', 55);
// const pessoa4 = criaPessoa ('Junior', 'Moreira', 44);
// const pessoa5 = criaPessoa ('Jean', 'Otavio', 69);

// console.log(pessoa1.nome, pessoa2 .nome);