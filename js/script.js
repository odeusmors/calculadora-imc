document.getElementById('calcular').addEventListener('click', function() {
    // Obtendo os valores de altura e peso dos inputs
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    // Validando se os valores são números válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    // Calculando o IMC
    const imc = peso / (altura * altura);

    // Determinando a classificação do IMC
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    // Exibindo o resultado
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block'; // Torna o resultado visível
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Classificação: ${classificacao}`;
});
