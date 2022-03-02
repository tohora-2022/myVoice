const express = require('express')
const db = require('../db/users')
const fv = require('../db/favourites')
const checkJwt = require('../auth0')

const router = express.Router()

// Add user /api/v1/aac/users
router.post('/', checkJwt, async (req, res) => {
  const auth0Id = req.user?.sub
  const { email } = req.body
  const user = {
    auth0_id: auth0Id,
    email
  }
  try {
    const userStatus = await db.userExists(auth0Id)
    if (userStatus) {
      return res.sendStatus(200)
    }
    await db.createUser(user)
    return res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/favourites', checkJwt, async (req, res) => {
  const userId = await db.findUserId(req.user?.sub)
  fv.getAllFavourites(userId[0].id)
    .then(favourites => {
      return res.json(favourites)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('DB error')
    })
})

router.post('/add-favourite', checkJwt, async (req, res) => {
  const userId = await db.findUserId(req.user?.sub)
  const item = req.body
  fv.favouriteExists(userId[0].id, item)
    .then(favExists => {
      if (favExists) {
        return res.sendStatus(200)
      }
      return fv.addFavourite(userId[0].id, item)
    })
    .then(() => res.status(201))
    .catch(err => {
      console.log(err)
      res.status(500).send('DB error')
    })
})

router.delete('/remove-favourite', checkJwt, async (req, res) => {
  const userId = await db.findUserId(req.user?.sub)
  const itemId = req.body.item
  return fv.deleteFavourite(userId[0].id, itemId)
    .then(() => {
      return fv.getAllFavourites(userId[0].id)
    })
    .then((favourites) => {
      return res.json(favourites)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('DB error')
    })
})

module.exports = router
