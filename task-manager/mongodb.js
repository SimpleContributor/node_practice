// CRUD operations. Create, read, update and delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to database!');
    } 

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Cleebith',
    //     age: 'Immortal'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user.');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (err, res) => {
    //     if(err){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(res.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         task: 'Go to work',
    //         status: false
    //     },
    //     {
    //         task: 'Find a new job',
    //         status: false
    //     },
    //     {
    //         task: 'Invest 10K into bitcoin',
    //         status: false
    //     }
    // ], (error, results) => {
    //     if(error){
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(results.ops);
    // })


})
