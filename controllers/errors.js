exports.get404 = (req, res, next) => {
    //TODO: Añadir una vista (y a  ** Mafe **)
    res.status(404).send('<h1>Page not found, here must be mafe \'s photography</h1>');
    next();
}