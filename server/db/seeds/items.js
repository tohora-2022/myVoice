exports.seed = function (knex) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { id: 1, word: 'actions', image: 'www.hereitis.co', categories_id: 1, tag: 'verbs' },
        { id: 2, word: 'actions', image: 'www.hereitis.co', categories_id: 1, tag: 'verbs' },
        { id: 3, word: 'actions', image: 'www.hereitis.co', categories_id: 1, tag: 'verbs' }
      ])
    })
}
