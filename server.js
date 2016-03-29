var express = require('express');
var app = express();

app.listen(3000,function(){
	console.log('Server Running...');
});

app.locals.count = "4";
app.locals.data = [{"desc":"An intrusion was detected recently at your house.Photos have been attached with this card.Please review and take necessary actions immediately."},{"desc":"This works well with NodeJS."},{"desc":"Please be aware of your valuable belongings!!"},{"desc":"Testing XHR Resquests to Express."}];

app.get('/intrusion',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.send(app.locals.data);
});

app.get('/count',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.send(app.locals.count);
});