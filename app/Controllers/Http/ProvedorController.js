'use strict'

const Provedor = use('App/Models/Provedor');

class ProvedorController {
    async store ({ request, response }){
        console.log(request.input('nombre'));
        const provedor = new Provedor();
        provedor.nombre = request.input('nombre');
        await provedor.save();
    }

    async update ({ params, request, response }) {
        console.log(params.id);
        console.log(request.input('nombre'));
        const provedor = await Provedor.find(params.id);
        provedor.nombre = request.input('nombre');
        await provedor.save();
    }

    async destroy ({ params, request, response }) {
        console.log(params.id);
        const provedor = await Provedor.find(params.id);
        await provedor.delete();
    }
}

module.exports = ProvedorController
