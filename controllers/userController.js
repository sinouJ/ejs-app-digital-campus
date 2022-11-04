const User = require('../models/userModel');

const index = (req, res) => {
    const { name, age, city } =  req.body

    User.create({ name, age, city })
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports = {
    index
}