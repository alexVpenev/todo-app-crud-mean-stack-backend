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

const mongoose = require("./config/mongo");

//Comment
app.use(express.json());

const hostport = 3001;
app.listen(hostport, () => console.log("Running on port " + hostport));

app.get("/", (req, res) => {
  res.send("Hello There!");
});

// const todoRoute = require('./routes/TodoRoutes');
// app.use('/todo', todoRoute);

const todoRoute = require("./routes/TodoRoutes");
app.use("/todo", todoRoute);

// app.get('/', (req,res) => {
//     res.send(403, 'You dont have the right to be here.')
// });
