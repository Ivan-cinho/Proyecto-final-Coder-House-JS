
const tbody = document.querySelector("tbody")
const btnEliminar = document.querySelectorAll(".btnEliminar")
const btnCancelar = document.querySelector(".cancelarPedido")
const seguirPidiendo = document.querySelector(".seguirPidiendo")



recuperarPedido()

// dentro de esta funcion quiero sumar cada triple q tenga el mismo id asi se refleja solo una vez con la cantidad
function cargarPedido() {
        tbody.innerHTML = ""
        pedido.forEach(triple => { tbody.innerHTML += retornarPedido(triple) })
        botonEliminar()
}

const botonEliminar = ()=> {
        const btnEliminar = document.querySelectorAll(".btnEliminar")
        if (btnEliminar !== null) {
            for (boton of btnEliminar) {
                boton.addEventListener("click", (e)=> {
                    let indice = pedido.findIndex(triple => triple.id === parseInt(e.target.id))
                        pedido.splice(indice, 1)
                        guardarPedido()
                        cargarPedido()
                })
            }
        }
    }

seguirPidiendo.addEventListener("click", ()=> location.href = "index.html")
cargarPedido(pedido)


