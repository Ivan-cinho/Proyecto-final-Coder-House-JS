
const retornarProductos = (triple)=> {
    return `<div class="card" style="width: 18rem;">                  
                    <div class="card-img-top">${triple.imagen}</div>
                <div class="card-body">
                    <h5 class="card-title">${triple.nombre}</h5>
                    <p class="card-text">${triple.tipo}</p>
                    <a href="#" class="btn btn-primary btnAgregar" id="${triple.id}">+</a>
                </div>
            </div>`
}


// aca abajo va la card de cierre de compra
const retornarPedido = (triple)=> {
    return `<tr>
                <td>${triple.nombre}</td>
                <td>aca iria la cantidad de cada uno</td>
                <td><button id="${triple.id}" class="btn btn-primary btnEliminar">X</button></td>
            </tr>`
}