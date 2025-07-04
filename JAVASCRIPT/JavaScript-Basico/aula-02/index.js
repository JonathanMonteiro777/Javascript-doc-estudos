
const nome = 'Jonathan Lucas';
const idade = 30;
const peso = 85;
const altura = 1.80;
let imc = peso / (altura * altura);
const anoNascimento = 2025 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg e tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}. ${nome} nasceu em ${anoNascimento}.`);