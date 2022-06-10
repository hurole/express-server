const express = require('express');
const { router } = require('./routes');
require('dotenv').config();
require('./db');

const app = express();
// json处理
app.use(express.json());
// 路由处理
app.use(router);

app.listen(3001, () => {
    console.log(`server is runing on port 3001`);
});
