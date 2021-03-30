//Para crear la cookie con el usuario loggeado
const db = require('../database/models');


//----------* MIDDLEWARE *----------//
module.exports = async (req, res, next) => {
    if (req.cookies && !req.session) {
        const users = await db.User.findAll();
        const userFound = users.find(user => user.id == req.cookies.user_id);
        req.session = userFound;
    }

    return next();
}

