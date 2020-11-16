require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5faef05703dd010c84a7625c').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ status: false })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const deleteTaskAndCount = async (id, status) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ status })
    return count
}

deleteTaskAndCount('5fb18aedb3a3122fb81c7b0c', false).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})
