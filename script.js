// Função para converter a média numérica em uma letra correspondente à nota 
function converterNota(media) {
    if (media >= 9.5) {
      return "A+" + " (Parabéns você é um gênio) ";
    } else if (media >= 9.0 && media <= 9.4) {
      return "A" + " (Excelente!) ";
    } else if (media >= 8.0 && media <= 8.9) {
      return "B" + " (Muito bom!) ";
    } else if (media >= 7.0 && media <= 7.9) {
      return "C" + " (Poderia ter estudado mais!) ";
    } else if (media >= 6.0 && media <= 6.9) {
      return "D" + " (Recuperação!) ";
    } else {
      return "F" + " (Reprovado, estude mais no ano que vem!) ";
    }
}

// Seleciona o formulário e os campos de entrada e exibição da média
const form = document.querySelector('form');
const mediaInput = document.querySelector('#media');
const notaLetraInput = document.querySelector('#notaletra');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
    // Impede que o formulário seja enviado
    event.preventDefault();

    // Seleciona os campos de entrada e converte seus valores para números
    const nota1 = Number(document.querySelector('#nota1').value);
    const nota2 = Number(document.querySelector('#nota2').value);
    const nota3 = Number(document.querySelector('#nota3').value);
    const nota4 = Number(document.querySelector('#nota4').value);

    // Calcula a média das notas
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Exibe a média numérica e a letra correspondente à nota nos campos de exibição
    mediaInput.value = media.toFixed(2);
    notaLetraInput.value = converterNota(media);
});















/*

Outra forma de criar a função

function converterNota(media) {
  switch (true) {
    case (media >= 9.5):
      return "A+";
    case (media >= 9.0):
      return "A";
    case (media >= 8.0):
      return "B";
    case (media >= 7.0):
      return "C";
    case (media >= 6.0):
      return "D";
    default:
      return "F";
  }
}

*/
