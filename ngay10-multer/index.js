const express = require('express');
const parser = require('body-parser').urlencoded({extended: false});

const reload = require('reload');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('home'));

app.post('/signup', parser, (req,res) => {
    res.send(req.body);
});

reload(app);
app.listen(8080, () =>console.log('Server Started'));