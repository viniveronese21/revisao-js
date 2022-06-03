// factory function (Função fabrica)
// Constructor Function (Função construtora)
function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'Falando sobre nada') {
            return `${this.nome} está ${assunto}`
        },
        
        altura: a,
        peso: p,
        
        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Jpão', 'Otavio', 1.9, 57);
const p3 = criaPessoa('Junior', 'Otavio', 1.5, 100);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
