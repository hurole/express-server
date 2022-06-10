const { connect, connection } = require('mongoose');

const { DB_URL, DB_NAME, DB_USER, DB_PWD } = process.env;
connect(`mongodb://${DB_USER}:${DB_PWD}@${DB_URL}/${DB_NAME}`);
connection.once('open', () => {
    console.log('DB is connected');
});
connection.on('error', (error) => {
    console.log('DB connect fail', error);
});
