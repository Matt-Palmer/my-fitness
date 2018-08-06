const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

let app = express();

console.log(__dirname);

hbs.registerPartials(__dirname + '/../views/partials');
app.set('view engine', 'hbs');

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home',
        welcomeMessage: 'Welcome to the home page.'
    });
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
