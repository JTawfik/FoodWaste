const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')

var mapstyle = JSON.stringify(JSON.parse(fs.readFileSync('json/styling.json')));

console.log(mapstyle)
//Import template engine
app.set('view engine', 'ejs');



// ROUTES


// Makes stylesheet avaialable
app.use(express.static(__dirname + '/public'));

// Makes public folder available
// app.use(express.static(__dirname + '/view'));

// aRoutes starting homepage
app.get('/', ((req, res) => res.render('index')))

// aRoutes to about page
app.get('/about', ((req, res) => res.render('about')))


// aRoutes to test page
app.get('/test', ((req, res) => res.render('test')))


// aRoutes to stylesheet maps
app.get('/home', function(req, res) {
		
		res.render(
		
		'home', {
			maps: mapstyle,
});

});




//Start Server
// 
//  message 
app.listen(port, () => console.log(`Hellow World ${port}`))

