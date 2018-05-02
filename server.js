var express = require('express')
var app = express()
var path = require('path')
var port = 3000;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/public/index.html'))
});
 

 
app.get('/data',function(req,res){
	res.send('data')
})
app.listen(port  , function(){
	console.log("Server listening on: ", port  )
})