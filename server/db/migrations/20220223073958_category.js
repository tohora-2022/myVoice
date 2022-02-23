exports.up = function (knex) {
  return knex.schema.createTable('categories', table => {
    table.increments('id')
    table.string('category')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('categories')
}
