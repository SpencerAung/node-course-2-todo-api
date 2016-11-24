const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');

	//deleteMany
	// db.collection('Todos').deleteMany({ text: 'cook dinner'}).then((result)=>{
	// 	console.log(result);
	// }, (err) => {
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({ text: 'cook dinner'}).then((result)=>{
	// 	console.log(result);
	// }, (err) => {
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({ completed: false}).then((result)=>{
	// 	console.log(result);
	// }, (err) => {
	// });


	//deleteMany
	// db.collection('Users').deleteMany({ name: 'Mary'}).then((result)=>{
	// 	console.log(result);
	// }, (err) => {
	// });

	//deleteOne
	// db.collection('Users').deleteOne({ name: 'Mary'}).then((result)=>{
	// 	console.log(result);
	// }, (err) => {
	// });

	//findOneAndDelete
	// db.collection('Users').findOneAndDelete({ _id: new ObjectID('5836875155cb1f1555d5507a')}).then((result)=>{
	// 	console.log(result);
	// }, (err) => {
	// });

	// db.close();
});