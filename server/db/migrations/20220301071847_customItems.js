exports.up = function (knex) {
  return knex.schema.createTable('customItems', table => {
    table.increments('id')
    table.string('text')
    table.string('image')
    table.integer('users_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('customItems')
}
