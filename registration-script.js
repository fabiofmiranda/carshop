function preencherContrato() {
    // Obter valores do formulário
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var endereco = document.getElementById("endereco").value;

    var marca = prompt("Digite a marca do veículo:");
    var modelo = prompt("Digite o modelo do veículo:");
    var ano = prompt("Digite o ano do veículo:");
    var placa = prompt("Digite a placa do veículo:");
    var chassi = prompt("Digite o chassi do veículo:");

    var valor = prompt("Digite o valor total da venda:");
    var formaPagamento = prompt("Digite a forma de pagamento:");
    var diasTransferencia = prompt("Digite o prazo para a transferência de propriedade:");
    
    var cidade = prompt("Digite a cidade para o foro:");

    // Preencher o contrato
    document.getElementById("nomeContrato").innerText = nome;
    document.getElementById("cpfContrato").innerText = cpf;
    document.getElementById("enderecoContrato").innerText = endereco;

    document.getElementById("marcaContrato").innerText = marca;
    document.getElementById("modeloContrato").innerText = modelo;
    document.getElementById("anoContrato").innerText = ano;
    document.getElementById("placaContrato").innerText = placa;
    document.getElementById("chassiContrato").innerText = chassi;

    document.getElementById("valorContrato").innerText = valor;
    document.getElementById("formaPagamentoContrato").innerText = formaPagamento;
    document.getElementById("diasTransferenciaContrato").innerText = diasTransferencia;

    document.getElementById("cidadeContrato").innerText = cidade;

    // Exibir o contrato preenchido
    document.getElementById("formulario").style.display = "none";
    document.getElementById("contrato").style.display = "block";

    
}
function imprimirContrato() {
    window.print();
}

function enviarContrato() {
    // Lógica para enviar o contrato para o vendedor
    alert("Contrato enviado para o vendedor!");
}
function voltarParaProdutos() {
    // Lógica para redirecionar para a tela de produtos
    window.location.href = 'checkout.html';
}