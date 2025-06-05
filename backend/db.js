/*
    Schema
    Todo{
        Title:String
        description:String
        completed:Boolean
    }

*/
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://gundlanikhilreddy2:yYUtEfsAtI8yIUSz@todo.w0zdn94.mongodb.net/?retryWrites=true&w=majority&appName=Todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error.message);
    process.exit(1); // Exit if cannot connect to database
});

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};