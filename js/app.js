
const tarjetas = document.querySelector("section#tarjetas")
const footer = document.querySelector("footer")
const selectorDeSabores = document.querySelector("select.form-select.sabores")
const selectorDeEnvios = document.querySelector("select.form-select.envio")

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

// intento de funcion para darle funcionalidad a los botones de eliminar en cierre.html, aun incompleto
// eliminar triple
// function eliminarTriple(id) {
//     let triple = pedido.findindex((triple)=> triple.id === id)
//     if (triple > -1) {
//         pedido.splice(triple, 1)
//     }
// }

// funcion para detectar cuantos clicks y a que productos los hizo
const activarClickEnBotones = ()=> {
    const btnAgregar = document.querySelectorAll('a.btn.btn-primary')
    for (boton of btnAgregar) {
        boton.addEventListener("click", (e)=> {
            let triple = triplesComunes.find((triple)=> triple.id === parseInt(e.target.id))
            pedido.push(triple)
            console.log("Se agrego el sanguchito de " + triple.nombre.toLowerCase() + " al pedido")
            guardarPedido(pedido)
        })
        boton.addEventListener("mousemove", (e)=> {
            let codigoId = parseInt(e.target.title = `Agregar al pedido`)
        })
    }
}

// boton ver pedido, re dirije al html de cierre de pedido
const clickVerPedido = document.querySelector("button.btn.btn-primary")
    clickVerPedido.addEventListener("click", ()=> {location.href = "cierre.html"})


// boton "seguir pidiendo", declarado como esta no funciona, por aguna razon no cargan las cards en index.html, queda comentado x ahora
// const clickSeguirPidiendo = document.querySelector("button.btn.btn-primary.seguirPidiendo")
//     debugger
//     clickSeguirPidiendo.addEventListener("click", ()=> {location.href = "index.html"})


cargarTriples(triplesComunes)
recuperarPedido()




