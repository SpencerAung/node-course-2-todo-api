const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');

	//findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate(
	// 	{ _id: new ObjectID('58368f821ddbcfb42ea711f4') },
	// 	{ $set: { completed: true } },
	// 	{ returnOriginal: false }
	// ).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('583686c6ffa58a1529b23787')
	}, {
		$set: {
			name: "Garu"
		},
		$inc : {
			age: -23
		}
	}, {
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});
	// db.close();
});