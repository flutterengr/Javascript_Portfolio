module.exports = (req, res, next) => { //En la parte local de la pagina (normalmente public) guarda un usuario en session
    res.locals.loggedUser = false;
    if (req.session) {
        res.locals.loggedUser = req.session;
    }
    return next();
}
