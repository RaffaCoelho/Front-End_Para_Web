document.getElementById('meuForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    if (nome.trim() === '' ) {
        alert('Por favor, preencha o campo nome.');
        return;
    }
    if (email.trim() === '' ) {
        alert('Por favor, preencha o campo email.');
        return;
    }
    else {
        window.location = 'obrigado.html';
    }
})
