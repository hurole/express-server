const User = require('../models/userModel');

module.exports.users = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json({ code: 0, message: '成功', data: users });
    } catch (error) {
        next(error);
    }
};
