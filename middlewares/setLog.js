//Para cuando se crea cookie pero no la sesion
const db = require('../database/models');


//----------* MIDDLEWARE *----------//
module.exports = async (req, res, next) => {
    if (req.cookies && !req.session) {
        const users = await db.User.findAll();
        const userFound = users.find(user => user.email == req.cookies.email);
        req.session = userFound;
    }

    return next();
}

