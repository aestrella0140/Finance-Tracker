import mongoose, { Schema, model } from "mongoose";
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    income: {
        type: Number,
        required: true,
    },
    expenses: [
        {
            title: { type: String, required: true },
            amount: { type: Number, required: true },
            date: { type: Date, default: Date.now },
        },
    ],
    savings: {
        type: Number,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);