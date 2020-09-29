// CRUD operations. Create, read, update and delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to database!');
    } 

    const db = client.db(databaseName);

    db.collection('tasks').findOne({ _id: new ObjectID("5f6e240a3f78d41d7c99da99") }, (error, task) => {
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(task);
    })

    db.collection('tasks').find({ status: false }).toArray((error, tasks) => {
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(tasks);
    })
})
