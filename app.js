const express = require('express');
const app = express();


app.use( function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

//Comment
app.use(express.json());
app.listen(3000, () => console.log('Running on port 3000'));


app.get('/', (req,res) => {
    res.send('Hello There!')
});


// app.get('/', (req,res) => {
//     res.send(403, 'You dont have the right to be here.')
// });

