'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('codigo',50).notNullable().unique()
      table.string('nombre',50).notNullable().unique()
      table.float('precio',2).notNullable()
      table.integer('cantidad').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
