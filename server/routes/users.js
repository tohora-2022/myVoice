const express = require('express')
const db = require('../db/users')
const checkJwt = require('../auth0')

const router = express.Router()

// Add user /api/v1/aac/users
router.post('/', checkJwt, async (req, res) => {
  console.log('route: ', req.user)
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

// router.post('/favourites', checkJwt, (req, res) => {
// })

module.exports = router
