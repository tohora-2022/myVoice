exports.seed = function (knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        { id: 101, category: 'quick' },
        { id: 102, category: 'actions' },
        { id: 103, category: 'describe' },
        { id: 104, category: 'help' },
        { id: 105, category: 'people' },
        { id: 106, category: 'food' },
        { id: 107, category: 'activities' },
        { id: 108, category: 'clothes' },
        { id: 109, category: 'homepage' }
      ])
    })
}
