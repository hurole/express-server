const express = require('express');
const authRoute = require('./routes/authRoute');
require('dotenv').config();
require('./db');

const app = express();
// json处理
app.use(express.json());
// 身份验证路由处理
app.use('/api/auth', authRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3001~`);
});
