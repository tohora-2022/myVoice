exports.up = function (knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id')
    table.string('word')
    table.string('image')
    table.integer('category_id')
    table.string('tag')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('items')
}
