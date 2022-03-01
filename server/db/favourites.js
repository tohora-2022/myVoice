const connection = require('./connection')

function getAllFavourites (userId, db = connection) {
  return db('favourites')
    .where('users_id', userId)
    .join('items', 'favourites.items_id', 'items.id')
    .select('items.id as itemId', 'word', 'items.image as itemImage', 'tag', 'favourites.users_id as usersId')
}

function addFavourite (userId, favourite, db = connection) {
  return db('favourites')
    .insert({ users_id: userId, items_id: favourite })
}

function favouriteExists (userId, itemId, db = connection) {
  return db('favourites')
    .where('users_id', userId)
    .where('items_id', itemId)
    .count('items_id as iId')
    .then(count => {
      return count[0].iId > 0
    })
}

module.exports = {
  getAllFavourites,
  addFavourite,
  favouriteExists
}
