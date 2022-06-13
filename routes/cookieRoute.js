const express = require('express');

const router = express.Router();

router.get('/setCookie', (req, res) => {
    res.cookie('api.hurole.test', '1234567', {
        // 10分钟
        maxAge: 1000 * 10 * 60,
        domain: 'api.hurole.test',
    });
    res.cookie('hurole', '7654321', {sameSite:'lax'});
    res.cookie('none-domain', 123);
    res.cookie('.hurole.test', '7654321', {
        maxAge: 1000 * 10 * 60,
        domain: '.hurole.test',
    });
    res.send('cookie send success');
});
router.get('/getCookie', (req, res) => {
    console.log('cookies', req.cookies);
    res.send(req.cookies);
});

module.exports = router;
