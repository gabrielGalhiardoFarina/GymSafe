let porcentagem = 0;
let carregamento_atual = carregamento;
let intervaloCarregamento;
let intervaloTexto;

function carregarTela() {
    window.location.href = "../public/animacao.html";
}

intervaloCarregamento = setInterval(carregarTelaHome, 30);
intervaloTexto = setInterval(mudarTexto, 500);

function carregarTelaHome() {
    porcentagem += 1;
    if (porcentagem > 100) {
        window.location.href = "../public/home.html";
    }
    carregamento_atual.value = porcentagem;
}

function mudarTexto() {
    if (porcentagem % 3 === 0) {
        texto_carregamento.innerHTML = `Entrando...`;
    } else if (porcentagem % 3 === 1) {
        texto_carregamento.innerHTML = `Entrando.`;
    } else if (porcentagem % 3 === 2) {
        texto_carregamento.innerHTML = `Entrando..`;
    }
}

function validarLogin() {
    login_form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let usuario = username.value;
    let senha = password.value;

    if (usuario.trim() == "" || senha.trim() == "") {
        error_login.innerHTML = "Por favor, preencha todos os campos.";
    } else if (senha.length < 6 || senha.length > 20) {
        error_login.innerHTML = "A senha deve ter entre 6 e 20 caracteres.";
    } else {
        window.location.href = "../public/animacao.html";
    }
});
}
