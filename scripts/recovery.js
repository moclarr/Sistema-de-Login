const email = document.querySelector('#email');
const NewPassword = document.querySelector('#new-password');
const ConfPassword = document.querySelector('#confirm-password');
const toggle = document.querySelector('#toggle');
const button = document.querySelector('#btn-recover');

button.addEventListener('click', (event) => {
    event.preventDefault()

    const emailValue = email.value;
    const NewPasswordValue = NewPassword.value;
    const ConfPasswordValue = ConfPassword.value;

    if (emailValue === '' || NewPasswordValue === '' || ConfPasswordValue === '') {
        alert('Preencha todos os campos!')
        return;
    }

    if (NewPasswordValue !== ConfPasswordValue) {
        alert('As senhas não podem ser diferentes!');
        return;
    }

    if (NewPasswordValue.length < 5 || ConfPasswordValue.length < 5) {
        alert('A senha tem que ter no mínimmo 5 digitos!');
        return;
    }

    sessionStorage.setItem('password:', NewPasswordValue)

    alert('Senha redefinida com sucesso!');

    window.location.href = './login.html';
})

toggle.addEventListener('change', () => {
    NewPassword.type = toggle.checked ? 'text' : 'password';
    ConfPassword.type = toggle.checked ? 'text' : 'password';

})

//se a minha senha for > 5 e minha Conf Senha > 5 e mesmo assim seja diferente {}