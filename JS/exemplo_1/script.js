//Criando variaveis com Identificadores
const botao = document.getElementById('btn');
const resultado = document.getElementById('res');

//função que altera o texto co o clique
botao.addEventListener('click', function() {
    resultado.textContent =     'Olá, Mundo!';
    resultado.style.color = '#00d4ff';
    resultado.classList.add('destaque');
});

//função que altera background ao passar o mouse
resultado.addEventListener('mouseover', () => {
    resultado.style.backgroundColor = '#000';
}); 