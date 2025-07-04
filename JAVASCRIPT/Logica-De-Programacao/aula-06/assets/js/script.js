// Função que recebe 2 numeros e retorna o maior deles
// Forma tradicional de declarar a função
// function maiorNumero(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }

// função refatorada utilizando operador ternário
const maiorNumero = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(maiorNumero(10, 20)); // Saída: 20
