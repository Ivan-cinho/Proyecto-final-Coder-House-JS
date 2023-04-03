
const tbody = document.querySelector("tbody")


recuperarPedido()

if (pedido.length > 0) {
    pedido.forEach(triple => {
        tbody.innerHTML += retornarPedido(triple)
    })
}