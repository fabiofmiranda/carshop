// Coloque suas funções de login e registro aqui (reaproveite as funções do exemplo anterior)

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simula a busca do usuário no banco de dados
    const user = users.find(user => user.username === username);

    if (user && user.password === btoa(password)) {
        alert('Login bem-sucedido! Redirecionando para a página de checkout.');
        window.location.href = 'checkout.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}

function register() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Verifica se o usuário já existe
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Usuário já cadastrado. Escolha outro nome de usuário.');
        return;
    }

    // Simula o armazenamento seguro da senha (não use em produção)
    const hashedPassword = btoa(password);

    users.push({ username, password: hashedPassword });

    alert('Cadastro concluído com sucesso! Faça o login para continuar.');
    clearRegistrationForm();
}

function clearRegistrationForm() {
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
}

let users = [];

function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('signup-section').style.display = 'none';
}

function showSignup() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
}
