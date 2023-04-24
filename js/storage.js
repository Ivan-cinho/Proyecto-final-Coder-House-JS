const pedido = []
// const pedido = recuperarPedido() || []

const guardarPedido = ()=> {
    if (pedido.length > 0) {
        localStorage.setItem("pedidoDeTriples", JSON.stringify(pedido))
    }
}

const recuperarPedido = ()=> {
    // return JSON.parse(localStorage.getItem("pedidoDeTriples"))
    const pedidoGuardado = JSON.parse(localStorage.getItem("pedidoDeTriples"))
        if (pedidoGuardado !== null) {
            pedido.push(...pedidoGuardado)
            // pedidoGuardado.forEach(triple => {
            //     pedido.push(triple)
            // }); 
        }
}