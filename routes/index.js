const express = require('express');
const { User } = require('../models');
const bcrypt = require('bcrypt');

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Express');
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const pwd = bcrypt.hashSync(password, 10);
    User.create({ username, password: pwd }).catch((e) => {
        if (e) {
            console.log(e);
            return res.send({ code: 1, message: '注册失败，用户已存在' });
        }
        res.send({ code: 0, message: '注册成功' });
    });
});
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.send({ code: 1, message: '用户不存在' });
    }
    const isValid = bcrypt.compareSync(password, user.password);
    if (isValid) {
        return res.send({ code: 0, message: '登陆成功' });
    }
    res.send({ code: 1, message: '密码错误' });
});
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send({ code: 1, message: '查询失败' });
    }
});

module.exports = {
    router,
};
