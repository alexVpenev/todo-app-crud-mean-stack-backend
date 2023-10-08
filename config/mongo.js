const mongoose = require("mongoose");

const url = 'mongodb://127.0.0.1:27017/test';

mongoose.Promise = global.Promise;

mongoose.connect( url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

module.exports = mongoose;