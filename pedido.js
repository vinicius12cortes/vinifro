document.addEventListener("DOMContentLoaded", function () {
    const enviarPedidoBtn = document.getElementById("enviar-pedido");

    enviarPedidoBtn.addEventListener("click", function () {
        const nomeCliente = document.getElementById("nome").value;
        const saborSorvete = document.getElementById("sabor").value;
        const quantidadeSorvetes = document.getElementById("quantidade").value;

        const coberturasSelecionadas = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(function (checkbox) {
            coberturasSelecionadas.push(checkbox.value);
        });


          // Verificar se todos os campos estão preenchidos
          if (nomeCliente.trim() === '' || saborSorvete.trim() === '' || quantidadeSorvetes.trim() === '' || coberturasSelecionadas.length === 0) {
            alert('Por favor, preencha todos os campos do formulário.');
            return; // Evitar o envio do formulário se algum campo estiver vazio
        }


        
    

        // Simule o envio do pedido localmente (pode ser armazenado em um array ou objeto)
        const pedido = {
            nomeCliente: nomeCliente,
            saborSorvete: saborSorvete,
            quantidadeSorvetes: quantidadeSorvetes,
            coberturasSelecionadas: coberturasSelecionadas,
        };

        // Armazene o pedido na variável de sessão para que ele esteja disponível na página de confirmação
        sessionStorage.setItem("pedido", JSON.stringify(pedido));

        // Redirecionar para a página de confirmação
        window.location.href = "pgcom.html";
    });
});
