/////////////////// codigo re hecho ////////////////////////////////////

const tarjetas = document.querySelector("section#tarjetas")
const selectorDeSabores = document.querySelector(".sabores")
const vistaPreviaPedido = document.querySelector(".vistaPreviaPedido")
// const selectorDeEnvios = document.querySelector("select.form-select.envio")
// botones de funcion principales
const contenedoTarjetas = document.querySelector(".contenedor-tarjetas")
const verPedido = document.querySelector(".verPedido")
const btnEliminar = document.querySelectorAll(".btnEliminar")
const btnCancelar = document.querySelector(".cancelarPedido")
const seguirPidiendo = document.querySelector(".seguirPidiendo")
const btnAgregar = document.querySelectorAll('.btnAgregar')

function actualizarPedido() {
    vistaPreviaPedido.textContent = "Tu pedido tiene " + pedido.length + " sanguchitos"
}



// cargar cards de triples
const cargarTriples = (array)=> {
    array.forEach(triple => {
        contenedoTarjetas.innerHTML += retornarTriples(triple)
    });
    clickEnBotones()
}

// identificar botones de productos
const clickEnBotones = ()=> {
    const btnAgregar = document.querySelectorAll('.btnAgregar')
        for (boton of btnAgregar) {
            boton.addEventListener("click", (e)=> {                
                let resultado = triplesComunes.find(triple => triple.id === parseInt(e.target.id))
                    pedido.push(resultado)
                    guardarPedido()
                    console.log(pedido)
            })
        } 
}

verPedido.addEventListener("click", ()=> location.href = "cierre.html")
// seguirPidiendo.addEventListener("click", ()=> location.href = "index.html")

cargarTriples(triplesComunes)
recuperarPedido()
actualizarPedido()



