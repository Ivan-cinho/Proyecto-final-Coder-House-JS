
const retornarTriples = (triple)=> {
    return `<div class="card" style="width: 18rem;">                  
                <div class="card-body">
                    <h5 class="card-title">${triple.nombre}</h5>
                    <p class="card-text">${triple.tipo}</p>
                    <p class="card-precio">$ ${triple.precio}</p>
                    <a href="#" class="btn btn-primary btnAgregar" id="${triple.id}">+</a>
                </div>
            </div>`
}
/* <div class="card-img-top">${triple.imagen}</div> */


// aca abajo va la card de cierre de compra
const retornarPedido = (triple)=> {
    return `<tr>
                <td>${triple.nombre}</td>
                <td>$ ${triple.precio}</td>
                <td><button id="${triple.id}" class="btnEliminar"><img src="imagenes/delete_FILL0_wght400_GRAD0_opsz48.png" alt="X"></button></td>
            </tr>`
}

const retornarError = ()=> {
    return `<div>
                <img src="imagenes/error.jpg" alt="imagen de error">
                <p>uy, algo no anduvo</p>
            </div>`
    
}