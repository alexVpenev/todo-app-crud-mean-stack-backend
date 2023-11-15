// !! Standart Stuff - DO NOT TOUCH

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

const hostport = 3001;
app.listen(hostport, () => console.log("Running on port " + hostport));

app.get("/", (req, res) => {
  res.send("Hello There!");
});

//!! MongoDB Connection Testing Stuff - bad implementation

// const mongoose = require('mongoose')
// mongoose.connect("mongodb://alex:123123@localhost:27017/test")

// const TodoSchema = new mongoose.Schema({
//     name: String,
//     description: String
// })

// const TodoModel = mongoose.model("tod", TodoSchema)

// app.get("/todo", (req, res) => {

//     // res.json(TodoModel.find())
// mongoose.connect("mongodb://alex:123123@localhost:27017/test")

//     TodoModel.find({}).then(function(users) {
//         res.json(users)

// mongoose.connection.close()
//     }).catch(function(err) {
//         console.log(err)
//     })

// })

// app.post("/todos", (req, res) => {
//     const { name, description } = req.body;

//     // Validate the request payload
//     if (!name || !description) {
//         return res.status(400).json({ error: "Name and description are required." });
//     }

//     // Create a new todo
//     const newTodo = new TodoModel({ name, description });

//     // Save the new todo to the database
//     newTodo.save().then(function(savedTodo) {
//         res.status(201).json(savedTodo);
//     }).catch(function(err) {
//         console.log(err);
//         res.status(500).send("Internal Server Error");
//     });
// });

// ? Proper way of connecting with Mongo and Handling requests

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://alex:123123@127.0.0.1:27017/test");
}

const todoSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: { type: Boolean, default: false }
})

const Todo = mongoose.model("Todo", todoSchema) // ! Model

