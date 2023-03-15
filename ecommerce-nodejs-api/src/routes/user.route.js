const UserController = require('../controllers/user.controller');

const user = (app) => {
    app.get(`/api/users`, UserController.get);
    app.get(`/api/users/:id`, UserController.findOne);
    app.put(`/api/users/:id/update`, UserController.update);
    app.patch(`/api/users/:id/enable`, UserController.enable);
    app.patch(`/api/users/:id/disable`, UserController.disable);
    app.delete(`/api/users/:id/delete`, UserController.remove);
}

module.exports = user;