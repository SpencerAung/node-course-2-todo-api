const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '5837a7069ec84e1ba9ce0860'}).then((todo)=>{
	console.log(todo);
});


Todo.findByIdAndRemove('5837a7069ec84e1ba9ce0860').then((todo)=>{
	console.log(todo);
});