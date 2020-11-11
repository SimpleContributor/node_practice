// CRUD operations. Create, read, update and delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to database!');
    } 

    const db = client.db(databaseName);

    //////////////////////////
    ///////  CREATE  /////////
    //////////////////////////
    // db.collection('users').insertOne({
    //        name: 'Katalina',
    //        age: 22 
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })


    // db.collection('users').insertMany([
    //     {
    //        name: 'Caleb',
    //        age: 26 
    //     },
    //     {
    //         name: 'Katalina',
    //         age: 22
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })
    //////////////////////////
    //////////////////////////





    //////////////////////////
    ////////  READ  //////////
    //////////////////////////
    // db.collection('tasks').findOne({ _id: new ObjectID("5f6e240a3f78d41d7c99da99") }, (error, task) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(task);
    // })


    // db.collection('tasks').find({ status: false }).toArray((error, tasks) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(tasks);
    // })
    //////////////////////////
    //////////////////////////




    //////////////////////////
    ///////  UPDATE  /////////
    //////////////////////////
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f6e22a6b354ec3628aeb70b")
    // }, {
    //     $set: {
    //         name: 'Like Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({
    //     status: true
    // }, {
    //     $set: {
    //         status: false
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //////////////////////////
    //////////////////////////




    //////////////////////////
    ///////  DELETE  /////////
    //////////////////////////
    // db.collection('tasks').deleteOne({
    //     task: "Go to work"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    
    // db.collection('users').deleteMany({
    //     age: 30
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    //////////////////////////
    //////////////////////////
})
