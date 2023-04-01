
function retornarProductos (producto) {
    return `<div class="card" style="width: 18rem;">
                    
                    <div class="card-img-top">${producto.imagen}</div>
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.tipo}</p>
                    <a href="#" class="btn btn-primary" id="${producto.id}">+</a>
                </div>
            </div>`
}