const mongoose = require('mongoose')

const userSchema = mongoose.Shema ({
    name: {
        type: String,
        required: [true, 'Please enter name']
    },

    email: {
        type: String,
        required: [true, 'Please enter email']
    },

    password: {
        type: String,
        required: [true, 'Please enter password']
    }, 


}, {
    timestamps: true
}
)
module.exports = mongoose.model('User', 'userSchema')