exports.seed = function (knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        { id: 101, category: 'quick', image: 'none' }, // TODO: 'none' is a valid URL, you should use null to indicate that there is no image
        { id: 102, category: 'actions', image: '/images/actions/actions-category.png' },
        { id: 103, category: 'descriptions', image: '/images/descriptions/descriptions-category.png' },
        { id: 104, category: 'feelings', image: '/images/feelings/feelings-category.png' },
        { id: 105, category: 'people', image: '/images/people/people-category.png' },
        { id: 106, category: 'food', image: '/images/food/food-category.png' },
        { id: 107, category: 'activities', image: '/images/activites/activities-category.png' },
        { id: 108, category: 'clothes', image: '/images/clothes/clothes-category.png' },
        { id: 109, category: 'homepage', image: 'none' }
      ])
    })
}
