const connection = require('./connection')

// function getCustomItem (userId, db = connection) {
//   return db('customItems').where('users_id', userId)
// }

function getFavButton (userId, db = connection) {
  return db('favourites')
    .where('users_id', userId)
    .select('favourites.id as favId', 'users_id as usersId', 'items_id as itemsId')
    .union(db('customItems')
      .where('users_id', userId)
      .select('id as customItemsId', 'text', 'image', 'users_id'))
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
  getFavButton,
  addFavourite,
  favouriteExists
}
