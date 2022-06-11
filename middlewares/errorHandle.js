module.exports = (err, req, res, next) => {
    // 认证失败错误
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({
            code: 1,
            message: err.message,
        });
    } else {
        // 其他错误交给express处理
        next(err);
    }
};
