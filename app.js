var express = require('express'),
		handlebars = require('express-handlebars'),
 		conceal = require('./conceal'),
    bodyParser = require('body-parser');


var app = express();
app.use(express.static('public'))
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index',{action:'conceal',method:'post',message:''})
})

app.post('/conceal', function(req, res) {
    var text = req.body.text;
    var concealer = new conceal();
    if (text == '') {
        res.render('index',{action:'conceal',method:'post',err:"Empty text"})
    } else {
				res.render('index',{action:'unseal',method:'post',message:concealer.conceal(text)})
    }

})
app.post('/unseal', function(req, res) {
    var text = req.body.text;
    var concealer = new conceal();
    if (text == '') {
        res.send('...')
    } else if (text.indexOf('+') == (-1)) {
        res.send({
            err: "Error String entered is invalid."
        })
    } else {
				res.render('index',{action:'conceal',method:'post',message:concealer.unseal(text)})
    }

})

app.listen(5000)
