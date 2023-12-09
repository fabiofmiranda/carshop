document.addEventListener("DOMContentLoaded", function() {
  // Esconder a tela de cadastro inicialmente
  var signupContainer = document.getElementById("signup-container");
  signupContainer.style.display = "none";
});

function showSignup() {
  var loginContainer = document.getElementById("login-container");
  var signupContainer = document.getElementById("signup-container");

  loginContainer.style.display = "none";
  signupContainer.style.display = "block";

}

function showLogin() {
  var loginContainer = document.getElementById("login-container");
  var signupContainer = document.getElementById("signup-container");

  loginContainer.style.display = "block";
  signupContainer.style.display = "none";
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
}



// Configurar o Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD0dh4wdAmunMdRxYwphgflfml2yXUJV9w",
    authDomain: "bdcarshop-7a6e7.firebaseapp.com",
    projectId: "bdcarshop-7a6e7",
    storageBucket: "bdcarshop-7a6e7.appspot.com",
    messagingSenderId: "1072541180055",
    appId: "1:1072541180055:web:9e17ffd1cd41082b6fc9d2",
    measurementId: "SUA_MEDICAO_ID"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Referência para o serviço de autenticação do Firebase
  var auth = firebase.auth();
  
  // Função para o login
  function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then(function() {
        alert("Login bem-sucedido!");
        redirectToCheckout();
      })
      .catch(function(error) {
        alert("Erro ao fazer login: " + error.message);
      });
  }
  
  // Função para o cadastro
  function signup() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        alert("Cadastro bem-sucedido!");
      })
      .catch(function(error) {
        alert("Erro ao cadastrar");
      });
  }
  function redirectToCheckout() {
    // Você pode usar window.location.href para redirecionar para a tela de checkout
    window.location.href = "checkout.html";
  }

  function limparCampos() {
    document.getElementById('email').value = ''; // Substitua 'email' pelo ID real do campo de email
    document.getElementById('senha').value = ''; // Substitua 'senha' pelo ID real do campo de senha
  }
  
  // Adicione a chamada da função no clique dos botões de login e cadastro
  
  // Exemplo:
  document.getElementById('botao-login').addEventListener('click', function() {
    // Lógica de autenticação
    limparCampos(); // Limpar os campos após o login
  });
  
  document.getElementById('botao-cadastro').addEventListener('click', function() {
    // Lógica de cadastro
    limparCampos(); // Limpar os campos após o cadastro
  });
