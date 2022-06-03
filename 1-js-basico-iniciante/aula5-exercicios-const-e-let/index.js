/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de alura e seu IMC é de (Calculo do imc)
Luiz Otavio nasceu em (calculo do ano de nascimento)
*/

const nome = 'Vinicius Veronese';
const sobrenome = 'Tufolo';
const idade = 22;
const peso = 80;
const alturaEmM = 1.7;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)