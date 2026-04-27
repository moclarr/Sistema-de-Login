const username = document.querySelector('#username');
const password = document.querySelector('#password');
const button = document.querySelector('#btn-login');
const email = document.querySelector('#email');
const toggle = document.querySelector('#toggle-login');

button.addEventListener('click', (event) => {
    event.preventDefault();

    usernameValue = username.value;
    passwordValue = password.value;
    emailValue = email.value;

    if (usernameValue === '' 
    || passwordValue === '' 
    ||  emailValue === '') {
        alert('Preencha todos os campos!');
        return;
    }

    if (usernameValue !== sessionStorage.getItem('username:', usernameValue) || passwordValue !== sessionStorage.getItem('password:', passwordValue) || emailValue !== sessionStorage.getItem('email:', emailValue)) {
        alert('Usuário não encontrado!');
        return;
    }

    alert('Login realizado com sucesso!');

    window.location.href = "./home.html";
})

toggle.addEventListener('change', () => {
    password.type = toggle.checked ? 'text': 'password';
})