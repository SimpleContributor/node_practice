require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5faef05703dd010c84a7625c').then((task) => {
    console.log(task)
    return Task.countDocuments({ status: false })
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})
