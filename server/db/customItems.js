const connection = require('./connection')

function getCustomItems (userId, db = connection) {
  return db('customItems')
    .where({ users_id: userId })
    .select('id', 'text as word', 'image as itemImage', 'users_id as usersID')
}

function getCustomItem (id, db = connection) {
  return db('customItems')
    .where({ id })
    .first()
    .select('id', 'text as word', 'image as itemImage', 'users_id as usersID')
}

function addCustomItem (word, path, userId, db = connection) {
  return db('customItems')
    .insert({ text: word, image: path, users_id: userId })
    .then(idArray => {
      return getCustomItem(idArray[0], db)
    })
}

function deleteCustomItem (id, db = connection) {
  return db('customItems').where({ id }).delete()
}

function updateCustomItemPath (id, path, db = connection) {
  return db('customItems')
    .where({ id })
    .update({ image: path })
    .then(() => {
      return getCustomItem(id, db)
    })
}

module.exports = {
  getCustomItems,
  getCustomItem,
  addCustomItem,
  deleteCustomItem,
  updateCustomItemPath
}
