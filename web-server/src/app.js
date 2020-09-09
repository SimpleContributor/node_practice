const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));



app.get('/help', (req, res) => {
    res.send({
        name: 'Caleb',
        age: 26
    });
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Where you at?',
        forecast: 'Looks sunny from here!'
    });
})

app.listen(3000, () => {
    console.log('Server is up on Port 3000.');
})
