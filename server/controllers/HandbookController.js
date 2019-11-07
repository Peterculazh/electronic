const Handbook = require('../models').Handbook;

module.exports = {
    listAll(req, res) {
        return Handbook.findAll()
            .then(result => res.render('index', {
                'items': result
            }))
            .catch(err => res.status(401).send(err));
    },
    create(req, res) {
        return Handbook
            .create({
                fullname: req.body.fullname,
                phone: req.body.phone,
                email: req.body.email
            })
            .then(result => res.status(201).redirect('/'))
            .catch(err => res.status(400).send(err));
    },
    update(req, res) {
        return Handbook
            .findByPk(req.body.id)
            .then(item => {
                if (!item) {
                    return res.status(404).send({
                        message: "Item not found"
                    });
                }
                return item.update({
                        fullname: req.body.fullname || item.fullname,
                        phone: req.body.phone || item.phone,
                        email: req.body.email || item.email
                    })
                    .then(updatedItem => res.status(200).redirect('/'))
                    .catch(err => res.status(400).send(err));
            })
            .catch(err => res.status(400).send(err));
    },
    delete(req, res) {
        return Handbook
            .findByPk(req.body.id)
            .then(item => {
                if (!item) {
                    return res.status(404).send({
                        message: "No such item"
                    });
                }
                return item.destroy()
                    .then(() => res.status(201).redirect('/'))
                    .catch(err => res.status(401).send(err));
            })
            .catch(err => res.status(401).send(err));
    }
};