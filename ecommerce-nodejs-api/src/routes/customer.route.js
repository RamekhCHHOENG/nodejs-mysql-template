const CustomerController = require('../controllers/customer.controller');

const customer = (app) => {
    app.get(`/api/customers`, CustomerController.get);
    app.post(`/api/customers`, CustomerController.create);
    app.get(`/api/customers/:id`, CustomerController.findOne);
    app.put(`/api/customers/:id/update`, CustomerController.update);
    app.patch(`/api/customers/:id/enable`, CustomerController.enable);
    app.patch(`/api/customers/:id/disable`, CustomerController.disable);
    app.delete(`/api/customers/:id/delete`, CustomerController.remove);
}

module.exports = customer;