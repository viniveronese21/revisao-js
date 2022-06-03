class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'luiz';
const sobrenome = 'Miranda';

exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa'


// exports.Pessoa = Pessoa;
// module.exports.nome = 'Luiz';
// this.sobrenome = 'Qualquer outra coisa que eu quiser'



// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquercoisa = 'O que eu quiser'