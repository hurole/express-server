const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        min: 4,
        max: 15,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = model('Users', userSchema);
