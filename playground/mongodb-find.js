const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todoApp data' , err);
    });


    db.collection('Users').find(
        {_id : new ObjectID('5cfa6fd33d576522642e5f05')}
    ).toArray().then((docs) => {
        console.log('------------------------------------------');
        console.log('Particular ID record');
        console.log(JSON.stringify(docs, undefined, 3));
    }, (err) => {
        console.log('Unable to fetch todoApp data' , err);
    });


    db.collection('Users').find().count().then((count) => {
        console.log('------------------------------------------');
        console.log(`Total no of documents : ${count}`);
    }, (err) => {
        console.log('Unable to fetch todoApp data' , err);
    });


    db.collection('Users').find({name: 'Aman'}).toArray().then((docs) => {
        console.log('------------------------------------------');
        console.log('Particular document');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todoApp data' , err);
    });

    db.close();
})