var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dip2 = require('./dip2/app.js');
var bodyParser = require('body-parser');

require('./models/ReportedError');
const ReportedError = mongoose.model('ReportedError');

require('./models/ResolveLogEntry');
const ResolveLogEntry = mongoose.model('ResolveLogEntry');

mongoose.connect('mongodb://localhost/dip2web', {})
    .then(()=> console.log('MongoDB Connected... '))
    .catch(err => {console.log(err)});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/submit', (req, res) => {
    res.render('result');
})

// app.get('/result', (req, res) => {
//     var output = dip2("minceeee");
//     res.render('result', {output: output});
// })

app.post('/result', function (req, res) {
    var input = req.body.input;
    var output = dip2(input);
    var date = Date.now();
    var entry = {
        input: input,
        output: output,
        date: date
    };
    new ResolveLogEntry(entry).save();
    res.render('result', {input: input, output: output});
})

app.post('/submitError', function (req, res) {

    var input = req.body.input;
    var output = req.body.output;
    var date = Date.now();
    var errorDescription = req.body.errorDescription;
    var name = req.body.name;
    var email = req.body.email;
    var entry = {
        input: input,
        output: output,
        date: date,
        errorDescription: errorDescription,
        name: name,
        email: email
    };
    new ReportedError(entry).save();

    res.render('result', {input: input});
})


app.post('/error', (req, res) => {
    var input = req.body.input;
    var output = req.body.output;
    console.log(req.body);

    res.render('error', {input: input, output: output});
})
app.listen(3000, ()=>{
    console.log("dipsweb started on port 3000")
})