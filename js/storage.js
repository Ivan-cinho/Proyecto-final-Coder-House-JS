// manejar logica de carrito + storage en los 2 html

const pedido = []

const guardarPedido = ()=> {
    if (pedido.length > 0) {
        localStorage.setItem("pedidoDeTriples", JSON.stringify(pedido))
    }
}

const recuperarPedido = ()=> {
    const pedidoGuardado = JSON.parse(localStorage.getItem("pedidoDeTriples"))
        if (pedidoGuardado !== null) {
           pedidoGuardado.forEach(triple => {
                pedido.push(triple)
           }); 
        }
}