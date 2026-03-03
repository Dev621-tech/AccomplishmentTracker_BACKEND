import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        message: 'No Value Submitted For First Name'
    },
    lastName: {
        type: String,
        required: true,
        message: 'No Value Submitted For Last Name'

    },
    username: {
        type: String,
        unique: true,
        required: true,
        message: 'No Value Submitted For Username'
    },
    email: {
        type: String,
        unique: true,
        required: true,
        message: 'No Value Submitted For Email'
    },
    password: {
        type: String,
        unique: true,
        required: true,
        message: 'No Value Submitted For Password'
    }
},
    { timestamps: true }
);

userSchema.index({ firstName: 1, lastName: 1 })

export default mongoose.model('User', userSchema);