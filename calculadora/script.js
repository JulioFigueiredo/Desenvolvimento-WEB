const botao = document.getElementById('botao_calcular');
const result = document.getElementById('campo_resultado');

function calcular_imc() {
    const peso = (document.getElementById('iPeso').value);
    const altura = (document.getElementById('iAltura').value);
    const imc = peso / (altura *altura);
    result.textContent = `Seu imc é:  ${imc.toFixed(2)}.`;

    switch (true) {
        case imc < 18.5:
            result.textContent = `Seu imc é:  ${imc.toFixed(2)}. você está abaixo do peso`;
        break;
        case imc < 25:
            result.textContent = `Seu imc é:  ${imc.toFixed(2)}. você está no peso ideal`;
        break;
        case imc < 30:
            result.textContent = `Seu imc é:  ${imc.toFixed(2)}. você está acima do peso`;    
        break;
        case imc < 35:
            result.textContent = `Seu imc é:  ${imc.toFixed(2)}. você está com obesidade I`;
        break;
        case imc < 40:
            result.textContent = `Seu imc é:  ${imc.toFixed(2)}. você está com obesidade II`;
        break;
        default:
            result.textContent = `Seu imc é:  ${imc.toFixed(2)}. você está com obesidade III`;
        break;
    }
}

botao.addEventListener('click', calcular_imc);