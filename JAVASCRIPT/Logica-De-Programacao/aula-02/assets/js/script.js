
// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(dia) {
//     const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
//     return diasSemana[dia];
// }

// function getNomeMes(numeroMes) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//     return meses[numeroMes];
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }
// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//         ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}hrs`
//     );
// }

// h1.innerHTML = criaData(data);

//***************************************************************** */

// Utilizando recurso do JS
const h1 = document.querySelector('.container');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short' });
