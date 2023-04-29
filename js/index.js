
const tarjetas = document.querySelector("section#tarjetas")
const vistaPreviaPedido = document.querySelector(".vistaPreviaPedido")
const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")
const verPedido = document.querySelector(".verPedido")
const triples = []
const URL = "js/triples.json"

const selectorDeTipo = document.querySelector(".sabores")

// funcion para usar el tag select de index.html
// function selector () {
//     selectorDeTipo.addEventListener("change", ()=> {
//         const tipoElegido = selectorDeTipo.value
//         if(tipoElegido === "comunes") {
//             URL === "js/comunes.json"
//         } else if (tipoElegido === "especiales") {
//             URL === "js/especiales.json"
//         } else if (tipoElegido === "vegetarianos") {
//             URL === "js/vegetarianos.json"
//         }
//     })
// }

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

const cargarTriples = (array)=> {
    array.forEach(triple => {
        contenedorTarjetas.innerHTML += retornarTriples(triple)
    });
    botonAgregar()
}

const botonAgregar = ()=> {
    const btnAgregar = document.querySelectorAll('.btnAgregar')
        for (boton of btnAgregar) {
            boton.addEventListener("click", (e)=> {                
                let resultado = triples.find(triple => triple.id === parseInt(e.target.id))
                    pedido.push(resultado)
                    guardarPedido()
                    actualizarPedido()
            })
        } 
}


// const botonAgregar = ()=> {
//     debugger
//     const btnAgregar = document.querySelectorAll('.btnAgregar')
//         for (boton of btnAgregar) {
//             boton.addEventListener("click", (e)=> { 
//                 const id = parseInt(e.target.id)               
//                 let resultado = triples.find(triple => triple.id === id)
//                 const existe = pedido.some(p => p.id === id)
//                 const alPedido = {
//                     id: resultado.id,
//                     precio: resultado.precio,
//                     nombre: resultado.nombre
//                 }
//                 if(existe) {
//                     pedido.map(p => {
//                         if(p.id === id){
//                             p.cantidad++
//                             p.precio = p.cantidad * alPedido.precio
//                         }
//                     })
//                 } else {
//                     pedido.push(resultado)
//                 }
//                     guardarPedido()
//                     actualizarPedido()
//                     console.log(pedido)
//             })
//         } 
// }

verPedido.addEventListener("click", ()=> {
    if (pedido.length > 0) {
        location.href = "pedido.html"
    } else {
        swal.fire({
            title: 'No tenes un pedido',
            icon: 'warning'
        })
    }
})

obtenerTriples()
recuperarPedido()




