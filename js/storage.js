const pedido = []

const guardarPedido = ()=> {
    if (pedido.length > 0) {
        localStorage.setItem("pedidoDeTriples", JSON.stringify(pedido))
    }
}

const recuperarPedido = ()=> {
    const pedidoGuardado = JSON.parse(localStorage.getItem("pedidoDeTriples"))
        if (pedidoGuardado !== null) {
            pedido.push(...pedidoGuardado)
            // pedidoGuardado.forEach(triple => {
            //     pedido.push(triple)
            // }); 
        }
}