exports.up = function (knex) {
  return knex.schema.createTable('categories', table => {
    table.increments('id')
    table.string('category')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('categories')
}
