
const tbody = document.querySelector("tbody")


recuperarPedido()

// dentro de esta funcion quiero sumar cada triple q tenga el mismo id asi se refleja solo una vez con la cantidad
function cargarPedido(pedido) {
        pedido.forEach(triple => {
            tbody.innerHTML += retornarPedido(triple)
        })
}

cargarPedido(pedido)


