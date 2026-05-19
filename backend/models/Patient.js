const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    ast: {
        type: Number,
        required: true
    },

    platelets: {
        type: Number,
        required: true
    },

    apri: {
        type: Number,
        required: true
    },

    interpretation: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Patient", patientSchema);
