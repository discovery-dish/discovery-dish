const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use('', routes);


app.get('', (req, res) => {
    res.send('API works!');
});

const mongoUrl = 'mongodb+srv://admin:chNsTuwpj3tz0k6f@cluster0.xqb7jos.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoUrl).then(client=> {
    app.listen(3000, ()=>{
        console.log('app is running ...');
    });
}).catch(err=>{
    console.log('No se pudo conectar a la base de datos, error: ', err)
})

