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
    if (typeof JSON.parse(req.params.id) !== 'number') {
        res.json({
            error: true,
            message: `Customer with id: ${req.params.id} not found.`,
        });
    }
    const query = `
        SELECT * FROM customers
        WHERE customers.id = ${req.params.id};
    `;

    db.query(query, (error, result) => {
        if (error || !result.length) {
            res.json({
                error: true,
                message: `Customer with id: ${req.params.id} not found.`,
            });
        } else {
            res.json(result[0]);
        }
    });
}

const create = (req, res) => {
    const { first_name, last_name, gender, dob, tel, email, is_active } = req.body;
    const sql =  `INSERT INTO customers(first_name, last_name, gender, dob, tel, email, is_active) VALUES (?,?,?,?,?,?,?)`;

    db.query(sql, [first_name, last_name, gender, dob, tel, email, is_active], (error, result) => {
        if (error) {
            res.json({
                error: true,
                message: error,
            });
        } else {
            res.json({
                status: 200,
                message: `A customer has been added successfully with id ${result.insertId}.`,
            });
        }
    })
}

const update = (req, res) => {

    if (typeof JSON.parse(req.params.id) !== 'number') {
        res.json({
            error: true,
            message: `Customer with id: ${req.params.id} not found.`,
        });
    }

    const { first_name, last_name, gender, dob, tel, email, is_active } = req.body;
    const id = req.params.id;
    const sql =  `UPDATE customers SET first_name=?, last_name=?, gender=?, dob=?, email=?, tel=?, is_active=? WHERE ${id}`;

    db.query(sql, [first_name, last_name, gender, dob, tel, email, is_active], (error, result) => {
        if (error) {
            res.json({
                error: true,
                message: error,
            });
        } else {
            res.json({
                status: 200,
                message: `A customer has been updated successfully with id ${id}.`,
            });
        }
    })
}

const enable = (req, res) => {
    if (typeof JSON.parse(req.params.id) !== 'number') {
        res.json({
            error: true,
            message: `Customer with id: ${req.params.id} not found.`,
        });
    }

    const { first_name, last_name, gender, dob, tel, email, is_active } = req.body;
    const id = req.params.id;
    const sql =  `UPDATE Customers SET is_active = '1' WHERE ${id}`;

    db.query(sql, [first_name, last_name, gender, dob, tel, email, is_active], (error, result) => {
        if (error) {
            res.json({
                error: true,
                message: error,
            });
        } else {
            res.json({
                status: 200,
                message: `The customer has id: ${id} has been enable in system.`,
            });
        }
    })
}

const disable = (req, res) => {
    if (typeof JSON.parse(req.params.id) !== 'number') {
        res.json({
            error: true,
            message: `Customer with id: ${req.params.id} not found.`,
        });
    }

    const { first_name, last_name, gender, dob, tel, email, is_active } = req.body;
    const id = req.params.id;
    const sql =  `UPDATE Customers SET is_active = '0' WHERE ${id}`;

    db.query(sql, [first_name, last_name, gender, dob, tel, email, is_active], (error, result) => {
        if (error) {
            res.json({
                error: true,
                message: error,
            });
        } else {
            res.json({
                status: 200,
                message: `The customer has id: ${id} has been enable in system.`,
            });
        }
    })
}

const remove = (req, res) => {
    res.send(`remove`);
}

module.exports = {
    get,
    findOne,
    create,
    update,
    enable,
    disable,
    remove,
}