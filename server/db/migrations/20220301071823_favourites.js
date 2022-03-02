exports.up = function (knex) {
  return knex.schema.createTable('favourites', table => {
    table.increments('id')
    table.integer('users_id')
    table.integer('items_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('favourites')
}
