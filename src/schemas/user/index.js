/**
 * User Schema
 */
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    user_name: {
        type: String,
        trim: true,
        unique: true,
    },
    profile_image: {
        type: String,
        default: 'https://res.cloudinary.com/mgdeveloper/image/upload/v1630753323/user_o7glbx.png'
    },
}, { timestamps: true })


//Hooks for deleting passworh when reading user data
UserSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret.password; 
        return ret;
    }
})

module.exports = mongoose.model('user', UserSchema);