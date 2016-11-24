const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');
	// db.collection('Todos').find({ 
	// 	_id: new ObjectID('58368b001ddbcfb42ea711f0')
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, null, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({ 
		name: 'Aung'
	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs, null, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	// db.collection('Todos').find({}).count().then((count)=>{
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.close();
});