//----------* MIDDLEWARE *----------//
module.exports = (req, res, next) => {
    if (req.session.user.rol != 1) {
        res.redirect('/');
    }
    
    return next();
}