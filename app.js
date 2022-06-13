const express = require('express');
const { expressjwt } = require('express-jwt');
const errorHandle = require('./middlewares/errorHandle');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const cookieRoute = require('./routes/cookieRoute');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();
require('./db');

const app = express();
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'http://127.0.0.1:3000',
            'http://hurole.test:3000',
            'http://api.hurole.test:3000',
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    })
);
app.use(cookieParser('cookie seret'));
// json处理
app.use(express.json());
//token验证
app.use(
    expressjwt({
        secret: process.env.JWT_SECRET,
        algorithms: ['HS256'],
    }).unless({
        path: [/^\/api\/auth/, /Cookie$/],
    })
);
// 身份验证路由处理
app.use('/api/auth', authRoute);
app.use('/api', userRoute);
// cookie 使用
app.use('/api', cookieRoute);
// 错误处理
app.use(errorHandle);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3001~`);
});
