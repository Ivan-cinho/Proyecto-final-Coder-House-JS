
const tarjetas = document.getElementById("tarjetas")
const footer = document.getElementsByTagName("footer")


footer.innerHTML = "<p>hola footer</p>"

function cargarTriplesComunes() {
    triplesComunes.forEach((producto)=> {
        tarjetas.innerHTML += retornarProductos(producto)
    })
}

cargarTriplesComunes()