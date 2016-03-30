var express = require('express');
var app = express();
var path = require('path');
var shelljs = require('shelljs');
var url = "https://iothssnew-dsouzaedison.c9users.io/intruder";
// var url = "http://localhost:3000/intruder";
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0",function(){
	console.log('Server Running...At : ' + process.env.IP + ':' + process.env.port);
});

app.use(express.static(path.join(__dirname, 'img')));

app.locals.count = "4";
app.locals.data = [{"desc":"An intrusion was detected recently at your house.Photos have been attached with this card.Please review and take necessary actions immediately.","img": url + "1.jpg"},{"desc":"This works well with NodeJS.","img": url + "2.jpg"},{"desc":"Please be aware of your valuable belongings!!","img": url + "3.jpg"},{"desc":"Testing XHR Resquests to Express.","img": url + "4.png"}];

app.get('/intrusion',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.send(app.locals.data);
});

app.get('/count',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.send(app.locals.count);
});

//Login

var users = [{'user' : 'edison', 'pass' : 'pass'} , {'user' : 'admin', 'pass' : 'pass'}];

app.get('/login/:user/:pass',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	console.log('User : ' + req.params.user);
	console.log('Pass : ' + req.params.pass);
	for(i=0;i<users.length;i++)
	{
		console.log('users.user : ' + users[i].user + '\nusers.pass : ' + users[i].pass);
	if(users[i].user == req.params.user && users[i].pass == req.params.pass)
	res.end("true");
	}
	res.end("false");
});

app.get('/img',function(req,res){
	res.sendFile(__dirname + '/img/img.png');
});


app.get('/pull',function(req, res) {
	shelljs.exec('git reset --hard');
	if (shelljs.exec('git pull origin master')!== 0) {
  		console.log('Error: Git pull failed');
	}
	else console.log("Pull Successful");
	res.end("Request Recieved!");
});

//Testing shelljs pull resethard