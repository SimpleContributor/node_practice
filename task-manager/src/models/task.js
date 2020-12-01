const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: Boolean,
        default: false
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // creates relationship between the two models
    }
}, {
    timestamps: true,
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
