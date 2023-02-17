const user = (app) => {
    app.get(`/api/users`, (req, res) => {
        res.send(['Chamrong']);
    });

    app.get(`/api/users/1`, (req, res) => {
        res.send('Chamrong');
    });

    app.delete(`/api/users/1/delete`, (req, res) => {
        res.send(`Hard delete`)
    });

    app.put(`/api/users/1/update`, (req, res) => {
        res.send(`Update`)
    });

    app.patch(`/api/users/1/delete`, (req, res) => {
        res.send(`Soft delete`)
    });
}

module.exports = user;