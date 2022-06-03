class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // método de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    // método de instancia
    diminuirVolume(){
        this.volume -= 2;
    }

    // método estático
    static soma(x, y) {
        console.log(this)
    }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();


// métodos estaticos não tem acesso aos dados da isntancia 