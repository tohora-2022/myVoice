const connection = require('./connection')

function createUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function userExists (auth0Id, db = connection) {
  return db('users')
    .count('auth0_id as n')
    .where('auth0_id', auth0Id)
    .then(count => {
      return count[0].n > 0
    })
}

function findUserId (auth0Id, db = connection) {
  return db('users')
    .where('auth0_id', auth0Id)
    .select('id')
}

module.exports = {
  createUser,
  userExists,
  findUserId
}
