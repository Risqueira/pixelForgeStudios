/* Toggle mobile menu */
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

/* Toggle theme and save preference */
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    const isWhiteMode = body.classList.toggle('white-mode');
    const theme = isWhiteMode ? 'white' : 'dark';
    localStorage.setItem('theme', theme);
    if (button) button.textContent = isWhiteMode ? 'Modo Escuro' : 'Modo Claro';
}

function applyTheme(theme) {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    if (theme === 'white') {
        body.classList.add('white-mode');
        if (button) button.textContent = 'Modo Escuro';
    } else {
        body.classList.remove('white-mode');
        if (button) button.textContent = 'Modo Claro';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('theme');
    if (saved) applyTheme(saved);
    initFormValidation();
});

/* validação dos campos do formulário */
function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('txtNome').value.trim();
        const email = document.getElementById('txtEmail').value.trim();
        const opiniao = document.getElementById('txtOpiniao').value.trim();

        if (nome === '' || email === '' || opiniao === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
}