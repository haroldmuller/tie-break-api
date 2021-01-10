let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

let apiRoutes = require("./server/routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/tiebreak', { useNewUrlParser: true});
let db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

let port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes);
app.listen(port, function () {
    console.log(`Running TieBreak API on port ${port}`);
});
