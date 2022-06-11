const bcrypt = require('bcrypt');
const User = require('../models/userModel');

module.exports.register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            return res.json({ code: 1, message: '注册失败，用户已存在' });
        }
        const pwd = await bcrypt.hash(password, 10);
        await User.create({ username, password: pwd });
        res.json({ code: 0, message: '注册成功' });
    } catch (error) {
        next(error);
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({ code: 1, message: '用户不存在' });
        }
        // 验证密码
        const isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            return res.send({ code: 0, message: '登陆成功' });
        }
        res.send({ code: 1, message: '密码错误' });
    } catch (error) {
        next(error);
    }
};
