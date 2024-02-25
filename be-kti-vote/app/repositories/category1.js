const {Vote} = require('../models');

exports.createCategory1 = (payload) => {
    return Vote.create(payload);
}

exports.deleteCategory1 = () => {
    return Vote.destroyAll();
}

exports.getCategory1 = () => {
    return Vote.findAll();
}