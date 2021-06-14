const geocode = require('./utils/geocode')

geocode('Philadelphia', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

