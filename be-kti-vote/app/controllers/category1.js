const category1Services = require('../services/category1');

exports.createCategory1 = async (req, res) => {
    try {
        const body = req.body
        const data = await category1Services.createCategory1(body)
        res.json({
            status: "OK",
            message: "Success",
            data
        })
    } catch (err) {
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message,
        })
    }
}