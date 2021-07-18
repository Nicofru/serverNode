const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken')

router.post('/create', (req, res) => {
    UserController.createUser(req.body, res).
    then((user) => {
        res.status(200).send({createdUser: user, message: 'User successfully created'})
    })
    .catch(error => {
        res.send(error)
    })
})

router.get('/', (req, res) => {
    UserController.getAllUsers(req.body, res)
    .then((users) => {
        res.status(200).send(users)
    })
    .catch(error => {
        res.send(error)
    })
})

module.exports = router