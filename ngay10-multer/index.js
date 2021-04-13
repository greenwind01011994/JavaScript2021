const express = require('express');
const reload = require('reload');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('home'));

reload(app);
app.listen(8080, () =>console.log('Server Started'));