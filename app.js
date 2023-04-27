const express = require('express')
var hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


//TODO require('hbs)
app.set('view engine', 'hbs');

//partials
hbs.registerPartials(__dirname + '/views/partials');



// Servir contenido estatico (public) Midleware
app.use(express.static('public'));      //Se ejecuta esta antes siempre, y como en public solo existe 'index' se muestra

app.get('/', function (req, res) {
  res.render('home',{     //se manda la ruta especifica con hbs
    nombre: 'rrcc',
    titulo: 'curso node'
  });  
})

app.get('/generic', function (req, res) {
  res.render('generic',{     //se manda la ruta especifica con hbs
    nombre: 'rrcc',
    titulo: 'curso node'
  });
})

app.get('/elements', function (req, res) {
  res.render('elements',{     //se manda la ruta especifica con hbs
    nombre: 'rrcc',
    titulo: 'curso node'
  });
})

app.get('*', function (req, res) {
  res.sendFile( __dirname + '/public/404.html');    //se manda un file, con la ruta especifica
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})