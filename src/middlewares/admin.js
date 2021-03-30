//----------* MIDDLEWARE *----------//
module.exports = (req, res, next) => {
    if ( !req.session.user || req.session.user.rol == 0) {
        res.redirect('/');
    }

    return next();
}