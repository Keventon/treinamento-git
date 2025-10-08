document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio real do formulário

        // Simples validação para verificar se os campos não estão vazios
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Simulação de envio bem-sucedido
        alert('Obrigado pelo seu contato! Mensagem enviada com sucesso.');
        contactForm.reset(); // Limpa o formulário
    });
});
