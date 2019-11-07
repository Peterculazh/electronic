const HandbookController = require('../controllers').handbook;
module.exports = app => {
    app.get('/', HandbookController.listAll);
    app.post('/add', HandbookController.create);
    app.post('/delete', HandbookController.delete);
    app.post('/update', HandbookController.update);
};