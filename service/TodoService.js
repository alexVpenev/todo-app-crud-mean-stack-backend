// import todo from "../models/todo";

const todo = require("../models/todo")

const QueryListOfTodos = () => {
    // if (condition) {
    //     return todo.findAll(condition).exec();
    // }

    // return todo.findAll().exec();

    return todo.find().catch((error) => console.log(error));
}

const QueryInsertNewTodo = (req) => {

    const todo = new todo({ 'description': "Create mongo", completed: false });

    
    todo.save(function(err) {
        if (err)
           throw err;
        else 
           console.log('save user successfully...');
    });
}

module.exports = { QueryListOfTodos, QueryInsertNewTodo };