//c4df222c0378b0988283c55ad9562ef2
const chalk = require('chalk');
const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=c4df222c0378b0988283c55ad9562ef2&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (err, res) => {
//     if(err) {
//         console.log(chalk.red.inverse('Unable to connect to weather service!'))
//     } else if(res.body.err) {
//         console.log(chalk.red.inverse('Unable to find location'));
//     } else {
//         console.log(chalk.green(res.body.current.weather_descriptions[0] + '. It is currently ' + res.body.current.temperature + 
//         ' degrees outside. It feels like ' + res.body.current.feelslike + ' degrees.'))
//     }
//     // console.log(res.body.current.temperature);
//     // console.log(res.body.current.feelslike);
// });



const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/albuquerque.json?access_token=pk.eyJ1Ijoic2ltcGxlY29udHJpYnV0b3IiLCJhIjoiY2tlcTJ1aGQ1MGhkYTJ3dDhncWZwZ21sZCJ9.NRXZMLGR226kVukxtzxJFA';

request({ url: geocodeUrl, json: true }, (err, res) => {

    if(err) {
        console.log(chalk.red.inverse('Unable to connect to geolocation service!'));
    } else if(res.body.features.length === 0) {
        console.log(chalk.red.inverse('Unable to find location'));
    } else {
        const longitude = res.body.features[0].center[0];
        const latitude = res.body.features[0].center[1];
        console.log(longitude, latitude);
    }
});
