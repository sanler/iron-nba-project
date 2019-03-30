const express = require('express');
const hbs  = require('hbs');
const app = express();
const path   = require('path')

//---0. Indicarle carpeta public y motor de vistas/view engine
    
    //0.1 public
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

   //0.2 view engine hbs
app.set('views',__dirname+'/views');
app.set('view engine','hbs');

//---1. ROUTES

app.get('/',(req,res,next)=>{

    res.render('index');

});

app.get('/teams',(req,res,next)=>{

    res.render('teams');

});

app.get('/players',(req,res,next)=>{

    res.render('players');

});
//---2. START SERVER

app.listen(3000,()=>{

    console.log('Escuchando en el puerto 3000!');

});
