exports.seed = function (knex) {
  return knex('customItems').del()
    .then(function () {
      return knex('customItems').insert([
        { id: 5000, text: 'I am Monkey!', image: '/image/custom/.gitkeep.png', users_id: 1001 },
        { id: 5001, text: 'Wash hands', image: '/image/custom/.gitkeep.png', users_id: 1002 }
      ])
    })
}
