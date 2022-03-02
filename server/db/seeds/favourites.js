exports.seed = function (knex) {
  return knex('favourites').del()
    .then(function () {
      return knex('favourites').insert([
        { id: 901, users_id: 1001, items_id: 1 },
        { id: 902, users_id: 1002, items_id: 2 }
      ])
    })
}
