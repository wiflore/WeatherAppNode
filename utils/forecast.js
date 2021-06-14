const request = require('request')
OPENWEATHERTOKEN = process.env.OPENWEATHER
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&appid='+OPENWEATHERTOKEN+'&units=metric'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + response.body.list[0].weather[0].description + ' with ' + response.body.list[0].main.humidity + ' degress out. There is ' + response.body.list[0].pop  + '% chance of rain.')
        }
    })
}

module.exports = forecast
