const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.')
            }
        }
    },

    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    },

    password: {
        type: String,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password') || value.length < 6) {
                throw new Error('Invalid password.')
            }
        }
    }
});

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

const toDo = new Task({
    task: 'Get full-time job'
})

toDo.save().then(() => {
    console.log(toDo)
}).catch((error) => {
    console.log('Error!', error)
});

// const me = new User({
//     name: '  Caleb  ',
//     email: 'MYEMAIL@GMAIL.COM    ',
//     age: 26,
//     password: 'whatitdo'
// });

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error);
// });
