const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({id}, 'cbwd72632', {
        expiresIn: '30d'
    })
}

module.exports = generateToken