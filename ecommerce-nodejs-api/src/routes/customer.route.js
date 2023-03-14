const CustomerController = require('../controllers/customer.controller');

const customer = (app) => {
    app.get(`/api/customers`, CustomerController.get);
    app.get(`/api/customers/:id`, CustomerController.findOne);
    app.delete(`/api/customers/1/delete`, CustomerController.remove);
    app.put(`/api/customers/1/update`, CustomerController.update);
    app.patch(`/api/customers/1/delete`, CustomerController.deactivate);
}

module.exports = customer;