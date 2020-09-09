const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const partialsPath = path.join(__dirname, '../views/partials');

// This is absolutely necessary to use handlebars (hbs) in express
// Also, the folder that holds all the hbs files MUST BE named views
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// A custom folder name can be used by creating a new path
// const viewsPath = path.join(__dirname, '../CUSTOM_FILENAME')
// app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Caleb Coe'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'CleebithMaximus'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page (DYNAMIC)',
        name: 'Cleebith',
        helpMessage: 'In need of some assistance? I\'ll go get the paper clip...'
    })
})


app.get('/weather', (req, res) => {
    res.send({
        location: 'Where you at?',
        forecast: 'Looks sunny from here!'
    });
})

app.get('/help/*', (req, res) => {
    res.render('error404', {
        errorText: 'Help article not found',
        name: 'Cleebith',
        title: 'ERROR 404 Page, help extension '
    })
})


// ERROR 404 Page
app.get('*', (req, res) => {
    res.render('error404', {
        errorText: 'Page not found',
        name: 'Cleebith',
        title: 'ERROR 404 Page'
    })
})


app.listen(3000, () => {
    console.log('Server is up on Port 3000.');
})
