var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var dip2 = require('./dip2/app.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/submit', (req, res) => {
    res.render('submit');
})

// app.get('/result', (req, res) => {
//     var output = dip2("minceeee");
//     res.render('result', {output: output});
// })

app.post('/result', function (req, res) {
    var input = req.body.input;
    var output = dip2(input);
    res.render('result', {input: input, output: output});
})
app.get('/error', (req, res) => {
    res.render('error');
})
app.listen(3000, ()=>{
    console.log("dipsweb started on port 3000")
})