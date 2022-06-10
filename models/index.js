const { model, Schema } = require('mongoose');

const User = model(
    'User',
    new Schema({
        username: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
    })
);

module.exports = {
    User,
};
