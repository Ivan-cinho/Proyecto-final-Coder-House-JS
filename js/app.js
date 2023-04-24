/////////////////// codigo re hecho ////////////////////////////////////

const tarjetas = document.querySelector("section#tarjetas")
const selectorDeSabores = document.querySelector(".sabores")
const vistaPreviaPedido = document.querySelector(".vistaPreviaPedido")
const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")
const verPedido = document.querySelector(".verPedido")
// const btnAgregar = document.querySelectorAll('.btnAgregar')

function actualizarPedido() {
    vistaPreviaPedido.textContent = "Tu pedido tiene " + pedido.length + " sanguchitos"
}



// cargar cards de triples
const cargarTriples = (array)=> {
    array.forEach(triple => {
        contenedorTarjetas.innerHTML += retornarTriples(triple)
    });
    botonAgregar()
}

// identificar botones de productos
const botonAgregar = ()=> {
    const btnAgregar = document.querySelectorAll('.btnAgregar')
        for (boton of btnAgregar) {
            boton.addEventListener("click", (e)=> {                
                let resultado = triplesComunes.find(triple => triple.id === parseInt(e.target.id))
                    pedido.push(resultado)
                    guardarPedido()
                    actualizarPedido()
                    console.log(pedido)
            })
        } 
}

verPedido.addEventListener("click", ()=> location.href = "cierre.html")

cargarTriples(triplesComunes)
recuperarPedido()




