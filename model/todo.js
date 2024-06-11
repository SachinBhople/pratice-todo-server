const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    priority: Number,
    complete: Boolean
})

module.exports = mongoose.model("note", todoSchema)