const btn = document.getElementById('btn')

btn.addEventListener('click', validar)

function validar(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // validar nome
    let msgName = document.getElementById('msg-name')
    if (name == ''){
        msgName.innerHTML = 'Insira seu nome'
        msgName.style.display = 'block';
    } else {
        msgName.style.display = 'none';
    }

    // validar email
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
    let msgEmail = document.getElementById('msg-email');

    if(email == ''){
        msgEmail.innerHTML = 'Insira um email válido';
        msgEmail.style.display = 'block';
    } else if(filtro.test(email)){
        msgEmail.style.display = 'none';
    } else {
        msgEmail.innerHTML = 'Formato de Email inválido'
        msgEmail.style.display = 'block'
    }

    // validar senhas
    let msgPassword = document.getElementById('msg-password');

    if (password == ''){
        msgPassword.innerHTML = 'Insira sua senha';
        msgPassword.style.display = 'block';

    } else {
        msgPassword.style.display = 'none';
    }


}