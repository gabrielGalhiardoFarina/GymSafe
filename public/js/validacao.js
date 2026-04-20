function validarLogin() {
    let email = email_input.value;
    let senha = senha_input.value;

    if (email.trim() == "" || senha.trim() == "") {
        error_login.innerHTML = "Por favor, preencha todos os campos.";
    } else if (senha.length < 6 || senha.length > 20) {
        error_login.innerHTML = "A senha deve ter entre 6 e 20 caracteres.";
    } else {
        window.location.href = "../public/cadastro.html";
    }
}

function validarCadastro() {
    let nome = nome_input.value;
    let email = email_input.value;
    let senha = senha_input.value;
    let confirmacaoSenha = confirmacao_senha_input.value;
    
    if (nome.trim() == "" || email.trim() == "" || senha.trim() == "" || confirmacaoSenha.trim() == "") {
        error_cadastro.innerHTML = "Por favor, preencha todos os campos.";
    } else if (senha.length < 6 || senha.length > 20) {
        error_cadastro.innerHTML = "A senha deve ter entre 6 e 20 caracteres.";
    } else if (!email.includes("@") || !email.includes(".")) {
        error_cadastro.innerHTML = "Por favor, insira um email válido.";
    }else if (senha !== confirmacaoSenha) {
        error_cadastro.innerHTML = "As senhas não coincidem.";
    } else {
        window.location.href = "../public/home.html";
    }
}
