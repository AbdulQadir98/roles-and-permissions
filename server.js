const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/admin', (req, res) => {
    res.send('Admin Page')
})

app.get('/user', (req, res) => {
    res.send('User Page')
})

app.listen(3000)