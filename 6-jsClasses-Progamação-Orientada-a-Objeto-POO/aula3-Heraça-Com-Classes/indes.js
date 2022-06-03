class DispositivoEletronico {
    constructor (nome) {
        this.nome = nome;
        this.ligado = false;
    }

        ligar() {
            if(this.ligado){ 
                console.log(this.nome + ' Já ligado');
                return;
            };

            this.ligado = true;
        }

        desligar(){
            if(!this.ligado) {
                console.log(this.nome + ' Já desligado');
                return;
            }
        
            this.ligado = false;
        }
}

class Smartphone extends DispositivoEletronico {
    constructor (nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, modelo, cor, wifi) {
        super(nome);

        this.modelo = modelo;
        this.cor = cor;
        this.wifi = wifi;
    }
    
}

const s1 = new Smartphone('iPhone', 'Preto', 'XR');
console.log(s1);

const t1 = new Tablet('iPad', 'Pro', 'Cinza espacial', true);
t1.ligar();
console.log(t1);
