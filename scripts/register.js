const name = document.querySelector('#name')
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const button = document.querySelector('#btn-register');
const email = document.querySelector('#email');
const toggle = document.querySelector('#toggle');


button.addEventListener('click', (event) => {
    event.preventDefault();

    const nameValue = name.value;
    const usernameValue = username.value;
    const passwordValue = password.value;
    const emailValue = email.value;

    if (nameValue === '' || usernameValue === '' || passwordValue === '' || emailValue === '') {
        alert('Preencha todos os campos!')
        return;
    }

    if (passwordValue.length < 5) {
        alert('Senha com mínimo de 5 digitos')
        return;
    }

    sessionStorage.setItem('name:', nameValue);
    sessionStorage.setItem('username:', usernameValue);
    sessionStorage.setItem('password:', passwordValue);
    sessionStorage.setItem('email:', emailValue);

    alert('Cadastro realizado!')

    window.location.href = './login.html';
});

toggle.addEventListener('change', () => {
    password.type = toggle.checked ? 'text' : 'password';
})
