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

// router.get('/favourites-button', (req, res) => {
//   const id = db.findUserId(req.user?.sub)
//   fv.getFavButton(id)
//     .then((opportunity) => {
//       res.json(opportunity)
//       return null
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).send('Error')
//     })
// })

router.post('/add-favourite', checkJwt, async (req, res) => {
  const userId = db.findUserId(req.user?.sub)
  console.log(userId)
  const item = req.body.item
  fv.addFavourite(userId, item)
    .then(() => res.status(200))
    .catch(err => {
      console.log(err)
      res.status(500).send('DB error')
    })
})

// const auth0Id = req.user?.sub
// const { item } = req.body
// return db.findUserId(auth0Id)
// try {
//   fv.addFavourite(auth0Id, item)
//     .then(() => res.status(200))
//     .catch(err => {
//       console.log(err)
//       res.status(500).send('DB error')
//     })
// } catch (err) {
//   console.error(err)
//   res.status(500).send(err.message)
// }

module.exports = router
