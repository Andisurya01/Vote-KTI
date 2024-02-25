const ApplicationError = require('./../../config/errors/ApplicationError')
const category1Repository = require('../repositories/category1');

exports.createCategory1 = async (payload) => {
    try {
        const category1 = await category1Repository.createCategory1(payload);
        return category1;
    } catch (err) {
        throw new ApplicationError(`Failed to create category1 : ${err.message}`, 500);
    }
}

exports.deleteCategory1 = async () => {
    try {
        const category1 = await category1Repository.deleteCategory1();
        return category1;
    } catch (err) {
        throw new ApplicationError(`Failed to delete category1 : ${err.message}`, 500);
    }
}