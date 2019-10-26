'use strict'

const Producto = use('App/Models/Producto');

class ProductoController {
    async store ({ request, response }){
        console.log(request.input('codigo'));
        console.log(request.input('nombre'));
        console.log(request.input('precio'));
        console.log(request.input('cantidad'));
        console.log(request.input('id_marca'));
        const producto = new Producto();
        producto.codigo = request.input('codigo');
        producto.nombre = request.input('nombre');
        producto.precio = request.input('precio');
        producto.cantidad = request.input('cantidad');
        producto.id_marca = request.input('id_marca');
        await producto.save();
    }

    async update ({ params, request, response }) {
        console.log(params.id);
        console.log(request.input('codigo'));
        console.log(request.input('nombre'));
        console.log(request.input('precio'));
        console.log(request.input('cantidad'));
        console.log(request.input('id_marca'));
        const producto = await Producto.find(params.id);
        producto.codigo = request.input('codigo');
        producto.nombre = request.input('nombre');
        producto.precio = request.input('precio');
        producto.cantidad = request.input('cantidad');
        producto.id_marca = request.input('id_marca');
        await producto.save();
    }

    async destroy ({ params, request, response }) {
        console.log(params.id);
        const producto = await Producto.find(params.id);
        await producto.delete();
    }
}

module.exports = ProductoController
