const geocode = require('./utils/geocode');
const weather = require('./utils/weather');


var location = process.argv[2];
console.log(location)


if(!location) {
    return console.log('Provide location for weather services')
} else {
    geocode(location, (err, { latitude, longitude, location } = {}) => {
        if(err) {
            return console.log(err)
        }
    
        weather(latitude, longitude, (err, weatherData) => {
            if(err) {
                return console.log(err)
            }
    
            console.log(location)
            console.log(weatherData)
        })
    })
}


