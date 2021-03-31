////*********************************************** */
///phần học từ đầu
const express = require('express');
// template engine
const app = express();

app.get('/', (req, res) => res.sendFile('./views-ht/a.html'));// truy cập vào file html

app.listen(3000, () => console.log('Server started'));
