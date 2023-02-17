const customer = (app) => {
    app.get(`/api/customers`, (req, res) => {
       res.send(['Chamrong']);
    });

    app.get(`/api/customers/1`, (req, res) => {
        res.send('Chamrong');
    });

    app.delete(`/api/customers/1/delete`, (req, res) => {
        res.send(`Hard delete`)
    });

    app.put(`/api/customers/1/update`, (req, res) => {
        res.send(`Update`)
    });

    app.patch(`/api/customers/1/delete`, (req, res) => {
        res.send(`Soft delete`)
    });
}

module.exports = customer;