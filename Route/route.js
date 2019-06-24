module.exports = (app) => {
    const model = require('../Controllers/register.controller');
    app.post('/register', model.creerRegister);
    app.get('/register', model.findAll);
    app.post('/login', model.login);
    // app.get('/register/:id', notes.findOne);
}