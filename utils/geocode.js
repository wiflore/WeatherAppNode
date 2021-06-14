const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b7a006bc1bdcde8e7c464151196638ae&query=New%20York'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)

    console.log(data.current.weather_descriptions + ' It is currently ' +
    data.current.temperature + ' degrees out. There is a ' +
    data.current.precip + '% chance of rain.')
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoid2Zsb3JleiIsImEiOiJja3B0ZzY5eDkwbGwzMnZxdXdpMGwxMzcwIn0.D5PgaT5hvdiCDY9pKP0mjQ&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
}
})

const geocode = (address, callback) => 
{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoid2Zsb3JleiIsImEiOiJja3B0ZzY5eDkwbGwzMnZxdXdpMGwxMzcwIn0.D5PgaT5hvdiCDY9pKP0mjQ&limit=1'

    request({ url: url, json: true }, (error, response) => {
                if (error) {
                    callback('Unable to connect to location services!', undefined)
                } else if (response.body.features.length === 0) {
                    callback('Unable to find location. Try another search.', undefined)
                } else 
                {
                    callback(undefined, {
                                latitude: response.body.features[0].center[0],
                                longitude: response.body.features[0].center[1],
                                location: response.body.features[0].place_name
                            })
                    }   
            })
}

module.exports = geocode