const db = require('../config/db.config');

const get = (req, res) => {
    const query = `SELECT * FROM customers;`;

    db.query(query, (err, result) => {
        res.json({
            content: result,
            total: result.length,
        })
    });
}

const findOne = (req, res, next) => {
    if (typeof req.params.id !== 'Number') {
        return next(new NotFoundErr)
    }
    const query = `
        SELECT * FROM customers
        WHERE customers.id = ${req.params.id};
    `;

    db.query(query, (err, result) => {
        res.json({
            content: result,
            total: result.length,
        })
    });
}

const create = (req, res) => {
    res.send(`Create users`);
}

const update = (req, res) => {
    res.send(`update`);
}

const remove = (req, res) => {
    res.send(`remove`);
}

const deactivate = (req, res) => {
    res.send(`deactivate`);
}

module.exports = {
    get,
    findOne,
    create,
    update,
    remove,
    deactivate,
}