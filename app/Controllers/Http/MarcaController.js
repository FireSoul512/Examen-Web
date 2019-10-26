'use strict'

const Marca = use('App/Models/Marca');

class MarcaController {
    async store ({ request, response }){
        console.log(request.input('nombre'));
        console.log(request.input('id_provedor'));
        const marca = new Marca();
        marca.nombre = request.input('nombre');
        marca.id_provedor = request.input('id_provedor');
        await marca.save();
    }

    async update ({ params, request, response }) {
        console.log(request.input('nombre'));
        console.log(request.input('id_provedor'));
        const marca = await Marca.find(params.id);
        marca.nombre = request.input('nombre');
        marca.id_provedor = request.input('id_provedor');
        await marca.save();
    }

    async destroy ({ params, request, response }) {
        console.log(params.id);
        const marca = await Marca.find(params.id);
        await marca.delete();
    }
}

module.exports = MarcaController
