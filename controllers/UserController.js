const sequelize = require('../utils/dbCreation')
const User = sequelize.models.User
const createUser = (body, res) => {
    return new Promise((resolve, reject) => {
        User.create({
            Name: body.name,
            Email: body.email,
            Website: body.website,
            Type: "prestataire"
        }).then(user => {
            resolve(user)
        }).catch(error => {
            reject(error)
        })
    })
}

const getAllUsers = (body, res) => {
    return new Promise((resolve, reject) => {
        User.findAll()
        .then(users => {
            resolve(users)
        })
        .catch(error => reject(error))
    })
}

module.exports = {
    createUser,
    getAllUsers,
}