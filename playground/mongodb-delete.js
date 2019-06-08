const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // //deleteMany
    // db.collection('Users').deleteMany({name: 'Aman'}).then((result) => {
    //     console.log(result);
    // });

    // //deleteOne
    // db.collection('Users').deleteOne({name: 'Aman'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({name: 'Aman'}).then((result) => {
        console.log(result);
    });
    db.close();
})