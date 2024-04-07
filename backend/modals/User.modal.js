import mongoose, { Schema } from "mongoose";
import { compare, genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";


const User = new Schema({
    firstname: {
        type: String,
        required: [true, 'Please enter the first name'],
        trim: true
    },
    surname: {
        type: String,
        required: [true, 'Please enter the surname'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide email address'],
        trim: true,
        unique: true,
        match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        trim: true,
        minlength: [6, 'The password must be more than 6 character'],
        select: false
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User',
        required: [false, 'Please enter the last name'],
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others']
    },
    day: {
        type: Number
    },
    month: {
        type: Number
    },
    year: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

// Encript password
User.pre('save', async function (next) {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
});

// Match enter password and hash
User.methods.matchPassword = async function (enterPassword) {
    return await compare(enterPassword, this.password);
}

// Sign JWT and return
User.methods.getJWTWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_TOKEN_SECRET_KEY, {
        expiresIn: process.env.JWT_TOKEN_EXPIRE
    });
}

export default mongoose.model("User", User);