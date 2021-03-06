const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories').select()
}

function getItems (categoryId, db = connection) {
  return db('categories')
    .where('categories.id', categoryId)
    .join('items', 'categories.id', 'items.categories_id')
    .select('items.id as itemId', 'word', 'items.image as itemImage', 'tag', 'categories_id as categoryId', 'category')
}

function getAllItems (db = connection) {
  return db('categories')
    .join('items', 'categories.id', 'items.categories_id')
    .select('items.id as itemId', 'word', 'items.image as itemImage', 'tag', 'categories_id as categoryId', 'category')
}

module.exports = {
  getCategories,
  getItems,
  getAllItems
}
