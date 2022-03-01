exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { auth0_id: 'auth|123', email: 'monkey@gmail.com' },
        { auth0_id: 'auth|456', email: 'myhands@gmail.com' }
      ])
    })
}
