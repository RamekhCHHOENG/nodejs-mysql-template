const UserController = require('../controllers/user.controller');

const user = (app) => {
    app.get(`/api/users`, UserController.get);
    app.get(`/api/users/{id}`, UserController.findOne);
    app.delete(`/api/users/1/delete`, UserController.remove);
    app.put(`/api/users/1/update`, UserController.update);
    app.patch(`/api/users/1/delete`, UserController.deactivate);
}

module.exports = user;