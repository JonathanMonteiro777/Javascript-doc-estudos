// Escrever uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080)); // Saída: true
console.log(ePaisagem(1080, 1920)); // Saída: false 
