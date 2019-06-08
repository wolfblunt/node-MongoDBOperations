// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //For mongodv version >=3.0
    // var db1 = client.db('mytestingdb');
    // db1.collection('Users').insertOne({
    //     name: 'Aman',
    //     age: 20,
    //     location: 'Jaipur'
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops);
    // });


    db.collection('Users').insertOne({
        name: 'Aman',
        age: 20,
        location: 'Jaipur'
    }, (err,result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }

        console.log(result.ops);
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
})