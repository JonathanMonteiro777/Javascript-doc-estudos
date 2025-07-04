/**
 * Exercício 1 - Calculadora de IMC
 */

// Função para criar tabela IMC
function criarTabelaIMC() {
    const container = document.querySelector('.container');
    const h1 = document.querySelector('h1');

    // Criar a tabela de referência
    const tabelaDiv = document.createElement('div');
    tabelaDiv.innerHTML = `
        <table class="tabela-imc">
        <thead>
           <tr>
                <th>IMC</th>
                <th>Resultado</th>
           </tr>
        <thead>
        <tbody>
           <tr>
               <td>Menos do que 18,5</td>
               <td>Abaixo do peso</td>
           </tr>
           <tr>
               <td>Entre 18,5 e 24,9</td> 
               <td>Peso normal</td>
           </tr>
           <tr>
               <td>Entre 25,0 e 29,9</td>
               <td>Sobrepeso</td>
           </tr> 
           <tr>
               <td>Entre 30,0 e 34,9</td>
               <td>Obesidade grau 1</td>
           </tr>
           <tr>
               <td>Entre 35,0 e 39,9</td>
               <td>Obesidade grau 2</td>
           </tr>
           <tr>
               <td>Mais do que 40,0</td>
               <td>Obesidade grau 3</td>
           </tr>
        </tbody>
        </table>                        
    `;

    // Inserir a tablea após o h1
    h1.insertAdjacentElement('afterend', tabelaDiv);
}

// Função para calcular o IMC
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

// Função para classificar o IMC
function classificarImc(imc) {
    const nivel =
        [
            'Abaixo do peso',
            'Peso normal',
            'Acima do peso',
            'Obesidade 1',
            'Obesidade 2',
            'Obesidade 3'
        ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

// Função para exibir o resultado
function exibirResultado(imc, classificacao) {
    // Remover o elemento anterior, se houver
    const resultadoAnterior = document.querySelector('.resultado');
    if (resultadoAnterior) {
        resultadoAnterior.remove();
        console.log('Removendo elemento anterior');
    }

    // Criar o elemento de resultado
    const container = document.querySelector('.container');
    const resultadoDiv = document.createElement('div');
    resultadoDiv.className = 'resultado';
    resultadoDiv.innerHTML = `
         <h3>Seu Resultado:</h3>
         <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
         <p><strong>Classificação:</strong> ${classificacao}</p>
    `;

    container.appendChild(resultadoDiv);
}
 
// Função para validar os dados de entrada
function validarDados(peso, altura) {
    if (!peso || !altura) {
        alert('Por favor, preencha todos os campos!');
        return false;
    }

    if (peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos maiores que zero!');
        return false;
    }

    if (altura > 3.0) {
        alert('Por favor, insira a altura em metros (ex: 1.75)');
        return false;
    }
    return true;
}

// Função principal para processar o formulário
function processarFormulario(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!validarDados(peso, altura)) {
        return;
    }

    const imc = calcularImc(peso, altura);
    const classificacao = classificarImc(imc);

    exibirResultado(imc, classificacao);
}

// Inicializar qunado a página carregar
document.addEventListener('DOMContentLoaded', () => {

    criarTabelaIMC();


    // Adicionar event listener ao formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', processarFormulario);

    // Adicionar atributos aos inputs para validação
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');

    inputPeso.setAttribute('step', '0.1');
    inputPeso.setAttribute('min', '1');
    inputPeso.setAttribute('max', '500');
    inputPeso.setAttribute('placeholder', 'Ex: 65.5');

    inputAltura.setAttribute('step', '0.01');
    inputAltura.setAttribute('min', '0.5');
    inputAltura.setAttribute('max', '3');
    inputAltura.setAttribute('placeholder', 'Ex: 1.75');
});
