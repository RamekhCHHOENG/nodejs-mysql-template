const get = (req, res) => {
    res.send( `Get all.`);
}

const findOne = (req, res) => {
    res.send(`Find one`) ;
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