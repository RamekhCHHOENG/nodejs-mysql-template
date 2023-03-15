const db = require('../config/db.config');
const {json} = require("express");

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
    console.log({body: req.body})
    const { first_name, last_name, gender, dob, tel, email, is_active } = req.body;
    const sql =  "INSERT INTO `customers`(first_name, last_name, gender, dob, tel, email, is_active) VALUES (?,?,?,?,?,?,?)";

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