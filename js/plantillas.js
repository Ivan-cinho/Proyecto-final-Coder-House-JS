
// el template puede estar declarado como funcion o como constante con arrow function, funciona igual

// function retornarProductos(producto) {
//     return `<div class="card" style="width: 18rem;">
                    
//                     <div class="card-img-top">${producto.imagen}</div>
//                 <div class="card-body">
//                     <h5 class="card-title">${producto.nombre}</h5>
//                     <p class="card-text">${producto.tipo}</p>
//                     <a href="#" class="btn btn-primary" id="${producto.id}">+</a>
//                 </div>
//             </div>`
// }

const retornarProductos = (triple) => {
    return `<div class="card" style="width: 18rem;">                  
                    <div class="card-img-top">${triple.imagen}</div>
                <div class="card-body">
                    <h5 class="card-title">${triple.nombre}</h5>
                    <p class="card-text">${triple.tipo}</p>
                    <a href="#" class="btn btn-primary" id="${triple.id}">+</a>
                </div>
            </div>`
}

// aca abajo va la card de error
// const retornoCardError = ()=> {
//     return ``
// }

// aca abajo va la card de cierre de compra
// en la 2da etiqueta td deberia ir un array con la cantidad de sanguchitos de ese gusto pedidos
const retornarPedido = (pedido)=> {
    return `<tr>
                <td>${triple.nombre}</td>
                <td>${triple.tipo}</td>
                <td><button id="${triple.id}">QUITAR</button></td>
            </tr>`
}