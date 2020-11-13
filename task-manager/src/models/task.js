const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    task: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: Boolean,
        default: false
    }
});

module.exports = Task;
