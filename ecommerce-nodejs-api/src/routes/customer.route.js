const CustomerController = require('../controllers/customer.controller');

const customer = (app) => {
    app.post(`/api/customers`, CustomerController.create);
    app.get(`/api/customers`, CustomerController.findAll);
    app.get(`/api/customers/:id`, CustomerController.findOne);
    app.put(`/api/customers/:id`, CustomerController.update);
    app.patch(`/api/customers/:id/enable`, CustomerController.enable);
    app.patch(`/api/customers/:id/disable`, CustomerController.disable);
    app.delete(`/api/customers/:id`, CustomerController.remove);
}

module.exports = customer;