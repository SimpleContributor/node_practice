require('../src/db/mongoose');
const User = require('../src/models/user');

//5faecc0aeb6006249c035903

// User.findByIdAndUpdate('5fac263666e1ef4888d87e5c', { age: 26 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5fac263666e1ef4888d87e5c', 2).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})
