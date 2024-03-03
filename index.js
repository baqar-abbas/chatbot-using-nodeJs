const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

app.get('/', (req, res) => {
// res.send('Hello World');
res.render('pages/index');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

