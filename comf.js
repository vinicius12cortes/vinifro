document.addEventListener("DOMContentLoaded", function () {
    const pedidoJSON = sessionStorage.getItem("pedido");
    if (pedidoJSON) {
        const pedido = JSON.parse(pedidoJSON);
        const detalhesPedido = document.getElementById("detalhes-pedido");

        // Exiba os detalhes do pedido na página de confirmação
        detalhesPedido.innerHTML = `
            <p><strong>Nome do Cliente:</strong> ${pedido.nomeCliente}</p>
            <p><strong>Sabor do Sorvete:</strong> ${pedido.saborSorvete}</p>
            <p><strong>Quantidade:</strong> ${pedido.quantidadeSorvetes}</p>
            <p><strong>Coberturas Adicionais:</strong> ${pedido.coberturasSelecionadas.join(", ")}</p>
          
        `;
    } else {
        // Se não houver dados de pedido na variável de sessão, redirecione de volta ao pedido
        window.location.href = "index.html";
    }
});

function voltarAoPedido() {
    // Redirecione de volta à página de pedido
    window.location.href = "index.html";



}