const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/categories', (req, res) => {
  db.getCategories()
    .then(categories => res.json(categories))
    .catch(e => res.status(500).send(e))
})

// Get all categories /api/v1/aac/items
router.get('/items', (req, res) => {
  let categoriesNames = []
  db.getCategories()
    .then(categories => {
      categoriesNames = categories.map(category => category.category)
      return db.getAllItems()
    })
    .then(items => {
      const resObj = {}
      categoriesNames.forEach(categoryName => {
        const filteredItems = items.filter(item => item.category === categoryName)
        resObj[categoryName] = filteredItems
      })
      res.json(resObj)
    })
    .catch(e => res.status(500).send(e))
})

// Get all categories /api/v1/aac
router.get('/:categoryId', (req, res) => {
  db.getItems(req.params.categoryId)
    .then(items => res.json(items))
    .catch(e => res.status(500).send(e))
})

module.exports = router
