const express = require('express');
const { expressjwt } = require('express-jwt');
const errorHandle = require('./middlewares/errorHandle');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
require('dotenv').config();
require('./db');

const app = express();
// json处理
app.use(express.json());
//token验证
app.use(
    expressjwt({
        secret: process.env.JWT_SECRET,
        algorithms: ['HS256'],
    }).unless({
        path: [/^\/api\/auth/],
    })
);
// 身份验证路由处理
app.use('/api/auth', authRoute);
app.use('/api', userRoute);
// 错误处理
app.use(errorHandle);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3001~`);
});
