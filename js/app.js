/////////////////// codigo re hecho ////////////////////////////////////

const tarjetas = document.querySelector("section#tarjetas")
const footer = document.querySelector("footer")
const selectorDeSabores = document.querySelector(".sabores")
// const selectorDeEnvios = document.querySelector("select.form-select.envio")
// botones de funcion principales
const contenedoTarjetas = document.querySelector(".contenedor-tarjetas")
const clickVerPedido = document.querySelector(".verPedido")
const btnEliminar = document.querySelectorAll(".btnEliminar")
const btnCancelar = document.querySelector(".cancelarPedido")
const seguirPidiendo = document.querySelector("button.seguirPidiendo")
const btnAgregar = document.querySelectorAll('.btnAgregar')


footer.innerHTML = "<p>Comisión 39470 - Alumno Pablo Iván Bárcena</p>"

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

clickVerPedido.addEventListener("click", ()=> location.href = "cierre.html")
cargarTriples(triplesComunes)
recuperarPedido()



