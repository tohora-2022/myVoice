const connection = require('./connection')

function getCustomItems (userId, db = connection) {
  console.log('getCustomItems ', 'userId', userId)
  return db('customItems').where({ users_id: userId })
}
function getCustomItem (id, db = connection) {
  console.log('getCustomItem ', 'id', id)
  return db('customItems').where({ id }).first()
}

function addCustomItem (word, path, userId, db = connection) {
  console.log('addCustomItem ', 'word', word, path, userId)
  return db('customItems')
    .insert({ text: word, image: path, users_id: userId })
    .then(idArray => {
      console.log('idArray', idArray)
      return getCustomItem(idArray[0], db)
    })
}

function deleteCustomItem (id, db = connection) {
  console.log('deleteCustomItem')
  return db('customItems').where({ id }).del()
}

function updateCustomItemPath (id, path, db = connection) {
  console.log('updateCustomItemPath')
  console.log('id', id)
  console.log('path', path)
  return db('customItems')
    .where({ id })
    .update({ image: path })
    .then((numberUpdated) => {
      console.log('numberUpdated', numberUpdated)
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
