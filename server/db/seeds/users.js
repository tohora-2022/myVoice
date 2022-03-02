exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1001, auth0_id: 'auth|123', email: 'monkey@gmail.com' },
        { id: 1002, auth0_id: 'auth|456', email: 'myhands@gmail.com' }
      ])
    })
}
