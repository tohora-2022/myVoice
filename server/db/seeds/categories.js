exports.seed = function (knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        { id: 1, category: 'quick' },
        { id: 2, category: 'actions' },
        { id: 3, category: 'describe' },
        { id: 4, category: 'help' },
        { id: 5, category: 'people' },
        { id: 6, category: 'food' },
        { id: 7, category: 'activities' },
        { id: 8, category: 'clothes' }
      ])
    })
}
