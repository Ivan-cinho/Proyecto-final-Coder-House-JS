/////////////////// codigo re hecho ////////////////////////////////////

const tarjetas = document.querySelector("section#tarjetas")
const selectorDeSabores = document.querySelector(".sabores")
const vistaPreviaPedido = document.querySelector(".vistaPreviaPedido")
const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")
const verPedido = document.querySelector(".verPedido")
const triples = []
const URL = "js/triples.json"

const obtenerTriples = ()=> {
    fetch(URL)
        .then((response)=> response.json())
        .then((data)=> triples.push(...data))
        .then(()=> cargarTriples(triples))
        .catch(error => {
            console.error(error)
        })
}

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

// boton agregar
const botonAgregar = ()=> {
    const btnAgregar = document.querySelectorAll('.btnAgregar')
        for (boton of btnAgregar) {
            boton.addEventListener("click", (e)=> {                
                let resultado = triples.find(triple => triple.id === parseInt(e.target.id))
                    pedido.push(resultado)
                    guardarPedido()
                    actualizarPedido()
                    console.log(pedido)
            })
        } 
}

verPedido.addEventListener("click", ()=> location.href = "pedido.html")

obtenerTriples()
recuperarPedido()




