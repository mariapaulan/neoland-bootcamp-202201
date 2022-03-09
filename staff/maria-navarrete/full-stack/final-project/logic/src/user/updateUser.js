const { models: { User } } = require("data")
const { validators: { validateId, validateString, validateEmail, validateBoolean } } = require('commons')


function updateUser(userId, username, email, notifications) {
    validateId(userId, 'userId')
    validateString(username, 'name')
    validateEmail(email)
    validateBoolean(notifications)

    return User.updateOne({ _id: userId }, { username, email, notifications })
        .then(result => {
            if (result.matchedCount === 0) throw new Error(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser