let users = [];

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

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

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simula a busca do usuário no banco de dados
    const user = users.find(user => user.username === username);

    if (user && user.password === btoa(password)) {
        alert('Login bem-sucedido! Redirecionando para a página de checkout.');
        window.location.href = 'checkout.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}

function clearRegistrationForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
