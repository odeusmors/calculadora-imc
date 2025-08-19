// Seleção de elementos
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const toggleBtn = document.getElementById('toggleMode');
const body = document.body;

// Função para calcular o IMC
function calcularIMC(event) {
    event.preventDefault(); // Previne envio do formulário

    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let classeResultado = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classeResultado = 'abaixo-peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
        classeResultado = 'normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
        classeResultado = 'sobrepeso';
    } else {
        classificacao = 'Obesidade';
        classeResultado = 'obesidade';
    }

    resultado.className = `resultado ${classeResultado}`;
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Classificação: ${classificacao}`;
    resultado.style.opacity = 0;
    resultado.style.display = 'block';
    setTimeout(() => {
        resultado.style.opacity = 1;
        resultado.style.transition = 'opacity 0.5s';
    }, 50);
}

// Função para alternar modo claro/escuro
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Eventos
calcularBtn.addEventListener('click', calcularIMC);
toggleBtn.addEventListener('click', toggleDarkMode);
