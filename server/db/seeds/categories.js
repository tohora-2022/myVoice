exports.seed = function (knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        { id: 1, category: 'actions' },
        { id: 2, category: 'describe' },
        { id: 3, category: 'help' },
        { id: 4, category: 'people' },
        { id: 5, category: 'food' },
        { id: 6, category: 'activities' },
        { id: 7, category: 'clothes' }
      ])
    })
}
