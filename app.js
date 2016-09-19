var express =require('express');
var handlebars = require('express-handlebars');
var numero = require('./numero');
var conceal = require('./conceal');
var minx = require('./minx'),
    bodyParser = require('body-parser');


var app = express();
app.use(express.static('public'))
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.render('index')
})

app.post('/hiroshima',function(req,res){
	var text = req.body.data;
	var c = new conceal();
	if(text==''){
		res.send('...')
	}
	else{
        	res.send(c.conceal(text))
	}
})

app.post('/nagasaki',function(req,res){
	var text = req.body.data;
	var c = new conceal();
	if(text==''){
		res.send('...')
	}
	else if (text.indexOf('+') == (-1)) {
		res.send({err : "Santa doesn't give naughty kids presents ..."})
	}
	else{
		res.send(c.unseal(text))
	}

})

app.listen(5000)
