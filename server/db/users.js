const connection = require('./connection')

function userExists (auth0Id, db = connection) {
  return db('users')
    .count('auth0_id as n')
    .where('auth0_id', auth0Id)
    .then(count => {
      return count[0].n > 0
    })
}

function createUser (user, db = connection) {
  return db('users')
    .insert(user)
}

module.exports = {
  createUser,
  userExists
}
