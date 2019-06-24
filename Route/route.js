module.exports = (app) => {
    const notes = require('../Controllers/register.controller');
    app.post('/register', notes.creerRegister);
    app.get('/register', notes.findAll);
    app.post('/login', notes.login);
    // app.get('/register/:id', notes.findOne);
}