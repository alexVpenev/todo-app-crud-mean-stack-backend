const { QueryListOfTodos, QueryInsertNewTodo } = require("../service/TodoService")

const GetAllTodos = (req, res) => {
    const todoList = QueryListOfTodos();

    return res.json(todoList);
};

const InsertNewTodo = (req, res) => {

    QueryInsertNewTodo(req);

    return res.send('Inserted')

    // return res.send("Inserted SuccessFully");
};

module.exports = { GetAllTodos, InsertNewTodo };