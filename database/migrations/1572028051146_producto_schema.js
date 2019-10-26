'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.table('productos', (table) => {
      // alter table
      table.integer('id_marca').unsigned().references('id').inTable('marcas')
    })
  }

  down () {
    this.table('productos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductoSchema
