
function retornarProductos (producto) {
    return `<div class="card" style="width: 18rem;">
                    <img src="${producto.imagen}" class="card-img-top" alt="...">
                    <div>${producto.imagen}</div>
                <div class="card-body">
                    <h5 class="card-title">${producto.tipo}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`
}