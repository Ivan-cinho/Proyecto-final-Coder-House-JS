
const tarjetas = document.querySelector("section#tarjetas")
const footer = document.querySelector("footer")
const selectorDeSabores = document.querySelector(".sabores")
// const selectorDeEnvios = document.querySelector("select.form-select.envio")
// botones de funcion principales
const btnEliminar = document.querySelectorAll(".btnEliminar")
const btnCancelar = document.querySelector(".cancelarPedido")
const seguirPidiendo = document.querySelector("button.seguirPidiendo")
const clickVerPedido = document.querySelector(".verPedido")

footer.innerHTML = "<p>Comisión 39470 - Alumno Pablo Iván Bárcena</p>"


// funcion para mostrar las cards de los productos    
function cargarTriples(arrayDeTriples) {
    tarjetas.innerHTML = ""
    if (arrayDeTriples.length > 0) {
        arrayDeTriples.forEach((triple)=> {
            tarjetas.innerHTML += retornarProductos(triple)
        })
        activarClickEnBotones()
    } else {
        // falta definir const retornoCardError dentro de plantillas.js
    }
}


// funcion para detectar cuantos clicks y a que productos los hizo
const activarClickEnBotones = ()=> {
    const btnAgregar = document.querySelectorAll('.btnAgregar')
    for (boton of btnAgregar) {
        boton.addEventListener("click", (e)=> {
            let triple = triplesComunes.find((triple)=> triple.id === parseInt(e.target.id))
            pedido.push(triple)
            console.log("Se agrego el sanguchito de " + triple.nombre.toLowerCase() + " al pedido")
            guardarPedido(pedido)
        })
        // boton.addEventListener("mousemove", (e)=> {
        //     let codigoId = parseInt(e.target.title = `Agregar al pedido`)
        // })
    }
}


// btnCancelar.addEventListener("click", ()=> {
//     pedido.splice(0, pedido.length)
//     console.log(pedido)
//     // recuperarPedido(pedido)
// })


clickVerPedido.addEventListener("click", ()=> {location.href = "cierre.html"})
 

cargarTriples(triplesComunes)
recuperarPedido()





