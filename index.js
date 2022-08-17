const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json'); // retrieves information from the current folder 

app.set('view engine', 'ejs')
//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Our Home Page';
  var heading = 'The Fallout Franchise';//changes myfirstbootstap
   res.render('pages/index',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/about', (req, res) => {
  var title = 'Our About Page';
  var heading = 'The Fallout Franchise';
   res.render('pages/about',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/foneandtwo', (req, res) => {
  var title = 'Fallout 1 & 2';
  var heading = 'The Fallout Franchise';
   res.render('pages/foneandtwo',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/fallout3', (req, res) => {
  var title = 'Fallout 3';
  var heading = 'The Fallout Franchise';
   res.render('pages/fallout3',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/falloutnv', (req, res) => {
  var title = 'Fallout: New Vegas';
  var heading = 'The Fallout Franchise';
   res.render('pages/falloutnv',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/fallout4', (req, res) => {
  var title = 'Fallout 4';
  var heading = 'The Fallout Franchise';
   res.render('pages/fallout4',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/users', (req, res) => {
  var title = 'My Users Page';
  var heading = 'The Fallout Franchise';
   res.render('users/index',{
     'title':title,
     'heading':heading,
     'users':data //refers to var = data, passes info into the users file
   });//routes to pages
})

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 var heading = "Fallout Franchise";
 res.render('users/view', {
     title: title,
     'heading': heading,
     user: data[--id]
 });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})

