'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// Provedor
Route.post('provedor/agregar','ProvedorController.store');
Route.post('provedor/editar/:id','ProvedorController.update');
Route.get('provedor/delete/:id','ProvedorController.destroy');

//Marca
Route.post('marca/agregar','MarcaController.store');
Route.post('marca/editar/:id','MarcaController.update');
Route.get('marca/delete/:id','MarcaController.destroy');

//Producto
Route.post('producto/agregar','ProductoController.store');
Route.post('producto/editar/:id','ProductoController.update');
Route.get('producto/delete/:id','ProductoController.destroy');
