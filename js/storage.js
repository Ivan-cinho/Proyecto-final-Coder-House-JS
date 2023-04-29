const pedido = []


const guardarPedido = ()=> {
    if (pedido.length > 0) {
        localStorage.setItem("pedidoDeTriples", JSON.stringify(pedido))
    }
}

const recuperarPedido = ()=> {
    // return JSON.parse(localStorage.getItem("pedidoDeTriples")) no se ejecuta con este codigo
    const pedidoGuardado = JSON.parse(localStorage.getItem("pedidoDeTriples"))
        if (pedidoGuardado !== null) {
            pedido.push(...pedidoGuardado)
        }
}

