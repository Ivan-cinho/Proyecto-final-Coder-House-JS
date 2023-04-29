
const tbody = document.querySelector("tbody")
const btnEliminar = document.querySelectorAll(".btnEliminar")
const seguirPidiendo = document.querySelector(".seguirPidiendo")
const btnCancelar = document.querySelector(".cancelarPedido")
const btnConfirmar = document.querySelector(".confirmarPedido")
const total = document.querySelector(".total")

recuperarPedido()

function cargarPedido() {
        tbody.innerHTML = ""
        if (pedido.length > 0) {
            pedido.forEach(triple => { tbody.innerHTML += retornarPedido(triple) })
            total.innerHTML = "El total de tu pedido es de $ " + totalPedido()
        }
    botonEliminar()
}

const botonEliminar = ()=> {
        const btnEliminar = document.querySelectorAll(".btnEliminar")
        if (btnEliminar !== null) {
            for (boton of btnEliminar) {
                boton.addEventListener("click", (e)=> {
                    let indice = pedido.findIndex(triple => triple.id === parseInt(e.target.id))
                        pedido.splice(indice, 1)
                        guardarPedido()
                        cargarPedido()
                })
            }
        }
}


// btnCancelar.addEventListener("click", (e)=> {
//     if(confirm("Queres cancelar tu pedido?")) {
//         pedido.length = 0;
//         localStorage.setItem('pedidoDeTriples', JSON.stringify(pedido))
//         console.log(pedido);
//         totalPedido()
//         cargarPedido()
//     }
// })

btnCancelar.addEventListener("click", ()=> {
    swal.fire({
        title: 'Queres cancelar tu pedido?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, quiero cancelar',
        cancelButtonText: 'No, no quiero cancelar'
    }) .then((resultado) => {
        if (resultado.isConfirmed) {
            pedido.length = 0
            localStorage.setItem('pedidoDeTriples', JSON.stringify(pedido))
            console.log(pedido)
            totalPedido()
            cargarPedido()
            location.href = "index.html"
        }
    })
})

btnConfirmar.addEventListener("click", ()=> {
    swal.fire({
        title: 'El valor de tu pedido es de $' + totalPedido() + ' por ' + pedido.length + ' sanguchitos. Queres que lo enviemos a domicilio?',
        text: 'El envio tiene un costo de $350 (escrito en imprenta sin onda por que me puse la gorra 👮 )',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, quiero envío a domicilio',
        cancelButtonText: 'No, paso a retirarlo'
    }) .then((resultado) => {
        if (resultado.isConfirmed) {
            swal.fire({
                icon: 'success',
                title: 'El valor final de tu pedido con envio es de $' + (totalPedido() + 350) + '. Muchas gracias por tu compra!',
                confirmButtonText: 'ok',
                allowOutsideClick: false,
                allowEscapeKey: false

            }) .then((ok) => {
                if (ok.isConfirmed) {
            pedido.length = 0
            localStorage.setItem('pedidoDeTriples', JSON.stringify(pedido))
            totalPedido()
            cargarPedido()
            location.href = "index.html"
                }
            })
        } else {
            swal.fire({
                icon: 'success',
                title: 'Muchas gracias por tu compra, te esperamos!',
                allowOutsideClick: false,
                allowEscapeKey: false
            })
            .then((ok) => {
                if (ok.isConfirmed) {
            pedido.length = 0
            localStorage.setItem('pedidoDeTriples', JSON.stringify(pedido))
            totalPedido()
            cargarPedido()
            location.href = "index.html"
                }
            })
        }
    })
})

seguirPidiendo.addEventListener("click", ()=> location.href = "index.html")

cargarPedido()

function totalPedido() {
    let total = 0
    pedido.forEach(triple => total = total + triple.precio)
    return total
}