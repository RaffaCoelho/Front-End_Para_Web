document.getElementById('meuForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const idade  = document.getElementById('idade').value;
    if (nome.trim() === '' ) {
        alert('Por favor, preencha o campo nome.');
        return;
    }
    if (email.trim() === '' ) {
        alert('Por favor, preencha o campo email.');
        return;
    }
    if (mensagem.trim() === '' ) {
        alert('Por favor, preencha o campo mensagem.');
        return;
    }
    if (idade.trim() === ''){
        alert('Por favor, preencha o campo idade.');
        return;
    }
    else {
        window.location = 'obrigado.html';
    }
})
