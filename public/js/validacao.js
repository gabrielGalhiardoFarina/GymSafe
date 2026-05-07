function validarLogin() {
    let email = email_input.value;
    let senha = senha_input.value;
    button_logar.disabled = true;
    button_logar.innerHTML = "Entrando...";


    if (email.trim() == "" || senha.trim() == "") {
        error_login.innerHTML = "Por favor, preencha todos os campos.";
        temErroLogin();
    } else {

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
                    setTimeout(function () {
                        window.location = "./questionario.html";
                    }, 100);

                });

            } else {
                console.log("Houve um erro ao tentar realizar o login!");
                resposta.text().then(texto => {
                    console.error(texto);
                    error_login.innerHTML = "Erro: " + texto;
                    temErroLogin();
                });
            }

        }).catch(function (resposta) {
            console.log("Houve um erro ao tentar realizar o login!");
            console.log(resposta);
            temErroLogin();
        })

        return false;
    }

}

function temErroLogin() {
    button_logar.disabled = false;
    button_logar.innerHTML = "Entrar";
}

function validarCadastro() {
    let nome = nome_input.value;
    let email = email_input.value;
    let senha = senha_input.value;
    let confirmacaoSenha = confirmacao_senha_input.value;

    button_cadastrar.disabled = true;
    button_cadastrar.innerHTML = "Cadastrando...";

    if (nome.trim() == "" || email.trim() == "" || senha.trim() == "" || confirmacaoSenha.trim() == "") {
        error_cadastro.innerHTML = "Por favor, preencha todos os campos.";
        temErroCadastro();
    } else if (senha.length < 6 || senha.length > 20) {
        error_cadastro.innerHTML = "A senha deve ter entre 6 e 20 caracteres.";
        temErroCadastro();
    } else if (!email.includes("@") || !email.includes(".")) {
        error_cadastro.innerHTML = "Por favor, insira um email válido.";
        temErroCadastro();
    } else if (senha != confirmacaoSenha) {
        error_cadastro.innerHTML = "As senhas não coincidem.";
        temErroCadastro();
    } else if (nome.length < 3 || nome.length > 50) {
        error_cadastro.innerHTML = "O nome deve ter entre 3 e 50 caracteres.";
        temErroCadastro();
    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
            }),

        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                error_cadastro.style.color = "green";
                error_cadastro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

            } else {
                temErroCadastro();
                resposta.text().then(texto => {
                    console.error(texto);
                    error_cadastro.innerHTML = "Erro: " + texto;
                });
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                temErroCadastro();
            });

        return false;
    }
}

function temErroCadastro() {
    button_cadastrar.disabled = false;
    button_cadastrar.innerHTML = "Cadastrar";
}