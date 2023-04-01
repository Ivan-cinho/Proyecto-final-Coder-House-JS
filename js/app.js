
const tarjetas = document.getElementById("tarjetas")
const footer = document.getElementsByTagName("footer")
const inputSearch = document.querySelector("input#inputSearch") // esta constante es para el search que habria que incluir en html si es que quiero usar esa herramienta para la app, ver minuto 1:49:00 de clase 9
const pedido = []

// searchin de productos, ojo que asi como esta si se hace busqueda no permite agregar al carrito sepa uno x q wea
inputSearch.addEventListener("search", ()=> {
    let resultado = triplesComunes.filter((triple)=> triple.nombre.includes(inputSearch.value))
        console.table(resultado)
        if (resultado.length > 0) {
            cargarTriplesComunes(resultado)
        }
})

// ver clase 9, esta variable es para cerrar compra
const clickBtn = document.querySelector("button.btn.btn-outline-success.me-2")
    clickBtn.addEventListener("click", ()=> {location.href = "cierre.html"})
    
// funcion para mostrar las cards de los productos    
function cargarTriplesComunes(arrayDeTriples) {
    tarjetas.innerHTML = ""
    if (arrayDeTriples.length > 0) {
        arrayDeTriples.forEach((producto)=> {
            tarjetas.innerHTML += retornarProductos(producto)
        })
    } else {
        // falta definir aca el mensaje de error cuando no hay triples comunes
    }
}

// funcion para detectar cuantos clicks y a que productos los hizo
// asi lo hizo el profe pero me funciono igual agregandolo mas abajo
function activarClickEnBotones() {
    const btnAgregar = document.querySelectorAll('a.btn.btn-primary')
        for (boton of btnAgregar) {
            // la "e" como parametro de la funcion flecha hace referencia a objeto global event, tener en cuenta para rescatar datos de un evento
            boton.addEventListener("click", (e)=> {
                let codigoId = parseInt(e.target.id)
                let tripleComun = triplesComunes.find((tripleComun)=> tripleComun.id === codigoId)
                // console.log(tripleComun)
                pedido.push(tripleComun)
                console.table(pedido)
            })
            boton.addEventListener("mousemove", (e)=> {
                let codigoId = parseInt(e.target.title = `Agregar al pedido`)

            })
        }
}

cargarTriplesComunes(triplesComunes)
activarClickEnBotones()

// const btnAgregar = document.querySelectorAll('a.btn.btn-primary')
