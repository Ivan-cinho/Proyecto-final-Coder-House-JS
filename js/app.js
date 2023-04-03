
// para referenciar al queryselector se hace con nombre de etiqueta p, #paraId, .paraclasecss
const tarjetas = document.querySelector("div#tarjetas")
const footer = document.querySelector("footer")
const inputSearch = document.querySelector("input#inputSearch") // esta constante es para el search que habria que incluir en html si es que quiero usar esa herramienta para la app, ver minuto 1:49:00 de clase 9
const selectorDeSabores = document.querySelector("select.form-select.sabores")
const selectorDeEnvios = document.querySelector("select.form-select.envio")

footer.innerHTML = "<p>Hola footer</p>"

// searching de productos, ojo que asi como esta si se hace busqueda no permite agregar al carrito sepa uno x q
// inputSearch.addEventListener("search", ()=> {
//     let resultado = triplesComunes.filter((triple)=> triple.nombre.includes(inputSearch.value))
//         console.table(resultado)
//         if (resultado.length > 0) {
//             cargarTriplesComunes(resultado)
//         }
// })

  
// funcion para mostrar las cards de los productos    
function cargarTriples(arrayDeTriples) {
    // debugger
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
// asi lo hizo el profe pero me funciono igual agregandolo mas abajo
const activarClickEnBotones = ()=> {
    const btnAgregar = document.querySelectorAll('a.btn.btn-primary')
    for (boton of btnAgregar) {
        // la "e" como parametro de la funcion flecha hace referencia a objeto global event, tener en cuenta para rescatar datos de un evento
        boton.addEventListener("click", (e)=> {
            let triple = triplesComunes.find((triple)=> triple.id === parseInt(e.target.id))
            pedido.push(triple)
            guardarPedido()
            // console.table(pedido)
        })
        boton.addEventListener("mousemove", (e)=> {
            let codigoId = parseInt(e.target.title = `Agregar al pedido`)
        })
    }
}

// boton pedir! re dirije al html de cierre de pedido
const clickBtn = document.querySelector("button.btn.btn-primary")
    clickBtn.addEventListener("click", ()=> {location.href = "cierre.html"})


cargarTriples(triplesComunes)
recuperarPedido()


// const btnAgregar = document.querySelectorAll('a.btn.btn-primary')
