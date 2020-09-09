const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=5249ea276ef5fab7e9ffb4fb4e3229b1&query=45,-75&units=f';

const req = http.request(url, (res) => {
    let data = '';


    res.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})

req.end();
