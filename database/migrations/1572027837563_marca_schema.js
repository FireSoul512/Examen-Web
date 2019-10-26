'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarcaSchema extends Schema {
  up () {
    this.create('marcas', (table) => {
      table.increments()
      table.string('nombre',50).notNullable().unique()
      table.integer('id_provedor').unsigned().references('id').inTable('provedors')
      table.timestamps()
    })
  }

  down () {
    this.drop('marcas')
  }
}

module.exports = MarcaSchema
