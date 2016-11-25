const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5836b1034bfd0924471b2d15qq';

// if( !ObjectID.isValid(id)){
// 	console.log('ID is not valid.');
// }
// Todo.find({_id: id}).then((todos)=>{
// 	console.log('Todos', todos);
// });

// Todo.findOne({_id: id}).then((todo)=>{
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if( !todo ) {
// 		return console.log('Id not found');
// 	} 
// 	console.log('Todo By Id', todo);
// }).catch((e) => {
// 	console.log(e)
// });

var userId = '5836a181af636f1d5afccc86';

User.find({_id: userId}).then((users) => {
	if( users.length ===0 ) {
		return console.log('Users not found');
	}
	console.log('Users', users);
});

User.findOne({_id: userId}).then((user)=>{
	if( !user) {
		return console.log('User not found');
	}
	console.log('User', user);
});

User.findById(userId).then((user)=>{
	if (!user){
		return console.log('User not found.');
	}
	console.log('User by Id', user);
});