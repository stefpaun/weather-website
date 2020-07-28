const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Forcast',
        name: 'Rejan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Dyn forcast',
        name: 'Rejan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Dyn forcast',
        name: 'Rejan',
        helpText: 'help forcast for one month'
    })
})


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send("you must provide a search product")
    }
    console.log(req.query);
    res.send({
            products: []
        })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            errr: "You must provide an address"
        })
    } else {
 //       geocode(req.query.address, (error, { latitude, longitude, location }) => {
///            if (error) {
//                return res.send({ error })
//            }
//            console.log(latitude)
//            console.log(longitude)
//            console.log(location)
//        })

          res.send({
              Latitude: 45,
              Longitude: -75,
              Location: 'Philadelphia',
              Forecast: 'Suny Day',
              address: req.query.address
          })
    }
 
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Rejan',
        errorMessage: 'Helparticle not found'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Rejan',
        errorMessage:'Page not found'
    })
})

app.listen(3000, () => {
    console.log("Server it's up on port 3000")
})