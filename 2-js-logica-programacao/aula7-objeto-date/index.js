// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras - umDia); // timestamp unix ou epoca unix 01/01/1970
// const data = new Date(2022, 03); // a, m, d, h, m, s, ms
// const data = new Date (1649889832833);
// console.log('dia', data.getDate());
// console.log('mes', data.getMonth()); // Mes começa do zero
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('min', data.getMinutes());
// console.log('seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); //0 - Domingo, 6 - Sabado
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return`${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
};

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);