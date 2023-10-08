const express = require('express');
const router = express.Router();

const { GetAllTodos, InsertNewTodo } = require("../controllers/TodoController");


router.get("/", GetAllTodos);
router.post("/insert", InsertNewTodo);

module.exports = router;